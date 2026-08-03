/**
 * Parses the new M3U playlist and extracts ONLY Hindi animated / anime
 * series (per-episode entries) for public/series.js.
 *
 * Source file: public/2ba33af6_m3u_plus.m3u
 * Output:     public/series.js  (new file)
 *
 * Filter rule:
 *   - group-title matches a recognized series group
 *   - and the tvg-name looks like a per-episode entry
 *     (e.g. "IN: Naruto (2002) S01 E05" — has season/episode marker)
 *     OR the source is a "Kids - (IN) ... Collection" group (where
 *     each row is an episode but may not carry Sxx Exx).
 *
 * Hindi-only:
 *   - For "EN - Anime Series" we only keep entries whose tvg-name
 *     starts with "IN:" (Hindi-dubbed). Pure EN/AR anime is excluded.
 *   - "AR - Anime Series" and "AR - Animation Series" are excluded
 *     (Arabic only).
 *
 * Output shape (one row per episode):
 *   {
 *     id, name, logo, category, url,
 *     series, season, episode
 *   }
 * `series` is the cleaned show title (without prefix/season marker),
 * so the consumer can group client-side.
 */

const fs = require('fs');
const readline = require('readline');

// ---- Config ----
const INPUT  = './public/2ba33af6_m3u_plus.m3u';
const OUTPUT = './public/series.js';

// Map of group-title (case-insensitive substring) → metadata.
// `prefixRequired`: only keep entries whose tvg-name starts with this
//   (e.g. "IN:") so we can filter out non-Hindi entries inside mixed
//   groups like "EN - Anime Series".
// `requireEpisodeMarker`: if true, only keep entries whose tvg-name
//   matches the Sxx Exx episode pattern. Some groups like
//   "Kids - (IN) Motu Patlu Collection" are per-episode but don't
//   carry explicit Sxx Exx markers, so this is false for those.
const SERIES_GROUPS = [
  { match: 'IN - Anime Series',                  prefixRequired: 'IN:', requireEpisodeMarker: true  },
  { match: 'EN - Anime Series',                  prefixRequired: 'IN:', requireEpisodeMarker: true  },
  { match: 'Kids - (IN) Motu Patlu Collection',  prefixRequired: null,  requireEpisodeMarker: false },
  { match: 'Kids - (IN) Chhota Bheem Collection',prefixRequired: null,  requireEpisodeMarker: false },
  { match: 'Kids - (IN) Chacha Bhatija Collection', prefixRequired: null, requireEpisodeMarker: false },
];

const findGroupRule = (groupTitle) => {
  if (!groupTitle) return null;
  const g = groupTitle.toLowerCase();
  return SERIES_GROUPS.find((r) => g.includes(r.match.toLowerCase())) || null;
};

// Strip the leading country prefix (e.g. "IN: ", "AR: ", "EN: ").
const stripPrefix = (name) =>
  name.replace(/^(IN|EN|PK|AR):\s*/i, '').trim();

// Extract the series title from an episode-style name.
// Examples:
//   "Motu Patlu - Aadiwasi Ka Mukut - Motu Patlu in Hindi"
//   "IN: That Time I Got Reincarnated as a Slime (2018) S01 E01"
//   "IN: Naruto Shippuden (2007) S05 E120"
const parseSeriesTitle = (rawName) => {
  let s = stripPrefix(rawName);

  // Drop trailing language/quality tags that some entries carry:
  //   "... WITH ENGLISH, SPANISH" / "... ENGLISH, SPANISH"
  //   "... [Multi Audio]" / "... [Multi-Lang]"
  s = s.replace(/\s*(?:WITH\s+)?(?:ENGLISH|HINDI|SPANISH|FRENCH|TAMIL|TELUGU|MALAYALAM|KANNADA|MARATHI|BENGALI)(?:,?\s*[A-Z]+)*\s*$/i, '');
  s = s.replace(/\s*\[[^\]]*\]\s*$/i, '');

  // Drop the season/episode marker FIRST (it sits at the very end):
  //   "... Title (2018) S01 E05" → "... Title (2018)"
  s = s.replace(/\s*S\d+\s*E\d+\s*$/i, '');
  s = s.replace(/\s*S\d+E\d+\s*$/i, '');

  // Now strip a trailing year (with or without parens):
  //   "... Title (2018)" → "... Title"
  s = s.replace(/\s*\(?\b(19|20)\d{2}\b\)?\s*$/i, '');

  // Strip any remaining trailing bracket tag:
  //   "... Title [Multi-Lang]" → "... Title"
  s = s.replace(/\s*\[[^\]]*\]\s*$/i, '');

  // Normalize underscores to spaces (some entries use "_" separators).
  s = s.replace(/_/g, ' ');

  // For "Kids - (IN) ... Collection" entries, titles often look like
  //   "Motu Patlu - Aadiwasi Ka Mukut - Motu Patlu in Hindi"
  //   "Cartoons For Kids - Motu Patlu in Hindi - Monkey Kingdom"
  // Use the first segment before " - " as the canonical series name.
  const dashIdx = s.indexOf(' - ');
  if (dashIdx > 0) {
    s = s.slice(0, dashIdx).trim();
  }

  // Collapse whitespace.
  s = s.replace(/\s+/g, ' ').trim();
  return s;
};

// Extract Sxx Exx markers. Returns { season, episode } or { null, null }.
const parseSeasonEpisode = (rawName) => {
  const m = rawName.match(/S(\d+)\s*E(\d+)/i);
  if (!m) return { season: null, episode: null };
  return { season: parseInt(m[1], 10), episode: parseInt(m[2], 10) };
};

async function main() {
  const rl = readline.createInterface({
    input: fs.createReadStream(INPUT),
    crlfDelay: Infinity,
  });

  const series = [];
  let pending = null;
  let id = 1;

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/i);
      const logoMatch  = line.match(/tvg-logo="([^"]+)"/i);
      const groupTitle = groupMatch ? groupMatch[1] : '';
      const rule = findGroupRule(groupTitle);
      pending = null;

      if (!rule) continue; // not a series group

      // Prefer the explicit tvg-name attribute (unambiguous). Some
      // display names contain commas, so splitting on the last comma
      // is unreliable. Fall back to the text after the last comma only
      // if tvg-name is missing.
      const tvgNameMatch = line.match(/tvg-name="([^"]*)"/i);
      const tvgName = tvgNameMatch
        ? tvgNameMatch[1].trim()
        : (() => {
            const lastComma = line.lastIndexOf(',');
            return lastComma >= 0 ? line.slice(lastComma + 1).trim() : line.trim();
          })();

      // Hindi-only filter for mixed groups (e.g. "EN - Anime Series"
      // which also holds "IN:" entries).
      if (rule.prefixRequired && !tvgName.toUpperCase().startsWith(rule.prefixRequired.toUpperCase())) {
        continue;
      }

      // For anime groups, require an Sxx Exx marker so we don't pull
      // stray movie entries. The "Kids - (IN) ... Collection" groups
      // are already per-episode, so they skip this check.
      if (rule.requireEpisodeMarker && !/S\d+\s*E\d+/i.test(tvgName)) {
        continue;
      }

      pending = {
        name:     stripPrefix(tvgName),
        logo:     logoMatch ? logoMatch[1] : null,
        category: groupTitle.trim(),
        series:   parseSeriesTitle(tvgName),
        ...parseSeasonEpisode(tvgName),
      };
    } else if (/^https?:\/\//i.test(line.trim())) {
      if (pending) {
        pending.id = String(id++);
        pending.url = line.trim();
        series.push(pending);
        pending = null;
      }
    } else if (line && !line.startsWith('#')) {
      pending = null;
    }
  }

  const fileBody = `const series = ${JSON.stringify(series, null, 2)};\n`;
  fs.writeFileSync(OUTPUT, fileBody, 'utf-8');

  // Summary
  const byCategory = series.reduce((acc, c) => {
    acc[c.category] = (acc[c.category] || 0) + 1;
    return acc;
  }, {});
  const bySeries = series.reduce((acc, c) => {
    const key = c.series || '(unknown)';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  console.log(`Wrote ${series.length} Hindi animated/anime series episodes to ${OUTPUT}`);
  console.log('\nBreakdown by group:');
  Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, n]) => console.log(`  ${n.toString().padStart(5)}  ${cat}`));

  console.log(`\nTotal unique series: ${Object.keys(bySeries).length}`);
  console.log('Top 10 series by episode count:');
  Object.entries(bySeries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([s, n]) => console.log(`  ${n.toString().padStart(4)}  ${s}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

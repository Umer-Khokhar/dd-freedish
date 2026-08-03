/**
 * Parses the new M3U playlist and extracts ONLY Hindi animated movies
 * for public/movies.js.
 *
 * Source file: public/2ba33af6_m3u_plus.m3u
 * Output:     public/movies.js  (new file)
 *
 * Filter rule:
 *   - group-title === "IN - Hindi Animation"  (all 462 entries are
 *     movies: "IN: Title (year) [quality]", no Sxx Exx markers)
 *   - Excluded: "EN - Animation" (English, not Hindi-dubbed),
 *     "AR - Animation Series" (all series), "IN - 24x7 Animation"
 *     (live channels).
 *
 * Output shape:
 *   {
 *     id, name, logo, category, url,
 *     title,  // cleaned title without prefix/quality tags
 *     year    // release year if present, else null
 *   }
 */

const fs = require('fs');
const readline = require('readline');

// ---- Config ----
const INPUT  = './public/2ba33af6_m3u_plus.m3u';
const OUTPUT = './public/movies.js';

const MOVIE_GROUP = 'IN - Hindi Animation';

const stripPrefix = (name) =>
  name.replace(/^(IN|EN|PK|AR):\s*/i, '').trim();

// Extract the year (with or without parens) and the clean title.
//   "Minions & Monsters (2026) [HDCAM]" → { title: "Minions & Monsters", year: 2026 }
//   "Beowulf (2007)"                    → { title: "Beowulf", year: 2007 }
//   "The Land of Sometimes 2026"        → { title: "The Land of Sometimes", year: 2026 }
const parseTitleYear = (rawName) => {
  let s = stripPrefix(rawName);

  // Strip trailing quality tags like [HDCAM], [Hindi], [HDTS], [Cam].
  s = s.replace(/\s*\[[^\]]*\]\s*$/i, '');

  // Extract year.
  const yearMatch = s.match(/\(?\b(19|20)\d{2}\b\)?$/);
  let year = null;
  if (yearMatch) {
    year = parseInt(yearMatch[0].replace(/[()]/g, ''), 10);
    s = s.replace(/\s*\(?\b(19|20)\d{2}\b\)?\s*$/i, '');
  }

  s = s.replace(/\s+/g, ' ').trim();
  return { title: s, year };
};

async function main() {
  const rl = readline.createInterface({
    input: fs.createReadStream(INPUT),
    crlfDelay: Infinity,
  });

  const movies = [];
  let pending = null;
  let id = 1;

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/i);
      const logoMatch  = line.match(/tvg-logo="([^"]+)"/i);
      const groupTitle = groupMatch ? groupMatch[1].trim() : '';
      pending = null;

      if (groupTitle !== MOVIE_GROUP) continue;

      // Prefer the explicit tvg-name attribute (unambiguous).
      const tvgNameMatch = line.match(/tvg-name="([^"]*)"/i);
      const tvgName = tvgNameMatch
        ? tvgNameMatch[1].trim()
        : (() => {
            const lastComma = line.lastIndexOf(',');
            return lastComma >= 0 ? line.slice(lastComma + 1).trim() : line.trim();
          })();

      const { title, year } = parseTitleYear(tvgName);

      pending = {
        name: stripPrefix(tvgName),
        logo: logoMatch ? logoMatch[1] : null,
        category: groupTitle,
        title,
        year,
      };
    } else if (/^https?:\/\//i.test(line.trim())) {
      if (pending) {
        pending.id = String(id++);
        pending.url = line.trim();
        movies.push(pending);
        pending = null;
      }
    } else if (line && !line.startsWith('#')) {
      pending = null;
    }
  }

  const fileBody = `const movies = ${JSON.stringify(movies, null, 2)};\n`;
  fs.writeFileSync(OUTPUT, fileBody, 'utf-8');

  const withYear = movies.filter((m) => m.year).length;
  console.log(`Wrote ${movies.length} Hindi animated movies to ${OUTPUT}`);
  console.log(`  with a parsed year: ${withYear}`);
  console.log('Sample:');
  movies.slice(0, 5).forEach((m) =>
    console.log(`  [${m.year || '????'}] ${m.title}`)
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

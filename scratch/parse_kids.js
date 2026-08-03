/**
 * Parses the new M3U playlist and extracts ONLY kids TV channels
 * for public/channels.js.
 *
 * Source file: public/2ba33af6_m3u_plus.m3u
 * Output:     public/channels.js  (overwrites existing)
 *
 * Filter rule: keep entries whose group-title matches one of the
 * recognized "kids" group-titles (case-insensitive substring match).
 */

const fs = require('fs');
const readline = require('readline');

// ---- Config ----
const INPUT  = './public/2ba33af6_m3u_plus.m3u';
const OUTPUT = './public/channels.js';

// Substrings of group-title that identify LIVE kids TV channels.
// (We deliberately do NOT include per-episode VOD groups like
//  "AR - Kids Animation" or "Kids - (IN) Motu Patlu Collection" here.
//  Those will be filtered for the series/movies files in later tasks.)
const KIDS_GROUP_PATTERNS = [
  'IN - KIDS CARTOON',     // Indian live kids channels
  'UK - Kids',             // UK live kids channels
  'USA - Kids',            // US live kids channels
];

const isKidsGroup = (groupTitle) => {
  if (!groupTitle) return false;
  const g = groupTitle.toLowerCase();
  return KIDS_GROUP_PATTERNS.some((p) => g.includes(p.toLowerCase()));
};

const cleanName = (raw) => {
  if (!raw) return 'Unknown';
  // The name lives after the last comma in the EXTINF line.
  // Strip a leading "IN:" / "PK:" / "AR:" prefix some providers add.
  return raw
    .replace(/^(IN|PK|AR):\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();
};

async function main() {
  const rl = readline.createInterface({
    input: fs.createReadStream(INPUT),
    crlfDelay: Infinity,
  });

  const channels = [];
  let pending = null; // current EXTINF waiting for its URL
  let id = 1;

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/i);
      const logoMatch  = line.match(/tvg-logo="([^"]+)"/i);
      const groupTitle = groupMatch ? groupMatch[1] : '';

      // Last comma separates attributes from the display name.
      const lastComma = line.lastIndexOf(',');
      const name = lastComma >= 0
        ? cleanName(line.slice(lastComma + 1))
        : cleanName(line);

      if (isKidsGroup(groupTitle)) {
        pending = {
          name,
          logo: logoMatch ? logoMatch[1] : null,
          category: groupTitle.trim(),
        };
      } else {
        pending = null; // skip non-kids
      }
    } else if (/^https?:\/\//i.test(line.trim())) {
      if (pending) {
        pending.id = String(id++);
        pending.url = line.trim();
        channels.push(pending);
        pending = null;
      }
    } else if (line && !line.startsWith('#')) {
      // Unknown non-URL line, drop any pending state.
      pending = null;
    }
  }

  const fileBody = `const channels = ${JSON.stringify(channels, null, 2)};\n`;
  fs.writeFileSync(OUTPUT, fileBody, 'utf-8');

  // Group summary for visibility
  const byCategory = channels.reduce((acc, c) => {
    acc[c.category] = (acc[c.category] || 0) + 1;
    return acc;
  }, {});

  console.log(`Wrote ${channels.length} kids channels to ${OUTPUT}`);
  console.log('Breakdown by group:');
  Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, n]) => console.log(`  ${n.toString().padStart(4)}  ${cat}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

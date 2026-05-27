const fs = require('fs');
const readline = require('readline');

async function findCategories() {
  const fileStream = fs.createReadStream('/home/umer/Desktop/Live_tv/public/tv_channels_5d67766dbb_plus.m3u');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const uniqueGroups = new Set();
  let pakCount = 0;

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/);
      const groupTitle = groupMatch ? groupMatch[1] : '';
      
      const upperGroup = groupTitle.toUpperCase();
      // Look for clues in the group title
      if (upperGroup.includes('PAK') || upperGroup.includes('PK') || upperGroup.includes('URDU')) {
        uniqueGroups.add(groupTitle);
      }

      // Or maybe the channel name itself has "PAK" but the group is just "ASIAN" or something
      const nameSplit = line.split(',');
      const name = nameSplit.length > 1 ? nameSplit[nameSplit.length - 1].trim().toUpperCase() : '';
      
      if (name.includes('PAK') || name.includes(' ARY') || name.includes('GEO ') || name.includes('HUM ')) {
        pakCount++;
        uniqueGroups.add(`[Found in Name: ${groupTitle}]`);
      }
    }
  }

  console.log("Matching Categories:");
  Array.from(uniqueGroups).sort().forEach(g => console.log(g));
  console.log(`\nTotal channels with 'PAK', 'ARY', 'GEO', 'HUM' in name: ${pakCount}`);
}

findCategories().catch(console.error);

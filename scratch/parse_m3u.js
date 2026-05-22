const fs = require('fs');
const readline = require('readline');

async function parseM3u() {
  const fileStream = fs.createReadStream('./public/all_stream.m3u');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const channels = [];
  let currentChannel = null;
  let idCounter = 1;

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      // Check if it belongs to an Indian category
      const groupMatch = line.match(/group-title="([^"]+)"/);
      const groupTitle = groupMatch ? groupMatch[1] : '';
      
      const isIndian = /\b(IN|INDIA|INDIAN)\b/i.test(groupTitle) || groupTitle.toLowerCase().includes('hindi');
      const isLiveTv = groupTitle.toLowerCase().includes('live') || groupTitle.toLowerCase().includes('premier league');
      
      if (isIndian && isLiveTv) {
        const logoMatch = line.match(/tvg-logo="([^"]+)"/);
        const nameSplit = line.split(',');
        const name = nameSplit.length > 1 ? nameSplit[nameSplit.length - 1].trim() : 'Unknown Channel';
        
        currentChannel = {
          id: String(idCounter++),
          name: name,
          logo: logoMatch ? logoMatch[1] : null,
          category: groupTitle,
        };
      }
    } else if (line.trim().startsWith('http') && currentChannel) {
      currentChannel.url = line.trim();
      channels.push(currentChannel);
      currentChannel = null;
    } else if (!line.startsWith('#')) {
      currentChannel = null; // discard if unexpected format
    }
  }

  const output = `const channels = ${JSON.stringify(channels, null, 2)};`;
  fs.writeFileSync('./public/channels.js', output);
  console.log(`Extracted ${channels.length} Indian channels successfully.`);
}

parseM3u().catch(console.error);

const fs = require('fs');
const readline = require('readline');

async function fixAndReparse() {
  const currentChannelsContent = fs.readFileSync('./public/channels.js', 'utf8');
  
  // Clean up: Parse channels and filter out the newly added ones
  let channelsCode = currentChannelsContent.replace('const channels =', '').replace(/;\s*$/, '');
  let allChannels;
  try {
    allChannels = new Function('return ' + channelsCode)();
  } catch(e) {
    console.error("Error parsing channels.js", e);
    return;
  }

  // Find where my script started appending. The first script started ID counter at maxId + 1.
  // The original channels might not be strictly sequential or I might have added some.
  // Let's assume the original list was all channels up to the first one I added.
  // Wait, I explicitly logged: `let idCounter = maxId + 1;`
  // The maxId of the original list was 322.
  const originalChannels = allChannels.filter(c => parseInt(c.id) <= 322);

  // Now, read the new m3u file: `public/all_channels.m3u`
  const m3uPath = './public/all_channels.m3u';
  if (!fs.existsSync(m3uPath)) {
    console.log(`M3U file not found at ${m3uPath}`);
    return;
  }

  const fileStream = fs.createReadStream(m3uPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const channels = [...originalChannels];
  const existingUrls = new Set(originalChannels.map(c => c.url));
  
  let maxId = 0;
  for (const c of originalChannels) {
    const id = parseInt(c.id);
    if (id > maxId) maxId = id;
  }
  let idCounter = maxId + 1;

  let currentChannel = null;

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/);
      const groupTitle = groupMatch ? groupMatch[1] : '';
      
      const nameSplit = line.split(',');
      const name = nameSplit.length > 1 ? nameSplit[nameSplit.length - 1].trim() : 'Unknown Channel';

      // STRICT REGEX as requested
      const regex = /\b(PK|PAK|PAKISTAN|PAKISTANI)\b/i;
      
      const isPakistani = regex.test(groupTitle) || regex.test(name);
      
      if (isPakistani) {
        const logoMatch = line.match(/tvg-logo="([^"]+)"/);
        
        currentChannel = {
          name: name,
          logo: logoMatch ? logoMatch[1] : null,
          category: groupTitle,
        };
      }
    } else if (line.trim().startsWith('http') && currentChannel) {
      const url = line.trim();
      if (!existingUrls.has(url)) {
        currentChannel.id = String(idCounter++);
        currentChannel.url = url;
        
        const lowerGroup = currentChannel.category.toLowerCase();
        // Skip series and movies
        if (!lowerGroup.includes('vod') && !lowerGroup.includes('series') && !lowerGroup.includes('srs')) {
          channels.push(currentChannel);
          existingUrls.add(url);
        }
      }
      currentChannel = null;
    } else if (!line.startsWith('#')) {
      currentChannel = null;
    }
  }

  // Write the clean file back
  const output = `export const channels = ${JSON.stringify(channels, null, 2)};\n`;
  // WAIT: is it `export const channels` or `const channels`? Let's check original.
  // My previous scripts used `const channels = `.
  // Let me check if it has `export default` or something at the end.
  
  // Actually, I should just write `const channels = ...` then `export default channels;` 
  // Let me safely write `const channels = ` if the original had it.
  
  let newContent = `const channels = ${JSON.stringify(channels, null, 2)};`;
  if (currentChannelsContent.includes('export default channels')) {
    newContent += `\n\nexport default channels;`;
  }
  
  fs.writeFileSync('./public/channels.js', newContent);
  
  console.log(`Successfully fixed. Total channels now: ${channels.length} (Original: ${originalChannels.length}, Added: ${channels.length - originalChannels.length})`);
}

fixAndReparse().catch(console.error);

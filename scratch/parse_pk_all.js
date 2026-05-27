const fs = require('fs');
const readline = require('readline');

async function parseMoreM3u() {
  const fileStream = fs.createReadStream('/home/umer/Desktop/Live_tv/public/tv_channels_5d67766dbb_plus.m3u');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const channels = [];
  let currentChannel = null;
  
  // Read current channels to get max ID and existing URLs to prevent duplicates
  const currentChannelsContent = fs.readFileSync('./public/channels.js', 'utf8');
  let maxId = 0;
  const idMatches = currentChannelsContent.matchAll(/id:\s*"(\d+)"/g);
  for (const match of idMatches) {
    const id = parseInt(match[1]);
    if (id > maxId) maxId = id;
  }
  let idCounter = maxId + 1;

  // Extract all existing URLs to a set
  const existingUrls = new Set();
  const urlMatches = currentChannelsContent.matchAll(/url:\s*"([^"]+)"/g);
  for (const match of urlMatches) {
    existingUrls.add(match[1]);
  }

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/);
      const groupTitle = groupMatch ? groupMatch[1] : '';
      
      const nameSplit = line.split(',');
      const name = nameSplit.length > 1 ? nameSplit[nameSplit.length - 1].trim() : 'Unknown Channel';

      // Check for PK, PAK, PAKISTAN in group title OR name
      // Also added GEO, ARY, HUM, PTV, TEN SPORTS which are major Pakistani networks
      const regex = /\b(PK|PAK|PAKISTAN|PAKISTANI|GEO|ARY|HUM|PTV|BOL|SAMA)\b/i;
      
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
        
        // Sometimes non-live VODs end up in here, let's filter out series/movies if possible by checking group title
        const lowerGroup = currentChannel.category.toLowerCase();
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

  if (channels.length === 0) {
    console.log("No new Pakistani channels found.");
    return;
  }

  const insertIndex = currentChannelsContent.lastIndexOf(']');
  if (insertIndex === -1) {
    console.log("Could not find ] in channels.js");
    return;
  }

  let newChannelsString = JSON.stringify(channels, null, 2);
  newChannelsString = newChannelsString.substring(1, newChannelsString.length - 1).trim();

  let prefix = "";
  if (currentChannelsContent.substring(0, insertIndex).trim().endsWith('}')) {
    prefix = ",\n  ";
  } else {
    prefix = "\n  ";
  }

  const updatedContent = currentChannelsContent.substring(0, insertIndex) + prefix + newChannelsString + "\n" + currentChannelsContent.substring(insertIndex);
  
  fs.writeFileSync('./public/channels.js', updatedContent);
  console.log(`Added ${channels.length} MORE Pakistani channels successfully!`);
}

parseMoreM3u().catch(console.error);

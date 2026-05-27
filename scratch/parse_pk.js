const fs = require('fs');
const readline = require('readline');

async function parseM3u() {
  const fileStream = fs.createReadStream('/home/umer/Desktop/Live_tv/public/tv_channels_5d67766dbb_plus.m3u');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const channels = [];
  let currentChannel = null;
  // Read current channels to get max ID
  const currentChannelsContent = fs.readFileSync('./public/channels.js', 'utf8');
  // Simple regex to find max id
  let maxId = 0;
  const idMatches = currentChannelsContent.matchAll(/id:\s*"(\d+)"/g);
  for (const match of idMatches) {
    const id = parseInt(match[1]);
    if (id > maxId) maxId = id;
  }
  let idCounter = maxId + 1;

  // We want to avoid adding duplicates if the user runs it multiple times, but let's just append for now.

  for await (const line of rl) {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/);
      const groupTitle = groupMatch ? groupMatch[1] : '';
      
      const isPakistani = /\b(PK|PAKISTAN|PAKISTANI)\b/i.test(groupTitle);
      
      if (isPakistani) {
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
      currentChannel = null;
    }
  }

  if (channels.length === 0) {
    console.log("No Pakistani channels found.");
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
  console.log(`Added ${channels.length} Pakistani channels successfully.`);
}

parseM3u().catch(console.error);

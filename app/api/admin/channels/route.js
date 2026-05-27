import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const channelsPath = path.join(process.cwd(), 'public', 'channels.js');

export async function GET() {
  try {
    const fileContent = fs.readFileSync(channelsPath, 'utf-8');
    // We safely parse it by removing the 'const channels = ' and ';'
    const jsonString = fileContent.replace('const channels = ', '').replace(/;\s*$/, '');
    const channels = JSON.parse(jsonString);
    return NextResponse.json(channels);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const channels = await req.json();
    const newContent = `const channels = ${JSON.stringify(channels, null, 2)};`;
    fs.writeFileSync(channelsPath, newContent, 'utf-8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

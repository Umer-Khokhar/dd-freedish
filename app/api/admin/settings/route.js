import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const settingsPath = path.join(process.cwd(), 'data', 'settings.json');

export async function GET() {
  try {
    if (!fs.existsSync(settingsPath)) {
      return NextResponse.json({ providers: {} });
    }
    const data = fs.readFileSync(settingsPath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    if (!fs.existsSync(path.dirname(settingsPath))) {
      fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
    }
    fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

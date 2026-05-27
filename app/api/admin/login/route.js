import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Securely checked on the server, never sent to the client browser
    const ADMIN_EMAIL = 'umerkhokhar1001@gmail.com';
    const ADMIN_PASS = 'neverhack@001';

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      const response = NextResponse.json({ success: true });
      
      // Set an HttpOnly cookie to securely authenticate the admin session
      response.cookies.set('admin_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });
      
      return response;
    }

    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

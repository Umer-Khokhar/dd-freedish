import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect all /admin routes except the login page itself
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const authCookie = req.cookies.get('admin_auth');
    if (!authCookie || authCookie.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // Protect all /api/admin routes except the login endpoint
  if (pathname.startsWith('/api/admin') && pathname !== '/api/admin/login') {
    const authCookie = req.cookies.get('admin_auth');
    if (!authCookie || authCookie.value !== 'authenticated') {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};

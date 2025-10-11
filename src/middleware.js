import { NextResponse } from 'next/server';

export function middleware() {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http:",
    "style-src 'self' 'unsafe-inline' https: http:",
    "img-src 'self' data: https: http:",
    "font-src 'self' data: https: http:",
    "connect-src 'self' https: http:",
    "frame-src 'self' https: http:",
    "media-src 'self' https: http:",
  ];

  const response = NextResponse.next();
  response.headers.set(
    'Content-Security-Policy',
    csp.join('; ')
  );
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sw.js).*)',
  ],
};

import { NextResponse } from 'next/server';

export function middleware() {
  const isDev = process.env.NODE_ENV === 'development';

  // Skip CSP in development
  if (isDev) {
    const response = NextResponse.next();
    response.headers.delete('Content-Security-Policy');
    return response;
  }

  // Production CSP
  const csp = [
    "default-src 'self'",
    `connect-src 'self' https: wss: *.firebaseio.com *.googleapis.com api.emailjs.com *.emailjs.com`,
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https: *.googleapis.com *.google.com *.gstatic.com",
    "media-src 'self' blob: data: https://res.cloudinary.com",
    "font-src 'self' data: https://fonts.gstatic.com",
    "frame-src 'self' https://www.google.com https://*.google.com",
    "form-action 'self' https://api.emailjs.com",
  ].join('; ');

  const response = NextResponse.next();
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sw.js|.*\\.(?:json|xml|txt)$).*)',
  ],
};
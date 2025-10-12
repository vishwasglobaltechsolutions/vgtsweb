import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Set CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com https://apis.google.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com wss://*.firebase.com https://*.firebase.com https://*.google.com https://identitytoolkit.googleapis.com; " +
    "frame-src 'self' https://www.google.com https://www.youtube.com https://vgtsweb.firebaseapp.com https://*.firebaseapp.com https://*.firebase.com; " +
    "media-src 'self' data:; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "frame-ancestors 'self' https://vgtsweb.firebaseapp.com https://*.firebaseapp.com;"
  );
  
  return response;
}

export const config = {
  matcher: '/:path*',
};

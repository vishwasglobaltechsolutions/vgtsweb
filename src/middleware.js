import { NextResponse } from 'next/server';

export function middleware() {
  // Generate a random nonce for each request
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // Check if we're in development mode
  const isDev = process.env.NODE_ENV === 'development';
  
  // Define CSP directives
  const csp = [
    // Base restrictions
    "default-src 'self'",
    
    // Script sources - allow eval in development
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline'${
      isDev ? " 'unsafe-eval'" : ""
    } https:`,
    "script-src-attr 'none'",
    
    // Style sources
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https:`,
    
    // Media, image and font sources - more permissive in development
    `img-src 'self' data: blob: https:${isDev ? " http:" : ""} *`,
    `font-src 'self' data: https:${isDev ? " http:" : ""} *`,
    `media-src 'self' data: blob: https:${isDev ? " http:" : ""} *`,
    
    // Connect and frame sources - allow WebSockets, Firebase domains, and EmailJS
    `connect-src 'self' https: wss:${isDev ? " http: ws:" : ""} *.firebaseio.com *.googleapis.com api.emailjs.com`,
    `frame-src 'self' https:${isDev ? " http:" : ""} *.firebaseio.com`,
    
    // Form actions - allow form submissions to EmailJS
    "form-action 'self' https://api.emailjs.com",
    
    // Other security headers
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests"
  ];
  
  // Add report-uri in production to monitor CSP violations
  if (!isDev) {
    csp.push("report-uri /api/csp-violation");
  } else {
    // In development, allow more permissive connections
    csp.push("connect-src 'self' https: wss: http: ws: *");
    csp.push("frame-src 'self' https: http: *");
  }

  const response = NextResponse.next();
  
  // Set CSP header
  response.headers.set(
    'Content-Security-Policy',
    csp.join('; ')
  );
  
  // Set other security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    '/((?!api|_next/static|_next/image|favicon.ico|sw.js|.*\.(?:json|xml|txt)$).*)',
  ],
};

// Note: For production, consider using report-uri or report-to directive
// to monitor CSP violations before enforcing them

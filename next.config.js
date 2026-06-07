/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    // More permissive CSP for development
    const csp = isDev
      ? [
        "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https: http:",
        "connect-src 'self' * data: blob: https: wss: ws: http:",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' *",
        "style-src 'self' 'unsafe-inline' *",
        "img-src 'self' data: blob: *",
        "media-src 'self' blob: data: *",
        "font-src 'self' data: *",
        "frame-src 'self' *",
        "form-action 'self' *",
      ].join('; ')
      : [
        // Production CSP (more restrictive)
        "default-src 'self'",
        `connect-src 'self' https: wss: *.firebaseio.com *.googleapis.com api.emailjs.com *.emailjs.com`,
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: blob: https:",
        "media-src 'self' blob: data: https://res.cloudinary.com",
        "font-src 'self' data:",
        "frame-src 'self'",
        "form-action 'self' https://api.emailjs.com",
      ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
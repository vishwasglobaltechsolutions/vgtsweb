/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      // Add other domains as needed
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.firebaseio.com https://*.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com https://apis.google.com https://*.firebase.com;",
              "connect-src 'self' wss://*.firebaseio.com https://*.firebaseio.com https://*.googleapis.com https://*.firebase.com https://*.google-analytics.com https://*.analytics.google.com https://*.firebase.com;",
              "img-src 'self' data: https:;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "frame-src 'self' https://*.firebase.com https://*.firebaseio.com;",
              "worker-src 'self' blob:;",
            ].join(' '),
          },
        ],
      },
    ];
  },
  // Other Next.js config options can go here
}

module.exports = nextConfig

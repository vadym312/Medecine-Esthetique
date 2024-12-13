/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'medecine-esthetique.net', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', '@headlessui/react', 'framer-motion'],
    craCompat: false,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; media-src 'self' https:; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' data: https:; frame-src 'self' https://www.youtube.com/ https://www.youtube-nocookie.com/ https://patient.nextmotion.net/ https://www.google.com/; ".replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ];
  }
};

module.exports = withBundleAnalyzer(nextConfig);
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "images.unsplash.com",
      "medecine-esthetique.net",
      "medecine-esthetique-app.netlify.app",
      "lh3.googleusercontent.com",
      "0qx3mqhgffnt0u1a.public.blob.vercel-storage.com",
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  compress: true,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      "lucide-react",
      "@headlessui/react",
      "framer-motion",
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Rewrite for Paris districts and landmarks
      {
        source: '/medecine-esthetique-:district',
        destination: '/?district=:district',
      },
      {
        source: '/injection-:treatment-paris-:district',
        destination: '/injection-:treatment',
      },
      {
        source: '/botox-paris-:district',
        destination: '/botox',
      },
      {
        source: '/injection-acide-hyaluronique-paris-:district',
        destination: '/acide-hyaluronique',
      },
      {
        source: '/injection-botox-paris-:district',
        destination: '/botox',
      },
      {
        source: '/augmentation-levres-paris-:district',
        destination: '/augmentation-levres-paris',
      },
      {
        source: '/injections-cernes-paris-:district',
        destination: '/injections-cernes-paris',
      },
      {
        source: '/injection-pommettes-paris-:district',
        destination: '/injection-acide-hyaluronique-pommettes-paris',
      },
      {
        source: '/medecine-esthetique-:landmark',
        destination: '/?landmark=:landmark',
      },
      {
        source: '/injection-:treatment-:landmark',
        destination: '/injection-:treatment',
      }
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
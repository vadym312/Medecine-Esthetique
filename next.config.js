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
      },
      // API redirects route
      {
        source: '/api/redirects',
        destination: '/api/redirects',
      }
    ];
  },
  async redirects() {
    return [
      // Old URLs to new URLs
      {
        source: '/botox-paris',
        destination: '/botox',
        permanent: true,
      },
      {
        source: '/acide-hyaluronique-paris',
        destination: '/acide-hyaluronique',
        permanent: true,
      },
      {
        source: '/injections-paris',
        destination: '/',
        permanent: true,
      },
      {
        source: '/medecine-esthetique',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dr-elard',
        destination: '/dr-elard-emmanuel-paris-specialiste-injections',
        permanent: true,
      },
      {
        source: '/cabinet',
        destination: '/le-cabinet-paris-specialiste-injections',
        permanent: true,
      },
      {
        source: '/prix',
        destination: '/tarifs',
        permanent: true,
      },
      {
        source: '/contact-paris',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog-medecine-esthetique',
        destination: '/blog',
        permanent: true,
      },
      // Treatment variations
      {
        source: '/injection-levres',
        destination: '/augmentation-levres-paris',
        permanent: true,
      },
      {
        source: '/augmentation-des-levres',
        destination: '/augmentation-levres-paris',
        permanent: true,
      },
      {
        source: '/injection-cernes',
        destination: '/injections-cernes-paris',
        permanent: true,
      },
      {
        source: '/injection-pommettes',
        destination: '/injection-acide-hyaluronique-pommettes-paris',
        permanent: true,
      },
      {
        source: '/injection-sillons',
        destination: '/sillons-nasogeniens',
        permanent: true,
      },
      {
        source: '/sillons',
        destination: '/sillons-nasogeniens',
        permanent: true,
      },
      {
        source: '/injection-front',
        destination: '/injection-du-front',
        permanent: true,
      },
      {
        source: '/front',
        destination: '/injection-du-front',
        permanent: true,
      },
      {
        source: '/injection-tempe',
        destination: '/injection-tempes',
        permanent: true,
      },
      {
        source: '/tempes',
        destination: '/injection-tempes',
        permanent: true,
      },
      {
        source: '/injection-ovale',
        destination: '/ovale-du-visage',
        permanent: true,
      },
      {
        source: '/ovale',
        destination: '/ovale-du-visage',
        permanent: true,
      },
      {
        source: '/injection-menton-paris',
        destination: '/injection-menton',
        permanent: true,
      },
      {
        source: '/rhinoplastie',
        destination: '/rhinoplastie-medicale-paris',
        permanent: true,
      },
      {
        source: '/nez',
        destination: '/rhinoplastie-medicale-paris',
        permanent: true,
      },
      {
        source: '/plis-amertume',
        destination: '/plis-armetume-acide-hyaluronique-paris',
        permanent: true,
      },
      {
        source: '/rides-bouche',
        destination: '/rides-autour-de-la-bouche',
        permanent: true,
      },
      {
        source: '/rides-peribuccales',
        destination: '/rides-autour-de-la-bouche',
        permanent: true,
      },
      // Botox variations
      {
        source: '/botox-front',
        destination: '/botox-rides-du-front',
        permanent: true,
      },
      {
        source: '/botox-lion',
        destination: '/botox-ride-du-lion',
        permanent: true,
      },
      {
        source: '/botox-pattes-oie',
        destination: '/botox-rides-pattes-d-oie',
        permanent: true,
      },
      {
        source: '/botox-transpiration',
        destination: '/injection-botox-transpiration',
        permanent: true,
      },
      // Technology variations
      {
        source: '/hifu-paris',
        destination: '/hifu',
        permanent: true,
      },
      {
        source: '/radiofrequence-paris',
        destination: '/radiofrequence',
        permanent: true,
      },
      {
        source: '/plexr',
        destination: '/plexr-blepharoplastie-sans-chirurgie',
        permanent: true,
      },
      {
        source: '/blepharoplastie',
        destination: '/plexr-blepharoplastie-sans-chirurgie',
        permanent: true,
      },
      {
        source: '/cryolipolyse',
        destination: '/cryolipolyse-paris',
        permanent: true,
      },
      // Skincare variations
      {
        source: '/skinbooster',
        destination: '/skinbooster-paris',
        permanent: true,
      },
      {
        source: '/mesolift-paris',
        destination: '/mesolift',
        permanent: true,
      },
      {
        source: '/rajeunissement-mains',
        destination: '/rajeunissement-des-mains',
        permanent: true,
      },
      {
        source: '/mains',
        destination: '/rajeunissement-des-mains',
        permanent: true,
      },
      // Blog pagination redirects
      {
        source: '/blog/page/:page',
        destination: '/blog',
        permanent: true,
      }
    ];
  }
};

module.exports = withBundleAnalyzer(nextConfig);
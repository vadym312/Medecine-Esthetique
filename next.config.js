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
      "blog.medecine-esthetique.net",
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
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://blog.medecine-esthetique.net https://region1.analytics.google.com; frame-src 'self' https://www.youtube.com https://youtube.com https://patient.nextmotion.net https://www.google.com https://td.doubleclick.net;",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
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
      {
        source: '/blog-redirect/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/procedures/traitements-injectables/botox',
        destination: '/botox',
        permanent: true,
      },
      {
        source: '/micronutrition-paris-article-docteur-elard',
        destination: '/dr-elard-emmanuel-paris-specialiste-injections',
        permanent: true,
      },
      {
        source: '/en/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gonflement-levres-injection-acide-hyaluronique',
        destination: '/blog/effets-acide-hyaluronique-medecine-esthetique',
        permanent: true,
      },
      {
        source: '/comprendre-vieillissement-visage-paris-article-docteur-elard',
        destination: '/blog/effets-acide-hyaluronique-medecine-esthetique',
        permanent: true,
      },
      {
        source: '/vieillissement-cutane-paris-article-docteur-elard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/toxine-botulique',
        destination: '/botox',
        permanent: true,
      },
      {
        source: '/cellulite-paris-article-docteur-elard',
        destination: '/radiofrequence',
        permanent: true,
      },
      {
        source: '/category/corps/page/2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/exposition-soleil-et-medecine-esthetique-article',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/retinol-cosmetique-anti-age-en-medecine-esthetique-article',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/procedures/traitements-specialises/plexr',
        destination: '/plexr-blepharoplastie-sans-chirurgie',
        permanent: true,
      },
      {
        source: '/lexique-medecine-esthetique-paris-article-docteur-elard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/procedures/ovale-visage',
        destination: '/ovale-du-visage',
        permanent: true,
      },
      {
        source: '/https-medecine-esthetique-net-5-meilleures-astuces-anti-inflammatoires-nutrition-article',
        destination: '/blog/acide-hyaluronique-medecine-esthetique-soins-post-injection',
        permanent: true,
      },
      {
        source: '/category/anti-age',
        destination: '/acide-hyaluronique',
        permanent: true,
      },
      {
        source: '/test-blog1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/hypersudation-paris-article-docteur-elard',
        destination: '/injection-botox-transpiration',
        permanent: true,
      },
      {
        source: '/procedures/technologies-avancees/hifu',
        destination: '/hifu',
        permanent: true,
      },
      {
        source: '/procedures/cernes',
        destination: '/injections-cernes-paris',
        permanent: true,
      },
      {
        source: '/author/admin-healthcie',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lexique-medecine-esthetique',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/category/procedures/page/2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-json/elementskit/v1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/comprendre-action-led-paris-article-docteur-elard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/procedures/front',
        destination: '/injection-du-front',
        permanent: true,
      },
      {
        source: '/medecine-esthetique-prevenir-signes-age-des-20-ans-article',
        destination: '/',
        permanent: true,
      },
      {
        source: '/toxine-botulique-paris-article-docteur-elard',
        destination: '/botox',
        permanent: true,
      },
      {
        source: '/vergetures-paris-article-docteur-elard',
        destination: '/radiofrequence',
        permanent: true,
      },
      {
        source: '/cabinet-medecine-esthetique-paris',
        destination: '/le-cabinet-paris-specialiste-injections',
        permanent: true,
      },
      {
        source: '/injections/visage/sillons-nasogeniens',
        destination: '/sillons-nasogeniens',
        permanent: true,
      },
      {
        source: '/category/lifestyle-education',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/injections/visage/rhinoplastie-medicale',
        destination: '/rhinoplastie-medicale-paris',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/comment-fonctionne-peeling-paris-article-docteur-elard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/comprendre-alopecie-paris-article-docteur-elard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/procedures/levres',
        destination: '/augmentation-levres-paris',
        permanent: true,
      },
      {
        source: '/gonflement-des-levres-apres-une-injection-dacide-hyaluronique-tout-ce-quil-faut-savoir',
        destination: '/augmentation-levres-paris',
        permanent: true,
      },
      {
        source: '/procedures/mains',
        destination: '/rajeunissement-des-mains',
        permanent: true,
      },
      {
        source: '/procedures/sillons-nasogeniens',
        destination: '/sillons-nasogeniens',
        permanent: true,
      },
      {
        source: '/procedures/rhinoplastie',
        destination: '/rhinoplastie-medicale-paris',
        permanent: true,
      },
      {
        source: '/cryolise-8',
        destination: '/cryolipolyse-paris',
        permanent: true,
      },
      {
        source: '/procedures/mesolift',
        destination: '/mesolift',
        permanent: true,
      },
      {
        source: '/procedures/rides-lion',
        destination: '/botox-ride-du-lion',
        permanent: true,
      },
      {
        source: '/lexique-medecine-esthetique',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/p-cernes',
        destination: '/injections-cernes-paris',
        permanent: true,
      },
      {
        source: '/m',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/ryolipolyse-paris',
        destination: '/cryolipolyse-paris',
        permanent: true,
      },
      {
        source: '/inflammaging-role-vieillissement-cutane-article-docteur-elard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/idees-recues-toxine-botulique-paris-article-docteur-elard',
        destination: '/botox',
        permanent: true,
      },
      {
        source: '/procedures/skinbooster',
        destination: '/skinbooster-paris',
        permanent: true,
      },
      {
        source: '/lexique',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/content',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/procedures/pommettes',
        destination: '/injection-acide-hyaluronique-pommettes-paris',
        permanent: true,
      },
      {
        source: '/soin/plexr',
        destination: '/plexr-blepharoplastie-sans-chirurgie',
        permanent: true,
      },
      {
        source: '/injections/visage/cernes',
        destination: '/injections-cernes-paris',
        permanent: true,
      },
      {
        source: '/about/rhinoplastie-medicale-paris',
        destination: '/rhinoplastie-medicale-paris',
        permanent: true,
      },
      {
        source: '/procedures/plis-amertume',
        destination: '/plis-armetume-acide-hyaluronique-paris',
        permanent: true,
      },
      {
        source: '/procedures/tempes',
        destination: '/injection-tempes',
        permanent: true,
      },
      {
        source: '/soin/toxine-botulique',
        destination: '/botox',
        permanent: true,
      },
      {
        source: '/soin/produits-comblement',
        destination: '/acide-hyaluronique',
        permanent: true,
      },
      {
        source: '/soin/mesotherapie',
        destination: '/mesolift',
        permanent: true,
      },
      {
        source: '/skinbooster-paris-specialiste-injections-acide-hyaluronique',
        destination: '/skinbooster-paris',
        permanent: true,
      },
      {
        source: '/micronutrition',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/a-propos-du-docteur-elard',
        destination: '/dr-elard-emmanuel-paris-specialiste-injections',
        permanent: true,
      },
      {
        source: '/a',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/affiner-visage-paris-specialiste-injections-visage',
        destination: '/ovale-du-visage',
        permanent: true,
      },
      {
        source: '/russian-lips-paris-specialiste-injections-levres',
        destination: '/augmentation-levres-paris',
        permanent: true,
      },
      {
        source: '/dr-elard-emmanuel-paris-specialiste-injections-visage',
        destination: '/dr-elard-emmanuel-paris-specialiste-injections',
        permanent: true,
      },
      {
        source: '/injections-levres-paris-specialiste-visage',
        destination: '/augmentation-levres-paris',
        permanent: true,
      },
      {
        source: '/ru',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cryolipolyse-paris-specialiste-silhouette',
        destination: '/cryolipolyse-paris',
        permanent: true,
      },
      {
        source: '/les-secrets-de-lacide-hyaluronique',
        destination: '/acide-hyaluronique',
        permanent: true,
      },
      {
        source: '/category/cosmeto',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/login-healthcie',
        destination: 'https://contact.medecine-esthetique.net/',
        permanent: true,
      },
      {
        source: '/en/cellulite',
        destination: '/',
        permanent: true,
      },
      {
        source: '/injections/visage/front',
        destination: '/injection-du-front',
        permanent: true,
      },
      {
        source: '/procedures/rides-front',
        destination: '/botox-rides-du-front',
        permanent: true,
      },
      {
        source: '/procedures/patte-oie',
        destination: '/botox-rides-pattes-d-oie',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/injections-ride-du-lion-paris-specialiste-visage',
        destination: '/botox-ride-du-lion',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2024/11/Nasolabial-Folds-eII.jpg1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/traitement-plis-armetume-paris-specialiste-injections-visage',
        destination: '/plis-armetume-acide-hyaluronique-paris',
        permanent: true,
      },
      {
        source: '/rhinoplastie-medicale-paris-specialiste-injections-nez',
        destination: '/rhinoplastie-medicale-paris',
        permanent: true,
      },
      {
        source: '/rajeunissement-pommettes-paris-specialiste-injections-visage',
        destination: '/injection-acide-hyaluronique-pommettes-paris',
        permanent: true,
      },
      {
        source: '/cellulite',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/le-vieillissement-cutane',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/rides-du-front',
        destination: '/botox-rides-du-front',
        permanent: true,
      },
      {
        source: '/affiner-visage-paris',
        destination: '/ovale-du-visage',
        permanent: true,
      },
      {
        source: '/traitement-led-paris-specialiste-peau',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/radiofrequence-paris-specialiste-silhouette-visage',
        destination: '/radiofrequence',
        permanent: true,
      },
      {
        source: '/traitement-hypersudation-paris-specialiste-botox',
        destination: '/injection-botox-transpiration',
        permanent: true,
      },
      {
        source: '/cernes',
        destination: '/injections-cernes-paris',
        permanent: true,
      },
      {
        source: '/lampe-led',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/rides-de-la-patte-doie',
        destination: '/botox-rides-pattes-d-oie',
        permanent: true,
      },
      {
        source: '/jawline-contouring-paris',
        destination: '/ovale-du-visage',
        permanent: true,
      },
      {
        source: '/rajeunissement-facial-sans-injection-paris-specialiste-visage',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/soin/plasma-riche-en-plaquettes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/actualites-medecine-esthetique-paris-docteur-elard',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/schema-radiofrequence-copie',
        destination: '/radiofrequence',
        permanent: true,
      },
      {
        source: '/la-transpiration-excessive',
        destination: '/injection-botox-transpiration',
        permanent: true,
      },
      {
        source: '/traitement-rides-patte-doie-paris-specialiste-injections-visage',
        destination: '/botox-rides-pattes-d-oie',
        permanent: true,
      },
      {
        source: '/injection-menton-pari',
        destination: '/injection-menton',
        permanent: true,
      },
      {
        source: '/rides-du-lion',
        destination: '/botox-ride-du-lion',
        permanent: true,
      },
      {
        source: '/traitement-rides-front-paris-specialiste-injections-visage',
        destination: '/botox-rides-du-front',
        permanent: true,
      },
      {
        source: '/t-soins',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/soin/peelings',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/traitement-anti-age',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/un-peeling',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/la-chute-de-cheveux',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/jawline-contouring-paris-specialiste-injections-machoire',
        destination: '/ovale-du-visage',
        permanent: true,
      },
      {
        source: '/les-vergetures',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/traitement-cernes-paris-specialiste-injections-visage',
        destination: '/injections-cernes-paris',
        permanent: true,
      },
      {
        source: '/lifting-medical-paris-specialiste-injections-visage',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/ru/page/2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/soin/needle-shaping',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/ru/ru',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blepharoplastie-sans-chirurgie-paris-specialiste-visage',
        destination: '/plexr-blepharoplastie-sans-chirurgie',
        permanent: true,
      },
      {
        source: '/gonflement-levres-injection-acide-hyaluronique',
        destination: '/acide-hyaluronique',
        permanent: true,
      },
      {
        source: '/comprendre-vieillissement-visage-paris-article-docteur-elard',
        destination: '/blog/acide-hyaluronique-medecine-esthetique-importance-et-avantages',
        permanent: true,
      },
      {
        source: '/contact-docteur-elard-specialiste-visage',
        destination: 'https://contact.medecine-esthetique.net/',
        permanent: true,
      },
    ];
  }
};

module.exports = withBundleAnalyzer(nextConfig);
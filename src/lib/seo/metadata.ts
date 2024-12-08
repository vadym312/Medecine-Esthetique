import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dr-emmanuel-elard.fr'),
  title: {
    default: 'Dr Emmanuel ELARD | Médecine Esthétique à Paris',
    template: '%s | Dr Emmanuel ELARD',
  },
  description: 'Cabinet de médecine esthétique du Dr Emmanuel ELARD à Paris. Expertise en injections, soins du visage et traitements anti-âge.',
  applicationName: 'Dr Emmanuel ELARD',
  authors: [{ name: 'Dr Emmanuel ELARD' }],
  generator: 'Next.js',
  keywords: ['médecine esthétique', 'injections', 'botox', 'acide hyaluronique', 'paris'],
  referrer: 'origin-when-cross-origin',
  creator: 'Dr Emmanuel ELARD',
  publisher: 'Dr Emmanuel ELARD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Dr Emmanuel ELARD',
    images: [{
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
      width: 1200,
      height: 630,
      alt: 'Cabinet du Dr Emmanuel ELARD',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dr_elard',
    creator: '@dr_elard',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    languages: {
      'fr': process.env.NEXT_PUBLIC_SITE_URL,
    },
  },
  category: 'medical',
};

export const generateMetadata = (
  title: string,
  description: string,
  imageUrl?: string,
  noindex?: boolean
): Metadata => ({
  ...defaultMetadata,
  title,
  description,
  openGraph: {
    ...defaultMetadata.openGraph,
    title,
    description,
    ...(imageUrl && {
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      }],
    }),
  },
  twitter: {
    ...defaultMetadata.twitter,
    title,
    description,
    ...(imageUrl && { images: [imageUrl] }),
  },
  ...(noindex && {
    robots: {
      index: false,
      follow: false,
    },
  }),
});
import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
  title: 'Dr Emmanuel Elard - Injections Esthétiques à Paris',
  description: "Spécialiste des injections d'acide hyaluronique à Paris, le Dr Emmanuel Elard offre des traitements pour un visage rajeuni et harmonieux, sans chirurgie.",
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
    title: "Injections Esthétiques à Paris - Dr Emmanuel Elard, Expert en Acide Hyaluronique",
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'https://medecine-esthetique.net',
    images: [{
      url: 'https://medecine-esthetique.net/wp-content/uploads/2024/11/Injections-full-face-Plan.jpg',
      width: 1444,
      height: 811,
      alt: 'Le Dr Emmanuel Elard réalisant une injection esthétique dans un cadre professionnel.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Injections Esthétiques à Paris - Dr Emmanuel Elard, Expert en Acide Hyaluronique",
    description: "Faites confiance au Dr Emmanuel Elard, spécialiste des injections d'acide hyaluronique à Paris, pour un visage rajeuni et harmonieux. Découvrez des traitements personnalisés pour sublimer votre beauté avec des résultats naturels.",
    images: "https://medecine-esthetique.net/wp-content/uploads/2024/11/Injections-full-face-Plan.jpg",
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
        width: 1444,
        height: 811,
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
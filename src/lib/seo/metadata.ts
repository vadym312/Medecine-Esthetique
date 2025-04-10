import { Metadata } from 'next';

import { getParisDistricts, getParisLandmarks } from '@/src/utils/seo';

// Get random items from array
const getRandomItems = (array: string[], count: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Get nearby districts for Paris 12
const nearbyDistricts = ['Paris 11e', 'Paris 4e', 'Paris 5e', 'Paris 13e'];
const nearbyLandmarks = ['Bastille', 'Nation', 'Gare de Lyon', 'Bercy', 'Bois de Vincennes'];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net'),
  title: 'Dr Emmanuel Elard - Injections Esthétiques à Paris 12 | Médecine Esthétique',
  description: `Spécialiste des injections d'acide hyaluronique à Paris 12, le Dr Emmanuel Elard offre des traitements pour un visage rajeuni et harmonieux, sans chirurgie. Cabinet situé près de Bastille, Nation et Gare de Lyon.`,
  applicationName: 'Dr Emmanuel ELARD',
  authors: [{ name: 'Dr Emmanuel ELARD' }],
  generator: 'Next.js',
  keywords: [
    'médecine esthétique', 'injections', 'botox', 'acide hyaluronique', 
    'Paris 12', 'Bastille', 'Nation', 'Gare de Lyon', 'médecin esthétique Paris',
    'rajeunissement visage', 'rides', 'cernes', 'pommettes', 'lèvres'
  ],
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
    title: "Injections Esthétiques à Paris 12 - Dr Emmanuel Elard, Expert en Acide Hyaluronique",
    description: `Faites confiance au Dr Emmanuel Elard, spécialiste des injections d'acide hyaluronique à Paris 12, pour un visage rajeuni et harmonieux. Cabinet situé près de Bastille, Nation et Gare de Lyon.`,
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Cabinet Dr Emmanuel Elard - Médecine Esthétique Paris 12',
    images: [{
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/wp-content/uploads/2024/11/Injections-full-face-Plan.jpg`,
      width: 1444,
      height: 811,
      alt: 'Le Dr Emmanuel Elard réalisant une injection esthétique dans son cabinet médical à Paris 12',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Injections Esthétiques à Paris 12 - Dr Emmanuel Elard, Expert en Acide Hyaluronique",
    description: `Faites confiance au Dr Emmanuel Elard, spécialiste des injections d'acide hyaluronique à Paris 12, pour un visage rajeuni et harmonieux. Cabinet situé près de Bastille, Nation et Gare de Lyon.`,
    images: `${process.env.NEXT_PUBLIC_SITE_URL}/wp-content/uploads/2024/11/Injections-full-face-Plan.jpg`,
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
  noindex?: boolean,
  localizeOptions?: {
    districts?: number;
    landmarks?: number;
  }
): Metadata => {
  // Get random districts and landmarks for localization
  const districts = getRandomItems(nearbyDistricts, localizeOptions?.districts || 2);
  const landmarks = getRandomItems(nearbyLandmarks, localizeOptions?.landmarks || 2);
  
  // Localize title and description
  const localizedTitle = title.includes('Paris') ? title : `${title} à Paris 12`;
  const localizedDescription = description.includes('Paris') 
    ? description 
    : `${description} Cabinet situé à Paris 12, proche de ${landmarks.join(' et ')}.`;

  return {
    ...defaultMetadata,
    title: localizedTitle,
    description: localizedDescription,
    keywords: [
      ...(defaultMetadata.keywords as string[]),
      ...districts,
      ...landmarks
    ],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: localizedTitle,
      description: localizedDescription,
      ...(imageUrl && {
        images: [{
          url: imageUrl,
          width: 1444,
          height: 811,
          alt: `${title} - Dr Emmanuel Elard - Médecine esthétique à Paris 12`,
        }],
      }),
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: localizedTitle,
      description: localizedDescription,
      ...(imageUrl && { images: [imageUrl] }),
    },
    ...(noindex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
};
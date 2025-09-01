import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
  title: 'Épilation Laser Définitive à Paris - Dr Emmanuel Elard',
  description: "Épilation laser définitive à Paris : technologie avancée, résultats durables, toutes zones du corps. Découvrez nos techniques d'épilation laser sécurisées.",
  applicationName: 'Dr Emmanuel ELARD',
  authors: [{ name: 'Dr Emmanuel ELARD' }],
  generator: 'Next.js',
  keywords: ['épilation laser', 'épilation définitive', 'laser diode', 'épilation paris', 'médecine esthétique'],
  referrer: 'origin-when-cross-origin',
  creator: 'Dr Emmanuel ELARD',
  publisher: 'Dr Emmanuel ELARD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'article',
    title: "Épilation Laser Définitive à Paris - Dr Emmanuel Elard",
    description: "Épilation laser définitive à Paris : technologie avancée, résultats durables, toutes zones du corps. Découvrez nos techniques d'épilation laser sécurisées.",
    locale: 'fr_FR',
    url: "https://medecine-esthetique.net/procedures/technologies-avancees/epilation-laser/",
    siteName: 'https://medecine-esthetique.net',
    images: [{
      url: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg',
      width: 1200,
      height: 630,
      alt: "Séance d'épilation laser dans un cabinet médical moderne",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Épilation Laser Définitive à Paris - Dr Emmanuel Elard",
    description: "Épilation laser définitive à Paris : technologie avancée, résultats durables, toutes zones du corps. Découvrez nos techniques d'épilation laser sécurisées.",
    images: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg",
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
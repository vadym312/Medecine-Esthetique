import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
  title: 'Microneedling à Paris - Régénération Cutanée Naturelle | Dr Emmanuel Elard',
  description: "Microneedling à Paris : stimulez la production de collagène naturellement. Traitement des cicatrices, rides, pores dilatés. Résultats visibles et durables.",
  applicationName: 'Dr Emmanuel ELARD',
  authors: [{ name: 'Dr Emmanuel ELARD' }],
  generator: 'Next.js',
  keywords: ['microneedling', 'micro-aiguilles', 'régénération cutanée', 'collagène', 'cicatrices acné', 'paris', 'médecine esthétique'],
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
    title: "Microneedling à Paris - Régénération Cutanée Naturelle | Dr Emmanuel Elard",
    description: "Microneedling à Paris : stimulez la production de collagène naturellement. Traitement des cicatrices, rides, pores dilatés. Résultats visibles et durables.",
    locale: 'fr_FR',
    url: "https://medecine-esthetique.net/procedures/traitements-specialises/microneedling/",
    siteName: 'https://medecine-esthetique.net',
    images: [{
      url: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg',
      width: 1200,
      height: 630,
      alt: "Séance de microneedling dans un cabinet médical professionnel",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Microneedling à Paris - Régénération Cutanée Naturelle | Dr Emmanuel Elard",
    description: "Microneedling à Paris : stimulez la production de collagène naturellement. Traitement des cicatrices, rides, pores dilatés. Résultats visibles et durables.",
    images: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg",
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
import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
    title: 'Guide Complet des Soins Anti-Âge et Embellissement Naturel',
    description: "Les secrets de la médecine esthétique révélés dans ce blog pour un visage rajeuni et des résultats naturels",
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
        type: 'article',
        title: "Guide Complet des Soins Anti-Âge et Embellissement Naturel",
        description: "Les secrets de la médecine esthétique révélés dans ce blog pour un visage rajeuni et des résultats naturels",
        locale: 'en_US',
        url: "https://medecine-esthetique.net/blog/",
        siteName: 'https://medecine-esthetique.net',
        images: [{
            url: 'https://medecine-esthetique.net/wp-content/uploads/2023/07/skinbooster-injection-acide-hyaluronique-paris.jpg',
            width: 1200,
            height: 630,
            alt: "Les Secrets de la Médecine Esthétique",
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Guide Complet des Soins Anti-Âge et Embellissement Naturel",
        description: "Les secrets de la médecine esthétique révélés dans ce blog pour un visage rajeuni et des résultats naturels",
        images: "https://medecine-esthetique.net/wp-content/uploads/2023/07/skinbooster-injection-acide-hyaluronique-paris.jpg",
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
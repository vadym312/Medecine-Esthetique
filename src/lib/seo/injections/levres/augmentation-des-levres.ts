import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
    title: 'Injection lèvres acide hyaluronique à Paris 12',
    description: "Sublimez vos lèvres avec des injections d'acide hyaluronique : naturels, harmonieux, avant-après, durée et sécurité. Découvrez nos solutions à Paris",
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
        title: "Injection lèvres acide hyaluronique à Paris 12",
        description: "Sublimez vos lèvres avec des injections d'acide hyaluronique : naturels, harmonieux, avant-après, durée et sécurité. Découvrez nos solutions à Paris",
        locale: 'en_US',
        url: "https://medecine-esthetique.net/injections/levres/augmentation-des-levres/",
        siteName: 'https://medecine-esthetique.net',
        images: [{
            url: 'https://medecine-esthetique.net/wp-content/uploads/2023/07/traitement-cernes-medecine-esthetique-paris.jpg',
            width: 2000,
            height: 1333,
            alt: "enlever les cernes",
        }],
        videos: [
            {
                url: "https://www.youtube.com/embed/yyQ30IDZFFA",
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: "Injections pour enlever les Cernes: Techniques et Résultats",
        description: "Découvrez comment les injections d'acide hyaluronique réduisent efficacement les cernes sous les yeux. Méthodes, résultats et précautions à connaître.",
        images: "https://medecine-esthetique.net/wp-content/uploads/2023/07/traitement-cernes-medecine-esthetique-paris.jpg",
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
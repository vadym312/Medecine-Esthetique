import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
    title: "Ovale du Visage à Paris : Redéfinition et Contouring",
    description: "Redéfinissez l'ovale de votre visage avec des injections d'acide hyaluronique à Paris. Contouring du menton, bajoues et angle mandibulaire",
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
        title: "Ovale du Visage à Paris : Redéfinition et Contouring",
        description: "Redéfinissez l'ovale de votre visage avec des injections d'acide hyaluronique à Paris. Contouring du menton, bajoues et angle mandibulaire",
        locale: 'en_US',
        url: "https://medecine-esthetique.net/injections/ovale-du-visage/",
        siteName: 'https://medecine-esthetique.net',
        images: [{
            url: 'https://medecine-esthetique.net/wp-content/uploads/2024/11/ovale-visage-contour.jpg',
            width: 1200,
            height: 630,
            alt: "Avant et après correction esthétique de l’ovale du visage pour une apparence plus harmonieuse.",
        }],
        videos: [
            {
                url: "https://www.youtube.com/embed/7B55v9M0soU",
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: "Ovale du Visage à Paris : Redéfinition et Contouring",
        description: "Redéfinissez l'ovale de votre visage avec des injections d'acide hyaluronique à Paris. Contouring du menton, bajoues et angle mandibulaire",
        images: "https://medecine-esthetique.net/wp-content/uploads/2024/11/ovale-visage-contour.jpg",
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
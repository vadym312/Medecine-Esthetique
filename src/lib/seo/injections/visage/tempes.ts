import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
    title: 'Injections Acide Hyaluronique Tempes : Rajeunissement Visage',
    description: "Découvrez comment les injections d'acide hyaluronique comblent les tempes creuses, redonnant volume et jeunesse au visage. Techniques, résultats et précautions.",
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
        title: "Injections Acide Hyaluronique Tempes : Rajeunissement Visage",
        description: "Découvrez comment les injections d'acide hyaluronique comblent les tempes creuses, redonnant volume et jeunesse au visage. Techniques, résultats et précautions",
        locale: 'en_US',
        url: "https://medecine-esthetique.net/injections/tempes/",
        siteName: 'https://medecine-esthetique.net',
        images: [{
            url: 'https://medecine-esthetique.net/wp-content/uploads/2024/11/tempes-creuses2.jpg',
            width: 1200,
            height: 630,
            alt: "Avant et après traitement esthétique des tempes creuses pour un effet rajeunissant.",
        }],
        videos: [
            {
                url: "https://www.youtube.com/embed/M1HinlfYA04",
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: "Injections Acide Hyaluronique Tempes : Rajeunissement Visage",
        description: "Découvrez comment les injections d'acide hyaluronique comblent les tempes creuses, redonnant volume et jeunesse au visage. Techniques, résultats et précautions.",
        images: "https://medecine-esthetique.net/wp-content/uploads/2024/11/tempes-creuses2.jpg",
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
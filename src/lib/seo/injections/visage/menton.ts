import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
    title: "Injections de menton : redéfinissez l'ovale de votre visage",
    description: "Découvrez comment les injections d'acide hyaluronique au menton peuvent sculpter un ovale du visage plus harmonieux. Tout ce que vous devez savoir avant de vous lancer",
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
        title: "Les injections de menton redéfinissent l'ovale du visage – Tout ce qu'il faut savoir",
        description: "Découvrez comment les injections d'acide hyaluronique au menton sculptent un ovale du visage plus lifté et harmonieux. Tout ce qu'il faut savoir avant de commencer.",
        locale: 'en_US',
        url: "https://medecine-esthetique.net/injections/visage/menton/",
        siteName: 'https://medecine-esthetique.net',
        images: [{
            url: 'https://medecine-esthetique.net/wp-content/uploads/2024/11/injection-du-menton.jpg',
            width: 1200,
            height: 630,
            alt: "Avant et après une injection esthétique du menton pour redéfinir l'ovale du visage.",
        }],
        videos: [
            {
                url: "https://www.youtube.com/embed/8FsZ8JXT3b4",
            },
            {
                url: "https://www.youtube.com/embed/xfCTrqFeEDM"
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: "Les injections de menton redéfinissent l'ovale du visage – Tout ce qu'il faut savoir",
        description: "Découvrez comment les injections d'acide hyaluronique au menton sculptent un ovale du visage plus lifté et harmonieux. Tout ce qu'il faut savoir avant de commencer.",
        images: "https://medecine-esthetique.net/wp-content/uploads/2024/11/injection-du-menton.jpg",
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
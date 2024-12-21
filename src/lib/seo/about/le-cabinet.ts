import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net/'),
    title: 'Dr Emmanuel Elard - Cabinet de Médecine Esthétique à Paris',
    description: "Le cabinet du Dr Emmanuel Elard, expert en médecine esthétique à Paris, propose des traitements de rajeunissement et d’injectables pour des résultats naturels et harmonieux.",
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
        title: "Dr Emmanuel Elard - Cabinet de Médecine Esthétique à Paris",
        description: "Le cabinet du Dr Emmanuel Elard, expert en médecine esthétique à Paris, propose des traitements de rajeunissement et d’injectables pour des résultats naturels et harmonieux.",
        locale: 'en_US',
        url: "https://medecine-esthetique.net/about/le-cabinet/",
        siteName: 'https://medecine-esthetique.net',
        images: [{
            url: 'https://medecine-esthetique.net/wp-content/uploads/2024/11/bureau1.jpg',
            width: 1168,
            height: 1107,
            alt: 'cabinet medical Dr Elard paris - bureau',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Dr Emmanuel Elard - Cabinet de Médecine Esthétique à Paris",
        description: "Le cabinet du Dr Emmanuel Elard, expert en médecine esthétique à Paris, propose des traitements de rajeunissement et d’injectables pour des résultats naturels et harmonieux.",
        images: "https://medecine-esthetique.net/wp-content/uploads/2023/10/docteur-elard-emmanuel-medecin-esthetique-paris-l.png",
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
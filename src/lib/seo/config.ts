import { DefaultSeoProps } from 'next-seo';

export const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: '%s | Dr Emmanuel ELARD',
  defaultTitle: 'Dr Emmanuel ELARD | Médecine Esthétique à Paris',
  description: 'Cabinet de médecine esthétique du Dr Emmanuel ELARD à Paris. Expertise en injections, soins du visage et traitements anti-âge.',
  canonical: 'https://dr-emmanuel-elard.fr',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://dr-emmanuel-elard.fr',
    siteName: 'Dr Emmanuel ELARD',
    title: 'Dr Emmanuel ELARD | Médecine Esthétique à Paris',
    description: 'Cabinet de médecine esthétique du Dr Emmanuel ELARD à Paris. Expertise en injections, soins du visage et traitements anti-âge.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
        width: 1200,
        height: 630,
        alt: 'Cabinet du Dr Emmanuel ELARD',
      },
    ],
  },
  twitter: {
    handle: '@dr_elard',
    site: '@dr_elard',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#D4AF37',
    },
  ],
  languageAlternates: [
    {
      hrefLang: 'fr',
      href: 'https://dr-emmanuel-elard.fr',
    },
  ],
};
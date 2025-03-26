import { DefaultSeoProps } from 'next-seo';
import { siteConfig } from '@/src/config/site';

export const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: '%s | Dr Emmanuel ELARD',
  defaultTitle: 'Dr Emmanuel ELARD | Médecine Esthétique à Paris',
  description: 'Cabinet de médecine esthétique du Dr Emmanuel ELARD à Paris. Expertise en injections, soins du visage et traitements anti-âge.',
  canonical: siteConfig.domain,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.domain,
    siteName: siteConfig.domain,
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
      href: siteConfig.domain || 'https://medecine-esthetique.net',
    },
  ],
};
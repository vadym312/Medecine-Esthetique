import { PageData } from '@/src/types/le-cabinet';

export const mockPages: Record<string, PageData> = {
  accueil: {
    id: '1',
    slug: 'accueil',
    title: 'Cabinet Dr Emmanuel ELARD | Médecine Esthétique à Paris',
    content: '',
    seo: {
      metaTitle: 'Cabinet Dr Emmanuel ELARD | Médecine Esthétique à Paris',
      metaDescription:
        'Cabinet de médecine esthétique du Dr Emmanuel ELARD à Paris. Découvrez nos traitements personnalisés et prenez rendez-vous.',
      ogImage: {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068',
        alt: 'Cabinet médical du Dr Emmanuel ELARD',
        width: 1200,
        height: 630,
      },
    },
    updatedAt: new Date().toISOString(),
  },
  'medecine-esthetique': {
    id: '2',
    slug: 'medecine-esthetique',
    title: 'Médecine Esthétique | Dr Emmanuel ELARD',
    content: `
      <h2>Nos Traitements Esthétiques</h2>
      <p>Découvrez notre gamme complète de traitements esthétiques personnalisés.</p>
      <ul>
        <li>Injections de toxine botulique</li>
        <li>Acide hyaluronique</li>
        <li>Mésothérapie</li>
        <li>Peelings médicaux</li>
      </ul>
    `,
    seo: {
      metaTitle: 'Traitements de Médecine Esthétique | Dr Emmanuel ELARD Paris',
      metaDescription:
        'Découvrez nos traitements de médecine esthétique à Paris : injections, peelings, mésothérapie. Des solutions personnalisées pour votre beauté.',
      ogImage: {
        url: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070',
        alt: 'Traitements esthétiques',
        width: 1200,
        height: 630,
      },
    },
    updatedAt: new Date().toISOString(),
  },
};

export const getMockPage = (slug: string): Promise<PageData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const page = mockPages[slug];
      if (page) {
        resolve(page);
      } else {
        reject(new Error(`Page not found: ${slug}`));
      }
    }, 500); // Simulate network delay
  });
};

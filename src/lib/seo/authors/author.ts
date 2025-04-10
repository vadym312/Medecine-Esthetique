import { Metadata } from 'next';

export function generateAuthorMetadata(slug: string): Metadata {
  return {
    title: `${slug} | Auteur | Médecine Esthétique`,
    description: `Articles et contributions de ${slug} sur la médecine esthétique.`,
    alternates: {
      canonical: `/authors/${slug}`,
    },
  };
} 
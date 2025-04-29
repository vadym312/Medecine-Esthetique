import { Metadata } from 'next';

export function generateBlogPostMetadata(slug: string, title: string): Metadata {
  return {
    title: `${title} | Blog | Médecine Esthétique`,
    description: `Article sur ${title} dans notre blog de médecine esthétique.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
} 
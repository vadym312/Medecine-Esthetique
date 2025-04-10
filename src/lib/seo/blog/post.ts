import { Metadata } from 'next';

export function generateBlogPostMetadata(slug: string): Metadata {
  return {
    title: `${slug} | Blog | Médecine Esthétique`,
    description: `Article sur ${slug} dans notre blog de médecine esthétique.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
} 
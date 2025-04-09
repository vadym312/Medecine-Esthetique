'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/src/config/site';

interface ArticleSchemaProps {
  title: string;
  description: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  keywords?: string[];
  articleBody?: string;
  articleSection?: string;
  aiAssisted?: boolean;
  aiDisclosure?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName = 'Dr Emmanuel Elard',
  authorUrl = 'https://medecine-esthetique.net/dr-elard-emmanuel-paris-specialiste-injections',
  publisherName = 'Cabinet Dr Emmanuel ELARD',
  publisherLogo = 'https://medecine-esthetique.net/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  keywords = [],
  articleBody,
  articleSection = 'Médecine Esthétique',
  aiAssisted = false,
  aiDisclosure = 'Cet article a été rédigé avec l\'assistance de l\'intelligence artificielle, sous la supervision et validation d\'experts médicaux qualifiés.',
}) => {
  const pathname = usePathname();
  const url = `${siteConfig.domain}${pathname}`;
  
  // Format dates to ISO format if they're not already
  const formatDate = (date: string) => {
    if (date.includes('T')) return date; // Already in ISO format
    return new Date(date).toISOString();
  };
  
  const formattedDatePublished = formatDate(datePublished);
  const formattedDateModified = dateModified ? formatDate(dateModified) : formattedDatePublished;

  // Construct the schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: formattedDatePublished,
    dateModified: formattedDateModified,
    url: url,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    keywords: keywords.join(', '),
    articleSection: articleSection,
    ...(articleBody && { articleBody: articleBody }),
    ...(aiAssisted && { 
      creativeWorkStatus: 'AI-assisted',
      disambiguatingDescription: aiDisclosure
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
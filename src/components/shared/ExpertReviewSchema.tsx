'use client';

import React from 'react';
import { usePathname } from 'next/navigation';


interface ExpertReviewSchemaProps {
  itemReviewed: {
    name: string;
    description: string;
    url?: string;
    image?: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  author: {
    name: string;
    url?: string;
    description?: string;
    image?: string;
  };
  publishDate: string;
  reviewBody?: string;
}

export const ExpertReviewSchema: React.FC<ExpertReviewSchemaProps> = ({
  itemReviewed,
  reviewRating,
  author,
  publishDate,
  reviewBody
}) => {
  const pathname = usePathname();
  const url = itemReviewed.url || `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
  
  // Format date to ISO format if it's not already
  const formatDate = (date: string) => {
    if (date.includes('T')) return date; // Already in ISO format
    return new Date(date).toISOString();
  };
  
  const formattedPublishDate = formatDate(publishDate);

  // Construct the schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Article',
      name: itemReviewed.name,
      description: itemReviewed.description,
      url: url,
      ...(itemReviewed.image && { image: itemReviewed.image })
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1
    },
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
      ...(author.description && { description: author.description }),
      ...(author.image && { image: author.image })
    },
    datePublished: formattedPublishDate,
    ...(reviewBody && { reviewBody: reviewBody })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
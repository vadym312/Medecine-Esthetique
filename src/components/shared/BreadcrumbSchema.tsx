'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/src/config/site';

interface BreadcrumbSchemaProps {
  customLabels?: Record<string, string>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ 
  customLabels = {} 
}) => {
  const pathname = usePathname();
  
  // Skip rendering on homepage
  if (pathname === '/') return null;
  
  // Split the pathname into segments
  const segments = pathname.split('/').filter(Boolean);
  
  // Generate breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    // Build the URL for this segment
    const url = `/${segments.slice(0, index + 1).join('/')}`;
    
    // Format the label: replace hyphens with spaces and capitalize
    let label = customLabels[segment] || 
      segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
    
    // Special case for Paris locations
    if (segment.match(/paris-\d+/)) {
      label = `Paris ${segment.split('-')[1]}`;
    }
    
    return { label, url };
  });
  
  // Add home item at the beginning
  breadcrumbItems.unshift({ label: 'Accueil', url: '/' });

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `${siteConfig.domain}${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
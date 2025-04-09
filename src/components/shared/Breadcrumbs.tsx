'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbsProps {
  className?: string;
  homeLabel?: string;
  excludeHome?: boolean;
  customLabels?: Record<string, string>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className = '',
  homeLabel = 'Accueil',
  excludeHome = false,
  customLabels = {},
}) => {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on homepage
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
  
  // Add home item at the beginning if not excluded
  if (!excludeHome) {
    breadcrumbItems.unshift({ label: homeLabel, url: '/' });
  }

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://medecine-esthetique.net'}${item.url}`
    }))
  };

  return (
    <>
      <nav aria-label="Fil d'Ariane" className={`py-3 px-4 ${className}`}>
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              )}
              
              {index === breadcrumbItems.length - 1 ? (
                // Current page (not clickable)
                <span className="font-medium text-gray-800" aria-current="page">
                  {item.label}
                </span>
              ) : (
                // Link to previous level
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={item.url}
                    className="hover:text-gold transition-colors duration-200 flex items-center"
                  >
                    {index === 0 && !excludeHome ? (
                      <>
                        <Home className="h-4 w-4 mr-1" />
                        <span className="sr-only">{item.label}</span>
                      </>
                    ) : (
                      item.label
                    )}
                  </Link>
                </motion.div>
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      {/* Add structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};
'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { optimizeImageAlt, optimizeImageFilename } from '@/src/utils/seo';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  location?: string;
  priority?: boolean;
  keywords?: string[];
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  alt,
  src,
  location = 'Paris 12',
  priority = false,
  keywords = [],
  ...props
}) => {
  // Optimize alt text with location information
  const optimizedAlt = optimizeImageAlt(alt, location);
  
  // Optimize image filename if it's a string (not for remote URLs)
  let optimizedSrc = src;
  if (typeof src === 'string' && src.startsWith('/')) {
    // Only optimize local images
    const defaultKeywords = ['medecine-esthetique', 'paris-12'];
    const allKeywords = [...defaultKeywords, ...keywords];
    optimizedSrc = optimizeImageFilename(src, allKeywords);
  }
  
  return (
    <Image
      src={optimizedSrc}
      alt={optimizedAlt}
      priority={priority}
      {...props}
    />
  );
};
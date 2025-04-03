'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getParisDistricts, getParisLandmarks } from '@/src/utils/seo';

interface LocalizedHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  localize?: boolean;
  location?: string;
  landmark?: boolean;
}

export const LocalizedHeading: React.FC<LocalizedHeadingProps> = ({
  as: Component = 'h2',
  children,
  className = '',
  localize = true,
  location = 'Paris 12',
  landmark = false
}) => {
  const pathname = usePathname();
  
  // Don't localize if explicitly disabled or if content already contains location
  if (!localize || (typeof children === 'string' && (children.includes('Paris') || children.includes('paris')))) {
    return <Component className={className}>{children}</Component>;
  }
  
  // Add location to heading text
  let localizedContent = children;
  
  if (typeof children === 'string') {
    if (landmark) {
      // Get a random landmark near Paris 12
      const landmarks = getParisLandmarks();
      const randomLandmark = landmarks[Math.floor(Math.random() * landmarks.length)];
      localizedContent = `${children} à ${location} près de ${randomLandmark}`;
    } else {
      localizedContent = `${children} à ${location}`;
    }
  }
  
  return <Component className={className}>{localizedContent}</Component>;
};
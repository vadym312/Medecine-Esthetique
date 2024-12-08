'use client';

import { usePathname } from 'next/navigation';
import { useScroll } from '@/src/hooks/useScroll';

export const useScrollState = () => {
  const pathname = usePathname();
  const isScrolled = useScroll(50);
  
  return pathname?.includes('blog') || isScrolled;
};
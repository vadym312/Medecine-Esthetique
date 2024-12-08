'use client';

import { useMemo } from 'react';
import { MenuItem } from '@/src/types/navigation';
import { navigationItems } from '@/src/lib/mockData/navigationData';

export function useNavigation() {
  const items = useMemo<MenuItem[]>(() => navigationItems, []);
  return { items, isLoading: false, error: null } as const;
}
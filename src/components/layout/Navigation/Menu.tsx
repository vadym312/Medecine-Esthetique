'use client';

import React from 'react';
import { NavigationItem } from './Item';
import { useNavigation } from '@/src/hooks/useNavigation';

interface NavigationMenuProps {
  isScrolled: boolean;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ isScrolled }) => {
  const { items, isLoading, error } = useNavigation();

  if (isLoading) {
    return (
      <nav className="hidden lg:block">
        <div className="animate-pulse">Loading...</div>
      </nav>
    );
  }

  if (error) {
    return <nav className="hidden lg:block text-red-500">{error}</nav>;
  }

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {items.map((item) => (
        <NavigationItem key={item.id} item={item} isScrolled={isScrolled} />
      ))}
    </nav>
  );
};
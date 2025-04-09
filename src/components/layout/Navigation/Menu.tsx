'use client';

import React, { useState, useEffect } from 'react';
import { NavigationItem } from './Item';
import { useNavigation } from '@/src/hooks/useNavigation';

interface NavigationMenuProps {
  isScrolled: boolean;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ isScrolled }) => {
  const { items, isLoading, error } = useNavigation();
  const [mounted, setMounted] = useState(false);

  // Only render menu on client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <nav className="hidden lg:block"></nav>;
  }

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
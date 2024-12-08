'use client';

import { useState, useCallback } from 'react';

export const useNavigationState = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return {
    isMobileMenuOpen,
    handleToggleMobileMenu,
    handleCloseMobileMenu,
  };
};
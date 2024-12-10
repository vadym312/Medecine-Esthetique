'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { NavigationMenu } from './Menu';
import { NavigationMobile } from './Mobile';
import { useNavigationState } from './hooks/useNavigationState';
import { useScrollState } from './hooks/useScrollState';
import Link from 'next/link';

export const Navigation = memo(() => {
  const isScrolled = useScrollState();
  const { isMobileMenuOpen, handleToggleMobileMenu, handleCloseMobileMenu } = useNavigationState();

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="nav-container">
          <Logo isScrolled={isScrolled} />
          <NavigationMenu isScrolled={isScrolled} />
          <div className="hidden lg:block">
            <Link href='https://drelard.booking.nextmotion.net'><button className="booking-button">Prendre RDV</button></Link>
          </div>
          <NavigationMobile
            isOpen={isMobileMenuOpen}
            onToggle={handleToggleMobileMenu}
            onClose={handleCloseMobileMenu}
            isScrolled={isScrolled}
          />
        </div>
      </div>
    </motion.header>
  );
});

Navigation.displayName = 'Navigation';
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/src/hooks/useNavigation';
import { BurgerButton } from './BurgerButton';
import { MobileMenuItem } from './MenuItem';

interface NavigationMobileProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  isScrolled: boolean;
}

export const NavigationMobile: React.FC<NavigationMobileProps> = ({
  isOpen,
  onToggle,
  onClose,
  isScrolled,
}) => {
  const { items } = useNavigation();

  return (
    <>
      <button
        className={`lg:hidden p-2 ${
          isScrolled ? 'text-black' : 'text-white'
        } relative z-[60]`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <BurgerButton isOpen={isOpen} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[51] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-[52] lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 pt-16 overflow-y-auto max-h-screen">
                {items.map((item) => (
                  <MobileMenuItem
                    key={item.id}
                    item={item}
                    onClose={onClose}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
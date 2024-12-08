'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '@/src/types/navigation';
import { useNavigation } from '@/src/hooks/useNavigation';
import Link from 'next/link';

interface NavigationMobileProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  isScrolled: boolean;
}

const MobileMenuItem = memo(
  ({ item, onClose }: { item: MenuItem; onClose: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      if (item.children) {
        setIsOpen(!isOpen);
      } else {
        onClose();
      }
    };

    return (
      <div className="border-b border-gray-100 last:border-0">
        {item.children ? (
          <button
            className="flex items-center justify-between w-full py-3 text-gray-800 hover:text-primary"
            onClick={handleClick}
          >
            <span className="text-sm font-light">{item.label}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              strokeWidth={1.5}
            />
          </button>
        ) : (
          <Link
            href={item.path || '/'}
            className="block w-full py-3 text-sm font-light text-gray-800 hover:text-primary"
            onClick={onClose}
          >
            {item.label}
          </Link>
        )}

        <AnimatePresence>
          {isOpen && item.children && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pl-4 py-2 space-y-2">
                {item.children.map((child) => (
                  <div key={child.id} className="border-l border-gray-200">
                    {child.children ? (
                      <div className="block w-full text-left pl-4 py-2 text-sm text-gray-600">
                        {child.label}
                      </div>
                    ) : (
                      <Link
                        href={child.path || '/'}
                        className="block w-full text-left pl-4 py-2 text-sm text-gray-600 hover:text-primary"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    )}
                    {child.children && (
                      <div className="pl-4 space-y-2">
                        {child.children.map((subChild) => (
                          <Link
                            key={subChild.id}
                            href={subChild.path || '/'}
                            className="block w-full text-left pl-4 py-2 text-sm text-gray-500 hover:text-primary"
                            onClick={onClose}
                          >
                            {subChild.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

MobileMenuItem.displayName = 'MobileMenuItem';

const BurgerButton = memo(({ isOpen }: { isOpen: boolean }) => (
  <div className="w-6 h-6 relative">
    <motion.span
      className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-2"
      animate={{
        rotate: isOpen ? 45 : 0,
        translateY: isOpen ? 0 : -8,
      }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="absolute top-1/2 left-0 w-full h-0.5 bg-current"
      animate={{
        opacity: isOpen ? 0 : 1,
      }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform translate-y-2"
      animate={{
        rotate: isOpen ? -45 : 0,
        translateY: isOpen ? 0 : 8,
      }}
      transition={{ duration: 0.2 }}
    />
  </div>
));

BurgerButton.displayName = 'BurgerButton';

export const NavigationMobile = memo(
  ({ isOpen, onToggle, onClose, isScrolled }: NavigationMobileProps) => {
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
  }
);

NavigationMobile.displayName = 'NavigationMobile';

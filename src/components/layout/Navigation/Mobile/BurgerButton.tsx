'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BurgerButtonProps {
  isOpen: boolean;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen }) => (
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
);
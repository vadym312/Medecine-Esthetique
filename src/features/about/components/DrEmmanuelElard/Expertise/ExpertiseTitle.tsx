'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';
import type { ExpertiseTitleProps } from './types';

export const ExpertiseTitle: React.FC<ExpertiseTitleProps> = ({ title }) => {
  return (
    <motion.div
      className="text-center mb-16"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gold mx-auto"></div>
    </motion.div>
  );
};
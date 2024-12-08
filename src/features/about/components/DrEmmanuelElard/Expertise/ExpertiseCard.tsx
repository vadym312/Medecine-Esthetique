'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';
import type { ExpertiseCardProps } from './types';

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      className="text-center"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="flex justify-center mb-6">
        <Icon className="w-12 h-12 text-gold" />
      </div>
      <h3 className="text-xl font-montserrat font-medium mb-4">{title}</h3>
      <p className="text-gray-600 whitespace-pre-line">{description}</p>
    </motion.div>
  );
};
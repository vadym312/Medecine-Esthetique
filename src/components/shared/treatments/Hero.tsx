'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const TreatmentHero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.h1
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};
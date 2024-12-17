'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, description, imageUrl }) => {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-light mb-4">{title}</h1>
          <h2 className="text-2xl md:text-3xl text-gold mb-6">{subtitle}</h2>
          <p className="text-lg text-white/90">{description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
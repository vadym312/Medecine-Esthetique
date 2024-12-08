'use client';

import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  award: {
    text: string;
  };
}

export const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-light text-white mb-4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          {props.title}
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-montserrat font-light text-gold mb-8"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          {props.subtitle}
        </motion.h2>

        <motion.div
          className="flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full hover:bg-gold-600 transition-colors duration-300"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <Award className="w-5 h-5" />
          <span className="font-montserrat text-sm">{props.award.text}</span>
        </motion.div>
      </div>
    </div>
  );
};
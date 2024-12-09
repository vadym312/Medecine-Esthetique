'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface CTAProps {
  title?: string;
  image?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const TreatmentCTA: React.FC<CTAProps> = ({
  title,
  image,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.a
            href={buttonLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <img src={image} alt="avatar"/>
          </motion.a>
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          <motion.a
            href={buttonLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black font-semibold px-8 py-4 text-lg rounded-full hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

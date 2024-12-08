'use client';

import React from 'react';
import { Award as AwardIcon, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '@/src/utils/animations';

interface AwardProps {
  title: string;
  description: string;
  year: number;
  image: string;
}

export const Award: React.FC<AwardProps> = ({ title, description, year, image }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <AwardIcon className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative group"
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-dark rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <img
              src={image}
              alt="Innovation médicale"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-current" />
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-montserrat font-medium mb-6 text-center text-gray-900">
              Aesthetic Awards {year}
            </h3>

            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              {description}
            </p>

            <div className="text-center">
              <span className="inline-block bg-gold text-white px-8 py-4 rounded-full font-montserrat shadow-lg hover:bg-gold-dark transition-colors duration-300">
                Prix de l'Innovateur de l'Année
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
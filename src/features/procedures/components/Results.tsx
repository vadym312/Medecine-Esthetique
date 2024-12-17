'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface BeforeAfterImage {
  before: string;
  after: string;
}

interface ResultsProps {
  title: string;
  description: string;
  beforeAfterImages: BeforeAfterImage[];
}

export const Results: React.FC<ResultsProps> = ({ title, description, beforeAfterImages }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-light mb-6">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {beforeAfterImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-8"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={image.before}
                  alt="Avant le traitement"
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  Avant
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={image.after}
                  alt="Après le traitement"
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  Après
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
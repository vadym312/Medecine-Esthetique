'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface TypeItem {
  title: string;
  description: string;
  imageUrl: string;
}

interface TypesSectionProps {
  title: string;
  subtitle: string;
  items: TypeItem[];
}

export const TreatmentTypes: React.FC<TypesSectionProps> = ({
  title,
  subtitle,
  items,
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface TrainingProps {
  title: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const Training: React.FC<TrainingProps> = ({ title, items }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Users className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-montserrat font-medium mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
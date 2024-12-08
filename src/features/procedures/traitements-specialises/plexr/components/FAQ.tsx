'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  items: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ title, items }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-light text-center mb-16"
        >
          {title}
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.question}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-medium mb-4">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
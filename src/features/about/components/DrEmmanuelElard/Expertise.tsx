'use client';

import React from 'react';
import { Award, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface ExpertiseItem {
  icon: 'award' | 'graduationCap' | 'users';
  title: string;
  description: string;
}

interface ExpertiseProps {
  title: string;
  items: ExpertiseItem[];
}

const icons = {
  award: Award,
  graduationCap: GraduationCap,
  users: Users,
} as const;

export const Expertise: React.FC<ExpertiseProps> = ({ title, items }) => {
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
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={index}
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
                <h3 className="text-xl font-montserrat font-medium mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
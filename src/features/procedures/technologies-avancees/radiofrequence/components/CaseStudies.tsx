'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface Case {
  title: string;
  description: string;
  imageUrl: string;
}

interface CaseStudiesProps {
  title: string;
  cases: Case[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ title, cases }) => {
  return (
    <section className="py-20 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600">{caseStudy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeIn } from '@/src/utils/animations';

interface Procedure {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface RelatedProceduresProps {
  title: string;
  subtitle?: string;
  procedures: Procedure[];
}

export const RelatedProcedures: React.FC<RelatedProceduresProps> = ({
  title,
  subtitle,
  procedures,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </motion.div>

        <div className={`grid md:grid-cols-${procedures.length} gap-8`}>
          {procedures.map((procedure, index) => (
            <motion.a
              key={index}
              href={procedure.link}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={procedure.image}
                  alt={procedure.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              </div>

              <div className="p-8">
                <div className="text-sm font-medium text-gold mb-2">
                  {procedure.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {procedure.title}
                </h3>
                <p className="text-gray-600 mb-4">{procedure.description}</p>
                <div className="inline-flex items-center text-gold font-medium group-hover:text-gold-dark">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

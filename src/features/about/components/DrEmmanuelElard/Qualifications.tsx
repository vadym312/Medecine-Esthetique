'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface QualificationsProps {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
  videoId: string;
}

export const Qualifications: React.FC<QualificationsProps> = ({ title, items, videoId }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative pb-[100%] h-full rounded-xl flex justify-center overflow-hidden shadow-lg"
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="qualification"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </motion.div>

        <div className='col-span-2'>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <GraduationCap className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </motion.div>

          <div className="grid gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-montserrat font-medium mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
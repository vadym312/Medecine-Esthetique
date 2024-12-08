'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface KeyPoint {
  title: string;
  description: string;
}

interface ExpertiseSectionProps {
  title: string;
  content: string;
  videoUrl: string;
  keyPoints: KeyPoint[];
  className?: string;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  title,
  content,
  videoUrl,
  keyPoints,
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600 leading-relaxed">{content}</p>
            </div>

            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gold">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src={videoUrl}
              title="Expertise Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
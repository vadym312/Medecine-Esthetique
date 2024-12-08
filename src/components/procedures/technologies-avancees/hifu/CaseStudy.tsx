'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface CaseStudyProps {
  title: string;
  content: string;
  videoUrl: string;
  beforeAfterImages: Array<{
    before: string;
    after: string;
  }>;
  className?: string;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({
  title,
  content,
  videoUrl,
  beforeAfterImages,
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{content}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={videoUrl}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="space-y-8">
            {beforeAfterImages.map((images, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <img
                    src={images.before}
                    alt="Avant le traitement"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-center text-gray-600 text-sm">Avant</p>
                </div>
                <div className="space-y-2">
                  <img
                    src={images.after}
                    alt="Après le traitement"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-center text-gray-600 text-sm">Après</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
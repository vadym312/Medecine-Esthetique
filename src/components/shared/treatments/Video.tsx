'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface VideoSectionProps {
  title: string;
  videoId: string;
}

export const TreatmentVideo: React.FC<VideoSectionProps> = ({ title, videoId }) => {
  return (
    <section className="py-16 bg-white">
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
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
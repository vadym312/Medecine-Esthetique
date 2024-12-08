'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface VideoSectionProps {
  title: string;
  content: string;
  videoUrl: string;
  isReversed?: boolean;
  className?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  content,
  videoUrl,
  isReversed = false,
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'direction-rtl' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`space-y-6 ${isReversed ? 'md:order-2' : ''}`}
          >
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative aspect-video rounded-lg overflow-hidden shadow-lg ${
              isReversed ? 'md:order-1' : ''
            }`}
          >
            <iframe
              src={videoUrl}
              title={title}
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
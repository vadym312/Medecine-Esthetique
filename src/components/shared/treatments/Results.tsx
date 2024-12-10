'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface VideoResult {
  id: string;
  title: string;
  url: string;
}

interface ImageData {
  id: string;
  url: string;
}

interface ImageResult {
  title: string;
  data: ImageData[];
}

interface ResultsSectionProps {
  title: string;
  subtitle?: string;
  videos?: VideoResult[];
  images?: ImageResult;
  showPlaceholder?: boolean;
}

export const TreatmentResults: React.FC<ResultsSectionProps> = ({
  title,
  subtitle,
  videos = [],
  images,
  showPlaceholder = true,
}) => {
  return (
    <section className="py-16 bg-gray-50">
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
          <motion.p
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            {subtitle}
          </motion.p>
        </div>
        {videos && videos.length > 0 &&
          <div className={`grid md:grid-cols-${videos.length < 2 ? 2 : videos.length} gap-8 max-w-5xl mx-auto`}>
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative pb-[177.77%] h-0 rounded-xl overflow-hidden shadow-lg"
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </motion.div>
            ))}

            {showPlaceholder && videos.length < 2 && (
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative pb-[177.77%] h-0 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 flex flex-col items-center">
                    <svg
                      className="w-16 h-16 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-lg font-medium">Prochainement</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        }
        <br/>
        { images && images.title && <div className={`grid md:grid-cols-${images?.data.length} gap-8 max-w-5xl mx-auto`}>
            {images?.data.map((image) => (
              <motion.div
                key={image.id}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative pb-[50%] h-0 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image.url}
                  alt='result'
                  className="absolute top-0 left-0"
                />
              </motion.div>
            ))}
            <p className='text-center text-gray-600'>{images?.title}</p>
          </div>
        }

      </div>
    </section>
  );
};
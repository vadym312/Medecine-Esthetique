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
  iframes?: string[];
  showPlaceholder?: boolean;
}

export const TreatmentResults: React.FC<ResultsSectionProps> = ({
  title,
  subtitle,
  videos = [],
  images,
  iframes
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
        {iframes && iframes.length > 0 &&
          <div className={`grid md:grid-cols-${iframes.length} gap-8 max-w-5xl mx-auto`}>
            {iframes.map((iframe, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative pb-[60%] h-0 rounded-xl flex justify-center overflow-hidden shadow-lg"
              >
                <iframe
                  src={iframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        }
        {videos && videos.length > 0 &&
          <div className={`grid md:grid-cols-${videos.length} gap-8 max-w-5xl mx-auto`}>
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative pb-[100%] h-0 rounded-xl flex justify-center overflow-hidden shadow-lg"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.url}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </motion.div>
            ))}
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
                className="relative pb-[45%] h-0 rounded-xl overflow-hidden shadow-lg"
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
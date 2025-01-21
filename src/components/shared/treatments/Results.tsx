'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname()
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
          <div className={`grid md:grid-cols-${iframes.length} gap-8 mx-auto max-w-5xl mb-6`}>
            {iframes.map((iframe, index) => (
              <div className='flex justify-center' key={`iframe-${index}`}>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className={`relative h-[500px] md:h-[550px] w-full ${pathname.includes('augmentation-des-levres') ? 'sm:w-[570px]' : 'sm:w-96'} rounded-xl shadow-lg`}
                >
                  <iframe
                    src={iframe}
                    title={`Result frame ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                    scrolling="no"
                    referrerPolicy="strict-origin"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        }

        {images && images.title &&
          <div className={`grid md:grid-cols-${images.data.length} gap-8 max-w-5xl mx-auto`}>
            {images.data.map((image) => (
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
                  alt="Treatment result"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
            <p className="text-center text-gray-600">{images.title}</p>
          </div>
        }

        {videos && videos.length > 0 &&
          <div className={`grid md:grid-cols-${pathname.includes('sillons') ? videos.length + 1 : videos.length} gap-8 max-w-5xl mx-auto mt-8`}>
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`${pathname.includes('sillons') && index !== 0 ? 'md:col-span-2' : ''} ${pathname.includes('hifu') ? 'flex justify-center' : ''}`}
              >
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className={`relative ${pathname.includes('hifu') ? 'w-80 h-[500px] md:h-[600px]' : ''} pb-[50%] min-h-full rounded-xl overflow-hidden shadow-lg`}
                >
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }}
                    loading="lazy"
                    referrerPolicy="strict-origin"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        }
      </div>
    </section>
  );
};
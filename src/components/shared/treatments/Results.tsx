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
              <div key={index} className='flex justify-center'>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative pb-[60%] h-0 w-[400px] rounded-xl flex justify-center overflow-hidden shadow-lg"
                >
                  <iframe
                    src={iframe}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </motion.div>
              </div>

            ))}
          </div>
        }

        {images && images.title && <div className={`grid md:grid-cols-${images?.data.length} gap-8 max-w-5xl mx-auto`}>
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
        <br />
        {videos && videos.length > 0 &&
          <div className={`grid md:grid-cols-${pathname.includes('sillons') ? videos.length + 1 : videos.length} gap-8 max-w-5xl mx-auto`}>
            {videos.map((video, index) => (
              <div className={`${pathname.includes('sillons') ? index !== 0 ? `md:col-span-2` : "" : ""}`} key={video.id}>
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative pb-[50%] min-h-full h-96 rounded-xl flex justify-center overflow-hidden shadow-lg"
                >
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
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
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { slideUp } from '@/src/utils/animations';

interface SubContent {
  title?: string;
  lists?: string[];
}
interface VideoSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  lists?: string[];
  subcontent?: SubContent[]
  videoId?: string;
  imageUrl?: string;
  iframeUrl?: string;
  isReversed?: boolean;
  className?: string;
}

export const ContentSection: React.FC<VideoSectionProps> = ({
  title,
  subtitle,
  description,
  lists,
  subcontent,
  videoId,
  imageUrl,
  iframeUrl,
  isReversed = false,
  className = '',
}) => {
  const [ref, inView, controls] = useIntersectionAnimation();

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <Container>
        <motion.div
          variants={slideUp}
          initial="initial"
          animate={controls}
          className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'direction-rtl' : ''
            }`}
        >
          <div className={`space-y-3 ${isReversed ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
            {subtitle && <p className="text-text-secondary leading-relaxed">{subtitle}</p>}
            {description && <p className="text-text-secondary leading-relaxed">{description}</p>}
            <ul className='list-inside'>
              {lists && lists.map((list, index) =>
                <li className="text-text-secondary leading-relaxed list-disc" key={index}>{list}</li>
              )}
            </ul>
            {subcontent && subcontent.map((sub: SubContent, index: number) =>
              <>
                <p className="text-text-primary text-xl font-medium leading-relaxed" key={index}>{sub.title}</p>
                <ul className='list-inside'>
                  {sub && sub.lists?.map((sublist: string, idx: number) =>
                    <li className="text-text-secondary leading-relaxed list-disc" key={idx}>{sublist}</li>
                  )}
                </ul>
              </>
            )}
          </div>
          <div
            className={`relative aspect-video rounded-lg overflow-hidden shadow-lg ${isReversed ? 'md:order-1' : ''
              }`}
          >
            {videoId && <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            }
            {imageUrl && <img src={imageUrl} alt="emotion" />}
            {iframeUrl && <iframe
              src={iframeUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
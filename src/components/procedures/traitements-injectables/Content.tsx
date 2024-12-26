'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { slideUp } from '@/src/utils/animations';

interface SubContent {
  title?: string;
  subtitle?: string;
  lists?: string[];
}
interface VideoSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  lists?: string[];
  subcontent?: SubContent[]
  question?: string;
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
  question,
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
          <div className={`space-y-3 ${isReversed && 'md:order-2'}`}>
            <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
            {subtitle && <p className="text-text-secondary leading-relaxed">{subtitle}</p>}
            {description && <p className="text-text-secondary leading-relaxed">{description}</p>}
            <ul className='list-inside'>
              {lists && lists.map((list) =>
                <li className="text-text-secondary leading-relaxed list-disc" key={list}>{list}</li>
              )}
            </ul>
            {subcontent && subcontent.map((sub: SubContent, index: number) =>
              <div key={index}>
                <p className="text-text-primary text-xl font-semibold leading-relaxed mb-3">{sub.title}</p>
                <p className="text-text-primary leading-relaxed">{sub.subtitle}</p>
                <ul className='list-inside'>
                  {sub && sub.lists?.map((sublist: string) =>
                    <li className="text-text-secondary leading-relaxed list-disc" key={sublist}>{sublist}</li>
                  )}
                </ul>
              </div>
            )}
            {question && <p className="text-text-secondary leading-relaxed">{question}</p>}
          </div>
          {!imageUrl && <div className={`flex justify-center ${isReversed ? 'md:order-1' : ''}`}>
            {(videoId || iframeUrl) && <div
              className={`relative aspect-auto w-3/5 h-[480px] rounded-lg overflow-hidden shadow-lg`}
            >
              {videoId && <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              }
              {iframeUrl && <iframe
                src={iframeUrl}
                title='iframe'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />}
            </div>}
          </div>}
          {imageUrl && <div className={`${isReversed ? 'md:order-1' : ''}`}>
            <div
              className="relative pb-[60%] h-0 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={imageUrl}
                alt='result'
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>}
        </motion.div>
      </Container>
    </section>
  );
};
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { slideUp } from '@/src/utils/animations';

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
  const [ref, inView, controls] = useIntersectionAnimation();

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <Container>
        <motion.div
          variants={slideUp}
          initial="initial"
          animate={controls}
          className={`grid md:grid-cols-2 gap-12 items-center ${
            isReversed ? 'direction-rtl' : ''
          }`}
        >
          <div className={`space-y-6 ${isReversed ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
            <p className="text-text-secondary leading-relaxed">{content}</p>
          </div>
          <div
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
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
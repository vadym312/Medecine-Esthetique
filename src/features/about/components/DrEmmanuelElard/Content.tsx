'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { fadeIn, slideUp } from '@/src/utils/animations';

interface ResultsSectionProps {
  title: string;
  subtitle?: string;
  description?: string[];
  lists?: string[];
  imageUrl?: string;
  isReversed?: boolean;
  className?: string;
}

export const Results: React.FC<ResultsSectionProps> = ({
  title,
  subtitle,
  description,
  lists,
  imageUrl,
  isReversed = true,
  className = '',
}) => {
  const [ref, inView, controls] = useIntersectionAnimation();

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <Container>
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>
        <motion.div
          variants={slideUp}
          initial="initial"
          animate={controls}
          className={`grid md:grid-cols-2 items-center`}
        >
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <img
              src={imageUrl}
              alt='result'
              className='w-3/5'
            />
          </motion.div>
          <div className="space-y-3">
            {description && description.map((text, index) =>
              <p className="text-text-secondary leading-relaxed mb-4" key={index}>{text}</p>
            )}
            {subtitle && <p className="text-text-secondary leading-relaxed mb-4">{subtitle}</p>}
            <ul className='list-inside'>
              {lists && lists.map((list) =>
                <li className="text-text-secondary leading-relaxed list-disc" key={list}>{list}</li>
              )}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
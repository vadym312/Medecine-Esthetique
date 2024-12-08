'use client';

import { motion } from 'framer-motion';
import { KeyPoint } from './index';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { staggerChildren } from '@/src/utils/animations';

export interface KeyPointType {
  title: string;
  description: string;
  icon: string;
}

interface KeyPointsGridProps {
  title: string;
  points: KeyPointType[];
}

export const KeyPointsGrid = ({ title, points }: KeyPointsGridProps) => {
  const [ref, inView, controls] = useIntersectionAnimation();

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={controls}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold text-center">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {points.map((point, index) => (
              <KeyPoint key={point.title} {...point} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
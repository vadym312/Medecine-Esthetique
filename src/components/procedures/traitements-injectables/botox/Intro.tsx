import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IntroProps {
  title: string;
  description: string[];
}

export const IntroSection: React.FC<IntroProps> = ({ title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            {title}
          </h2>
          {description.map((text, index) =>
            <p className="text-gray-600 leading-relaxed" key={index}>{text}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

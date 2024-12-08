'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface Step {
  title: string;
  description: string;
}

interface TreatmentProcessProps {
  title: string;
  steps: Step[];
}

export const TreatmentProcess: React.FC<TreatmentProcessProps> = ({ title, steps }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-light text-center mb-16"
        >
          {title}
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-8 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center text-xl font-light">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;
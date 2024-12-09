'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Shield, Clock, CheckCircle } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface ProcedureSectionProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

const icons = [Calendar, Shield, Clock, CheckCircle];

export const TreatmentProcedure: React.FC<ProcedureSectionProps> = ({
  title,
  subtitle,
  steps,
}) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gold-light rounded-full">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

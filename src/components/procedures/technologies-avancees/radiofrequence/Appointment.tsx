'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { fadeIn } from '@/src/utils/animations';

interface AppointmentSectionProps {
  className?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Prenez Rendez-vous
          </h2>
          <p className="text-gray-600 mb-8">
            Consultez nos experts pour une évaluation personnalisée de vos besoins
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gold text-white rounded-lg shadow-lg hover:bg-gold/90 transition-colors"
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>Réserver une consultation</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
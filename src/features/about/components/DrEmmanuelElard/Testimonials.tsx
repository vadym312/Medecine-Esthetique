'use client';

import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface TestimonialsProps {
  items: {
    name: string;
    text: string;
    rating: number;
    treatment: string;
  }[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ items }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            AVIS DE NOS PATIENTS
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-600 text-center mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              <div className="text-center">
                <p className="font-montserrat font-medium text-gray-900 mb-2">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gold">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
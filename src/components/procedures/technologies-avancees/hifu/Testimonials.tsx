'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeIn } from '@/src/utils/animations';

interface Testimonial {
  name: string;
  age: number;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
          <p className="text-gray-600">
            Découvrez les expériences de nos patients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.content}"
              </blockquote>
              <div className="text-sm">
                <span className="font-medium">{testimonial.name}</span>
                <span className="text-gray-500">, {testimonial.age} ans</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
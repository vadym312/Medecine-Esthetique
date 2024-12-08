'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  age: number;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  title: string;
  items: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ title, items }) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
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
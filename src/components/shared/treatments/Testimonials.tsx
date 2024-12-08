'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface Testimonial {
  id: string | number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  treatment: string;
  verified?: boolean;
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export const TreatmentTestimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  items,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    {testimonial.verified && (
                      <span className="text-green-600 flex items-center text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Avis vérifié
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
                <div className="bg-black text-white text-sm font-medium px-3 py-1 rounded-full">
                  {testimonial.rating}/5
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">
                "{testimonial.comment}"
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Publié le {testimonial.date}</span>
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                  {testimonial.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
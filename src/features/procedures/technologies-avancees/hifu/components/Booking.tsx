'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';
import Link from 'next/link';

interface BookingProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const Booking: React.FC<BookingProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-light mb-6">{title}</h2>
          <p className="text-gray-600 mb-8">{description}</p>
          <Link
            href={buttonLink}
            className="inline-block bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
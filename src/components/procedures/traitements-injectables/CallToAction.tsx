import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  buttonText: string;
  buttonLink: string;
  tip?: string;
}

export const CallToAction: React.FC<CTAProps> = ({ title, description, imageUrl, buttonText, buttonLink, tip }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <img src={imageUrl} alt="avatar" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href={buttonLink}
            className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold/90 text-white rounded-lg shadow-lg transition-colors duration-300"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {buttonText}
          </Link>
        </motion.div>
        <p className="mt-6 text-sm text-gray-500">
          {tip}
        </p>
      </motion.div>
    </section>
  );
};

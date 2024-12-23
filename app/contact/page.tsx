'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/src/components/contact/Form';
import { ContactInfo } from '@/src/components/contact/Info';

const Contact: React.FC = () => {
  return (
    <div>
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
              et vous accompagner dans votre parcours de médecine esthétique.
            </p>
          </motion.div>
        </div>

      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <ContactInfo />
      </section>
    </div>

  );
};

export default Contact;

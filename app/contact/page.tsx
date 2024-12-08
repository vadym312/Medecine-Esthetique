'use client';

import React from 'react';
import { ContactForm } from '@/src/components/contact/Form';
import { ContactInfo } from '@/src/components/contact/Info';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
            et vous accompagner dans votre parcours de médecine esthétique.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
      </section>

      {/* Contact Sections */}
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

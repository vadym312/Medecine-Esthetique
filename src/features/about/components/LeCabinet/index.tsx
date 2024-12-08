'use client';

import React from 'react';
import { getMockPage } from '@/src/lib/mockData/about/le-cabinet';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';
import { HeroSection } from './Hero';
import { TechnologySection } from './Technology';
import { EnvironmentSection } from './Environment';
import { BookingSection } from './Booking';
import { ContactSection } from './Contact';

export const LeCabinet: React.FC = () => {
  const page = getMockPage('accueil');

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Nous rencontrons des difficultés techniques
          </h2>
          <p className="text-gray-600">
            Veuillez nous excuser pour la gêne occasionnée. Notre équipe
            travaille à résoudre le problème.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <TechnologySection />
      <EnvironmentSection />
      <BookingSection />
      <ContactSection />
    </>
  );
};
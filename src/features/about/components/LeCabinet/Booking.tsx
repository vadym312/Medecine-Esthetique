'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

export const BookingSection = () => {
  return (
    <section className="py-20 bg-gold/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat mb-6">
          Prenez Rendez-vous en Ligne
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Réservez votre consultation en médecine esthétique avec le Dr Emmanuel
          ELARD directement depuis notre agenda en ligne.
        </p>
        <a
          href="https://www.doctolib.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gold text-white rounded-lg 
                   hover:bg-gold/90 transition-all duration-300 font-semibold
                   transform hover:scale-105"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
};
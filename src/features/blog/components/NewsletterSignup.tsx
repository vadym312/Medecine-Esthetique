'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Restez informé(e) de nos dernières actualités
          </h2>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers
            articles et conseils en médecine esthétique.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <span>S'inscrire</span>
              <Send size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
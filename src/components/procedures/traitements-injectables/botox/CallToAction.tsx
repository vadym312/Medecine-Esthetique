import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

export const CallToAction = () => {
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
        <h2 className="text-3xl font-bold mb-6">
          Prenez Rendez-vous pour une Consultation Personnalisée
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Découvrez comment l'acide hyaluronique peut sublimer naturellement
          votre beauté. Notre expertise est à votre service pour un résultat sur
          mesure.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold/90 text-white rounded-lg shadow-lg transition-colors duration-300"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Prendre Rendez-vous
          </a>
        </motion.div>
        <p className="mt-6 text-sm text-gray-500">
          Consultation initiale sans engagement • Réponse sous 24h
        </p>
      </motion.div>
    </section>
  );
};

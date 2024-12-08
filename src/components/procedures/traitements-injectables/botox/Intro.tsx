import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const IntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            L'Excellence en Médecine Esthétique
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            L'acide hyaluronique représente aujourd'hui le gold standard en
            médecine esthétique pour le rajeunissement du visage. Cette
            substance naturellement présente dans notre peau permet d'obtenir
            des résultats remarquables tout en préservant votre naturel.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

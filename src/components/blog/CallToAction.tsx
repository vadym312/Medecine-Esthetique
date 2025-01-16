import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="bg-[#D4AF37] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Prêt(e) à commencer votre transformation ?
          </h2>
          <p className="mb-8 text-white/90">
            Prenez rendez-vous dès maintenant pour une consultation
            personnalisée avec nos experts.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#D4AF37] px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Prendre rendez-vous</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

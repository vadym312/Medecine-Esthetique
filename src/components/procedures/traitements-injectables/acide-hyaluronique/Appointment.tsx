import { motion } from 'framer-motion';
import { slideUp } from '@/src/utils/animations';

interface AppointmentSectionProps {
  className?: string;
}

export const AppointmentSection = ({
  className = '',
}: AppointmentSectionProps) => {
  return (
    <section className={`py-32 relative ${className}`}>
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto text-center space-y-8 px-4"
      >
        <h2 className="text-6xl font-bold tracking-tight">
          Prenez Rendez-vous
        </h2>
        <p className="text-2xl font-light opacity-90">
          Consultez nos experts pour une évaluation personnalisée de vos besoins
        </p>
        <div className="mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-white text-black hover:bg-white/90 rounded-full text-lg font-semibold transition-colors"
          >
            Réserver une Consultation
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

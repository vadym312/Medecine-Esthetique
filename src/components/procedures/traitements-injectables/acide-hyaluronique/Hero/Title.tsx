import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface HeroTitleProps {
  title: string;
  subtitle?: string;
}

export const HeroTitle = ({ title, subtitle }: HeroTitleProps) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="text-center text-white z-10"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import { slideUp } from '@/src/utils/animations';

export interface KeyPoint {
  title: string;
  description: string;
  icon: string;
}

interface KeyPointProps extends KeyPoint {
  delay: number;
}

export const KeyPoint = ({
  title,
  description,
  icon,
  delay,
}: KeyPointProps) => {
  return (
    <motion.div
      variants={slideUp}
      custom={delay}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <span className="text-4xl mb-2" role="img" aria-label={title}>
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </motion.div>
  );
};

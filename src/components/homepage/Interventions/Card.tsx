import { motion } from 'framer-motion';
import { Syringe, Zap, Sparkles } from 'lucide-react';

interface InterventionCardProps {
  title: string;
  type: 'injections' | 'technologies' | 'soins';
  imageUrl: string;
  index: number;
}

const icons = {
  injections: Syringe,
  technologies: Zap,
  soins: Sparkles,
};

export const InterventionCard: React.FC<InterventionCardProps> = ({
  title,
  type,
  imageUrl,
  index,
}) => {
  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative group overflow-hidden rounded-lg"
    >
      <div className="aspect-square">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-70" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
        <Icon className="w-8 h-8 mb-3" />
        <h3 className="text-xl font-semibold text-center uppercase tracking-wider">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

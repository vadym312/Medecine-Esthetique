import { motion } from 'framer-motion';
import { slideUp } from '../../utils/animations';

export interface RelatedProcedure {
  title: string;
  path: string;
  description: string;
  imageUrl: string;
}

interface ProcedureCardProps extends RelatedProcedure {
  delay: number;
}

export const ProcedureCard = ({
  title,
  description,
  imageUrl,
  path,
  delay,
}: ProcedureCardProps) => {
  return (
    <motion.article
      variants={slideUp}
      custom={delay}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <a
          href={path}
          className="inline-flex items-center text-gold hover:text-gold/80 font-semibold transition-colors"
        >
          En savoir plus
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

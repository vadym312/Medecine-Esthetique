import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '@/src/types';
import { ImageOptimizer } from '../../shared/ImageOptimizer';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <ImageOptimizer
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-primary-light">{testimonial.treatment}</p>
        </div>
      </div>

      <p className="text-primary-dark mb-4">{testimonial.content}</p>

      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gold fill-current" />
        ))}
      </div>
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { slideUp, staggerChildren } from '@/src/utils/animations';
import { Star } from 'lucide-react';

export interface Testimonial {
  name: string;
  age: number;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export const TestimonialsSection = ({
  testimonials,
  className = '',
}: TestimonialsSectionProps) => {
  const [ref, inView, controls] = useIntersectionAnimation();

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <Container>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={controls}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold text-center">Avis patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white rounded-lg shadow-lg p-6 space-y-4"
              >
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {testimonial.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {testimonial.age} ans
                  </p>
                </div>
                <div className="flex text-gold">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

import { useState } from 'react';
import { Container } from '../../ui/Container';
import { TestimonialCard } from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/src/lib/mockData/homepage/testimonials';

export const Testimonials: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 3) % testimonials.data.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 3 + testimonials.data.length) % testimonials.data.length);

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">{testimonials.title}</h2>
          <p className="text-primary-dark max-w-2xl mx-auto">
            {testimonials.description}
          </p>
        </div>
        <div className="relative h-96 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
            >
              <TestimonialCard
                testimonial={testimonials.data[currentIndex]}
                index={1}
              />
              <TestimonialCard
                testimonial={testimonials.data[currentIndex + 1]}
                index={2}
              />
              <TestimonialCard
                testimonial={testimonials.data[currentIndex + 2]}
                index={3}
              />
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prev}
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.data.slice(0, Number(testimonials.data.length / 3)).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index + 3)}
                className={`w-2 h-2 rounded-full transition-colors ${index + 3 === currentIndex ? 'bg-black' : 'bg-black/50'
                  }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </Container>
    </section>
  );
};

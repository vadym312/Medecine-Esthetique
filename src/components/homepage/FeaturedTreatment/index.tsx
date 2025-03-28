import { buttons } from '@/src/lib/mockData/common';
import { Container } from '../../ui/Container';
import { ImageSlider } from './ImageSlider';
import { featuredTreatment } from '@/src/lib/mockData/homepage/featuredTreatment';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FeaturedTreatmentData {
  testimonials: {
    id: number;
    image: string;
    content: string;
    author: string;
  }[];
  title: string;
  description: string;
  advantages: {
    title: string;
    data: string[];
  };
  process: {
    title: string;
    data: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
}

export const FeaturedTreatment: React.FC = () => {
  const [currentTreatmentIndex, setCurrentTreatmentIndex] = useState(0);
  const treatments: FeaturedTreatmentData[] = [
    featuredTreatment,
  ];

  const currentTreatment = treatments[currentTreatmentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTreatmentIndex((i) => (i + 1) % treatments.length);
    }, 3000); // Change treatment every 3 seconds

    return () => clearInterval(timer);
  }, [treatments.length]);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTreatmentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <ImageSlider
                testimonials={currentTreatment.testimonials}
                autoScrollInterval={4000}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTreatmentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  {currentTreatment.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {currentTreatment.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  {currentTreatment.advantages.title}
                </h3>
                <ul className="space-y-4">
                  {currentTreatment.advantages.data.map((advantage, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex-shrink-0 text-gold">
                        <Check className="w-full h-full" />
                      </div>
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  {currentTreatment.process.title}
                </h3>
                <div className="space-y-8">
                  {currentTreatment.process.data.map((step) => (
                    <div key={step.step} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-4xl font-light text-gold">
                          {String(step.step).padStart(2, '0')}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link href={buttons.booking.url} target="_blank" rel="noopener noreferrer">
                <button className="w-full md:w-auto mt-10 bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-full transition-colors">
                  Prendre rendez-vous
                </button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

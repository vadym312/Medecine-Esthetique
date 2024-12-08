import { Container } from '../../ui/Container';
import { ImageSlider } from './ImageSlider';
import { featuredTreatment } from '@/src/lib/mockData/homepage/featuredTreatment';
import { Check } from 'lucide-react';

export const FeaturedTreatment: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            <ImageSlider
              images={featuredTreatment.images}
              testimonial={featuredTreatment.testimonial}
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                {featuredTreatment.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {featuredTreatment.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {featuredTreatment.advantages.title}
              </h3>
              <ul className="space-y-4">
                {featuredTreatment.advantages.data.map((advantage, index) => (
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
                {featuredTreatment.process.title}
              </h3>
              <div className="space-y-8">
                {featuredTreatment.process.data.map((step) => (
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

            <button className="w-full md:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-full transition-colors">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

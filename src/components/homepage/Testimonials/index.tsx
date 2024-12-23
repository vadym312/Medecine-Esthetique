import { Container } from '../../ui/Container';
import { TestimonialCard } from './Card';
import { testimonials } from '@/src/lib/mockData/homepage/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{testimonials.title}</h2>
          <p className="text-primary-dark max-w-2xl mx-auto">
            {testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.data.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

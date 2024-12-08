import { Container } from '../../ui/Container';
import { ServiceCard } from './Card';
import { Service } from '@/src/types';
import { services } from '@/src/lib/mockData/homepage/services';

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{services.title}</h2>
          <p className="text-primary-dark max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.data.map((service: Service, index: number) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

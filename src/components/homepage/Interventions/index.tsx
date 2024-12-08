import { Container } from '../../ui/Container';
import { InterventionCard } from './Card';
import { interventions } from '@/src/lib/mockData/homepage/interventions';

export const Interventions: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          {interventions.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interventions.data.map((intervention, index) => (
            <InterventionCard
              key={intervention.type}
              {...intervention}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
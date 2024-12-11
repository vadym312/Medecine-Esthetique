import { motion } from 'framer-motion';
import { ProcedureCard } from './Card';
import { staggerChildren } from '../../utils/animations';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';

export interface RelatedProcedure {
  title: string;
  path: string;
  description: string;
  imageUrl: string;
}

interface ProceduresGridProps {
  title?: string;
  subtitle?: string;
  procedures: RelatedProcedure[];
  className?: string; 
}

export const ProceduresGrid = ({ title, subtitle, procedures, className }: ProceduresGridProps) => {
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
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
          <p className='text-lg text-text-primary'>{subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <ProcedureCard
                key={procedure.path}
                {...procedure}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

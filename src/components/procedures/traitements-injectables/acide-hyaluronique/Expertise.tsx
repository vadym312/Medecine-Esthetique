import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { slideUp, staggerChildren } from '@/src/utils/animations';

interface KeyPoint {
  title: string;
  description: string;
}

interface ExpertiseSectionProps {
  title: string;
  content: string;
  videoUrl: string;
  keyPoints?: KeyPoint[];
  className?: string;
}

export const ExpertiseSection = ({
  title,
  content,
  videoUrl,
  keyPoints = [],
  className = '',
}: ExpertiseSectionProps) => {
  const [ref, inView, controls] = useIntersectionAnimation();

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <Container>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={controls}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <motion.div variants={slideUp}>
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-text-secondary leading-relaxed">{content}</p>
            </motion.div>

            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  variants={slideUp}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gold">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={videoUrl}
                title="Expertise Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

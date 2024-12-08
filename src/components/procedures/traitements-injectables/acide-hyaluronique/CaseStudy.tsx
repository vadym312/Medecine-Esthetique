import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { useIntersectionAnimation } from '@/src/shared/hooks/useIntersectionAnimation';
import { slideUp } from '@/src/utils/animations';

interface BeforeAfterImage {
  before: string;
  after: string;
}

interface CaseStudySectionProps {
  title: string;
  content: string;
  videoUrl: string;
  beforeAfterImages?: BeforeAfterImage[];
  className?: string;
}

export const CaseStudySection = ({
  title,
  content,
  videoUrl,
  beforeAfterImages,
  className = '',
}: CaseStudySectionProps) => {
  const [ref, inView, controls] = useIntersectionAnimation();

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <Container>
        <motion.div
          variants={slideUp}
          initial="initial"
          animate={controls}
          className="space-y-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {title}
            </h2>
            <p className="text-text-secondary leading-relaxed">{content}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={videoUrl}
                title={title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {beforeAfterImages && beforeAfterImages.length > 0 && (
              <div className="space-y-8">
                {beforeAfterImages.map((images, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img
                        src={images.before}
                        alt="Avant le traitement"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-center text-text-secondary text-sm">
                        Avant
                      </p>
                    </div>
                    <div className="space-y-2">
                      <img
                        src={images.after}
                        alt="Après le traitement"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-center text-text-secondary text-sm">
                        Après
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

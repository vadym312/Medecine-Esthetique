import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExpertiseSectionProps {
  title: string;
  introduction: string;
  principles: {
    title: string;
    description: string;
  }[];
  videoUrl: string;
}

export const ExpertiseSection = ({
  title,
  introduction,
  principles,
  videoUrl,
}: ExpertiseSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{introduction}</p>

            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-gold">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="aspect-[9/16] w-full">
              <iframe
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircleDot } from 'lucide-react';

interface KeyPoint {
  title: string;
  description: string;
  icon: string;
}

const keyPoints: KeyPoint[] = [
  {
    title: 'Sécurité',
    description: 'Produit biocompatible naturellement présent dans la peau',
    icon: '🛡️',
  },
  {
    title: 'Résultats',
    description: "Effet immédiat et durable jusqu'à 18 mois",
    icon: '✨',
  },
  {
    title: 'Polyvalence',
    description: 'Traitement de multiples zones du visage',
    icon: '🎯',
  },
  {
    title: 'Réversibilité',
    description: 'Possibilité de dissoudre le produit si nécessaire',
    icon: '↩️',
  },
];

export const KeyPointsInfographic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Points Clés de l'Acide Hyaluronique
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-4xl mb-2">{point.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
                <CircleDot className="text-gold h-6 w-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CaseStudyProps {
  title: string;
  patientHistory: string[];
  treatment: string[];
  results: string[];
  imageUrl: string;
}

export const CaseStudy = ({
  title,
  patientHistory,
  treatment,
  results,
  imageUrl,
}: CaseStudyProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">{title}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 mb-4">
                Il y a deux ans, j'ai traité une patiente qui souhaitait
                retrouver un visage plus harmonieux sans chirurgie. Ses demandes
                portaient sur :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {patientHistory.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Le traitement :</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                {treatment.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Résultats :</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <img
              src={imageUrl}
              alt="Avant/Après traitement"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import React from 'react';
import { Award as AwardIcon, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from './shared/SectionTitle';
import { fadeIn, scaleIn } from '@/src/utils/animations';
import { mockdrData } from '@/src/lib/mockData/about/dr-emmanuel-elard';

export const Award: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={AwardIcon} title={mockdrData.home.award.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative group"
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <img
              src={mockdrData.home.award.image}
              alt="Innovation médicale"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-montserrat font-medium mb-6 text-center text-gray-900">
              Aesthetic Awards {mockdrData.home.award.year}
            </h3>

            <p className="text-text-secondary text-center mb-8 leading-relaxed">
              {mockdrData.home.award.description}
            </p>

            <div className="text-center space-y-4">
              <span className="inline-block bg-primary text-white px-8 py-4 rounded-full font-montserrat shadow-lg hover:bg-primary-dark transition-colors duration-300">
                Prix de l'Innovateur de l'Année
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

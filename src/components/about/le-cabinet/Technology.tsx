import React from 'react';
import { Zap, Snowflake, Radio, Lightbulb } from 'lucide-react';

const technologies = [
  {
    icon: <Zap className="w-8 h-8" />,
    name: 'HIFU',
    description:
      'Ultrasons focalisés de haute intensité pour un lifting sans chirurgie',
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    name: 'Cryolipolyse',
    description:
      'Traitement par le froid pour éliminer les cellules graisseuses',
  },
  {
    icon: <Radio className="w-8 h-8" />,
    name: 'Radiofréquence',
    description: 'Raffermissement cutané et remodelage du collagène',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    name: 'LED',
    description: 'Photobiomodulation pour la régénération cellulaire',
  },
];

export const TechnologySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-16">
          Technologies de Pointe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#D4AF37] mb-4">{tech.icon}</div>
              <h3 className="text-xl font-montserrat mb-3">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

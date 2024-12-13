'use client';

import React from 'react';
import { Zap, Snowflake, Radio, Lightbulb } from 'lucide-react';

const technologies = [
  {
    icon: <Zap className="w-8 h-8" />,
    name: 'Injections d’Acide Hyaluronique et Botox',
    description:
      'Au cabinet, le Dr Elard propose des injections d’acide hyaluronique pour restaurer les volumes, combler les rides, et sculpter les contours du visage. Les traitements au botox (toxine botulique) permettent de lisser les rides du front, de la glabelle et des pattes d’oie pour un visage reposé et rajeuni.',
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    name: 'Soins de Rajeunissement pour le Visage et le Corps',
    description:
      'Outre les injections, le Dr Elard propose des soins innovants tels que la mésothérapie à l’acide hyaluronique, le skinbooster pour améliorer la qualité de la peau, et la radiofréquence fractionnée avec micro-aiguilles pour traiter le relâchement cutané. Ces soins permettent de retendre la peau de façon naturelle sans passer par la chirurgie.',
  },
  {
    icon: <Radio className="w-8 h-8" />,
    name: 'Technologies Avancées et Sécurité des Patients',
    description: 'Le cabinet est équipé de technologies de pointe, dont les ultrasons focalisés de haute intensité (HIFU) pour raffermir l’ovale du visage, le cou et le décolleté. Chaque traitement est réalisé dans un environnement sécurisé, avec une attention particulière à l’hygiène et au bien-être du patient.',
  }
];

export const TechnologySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-center mb-16">
        Des Traitements Esthétiques Personnalisés et Évolutifs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-gold mb-4">{tech.icon}</div>
              <h3 className="text-xl font-montserrat mb-3">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
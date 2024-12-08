import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Qualifications = () => {
  const diplomas = [
    {
      title: "Diplôme Inter-Universitaire en Techniques d'Injection",
      description:
        "Formation approfondie en techniques d'injection et comblement facial",
    },
    {
      title:
        'Diplôme Inter-Universitaire de Médecine Morphologique et Anti-Âge',
      description:
        'Spécialisation en médecine anti-âge et techniques avancées de rajeunissement',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GraduationCap className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            FORMATION ET DIPLÔMES
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>

        <div className="grid gap-8">
          {diplomas.map((diploma, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-montserrat font-medium mb-4 text-gray-900">
                {diploma.title}
              </h3>
              <p className="text-gray-600">{diploma.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Award, GraduationCap, Users } from 'lucide-react';

export const Expertise: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            EXPERTISE ET RECONNAISSANCE
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-montserrat font-medium mb-4">
              Formation
            </h3>
            <p className="text-gray-600">
              Diplôme Inter-Universitaire en Techniques d'Injection Master en
              Médecine Anti-Âge
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-montserrat font-medium mb-4">
              Formateur
            </h3>
            <p className="text-gray-600">
              Enseignant au DU/DIU à l'Université Paris XII Formateur auprès des
              professionnels en techniques d'injection
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Award className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-montserrat font-medium mb-4">
              Reconnaissance
            </h3>
            <p className="text-gray-600">
              Prix de l'Innovateur de l'Année 2023 Aesthetic Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Users } from 'lucide-react';

export const Training: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            ENSEIGNANT ET FORMATEUR
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Formation médicale"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-montserrat font-medium mb-4 text-white">
                Enseignant au DU/DIU à l'Université Paris XII
              </h3>
              <p className="text-gray-200">
                Transmission de mon expertise aux futurs praticiens, partage des
                techniques avancées d'injection et des dernières innovations
                dans le domaine de la médecine esthétique.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
              alt="Formation professionnelle"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-montserrat font-medium mb-4 text-white">
                Formateur en Techniques d'Injection
              </h3>
              <p className="text-gray-200">
                Animation de formations privées pour les professionnels de
                santé, perfectionnement des techniques d'injection et
                accompagnement personnalisé dans le développement des
                compétences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

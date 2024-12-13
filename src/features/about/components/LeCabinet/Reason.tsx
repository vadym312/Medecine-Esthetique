"use client";

import React from "react";

export const ReasonSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat mb-10 text-center">
          Pourquoi Choisir le Cabinet du Dr Emmanuel Elard ?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-5">
                Choisir le cabinet du Dr Elard pour vos traitements esthétiques, c’est opter pour :
            </p>
            <ul className='list-inside'>
                <li className="text-text-secondary leading-relaxed list-disc">Une expertise de plus de 10 ans en médecine esthétique.</li>
                <li className="text-text-secondary leading-relaxed list-disc">Des traitements innovants et adaptés aux dernières avancées.</li>
                <li className="text-text-secondary leading-relaxed list-disc">Un accompagnement personnalisé pour des résultats harmonieux et naturels.</li>
                <li className="text-text-secondary leading-relaxed list-disc">La sécurité d’un médecin reconnu et formateur en esthétique.</li>
            </ul>
          </div>
          <div className="relative h-80">
            <img
              src="https://medecine-esthetique.net/wp-content/uploads/2024/11/salle-attente2.jpg"
              alt="Intérieur du reason"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

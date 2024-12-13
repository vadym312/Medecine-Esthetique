"use client";

import React from "react";

export const EnvironmentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat mb-10 text-center">
          Une Expérience Confortable et Personnalisée au Cabinet
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <img
              src="https://medecine-esthetique.net/wp-content/uploads/2024/11/bureau2.jpg"
              alt="Intérieur du cabinet"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              Situé dans un cadre calme et accueillant, le cabinet de médecine
              esthétique du Dr Elard offre une expérience de soin personnalisée
              dès la première consultation. Chaque patient bénéficie d’une
              écoute attentive, permettant de déterminer un plan de traitement
              adapté à ses besoins spécifiques. Le Dr Elard privilégie une
              approche sans douleur et des techniques permettant une reprise
              immédiate des activités.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

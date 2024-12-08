'use client';

import React from 'react';

export const EnvironmentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-montserrat mb-6">
              Un Cadre d'Exception
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Notre cabinet allie élégance et modernité pour vous offrir un
              environnement paisible et raffiné. Chaque espace a été pensé pour
              votre confort et votre bien-être.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dans une atmosphère apaisante, nous vous accueillons dans nos
              locaux spacieux et lumineux, équipés des dernières technologies en
              matière de médecine esthétique.
            </p>
          </div>

          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070"
              alt="Intérieur du cabinet"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
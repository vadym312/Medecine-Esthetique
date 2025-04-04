"use client";

import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/images/about/dr-elard-specialiste-anti-age-paris.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat text-white mb-6 text-center">
          Cabinet de Médecine Esthétique du Dr Emmanuel ELARD
        </h1>
        <p className="text-xl text-white/90 mb-8 text-center">
          Un espace dédié à votre bien-être, équipé des dernières technologies
          en médecine esthétique
        </p>
      </div>
    </section>
  );
};

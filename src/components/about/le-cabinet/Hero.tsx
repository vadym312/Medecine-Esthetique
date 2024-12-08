import React from 'react';
import { Building2 } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat text-white mb-6">
            Un Cabinet Moderne au Service de Votre Beauté
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Un espace dédié à votre bien-être, équipé des dernières technologies
            en médecine esthétique
          </p>
          <Building2 className="text-[#D4AF37] w-12 h-12" />
        </div>
      </div>
    </section>
  );
};

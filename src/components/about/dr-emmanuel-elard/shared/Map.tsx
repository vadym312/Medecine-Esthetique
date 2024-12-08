import React from 'react';
import { MapPin } from 'lucide-react';

export const Map: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            NOUS TROUVER
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-montserrat font-medium mb-6">
              Cabinet du Dr Emmanuel Elard
            </h3>
            <address className="not-italic text-text-secondary mb-6">
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris, France</p>
            </address>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-text-secondary">
                <span className="font-medium">Téléphone:</span>
                <a
                  href="tel:+33123456789"
                  className="hover:text-primary transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </p>
              <p className="flex items-center gap-2 text-text-secondary">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:contact@dr-emmanuel-elard.fr"
                  className="hover:text-primary transition-colors"
                >
                  contact@dr-emmanuel-elard.fr
                </a>
              </p>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9902516231344!2d2.3522213156746196!3d48.856614079287336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef1234567890!2sDr%20Emmanuel%20Elard%20-%20M%C3%A9decine%20Esth%C3%A9tique!5e0!3m2!1sfr!2sfr!4v1614708291234!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cabinet du Dr Emmanuel Elard"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

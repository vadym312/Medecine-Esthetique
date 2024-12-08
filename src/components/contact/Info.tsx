import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left side - Contact Information */}
      <div className="bg-white p-8 rounded-lg shadow-sm space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Coordonnées</h2>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Adresse
              </h3>
              <p className="text-gray-600">
                8 avenue dorian
                <br />
                75012 Paris
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Téléphone
              </h3>
              <p className="text-gray-600">01 84 06 37 73</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Horaires d'ouverture
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>Lundi - Vendredi: 9h - 19h</p>
                <p>Samedi: 10h - 17h</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Map */}
      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.9862507875584!2d2.3892899!3d48.8481699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720d9c7af387%3A0x5891d8d62a1fc925!2s8%20Av.%20Dorian%2C%2075012%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cabinet location"
            className="grayscale"
          ></iframe>
        </div>
        <div className="absolute bottom-4 right-4">
          <a
            href="https://www.google.com/maps/dir//8+Av.+Dorian,+75012+Paris,+France"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

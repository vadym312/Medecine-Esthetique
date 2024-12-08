import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const contactInfo = {
  address: '8 avenue Dorian',
  city: '75012 Paris',
  phone: '01 84 06 37 73',
  hours: [
    'Lundi - Vendredi : 9h00 - 19h00',
    'Samedi : Sur rendez-vous',
    'Dimanche : Fermé',
  ],
};

export const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-montserrat mb-8">
              Informations Pratiques
            </h2>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
                <p className="text-gray-600">{contactInfo.city}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Horaires d'ouverture
                </h3>
                {contactInfo.hours.map((hour, index) => (
                  <p key={index} className="text-gray-600">
                    {hour}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5751898774387!2d2.3892659!3d48.8501891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6720d5e9bcf23%3A0x5c0f4a0a0e0a0a0!2s8%20Avenue%20Dorian%2C%2075012%20Paris!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cabinet Dr Emmanuel ELARD"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

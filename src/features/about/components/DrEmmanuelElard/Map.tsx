'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface MapProps {
  title: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
}

export const Map: React.FC<MapProps> = (props) => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            {props.title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-montserrat font-medium mb-6">
              Cabinet du Dr Emmanuel Elard
            </h3>
            <address className="not-italic text-gray-600 mb-6">
              <p>{props.address.street}</p>
              <p>
                {props.address.postalCode} {props.address.city},{' '}
                {props.address.country}
              </p>
            </address>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Téléphone:</span>
                <a
                  href={`tel:${props.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {props.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="font-medium">Email:</span>
                <a
                  href={`mailto:${props.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {props.email}
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <iframe
              src={props.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cabinet du Dr Emmanuel Elard"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
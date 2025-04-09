'use client';

import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Certification {
  name: string;
  issuedBy: string;
  logo?: string;
  date?: string;
  description?: string;
}

interface AICertificationsProps {
  className?: string;
  title?: string;
  certifications: Certification[];
}

export const AICertifications: React.FC<AICertificationsProps> = ({
  className = '',
  title = 'Nos Certifications en Intelligence Artificielle',
  certifications
}) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 my-8 shadow-sm ${className}`}>
      <div className="flex items-center mb-6">
        <Award className="w-6 h-6 text-gold mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            {cert.logo ? (
              <div className="flex-shrink-0 mr-4">
                <div className="relative h-12 w-12 overflow-hidden">
                  <Image
                    src={cert.logo}
                    alt={cert.issuedBy}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ) : (
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1 mr-3" />
            )}
            
            <div>
              <h4 className="font-medium text-gray-900">{cert.name}</h4>
              <p className="text-sm text-gray-600">Délivré par {cert.issuedBy}</p>
              {cert.date && (
                <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
              )}
              {cert.description && (
                <p className="text-sm text-gray-700 mt-2">{cert.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
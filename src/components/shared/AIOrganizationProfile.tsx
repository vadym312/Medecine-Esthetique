'use client';

import React from 'react';
import { OrganizationSchema } from './OrganizationSchema';
import { AIOrganizationBadge } from './AIOrganizationBadge';
import { AIEthicsStatement } from './AIEthicsStatement';
import { AICertifications } from './AICertifications';
import { AITeamMember } from './AITeamMember';
import Image from 'next/image';
import Link from 'next/link';

interface SocialProfile {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

interface Founder {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  credentials?: {
    type: 'education' | 'certification' | 'award';
    name: string;
    issuedBy?: string;
    year?: string;
  }[];
  aiSpecialty?: string;
  profileUrl?: string;
}

interface Certification {
  name: string;
  issuedBy: string;
  logo?: string;
  date?: string;
  description?: string;
}

interface AISpecialization {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

interface AIOrganizationProfileProps {
  name: string;
  description: string;
  logo?: string;
  foundingDate?: string;
  founders?: Founder[];
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  socialProfiles?: SocialProfile[];
  certifications?: Certification[];
  aiSpecializations?: AISpecialization[];
  ethicsStatements?: string[];
  className?: string;
}

export const AIOrganizationProfile: React.FC<AIOrganizationProfileProps> = ({
  name,
  description,
  logo = '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  foundingDate,
  founders = [],
  address,
  contactInfo,
  socialProfiles = [],
  certifications = [],
  aiSpecializations = [],
  ethicsStatements,
  className = ''
}) => {
  // Convert data for OrganizationSchema
  const schemaFounders = founders.map(founder => ({
    name: founder.name,
    url: founder.profileUrl,
    image: founder.image,
    jobTitle: founder.role,
    description: founder.bio
  }));

  const schemaAISpecializations = aiSpecializations.map(spec => ({
    name: spec.name,
    description: spec.description
  }));

  const schemaCertifications = certifications.map(cert => ({
    name: cert.name,
    issuedBy: cert.issuedBy,
    validUntil: cert.date
  }));

  const schemaSocialUrls = socialProfiles.map(profile => profile.url);

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md ${className}`}>
      {/* Schema.org markup */}
      <OrganizationSchema
        name={name}
        description={description}
        logo={logo}
        foundingDate={foundingDate}
        founders={schemaFounders}
        address={address}
        contactPoint={contactInfo && {
          telephone: contactInfo.phone,
          email: contactInfo.email,
          contactType: 'customer service'
        }}
        aiSpecializations={schemaAISpecializations}
        certifications={schemaCertifications}
        sameAs={schemaSocialUrls}
      />
      
      {/* Header section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {logo && (
              <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-4">
                <Image
                  src={logo}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                <AIOrganizationBadge className="ml-3" size="sm" />
              </div>
              
              {foundingDate && (
                <p className="text-sm text-gray-500 mt-1">
                  Fondé en {new Date(foundingDate).getFullYear()}
                </p>
              )}
            </div>
          </div>
          
          {socialProfiles.length > 0 && (
            <div className="flex space-x-3 md:ml-auto">
              {socialProfiles.map((profile, index) => (
                <Link 
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                  aria-label={`${name} sur ${profile.platform}`}
                >
                  {profile.icon || profile.platform}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <p className="text-gray-700 mt-4">{description}</p>
      </div>
      
      {/* Contact information */}
      {(address || contactInfo) && (
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {address && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Adresse</h3>
                <address className="not-italic text-gray-700">
                  <p>{address.street}</p>
                  <p>{address.postalCode} {address.city}, {address.country}</p>
                </address>
              </div>
            )}
            
            {contactInfo && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Contact</h3>
                <div className="space-y-1 text-gray-700">
                  {contactInfo.phone && <p>Tél: {contactInfo.phone}</p>}
                  {contactInfo.email && <p>Email: {contactInfo.email}</p>}
                  {contactInfo.website && (
                    <p>
                      <Link 
                        href={contactInfo.website}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {contactInfo.website.replace(/^https?:\/\//, '')}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* AI Specializations */}
      {aiSpecializations.length > 0 && (
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Nos Spécialités en Intelligence Artificielle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiSpecializations.map((spec, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  {spec.icon || <Cpu className="w-5 h-5 text-blue-600 mr-2" />}
                  <h3 className="font-medium text-blue-900">{spec.name}</h3>
                </div>
                <p className="text-sm text-gray-700">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Ethics Statement */}
      {ethicsStatements && (
        <div className="p-6 border-b border-gray-200">
          <AIEthicsStatement statements={ethicsStatements} />
        </div>
      )}
      
      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="p-6 border-b border-gray-200">
          <AICertifications certifications={certifications} />
        </div>
      )}
      
      {/* Team Members */}
      {founders.length > 0 && (
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((founder, index) => (
              <AITeamMember
                key={index}
                name={founder.name}
                role={founder.role}
                image={founder.image}
                bio={founder.bio}
                aiSpecialty={founder.aiSpecialty}
                credentials={founder.credentials}
                profileUrl={founder.profileUrl}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Import Cpu for AI specialization icon
import { Cpu } from 'lucide-react';
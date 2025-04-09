'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/src/config/site';

interface SocialProfile {
  platform: string;
  url: string;
}

interface Founder {
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  description?: string;
}

interface Award {
  name: string;
  description?: string;
  awardedBy?: string;
  date?: string;
}

interface Certification {
  name: string;
  issuedBy: string;
  validUntil?: string;
}

interface AISpecialization {
  name: string;
  description?: string;
}

interface OrganizationSchemaProps {
  name?: string;
  alternateName?: string;
  description?: string;
  url?: string;
  logo?: string;
  foundingDate?: string;
  founders?: Founder[];
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
  socialProfiles?: SocialProfile[];
  awards?: Award[];
  certifications?: Certification[];
  aiSpecializations?: AISpecialization[];
  numberOfEmployees?: {
    min?: number;
    max?: number;
    value?: number;
  };
  sameAs?: string[];
  ethicsPolicy?: string;
  dataPrivacyPolicy?: string;
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = 'Cabinet Dr Emmanuel ELARD',
  alternateName = 'Dr Elard Médecine Esthétique',
  description = 'Cabinet de médecine esthétique spécialisé en injections et traitements anti-âge à Paris 12, intégrant des technologies d\'intelligence artificielle pour des résultats personnalisés.',
  url,
  logo = '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  foundingDate = '2010-01-01',
  founders = [
    {
      name: 'Dr Emmanuel Elard',
      url: '/dr-elard-emmanuel-paris-specialiste-injections',
      image: '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
      jobTitle: 'Médecin Esthétique - Fondateur',
      description: 'Expert en médecine esthétique et techniques d\'injection avancées'
    }
  ],
  address = {
    street: '8 avenue Dorian',
    city: 'Paris',
    postalCode: '75012',
    country: 'France'
  },
  contactPoint = {
    telephone: '+33184063773',
    email: 'contact@medecine-esthetique.net',
    contactType: 'customer service'
  },
  socialProfiles = [
    { platform: 'Instagram', url: 'https://www.instagram.com/dr.elard' },
    { platform: 'Facebook', url: 'https://www.facebook.com/dr.elard' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-elard' }
  ],
  awards = [
    {
      name: 'Prix de l\'Innovateur de l\'Année 2023',
      description: 'Récompense pour l\'innovation en médecine esthétique et l\'intégration de technologies avancées',
      awardedBy: 'Aesthetic Awards',
      date: '2023'
    }
  ],
  certifications = [
    {
      name: 'Diplôme Universitaire en Techniques d\'Injection et Comblement',
      issuedBy: 'Université Paris XII'
    },
    {
      name: 'Diplôme Inter-Universitaire de Médecine Morphologique et Anti-Âge',
      issuedBy: 'Université de Paris'
    }
  ],
  aiSpecializations = [
    {
      name: 'Analyse faciale assistée par IA',
      description: 'Utilisation d\'algorithmes d\'intelligence artificielle pour analyser les proportions faciales et recommander des traitements personnalisés'
    },
    {
      name: 'Suivi des résultats par imagerie numérique',
      description: 'Technologie de pointe pour suivre l\'évolution des traitements et optimiser les résultats'
    }
  ],
  numberOfEmployees = {
    value: 5
  },
  sameAs,
  ethicsPolicy = '/ethics-policy',
  dataPrivacyPolicy = '/privacy-policy'
}) => {
  const pathname = usePathname();
  const fullUrl = url || `${siteConfig.domain}${pathname}`;
  const fullLogoUrl = logo.startsWith('http') ? logo : `${siteConfig.domain}${logo}`;
  
  // Construct social media URLs if not provided
  const socialUrls = sameAs || socialProfiles.map(profile => profile.url);

  // Construct the schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': fullUrl,
    name: name,
    alternateName: alternateName,
    description: description,
    url: fullUrl,
    logo: {
      '@type': 'ImageObject',
      url: fullLogoUrl
    },
    foundingDate: foundingDate,
    founder: founders.map(founder => ({
      '@type': 'Person',
      name: founder.name,
      ...(founder.url && { url: founder.url }),
      ...(founder.image && { 
        image: {
          '@type': 'ImageObject',
          url: founder.image.startsWith('http') ? founder.image : `${siteConfig.domain}${founder.image}`
        }
      }),
      ...(founder.jobTitle && { jobTitle: founder.jobTitle }),
      ...(founder.description && { description: founder.description })
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressCountry: address.country
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactPoint.telephone,
      email: contactPoint.email,
      contactType: contactPoint.contactType
    },
    sameAs: socialUrls,
    award: awards.map(award => ({
      '@type': 'Award',
      name: award.name,
      ...(award.description && { description: award.description }),
      ...(award.awardedBy && { awardedBy: award.awardedBy }),
      ...(award.date && { date: award.date })
    })),
    hasCredential: certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cert.name,
      recognizedBy: {
        '@type': 'Organization',
        name: cert.issuedBy
      },
      ...(cert.validUntil && { validUntil: cert.validUntil })
    })),
    knowsAbout: aiSpecializations.map(spec => ({
      '@type': 'SpecialAnnouncement',
      name: spec.name,
      ...(spec.description && { description: spec.description }),
      category: 'https://schema.org/MedicalSpecialty'
    })),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      ...(numberOfEmployees.min && { minValue: numberOfEmployees.min }),
      ...(numberOfEmployees.max && { maxValue: numberOfEmployees.max }),
      ...(numberOfEmployees.value && { value: numberOfEmployees.value })
    },
    ethicsPolicy: {
      '@type': 'CreativeWork',
      url: ethicsPolicy.startsWith('http') ? ethicsPolicy : `${siteConfig.domain}${ethicsPolicy}`
    },
    publishingPrinciples: {
      '@type': 'CreativeWork',
      url: dataPrivacyPolicy.startsWith('http') ? dataPrivacyPolicy : `${siteConfig.domain}${dataPrivacyPolicy}`
    },
    // AI-specific attributes
    additionalType: [
      'https://schema.org/MedicalBusiness',
      'https://schema.org/HealthAndBeautyBusiness'
    ],
    specialty: [
      'Médecine Esthétique',
      'Intelligence Artificielle Médicale',
      'Injections Esthétiques'
    ],
    availableService: [
      ...aiSpecializations.map(spec => ({
        '@type': 'MedicalProcedure',
        name: spec.name,
        description: spec.description,
        procedureType: 'https://schema.org/NoninvasiveProcedure'
      }))
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
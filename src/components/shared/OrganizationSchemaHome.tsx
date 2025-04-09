'use client';

import React from 'react';
import { siteConfig } from '@/src/config/site';

export const OrganizationSchemaHome: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': siteConfig.domain,
    name: 'Cabinet Dr Emmanuel ELARD',
    alternateName: 'Dr Elard Médecine Esthétique',
    description: 'Cabinet de médecine esthétique spécialisé en injections et traitements anti-âge à Paris 12, intégrant des technologies d\'intelligence artificielle pour des résultats personnalisés.',
    url: siteConfig.domain,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.domain}/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp`
    },
    foundingDate: '2010-01-01',
    founder: {
      '@type': 'Person',
      name: 'Dr Emmanuel Elard',
      url: `${siteConfig.domain}/dr-elard-emmanuel-paris-specialiste-injections`,
      image: {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp`
      },
      jobTitle: 'Médecin Esthétique - Fondateur',
      description: 'Expert en médecine esthétique et techniques d\'injection avancées'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 avenue Dorian',
      addressLocality: 'Paris',
      postalCode: '75012',
      addressCountry: 'France'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33184063773',
      email: 'contact@medecine-esthetique.net',
      contactType: 'customer service'
    },
    sameAs: [
      'https://www.instagram.com/dr.elard',
      'https://www.facebook.com/dr.elard',
      'https://www.linkedin.com/in/dr-elard'
    ],
    award: {
      '@type': 'Award',
      name: 'Prix de l\'Innovateur de l\'Année 2023',
      description: 'Récompense pour l\'innovation en médecine esthétique et l\'intégration de technologies avancées',
      awardedBy: 'Aesthetic Awards',
      date: '2023'
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Diplôme Universitaire en Techniques d\'Injection et Comblement',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Université Paris XII'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Diplôme Inter-Universitaire de Médecine Morphologique et Anti-Âge',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Université de Paris'
        }
      }
    ],
    knowsAbout: [
      {
        '@type': 'SpecialAnnouncement',
        name: 'Analyse faciale assistée par IA',
        description: 'Utilisation d\'algorithmes d\'intelligence artificielle pour analyser les proportions faciales et recommander des traitements personnalisés',
        category: 'https://schema.org/MedicalSpecialty'
      },
      {
        '@type': 'SpecialAnnouncement',
        name: 'Suivi des résultats par imagerie numérique',
        description: 'Technologie de pointe pour suivre l\'évolution des traitements et optimiser les résultats',
        category: 'https://schema.org/MedicalSpecialty'
      }
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 5
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
      {
        '@type': 'MedicalProcedure',
        name: 'Analyse Faciale 3D',
        description: 'Notre technologie d\'IA analyse les proportions faciales en trois dimensions pour créer un plan de traitement personnalisé qui respecte l\'harmonie naturelle du visage.',
        procedureType: 'https://schema.org/NoninvasiveProcedure'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Prédiction de Résultats',
        description: 'Nos algorithmes prédictifs permettent de visualiser les résultats potentiels des traitements, aidant les patients à faire des choix éclairés.',
        procedureType: 'https://schema.org/NoninvasiveProcedure'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
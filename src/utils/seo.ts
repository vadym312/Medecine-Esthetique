export const generateStructuredData = (data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: data.title,
    description: data.description,
    medicalSpecialty: 'Aesthetic Medicine',
    image: data.imageUrl,
    provider: {
      '@type': 'MedicalOrganization',
      name: 'Dr Emmanuel ELARD',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 avenue Dorian',
        addressLocality: 'Paris',
        postalCode: '75012',
        addressCountry: 'FR'
      },
      telephone: '+33184063773',
      url: 'https://medecine-esthetique.net'
    },
    availableService: {
      '@type': 'MedicalTherapy',
      name: data.title,
      description: data.description
    }
  };
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://medecine-esthetique.net';
  return `${baseUrl}${path}`;
};

export const generateBreadcrumbStructuredData = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Cabinet Dr Emmanuel ELARD - Médecine Esthétique Paris 12',
    description: 'Cabinet de médecine esthétique spécialisé en injections et traitements anti-âge à Paris 12, proche de Bastille, Nation et Gare de Lyon.',
    url: 'https://medecine-esthetique.net',
    telephone: '+33184063773',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 avenue Dorian',
      addressLocality: 'Paris',
      postalCode: '75012',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8481699',
      longitude: '2.3892899'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '10:00',
        closes: '12:00'
      }
    ],
    priceRange: '€€€',
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 12e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 11e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 4e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 5e arrondissement'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '48.8481699',
        longitude: '2.3892899'
      },
      geoRadius: '20000'
    },
    hasMap: 'https://www.google.com/maps?cid=6389019496242489637',
    sameAs: [
      'https://www.instagram.com/dr.elard',
      'https://www.facebook.com/dr.elard',
      'https://www.linkedin.com/in/dr-elard'
    ]
  };
}

export function generateMedicalServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  // Localize service name if needed
  const localizedName = service.name.includes('Paris') 
    ? service.name 
    : `${service.name} à Paris 12`;
  
  // Localize description if needed
  const localizedDescription = service.description.includes('Paris') 
    ? service.description 
    : `${service.description} Traitement réalisé à Paris 12, proche de Bastille, Nation et Gare de Lyon.`;

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: localizedName,
    description: localizedDescription,
    url: service.url,
    ...(service.image && { image: service.image }),
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    followup: 'Suivi personnalisé par le Dr Emmanuel ELARD à Paris 12',
    howPerformed: 'Procédure réalisée en cabinet médical avec des techniques avancées',
    preparation: 'Consultation préalable requise',
    status: 'https://schema.org/ActiveActionStatus',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Cabinet Dr Emmanuel ELARD - Paris 12',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 avenue Dorian',
        addressLocality: 'Paris',
        postalCode: '75012',
        addressCountry: 'FR'
      },
      telephone: '+33184063773',
      url: 'https://medecine-esthetique.net'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 12e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 11e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 4e arrondissement'
      }
    ]
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.join(' ')
      }
    }))
  };
}

export const localizeMetaTitle = (title: string, location: string = 'Paris 12') => {
  if (title.includes('Paris') || title.includes('paris')) {
    return title;
  }
  return `${title} à ${location}`;
};

export const localizeMetaDescription = (description: string, location: string = 'Paris 12') => {
  if (description.includes('Paris') || description.includes('paris')) {
    return description;
  }
  return `${description} Cabinet situé à ${location}, proche de Bastille, Nation et Gare de Lyon.`;
};

export const getParisDistricts = () => [
  'Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e', 
  'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e',
  'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e',
  'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e'
];

export const getParisLandmarks = () => [
  'Bastille', 'Nation', 'Gare de Lyon', 'Bercy', 'Bois de Vincennes',
  'Place de la République', 'Le Marais', 'Opéra Bastille'
];

export const optimizeImageAlt = (alt: string, location: string = 'Paris 12') => {
  if (!alt) return '';
  if (alt.includes('Paris') || alt.includes('paris')) {
    return alt;
  }
  return `${alt} - Médecine esthétique à ${location}`;
};

export const optimizeImageFilename = (filename: string, keywords: string[]) => {
  // Remove file extension
  const name = filename.split('.')[0];
  
  // Check if keywords are already in the filename
  const containsKeywords = keywords.some(keyword => 
    name.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (containsKeywords) {
    return filename;
  }
  
  // Add the first keyword if not already present
  const extension = filename.includes('.') ? filename.split('.').pop() : '';
  const newName = `${name}-${keywords[0].toLowerCase().replace(/\s+/g, '-')}-paris-12`;
  return extension ? `${newName}.${extension}` : newName;
};

// Generate variations of meta titles with different Paris districts
export const generateDistrictVariations = (baseTitle: string, count: number = 3) => {
  const districts = getParisDistricts();
  const shuffled = [...districts].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);
  
  return selected.map(district => {
    return localizeMetaTitle(baseTitle, district);
  });
};

// Generate variations of meta descriptions with different Paris landmarks
export const generateLandmarkVariations = (baseDescription: string, count: number = 3) => {
  const landmarks = getParisLandmarks();
  const shuffled = [...landmarks].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);
  
  return selected.map(landmark => {
    return `${baseDescription} Cabinet situé à Paris 12, à proximité de ${landmark}.`;
  });
};
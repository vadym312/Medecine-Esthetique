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
      url: 'https://dr-emmanuel-elard.fr'
    },
    availableService: {
      '@type': 'MedicalTherapy',
      name: data.title,
      description: data.description
    }
  };
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://dr-emmanuel-elard.fr';
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
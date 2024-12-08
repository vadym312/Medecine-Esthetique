export const generateTreatmentSchema = (data: {
  title: string;
  description: string;
  imageUrl: string;
  provider: {
    name: string;
    address: string;
    telephone: string;
  };
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: data.title,
    description: data.description,
    image: data.imageUrl,
    provider: {
      '@type': 'MedicalOrganization',
      name: data.provider.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.provider.address,
      },
      telephone: data.provider.telephone,
    },
  };
};

export const formatTreatmentDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} minutes`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes
    ? `${hours}h${remainingMinutes}min`
    : `${hours} heure${hours > 1 ? 's' : ''}`;
};

export const generateBeforeAfterImageUrl = (
  baseUrl: string,
  type: 'before' | 'after'
): string => {
  const timestamp = type === 'before' ? '1515377905703' : '1515377905704';
  return `${baseUrl}-${timestamp}?auto=format&fit=crop&q=80`;
};
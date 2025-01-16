export interface SEOData {
  title: string;
  description: string;
  ogImage: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  award: {
    text: string;
    year: number;
  };
}

export interface BiographySection {
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: 'award' | 'graduation-cap' | 'users';
}

export interface ExpertiseSection {
  title: string;
  items: ExpertiseItem[];
}

export interface QualificationItem {
  title: string;
  description: string;
}

export interface QualificationsSection {
  title: string;
  items: QualificationItem[];
}

export interface TrainingItem {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface TrainingSection {
  title: string;
  items: TrainingItem[];
}

export interface AwardSection {
  title: string;
  description: string;
  year: number;
  image: {
    src: string;
    alt: string;
  };
}

export interface TestimonialItem {
  name: string;
  text: string;
  rating: number;
  treatment: string;
}

export interface TestimonialsSection {
  title: string;
  items: TestimonialItem[];
}

export interface ContactInfo {
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

export interface PageContent {
  seo: SEOData;
  hero: HeroSection;
  biography: BiographySection;
  expertise: ExpertiseSection;
  qualifications: QualificationsSection;
  training: TrainingSection;
  award: AwardSection;
  testimonials: TestimonialsSection;
  contact: ContactInfo;
}

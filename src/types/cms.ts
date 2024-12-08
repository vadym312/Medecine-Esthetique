export interface SEOMetadata {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: {
    url: string;
    alt: string;
  };
  ctaText: string;
  ctaUrl: string;
}

export interface DoctorSection {
  name: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  qualifications: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  advantages: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  testimonial: {
    content: string;
    author: string;
  };
}

export interface HomePage {
  seo: SEOMetadata;
  hero: HeroSection;
  doctor: DoctorSection;
  featuredTreatment: Treatment;
}

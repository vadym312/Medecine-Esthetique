export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Intervention {
  title: string;
  type: 'injections' | 'technologies' | 'soins';
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  imageUrl: string;
  rating: number;
  treatment: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  slug: string;
}

export interface FeaturedTreatment {
  title: string;
  description: string;
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
  images: string[];
}
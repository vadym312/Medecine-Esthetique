export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  slug: string;
  more?: string;
}

export interface BlogPost {
  id: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  category: string;
  createdAt: string;
  readTime?: number;
  image?: string;
  imageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  categories: string[];
  sections?: {
    id: string;
    title: string;
  }[];
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}
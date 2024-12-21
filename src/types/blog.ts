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
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  createdAt: string;
  readTime?: number;
  image?: string;
  sections?: {
    id: string;
    title: string;
  }[];
}

export enum Category {
  INNOVATIONS,
  TREATMENTS,
  WELL_BEING,
  CARE,
  EDUCATION,
}
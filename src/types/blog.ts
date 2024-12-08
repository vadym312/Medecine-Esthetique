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
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: number;
  imageUrl: string;
  featured?: boolean;
  sections: {
    id: string;
    title: string;
  }[];
}
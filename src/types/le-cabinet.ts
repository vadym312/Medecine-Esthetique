export interface SeoData {
  metaTitle: string;
  metaDescription: string;
  ogImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface PageData {
  id: string;
  slug: string;
  title: string;
  content: string;
  seo: SeoData;
  updatedAt: string;
}

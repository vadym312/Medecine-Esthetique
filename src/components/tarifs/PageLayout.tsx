import { ReactNode } from 'react';
import { SEOData } from './types/content.types';

interface PageLayoutProps {
  children: ReactNode;
  seo: SEOData;
}

export const PageLayout = ({ children, seo }: PageLayoutProps) => {
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};

import { Metadata } from 'next';
import { generateMetadata } from '@/src/lib/seo/metadata';

export const metadata: Metadata = generateMetadata(
  'Blog | Dr Emmanuel ELARD',
  'Découvrez nos articles sur la médecine esthétique, les dernières innovations et conseils beauté par le Dr Emmanuel ELARD.',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
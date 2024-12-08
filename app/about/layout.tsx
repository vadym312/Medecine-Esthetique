import { Metadata } from 'next';
import { generateMetadata } from '@/src/lib/seo/metadata';

export const metadata: Metadata = generateMetadata(
  'À Propos | Dr Emmanuel ELARD',
  'Découvrez le Dr Emmanuel ELARD, expert en médecine esthétique à Paris, et son cabinet moderne équipé des dernières technologies.',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d'
);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
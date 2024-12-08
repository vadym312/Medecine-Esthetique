import { Metadata } from 'next';
import { generateMetadata } from '@/src/lib/seo/metadata';

export const metadata: Metadata = generateMetadata(
  'Procédures | Dr Emmanuel ELARD',
  'Découvrez nos procédures médicales esthétiques avancées, réalisées par le Dr Emmanuel ELARD à Paris.',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
);

export default function ProceduresLayout({
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
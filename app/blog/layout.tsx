import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/blog';

export const metadata: Metadata = defaultMetadata

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
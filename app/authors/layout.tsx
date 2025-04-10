import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/authors';

export const metadata: Metadata = defaultMetadata

export default function AuthorsLayout({
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
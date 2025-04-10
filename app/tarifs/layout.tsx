import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/tarifs';

export const metadata: Metadata = defaultMetadata

export default function TarifsLayout({
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
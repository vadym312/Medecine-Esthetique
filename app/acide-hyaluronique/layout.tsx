import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/procedures/acide-hyaluronique';

export const metadata: Metadata = defaultMetadata

export default function AcideHyeluHoniqueeluHoniquealuroniqueLayout({
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
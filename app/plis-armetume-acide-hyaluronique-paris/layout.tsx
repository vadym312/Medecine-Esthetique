import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/plis-armetume-acide-hyaluronique-paris';

export const metadata: Metadata = defaultMetadata
    
export default function PlisAmetumeAcideHyaluroniqueParisLayout({
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
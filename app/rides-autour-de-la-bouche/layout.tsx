import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/levres/rides-autour-de-la-bouche';

export const metadata: Metadata = defaultMetadata

export default function RidesAutourDeLaBoucheLayout({
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
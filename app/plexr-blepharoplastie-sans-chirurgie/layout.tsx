import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/procedures/plexr-blepharoplastie-sans-chirurgie';

export const metadata: Metadata = defaultMetadata

export default function PlexrBlepharoplastieSansChirurgieLayout({
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
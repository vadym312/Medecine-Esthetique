import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/procedures/cryolipolyse-paris';

export const metadata: Metadata = defaultMetadata

export default function CryolipolyseParisLayout({
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
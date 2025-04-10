import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/rajeunissement-des-mains';

export const metadata: Metadata = defaultMetadata

export default function RajeunissementDesMainsLayout({
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
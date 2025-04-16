import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/procedures/hydrafacial';

export const metadata: Metadata = defaultMetadata

export default function HydrafacialParisLayout({
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
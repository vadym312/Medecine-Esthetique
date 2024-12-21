import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/about/le-cabinet';

export const metadata: Metadata = defaultMetadata

export default function LeCabinetLayout({
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
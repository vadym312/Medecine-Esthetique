import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/augmentation-levres-paris';

export const metadata: Metadata = defaultMetadata

export default function AugmentationLevresParisLayout({
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
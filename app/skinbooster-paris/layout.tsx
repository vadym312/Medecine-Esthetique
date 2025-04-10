import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/soins/skinbooster';

export const metadata: Metadata = defaultMetadata

export default function SkinboosterParisLayout({
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
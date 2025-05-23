import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/soins/mesolift';

export const metadata: Metadata = defaultMetadata

export default function MesoliftLayout({
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
import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/botox-rides-pattes-d-oie';

export const metadata: Metadata = defaultMetadata

export default function BotoxRidesPattesDOieLayout({
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
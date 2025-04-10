import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/botox-rides-du-front';

export const metadata: Metadata = defaultMetadata

export default function BotoxRidesDuFrontLayout({
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
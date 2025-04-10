import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/botox-transpiration';

export const metadata: Metadata = defaultMetadata

export default function InjectionBotoxTranspirationLayout({
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
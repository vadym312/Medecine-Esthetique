import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/botox';

export const metadata: Metadata = defaultMetadata

export default function BotoxLayout({
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
import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/botox-masseter';

export const metadata: Metadata = defaultMetadata

export default function BotoxMasseterLayout({
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
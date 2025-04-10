import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/injections/botox-ride-du-lion';

export const metadata: Metadata = defaultMetadata

export default function BotoxRideDuLionLayout({
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
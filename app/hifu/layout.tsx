import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/procedures/hifu';

export const metadata: Metadata = defaultMetadata

export default function HifuLayout({
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
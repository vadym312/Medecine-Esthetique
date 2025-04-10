import { Metadata } from 'next';
import { defaultMetadata } from '@/src/lib/seo/about-ai';

export const metadata: Metadata = defaultMetadata

export default function AboutAI({
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
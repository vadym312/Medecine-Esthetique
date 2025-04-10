import { Metadata } from 'next';
import { generateBlogPostMetadata } from '@/src/lib/seo/blog/post';

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateBlogPostMetadata(params.slug);
}

export default function BlogLayout({
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
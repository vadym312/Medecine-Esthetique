import { Metadata } from 'next';
import { generateBlogPostMetadata } from '@/src/lib/seo/blog/post';
import { fetchPostBySlug } from '@/src/lib/api/cms';
import he from 'he';

type Props = {
    params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const fetchedPost = await fetchPostBySlug(params.slug);
    const blogTitle = he.decode(fetchedPost.title.rendered);
    return generateBlogPostMetadata(params.slug, blogTitle);
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
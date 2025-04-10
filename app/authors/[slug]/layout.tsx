import { Metadata } from 'next';
import { generateAuthorMetadata } from '@/src/lib/seo/authors/author';

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generateAuthorMetadata(params.slug);
}

export default function AuthorsLayout({
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
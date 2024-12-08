'use client';

import { useParams } from 'next/navigation';
import { BlogPost } from '@/src/features/blog/components/BlogPost';
import { blogPosts } from '@/src/lib/mockData/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Article non trouvé
          </h2>
          <p className="text-gray-600">
            L'article que vous recherchez n'existe pas ou a été déplacé.
          </p>
        </div>
      </div>
    );
  }

  return <BlogPost post={post} />;
}

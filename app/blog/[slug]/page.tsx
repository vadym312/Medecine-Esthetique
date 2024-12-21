'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { BlogPost as BlogPostType } from '@/src/types/blog';
import { BlogPost } from '@/src/features/blog/components/BlogPost';
import { usePosts } from '@/src/hooks/usePosts';

export default function BlogPostPage() {

  const { posts, fetchPosts } = usePosts();
  useEffect(() => {
    fetchPosts(1);
  }, []);

  const { slug } = useParams();
  const post = posts.find((post: BlogPostType) => post.id === slug);

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

  return <BlogPost post={post} posts={posts}/>;
}

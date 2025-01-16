import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/src/types/blog';
import { handleError } from '@/src/utils/error';

interface UseRecentPostsOptions {
  currentPostId: string;
  posts: BlogPost[];
  limit?: number;
}

export const useRecentPosts = ({ currentPostId, posts, limit = 3 }: UseRecentPostsOptions) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const recentPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, limit);

  const handlePostClick = useCallback(async (postId: string) => {
    try {
      setLoading(true);
      await router.push(`/blog/${postId}`);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  return {
    recentPosts,
    loading,
    handlePostClick,
  };
};
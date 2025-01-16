import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { blogPosts } from '@/src/lib/mockData/blogPosts';
import { BlogPost } from '@/src/types/blog';

export const useRecentPosts = (currentPostId: string) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Get recent posts excluding the current post
  const recentPosts = blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  const handlePostClick = useCallback((postId: string) => {
    try {
      setLoading(true);
      router.push(`/blog/${postId}`);
    } catch (error) {
      console.error('Error navigating to post:', error);
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
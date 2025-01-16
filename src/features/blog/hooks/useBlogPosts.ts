import { useState, useCallback } from 'react';
import { BlogPost } from '@/src/types/blog';
import { handleError } from '@/src/utils/error';

interface UseBlogPostsProps {
  initialPosts: BlogPost[];
  itemsPerPage?: number;
}

export const useBlogPosts = ({ initialPosts, itemsPerPage = 6 }: UseBlogPostsProps) => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const featuredPost = initialPosts.find(post => post.featured);
  const filteredPosts = initialPosts.filter(post => !post.featured);
  const paginatedPosts = filteredPosts.slice(0, page * itemsPerPage);
  const hasMore = paginatedPosts.length < filteredPosts.length;

  const handleLoadMore = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      await new Promise(resolve => setTimeout(resolve, 500));
      setPage(prev => prev + 1);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load more posts');
      setError(error);
      handleError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePostClick = useCallback((postId: string) => {
    try {
      setSelectedPost(postId);
    } catch (err) {
      handleError(err);
    }
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return {
    selectedPost,
    featuredPost,
    paginatedPosts,
    loading,
    error,
    hasMore,
    handleLoadMore,
    handlePostClick,
    resetError,
  };
};
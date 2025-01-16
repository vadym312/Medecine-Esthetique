import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { handleError } from '@/src/utils/error';

export const useBlogNavigation = () => {
  const router = useRouter();

  const navigateToPost = useCallback(async (postId: string) => {
    try {
      await router.push(`/blog/${postId}`);
    } catch (error) {
      handleError(error);
    }
  }, [router]);

  const navigateBack = useCallback(() => {
    try {
      router.back();
    } catch (error) {
      handleError(error);
      router.push('/blog');
    }
  }, [router]);

  return {
    navigateToPost,
    navigateBack,
  };
};
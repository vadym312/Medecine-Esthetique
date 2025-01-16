import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { BlogPost } from '@/src/types/blog';
import { BlogHero } from '../BlogHero';
import { CategoryFilter } from './CategoryFilter';
import { BlogGrid } from './BlogGrid';
import { LoadMore } from './LoadMore';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';
import { ErrorBoundary } from '@/src/components/shared/ErrorBoundary';
import { ErrorDisplay } from './ErrorDisplay';
import { useBlogPosts } from '../../hooks/useBlogPosts';

const NewsletterSignup = dynamic(() => import('../NewsletterSignup').then(mod => mod.NewsletterSignup), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const CallToAction = dynamic(() => import('../CallToAction').then(mod => mod.CallToAction), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const BlogPostComponent = dynamic(() => import('../BlogPost'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

interface BlogPageProps {
  initialPosts: BlogPost[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ initialPosts }) => {
  const {
    selectedPost,
    featuredPost,
    paginatedPosts,
    loading,
    error,
    hasMore,
    handleLoadMore,
    handlePostClick,
    resetError,
  } = useBlogPosts({ initialPosts });

  if (error) {
    return <ErrorDisplay error={error} onRetry={resetError} />;
  }

  if (selectedPost) {
    const post = initialPosts.find(post => post.id === selectedPost);
    if (post) {
      return (
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <BlogPostComponent post={post} />
          </Suspense>
        </ErrorBoundary>
      );
    }
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {featuredPost && (
          <div onClick={() => handlePostClick(featuredPost.id)} className="cursor-pointer">
            <BlogHero post={featuredPost} />
          </div>
        )}

        <CategoryFilter
          categories={Array.from(new Set(initialPosts.map(post => post.category)))}
          selectedCategory={null}
          onSelectCategory={() => {}}
        />

        <main className="container mx-auto px-4 py-12">
          <BlogGrid posts={paginatedPosts} onPostClick={handlePostClick} />
          <LoadMore loading={loading} hasMore={hasMore} onLoadMore={handleLoadMore} />
        </main>

        <Suspense fallback={<LoadingSpinner />}>
          <NewsletterSignup />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CallToAction />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};
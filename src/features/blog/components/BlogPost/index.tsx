import React from 'react';
import { BlogPost as BlogPostType } from '@/src/types/blog';
import { BlogHero } from '../BlogHero';
import { PostContent } from './PostContent';
import { ReadingProgress } from '../ReadingProgress';
import { NewsletterSignup } from '../NewsletterSignup';
import { CallToAction } from '../CallToAction';
import { ErrorBoundary } from '@/src/components/shared/ErrorBoundary';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <ReadingProgress />
        <BlogHero post={post} />
        <PostContent post={post} />
        <NewsletterSignup />
        <CallToAction />
      </div>
    </ErrorBoundary>
  );
};

export default BlogPost;
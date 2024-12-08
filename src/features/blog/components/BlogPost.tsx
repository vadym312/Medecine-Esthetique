'use client';

import React from 'react';
import { BlogPost as BlogPostType } from '@/src/types/blog';
import { BlogHero } from './Hero';
import { ArticleContent } from './ArticleContent';
import { TableOfContents } from './TableOfContents';
import { ReadingProgress } from './ReadingProgress';
import { RecentPosts } from './RecentPosts';
import { NewsletterSignup } from './NewsletterSignup';
import { CallToAction } from './CallToAction';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ReadingProgress />
      <BlogHero post={post} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="hidden lg:block lg:col-span-2">
            <TableOfContents sections={post.sections} />
          </div>

          <article className="col-span-1 lg:col-span-7">
            <ArticleContent content={post.content} />
          </article>

          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <RecentPosts posts={[]} />
            </div>
          </aside>
        </div>
      </div>

      <NewsletterSignup />
      <CallToAction />
    </div>
  );
};

export default BlogPost;

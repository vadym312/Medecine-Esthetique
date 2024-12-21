'use client';

import React, { useEffect } from 'react';
import { BlogPost as BlogPostType } from '@/src/types/blog';
import { BlogHero } from './Hero';
import { ArticleContent } from './ArticleContent';
import { TableOfContents } from './TableOfContents';
import { ReadingProgress } from './ReadingProgress';
import { RecentPosts } from './RecentPosts';
import { NewsletterSignup } from './NewsletterSignup';
import { CallToAction } from './CallToAction';
import { usePosts } from '@/src/hooks/usePosts';

interface BlogPostProps {
  post: BlogPostType;
}


export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {

  const { posts, fetchPosts } = usePosts();
  useEffect(() => {
    fetchPosts(1);
  }, []);

  const recentPosts = posts
    .filter((p: BlogPostType) => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <ReadingProgress />
      <BlogHero post={post} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* <div className="hidden lg:block lg:col-span-2">
            <TableOfContents sections={post.sections} />
          </div> */}

          <article className="col-span-1 lg:col-span-7">
            <ArticleContent content={post.content} />
          </article>

          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <RecentPosts posts={recentPosts} />
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

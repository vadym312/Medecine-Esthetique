import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { ArticleContent } from '../ArticleContent';
import { TableOfContents } from '../TableOfContents';
import { RecentPosts } from '../RecentPosts';
import { useRecentPosts } from '../../hooks/useRecentPosts';
import { blogPosts } from '@/src/lib/mockData/blogPosts';

interface PostContentProps {
  post: BlogPost;
}

export const PostContent: React.FC<PostContentProps> = ({ post }) => {
  const { recentPosts, handlePostClick } = useRecentPosts({
    currentPostId: post.id,
    posts: blogPosts,
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="hidden lg:block lg:col-span-2">
          <TableOfContents sections={post.sections} />
        </div>

        <motion.article 
          className="col-span-1 lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArticleContent content={post.content} />
        </motion.article>

        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <RecentPosts posts={recentPosts} onPostClick={handlePostClick} />
          </div>
        </aside>
      </div>
    </div>
  );
};
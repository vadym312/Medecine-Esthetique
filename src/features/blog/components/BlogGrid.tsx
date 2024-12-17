'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  onPostClick: (id: string) => void;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, onPostClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onPostClick(post.id)}
          className="cursor-pointer"
        >
          <BlogCard
            post={{
              ...post,
              imageUrl: post.imageUrl,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
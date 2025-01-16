'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { BlogCard } from '../BlogCard';
import { getOptimizedImageUrl } from '@/src/utils/imageOptimization';
import { fadeIn } from '@/src/utils/animations';

interface BlogGridProps {
  posts: BlogPost[];
  onPostClick: (id: string) => void;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, onPostClick }) => {
  if (!posts?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Aucun article disponible pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: index * 0.1 }}
          onClick={() => onPostClick(post.id)}
          className="cursor-pointer"
        >
          <BlogCard
            post={{
              ...post,
              imageUrl: getOptimizedImageUrl(post.imageUrl, 800),
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
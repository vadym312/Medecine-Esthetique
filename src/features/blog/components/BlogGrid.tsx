'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { imageLoader } from '@/src/utils/imageOptimization';
import Image from 'next/image';

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
          <div className="relative aspect-video">
            <Image
              src={post.image || ''}
              alt={post.title}
              loader={imageLoader}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
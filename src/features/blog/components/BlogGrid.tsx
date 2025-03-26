'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { BlogCard } from './BlogCard';
import { Category } from '@/src/types/blog';
import { useRouter } from 'next/navigation';

interface BlogGridProps {
  posts: BlogPost[];
  categories: Category[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, categories }) => {

  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => router.push(`/blog/${post.slug}`)}
          className="cursor-pointer"
        >
           <BlogCard
            post={{
              ...post,
              category: categories.find((category) => category.id === post.categories[0])?.name || '',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
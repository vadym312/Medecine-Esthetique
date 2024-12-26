'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { formatDate } from '@/src/utils/formatDate';
import { useRouter } from 'next/navigation';

interface RecentPostsProps {
  posts: BlogPost[];
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  const router = useRouter()
  if (!posts.length) {
    return null;
  }


  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-6 text-gray-900">
        Articles récents
      </h4>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="flex gap-4" onClick={()=> router.push(`/blog/${post.id}`)}>
              <div className="flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h5>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-gray-400">•</span>
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { Clock } from 'lucide-react';

interface RecentPostsProps {
  posts: BlogPost[];
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
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
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-24 h-24 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                  {post.title}
                </h5>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1 flex-shrink-0" />
                  <span>{post.readTime} min de lecture</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

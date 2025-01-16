import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { Clock } from 'lucide-react';
import { formatDate } from '@/src/utils/formatDate';
import { getOptimizedImageUrl } from '@/src/utils/imageOptimization';

interface PostCardProps {
  post: BlogPost;
  onClick: () => void;
  delay?: number;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onClick, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={getOptimizedImageUrl(post.imageUrl, 96)}
            alt={post.title}
            className="w-24 h-24 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gold transition-colors">
            {post.title}
          </h5>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} className="flex-shrink-0" />
            <span>{post.readTime} min de lecture</span>
            <span className="text-gray-400">•</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
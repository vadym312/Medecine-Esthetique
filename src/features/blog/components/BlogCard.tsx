'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { formatDate } from '@/src/utils/formatDate';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${featured ? 'lg:col-span-2 row-span-2' : ''
        }`}
    >
      <div className={`relative ${featured ? 'h-72' : 'h-48'} overflow-hidden`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3
          className={`${featured ? 'text-2xl' : 'text-xl'
            } font-semibold mb-2 hover:text-gold transition-colors`}
        >
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://medecine-esthetique.net/wp-content/uploads/2024/11/docteur-elard-emmanuel-medecin-esthetique-paris.jpg"
              alt="dr emmanuel elard"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-medium text-gray-900">
                Dr Emmanuel Elard
              </h3>
              <span className="text-xs text-gray-500">
                {formatDate(post.createdAt)}
              </span>
            </div>
          </div>
          {/* <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{post.readTime} min</span>
          </div> */}
        </div>
      </div>
    </motion.article>
  );
};
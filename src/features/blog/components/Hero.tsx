'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { Clock, Calendar } from 'lucide-react';
import { formatDate } from '@/src/utils/formatDate';

interface BlogHeroProps {
  post: BlogPost;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-white pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute top-6 left-6">
              <span className="bg-gold text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://medecine-esthetique.net/wp-content/uploads/2024/11/docteur-elard-emmanuel-medecin-esthetique-paris.jpg"
                  alt="dr emmanuel elard"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">
                    Dr Emmanuel Elard
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(post.createdAt)}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime} min de lecture
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
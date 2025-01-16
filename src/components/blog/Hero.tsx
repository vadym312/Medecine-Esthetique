import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/src/types/blog';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface BlogHeroProps {
  post: BlogPost;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-white"
    >
      <div className="container mx-auto px-4 py-12 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute top-6 left-6">
              <span className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {post.author.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
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

            <motion.button
              whileHover={{ x: 5 }}
              className="inline-flex items-center space-x-2 text-[#D4AF37] font-semibold group"
            >
              <span>Lire l'article</span>
              <ArrowRight
                size={20}
                className="transform transition-transform group-hover:translate-x-1"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

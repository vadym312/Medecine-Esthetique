'use client';

import React, { useState, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BlogPost } from '@/src/types/blog';
import { BlogHero } from './Hero';
import { CategoryFilter } from './CategoryFilter';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';
import { BlogGrid } from './BlogGrid';
import { getOptimizedImageUrl, preloadImages } from '@/src/utils/imageOptimization';

const NewsletterSignup = dynamic(() => import('./NewsletterSignup').then(mod => mod.NewsletterSignup));
const CallToAction = dynamic(() => import('./CallToAction').then(mod => mod.CallToAction));
const BlogPost = dynamic(() => import('./BlogPost'));

const ITEMS_PER_PAGE = 6;

interface BlogPageProps {
  initialPosts: BlogPost[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ initialPosts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const categories = Array.from(new Set(initialPosts.map(post => post.category)));
  const featuredPost = initialPosts.find(post => post.featured);
  const filteredPosts = initialPosts.filter(
    post => !post.featured && (!selectedCategory || post.category === selectedCategory)
  );

  const paginatedPosts = filteredPosts.slice(0, page * ITEMS_PER_PAGE);

  useEffect(() => {
    const imagesToPreload = paginatedPosts.map(post => post.imageUrl);
    if (featuredPost) {
      imagesToPreload.unshift(featuredPost.imageUrl);
    }
    preloadImages(imagesToPreload);
  }, [paginatedPosts, featuredPost]);

  useEffect(() => {
    if (inView) {
      setPage(prev => prev + 1);
    }
  }, [inView]);

  if (selectedPost) {
    const post = initialPosts.find(post => post.id === selectedPost);
    if (post) {
      return (
        <Suspense fallback={<LoadingSpinner />}>
          <BlogPost post={post} />
        </Suspense>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {featuredPost && (
        <motion.div
          onClick={() => setSelectedPost(featuredPost.id)}
          className="cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <BlogHero
            post={{
              ...featuredPost,
              imageUrl: getOptimizedImageUrl(featuredPost.imageUrl, 1200),
            }}
          />
        </motion.div>
      )}

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="container mx-auto px-4 py-12">
        <BlogGrid posts={paginatedPosts} onPostClick={setSelectedPost} />

        {paginatedPosts.length < filteredPosts.length && (
          <div ref={ref} className="h-20">
            <LoadingSpinner />
          </div>
        )}
      </main>

      <Suspense fallback={<LoadingSpinner />}>
        <NewsletterSignup />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CallToAction />
      </Suspense>
    </div>
  );
};
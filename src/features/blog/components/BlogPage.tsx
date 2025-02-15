'use client';

import React, { useState, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { BlogPost, Category } from '@/src/types/blog';
import { BlogHero } from './Hero';
import { CategoryFilter } from './CategoryFilter';
import { BlogGrid } from './BlogGrid';
import { usePosts } from '@/src/hooks/usePosts';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';

const NewsletterSignup = dynamic(() => import('./NewsletterSignup').then(mod => mod.NewsletterSignup));
const BlogPostComponent = dynamic(() => import('./BlogPost'));

const ITEMS_PER_PAGE = 6;

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const { posts, loading, fetchPosts } = usePosts();
  
  useEffect(() => {
    fetchPosts(1);
  }, []);
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const categories = Array.from(new Set(posts.map((post: BlogPost) => post.category)));
  const featuredPost: BlogPost = posts[0];
  const filteredPosts = selectedCategory ? posts.filter(
    (post: BlogPost) => (post.category === selectedCategory)
  ) : posts;

  const paginatedPosts = filteredPosts.slice(0, page * ITEMS_PER_PAGE);

  useEffect(() => {
    if (inView) {
      setPage(prev => prev + 1);
    }
  }, [inView]);

  if (selectedPost) {
    const post = posts.find((post: BlogPost) => post.id === selectedPost);
    if (post) {
      return (
        <Suspense fallback={<LoadingSpinner />}>
          <BlogPostComponent post={post} posts={posts} />
        </Suspense>
      );
    }
  }

  if (loading) {
    return <LoadingSpinner />;
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
              image: featuredPost.image,
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
    </div>
  );
};
'use client';

import React, { useState, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { BlogPost, Category } from '@/src/types/blog';
import { BlogHero } from './Hero';
import { CategoryFilter } from './CategoryFilter';
import { BlogGrid } from './BlogGrid';
import { fetchPosts, fetchCategories } from '@/src/lib/api/cms';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';

const NewsletterSignup = dynamic(() => import('./NewsletterSignup').then(mod => mod.NewsletterSignup));
const BlogPostComponent = dynamic(() => import('./BlogPost'));

const ITEMS_PER_PAGE = 6;

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    const fetchCategoriesData = async () => {
      const fetchedCategories = await fetchCategories();  
      setCategories(fetchedCategories);
    };

    fetchData();
    fetchCategoriesData();
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const featuredPost: BlogPost = posts[0];
  const featuredCategory = categories.find((category) => category.id === featuredPost?.categories[0]);
  const filteredPosts = selectedCategory ? posts.filter(
    (post: BlogPost) => (post?.categories[0] == selectedCategory.id)
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
              category: featuredCategory?.name || "Default Category",
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
        <BlogGrid posts={paginatedPosts} categories={categories} onPostClick={setSelectedPost} />

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
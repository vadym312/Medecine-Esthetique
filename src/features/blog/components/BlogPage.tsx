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
import { useRouter } from 'next/navigation';

const NewsletterSignup = dynamic(() => import('./NewsletterSignup').then(mod => mod.NewsletterSignup));

const ITEMS_PER_PAGE = 6;

export const BlogPage: React.FC = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    const fetchCategoriesData = async () => {
      try {
        const fetchedCategories = await fetchCategories();  
        setCategories(fetchedCategories);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchData();
    fetchCategoriesData();
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const featuredCategory = categories.find((category) => category.id === featuredPost?.categories[0]);
  
  const filteredPosts = selectedCategory 
    ? posts.filter((post: BlogPost) => post?.categories[0] == selectedCategory.id)
    : posts;

  const paginatedPosts = filteredPosts.slice(0, page * ITEMS_PER_PAGE);

  useEffect(() => {
    if (inView) {
      setPage(prev => prev + 1);
    }
  }, [inView]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Impossible de charger les articles
          </h2>
          <p className="text-gray-600 mb-6">
            Nous rencontrons des difficultés pour charger les articles du blog. Veuillez réessayer ultérieurement.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {featuredPost && (
        <motion.div
          onClick={() => router.push(`/blog/${featuredPost.slug}`)}
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
        <BlogGrid posts={paginatedPosts} categories={categories} />

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
"use client";

import { useEffect } from 'react';
import { Container } from '../../ui/Container';
import { ArticleCard } from './Card';
import { usePosts } from '@/src/hooks/usePosts';
import { BlogPost } from '@/src/types/blog';

export const BlogArticles: React.FC = () => {

  const { posts, fetchPosts } = usePosts();
  useEffect(() => {
    fetchPosts(1);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          DERNIERS ARTICLES DE BLOG
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((article: BlogPost, index: number) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

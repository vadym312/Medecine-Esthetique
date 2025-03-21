"use client";

import { useState, useEffect } from "react";
import { Container } from '../../ui/Container';

import { BlogPost } from '@/src/types/blog';
import { fetchPosts } from '@/src/lib/api/cms';
import { ArticleCard } from './Card';

export const BlogArticles: React.FC = () => {

  const [posts, setPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    fetchData();
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
"use client";

import { useState, useEffect } from "react";
import { Container } from '../../ui/Container';

import { BlogPost } from '@/src/types/blog';
import { fetchPosts } from '@/src/lib/api/cms';
import { ArticleCard } from './Card';

export const BlogArticles: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Unable to load blog posts at this time');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            DERNIERS ARTICLES DE BLOG
          </h2>
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Chargement des articles...</p>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            DERNIERS ARTICLES DE BLOG
          </h2>
          <div className="text-center text-gray-600">
            <p>Nous ne pouvons pas charger les articles pour le moment.</p>
            <p className="mt-2">Veuillez consulter notre page de blog complète pour voir tous nos articles.</p>
            <a href="/blog" className="mt-4 inline-block px-6 py-2 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors">
              Visiter le blog
            </a>
          </div>
        </Container>
      </section>
    );
  }

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
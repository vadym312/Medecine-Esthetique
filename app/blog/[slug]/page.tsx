'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useParams, usePathname } from 'next/navigation';
import { BlogPost as BlogPostType } from '@/src/types/blog';
import { BlogPost } from '@/src/features/blog/components/BlogPost';
import { fetchPostBySlug, fetchPosts } from '@/src/lib/api/cms';
import { siteConfig } from '@/src/config/site';
export default function BlogPostPage() {

  const { slug } = useParams();
  const [post, setPost] = useState(null)
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      const fetchedPost = await fetchPostBySlug(slug);
      setPost(fetchedPost);
    };

    const fetchPostsData = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    fetchPostData();
    fetchPostsData();
  }, [])

  const pathname = usePathname();
  const canonicalUrl = `${siteConfig.domain}${pathname}`;

  if (!post) {
    return (
      <>
        <Head>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Article non trouvé
            </h2>
            <p className="text-gray-600">
              L'article que vous recherchez n'existe pas ou a été déplacé.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BlogPost post={post} posts={posts} />
    </>
  );
}

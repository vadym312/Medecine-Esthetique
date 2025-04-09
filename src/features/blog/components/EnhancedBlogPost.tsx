"use client";

import React from "react";
import { BlogPost as BlogPostType } from "@/src/types/blog";
import { BlogHero } from "./Hero";
import { ArticleContent } from "./ArticleContent";
import { ReadingProgress } from "./ReadingProgress";
import { RecentPosts } from "./RecentPosts";
import { NewsletterSignup } from "./NewsletterSignup";
import Head from "next/head";
import { ArticleWrapper } from "@/src/components/shared/ArticleWrapper";

interface EnhancedBlogPostProps {
  post: BlogPostType;
  posts: BlogPostType[];
}

export const EnhancedBlogPost: React.FC<EnhancedBlogPostProps> = ({ post, posts }) => {
  const recentPosts = posts
    .filter((p: BlogPostType) => p.id !== post.id)
    .slice(0, 3);

  const getPlainTextFromHtml = (html: string): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const calculateReadTime = (text: string): number => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const articleBody = getPlainTextFromHtml(post.content.rendered);
  const readTime = calculateReadTime(articleBody);

  const extractKeywords = (): string[] => {
    const keywords = ['médecine esthétique', 'Dr Emmanuel Elard', 'Paris'];
    
    if (post.category) {
      keywords.push(post.category);
    }
    
    return keywords;
  };

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={getPlainTextFromHtml(post.excerpt.rendered)} />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={getPlainTextFromHtml(post.excerpt.rendered)} />
        <meta property="og:image" content={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <ReadingProgress />
        <BlogHero post={post} />

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="col-span-1 lg:col-span-9">
              <ArticleWrapper
                title={post.title.rendered}
                description={getPlainTextFromHtml(post.excerpt.rendered)}
                imageUrl={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                datePublished={post.date}
                dateModified={post.date}
                keywords={extractKeywords()}
                articleBody={articleBody}
                readTime={readTime}
                aiAssisted={true}
                expertReviewer={{
                  name: "Dr Emmanuel Elard",
                  title: "Médecin Esthétique - Expert en Injections",
                  date: new Date().toISOString()
                }}
              >
                <ArticleContent content={post.content.rendered} />
              </ArticleWrapper>
            </div>

            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <RecentPosts posts={recentPosts} />
              </div>
            </aside>
          </div>
        </div>

        <NewsletterSignup />
      </div>
    </>
  );
};

export default EnhancedBlogPost;
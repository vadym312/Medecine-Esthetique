"use client";

import React, { useEffect } from "react";
import { BlogPost as BlogPostType } from "@/src/types/blog";
import { BlogHero } from "./Hero";
import { ArticleContent } from "./ArticleContent";
import { ReadingProgress } from "./ReadingProgress";
import { RecentPosts } from "./RecentPosts";
import { NewsletterSignup } from "./NewsletterSignup";
import Head from "next/head";

interface BlogPostProps {
  post: BlogPostType;
  posts: BlogPostType[];
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, posts }) => {
  const recentPosts = posts
    .filter((p: BlogPostType) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
        <meta property="og:title" content={post.title.rendered} />
        <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
        <meta property="og:image" content={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url} />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <ReadingProgress />
        <BlogHero post={post} />

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* <div className="hidden lg:block lg:col-span-2">
            <TableOfContents sections={post.sections} />
          </div> */}

            <article className="col-span-1 lg:col-span-7">
              <ArticleContent content={post.content.rendered} />
            </article>

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

export default BlogPost;

import { blogPosts } from '@/src/lib/mockData/blogPosts';
import { BlogPage } from '@/src/features/blog/components/BlogPage';

export default async function Page() {
  // In a real app, this would be an API call
  const posts = blogPosts;
  
  return <BlogPage initialPosts={posts} />;
}
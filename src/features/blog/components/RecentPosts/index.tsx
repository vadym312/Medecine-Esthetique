import React from 'react';
import { BlogPost } from '@/src/types/blog';
import { PostCard } from './PostCard';

interface RecentPostsProps {
  posts: BlogPost[];
  onPostClick: (postId: string) => void;
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ posts, onPostClick }) => {
  if (!posts?.length) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h4 className="text-lg font-semibold mb-6 text-gray-900">
        Articles récents
      </h4>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <PostCard
            key={post.id}
            post={post}
            onClick={() => onPostClick(post.id)}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};
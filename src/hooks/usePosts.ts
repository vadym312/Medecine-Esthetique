import { useState } from 'react';

const POSTS_PER_PAGE = 6;

export function usePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);

    const fetchPosts = async (page = 1) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/posts?page=${page}&limit=${POSTS_PER_PAGE}`);
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data.posts);
            setTotalPosts(data.total);
            setCurrentPage(page);
        } catch (error) {
            console.log(error instanceof Error ? error.message : 'Failed to fetch posts')
        } finally {
            setLoading(false);
        }
    };

    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    const getPost = async (id: string) => {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        return response.json();
    };

    return {
        posts,
        loading,
        currentPage,
        totalPages,
        fetchPosts,
        getPost,
    };
}
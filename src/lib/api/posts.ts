import { prisma } from '@/src/lib/db';

export async function getPosts(page = 1, limit = 6) {
    try {
        const skip = (page - 1) * limit;

        const [posts, total] = await Promise.all([
            prisma.post.findMany({
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.post.count(),
        ]);

        return { posts, total };
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Failed to fetch posts');
    }
}
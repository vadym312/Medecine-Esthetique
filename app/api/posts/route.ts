import { NextResponse } from 'next/server';
import { getPosts } from '@/src/lib/api/posts';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');

    const { posts, total } = await getPosts(page, limit);
    return NextResponse.json({ posts, total });
  } catch (error) {
    console.error('GET /api/posts error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
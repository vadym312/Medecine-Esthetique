import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getPost, updatePost, deletePost } from '@/lib/api/posts';
import { postSchema } from '@/lib/validations/post';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const post = await getPost(params.id);
    return NextResponse.json(post);
  } catch (error) {
    console.error('GET /api/posts/[id] error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const json = await request.json();
    const body = postSchema.partial().parse(json);

    const post = await updatePost(params.id, body);
    return NextResponse.json(post);
  } catch (error) {
    console.error('PATCH /api/posts/[id] error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await deletePost(params.id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('DELETE /api/posts/[id] error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
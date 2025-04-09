'use client';

import { BlogPage } from '@/src/features/blog/components/BlogPage';
import Head from 'next/head';
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BlogPage />
    </>
  );
}
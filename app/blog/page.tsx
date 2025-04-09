'use client';

import { BlogPage } from '@/src/features/blog/components/BlogPage';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/src/config/site';

export default function Page() {
  const pathname = usePathname();
  const canonicalUrl = `${siteConfig.domain}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BlogPage />
    </>
  );
}
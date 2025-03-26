'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { LeCabinet } from '@/src/features/about/components/LeCabinet';
import { siteConfig } from '@/src/config/site';

export default function LeCabinetPage() {

  const pathname = usePathname();
  const canonicalUrl = `${siteConfig.domain}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <LeCabinet />
    </>
  );
}
'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { LeCabinet } from '@/src/features/about/components/LeCabinet';


export default function LeCabinetPage() {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <LeCabinet />
    </>
  );
}
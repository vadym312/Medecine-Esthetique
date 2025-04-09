'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { DrEmmanuelElard } from '@/src/features/about/components/DrEmmanuelElard';
import { mockdrData } from '@/src/lib/mockData/about/dr-emmanuel-elard';
import { ExpertiseIconType } from '@/src/features/about/components/DrEmmanuelElard/Expertise/types';

// Transform the mock data to match the expected types
const transformedData = {
  home: {
    ...mockdrData.home,
    expertise: {
      ...mockdrData.home.expertise,
      items: mockdrData.home.expertise.items.map(item => ({
        ...item,
        icon: item.icon as ExpertiseIconType // Type assertion for icon
      }))
    }
  }
};

export default function DrEmmanuelElardPage() {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <DrEmmanuelElard initialData={transformedData} />
    </>
  );
}

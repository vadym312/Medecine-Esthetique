'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { Hero } from '@/src/components/procedures/traitements-injectables/botox/Hero';
import { IntroSection } from '@/src/components/procedures/traitements-injectables/botox/Intro';
import { KeyPointsInfographic } from '@/src/components/procedures/traitements-injectables/botox/KeyPointsInfographic';
import { ContentSection } from '@/src/components/procedures/traitements-injectables/Content';
import { CallToAction } from '@/src/components/procedures/traitements-injectables/CallToAction';
import { RelatedProcedures } from '@/src/components/procedures/traitements-injectables/botox/RelatedProcedures';
import { botoxData } from '@/src/lib/mockData/procedures/traitements-injectables/Botox';

const Botox: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="bg-white">
        <Hero
          title="Botox"
          imageUrl="/images/botoxpage.webp"
        />
        <IntroSection {...botoxData.intro}/>
        <KeyPointsInfographic />
        {botoxData.content.map((section, index) => (
          <ContentSection key={`botox-${index}`} {...section} />
        ))}
        <CallToAction {...botoxData.cta}/>
        <RelatedProcedures {...botoxData.relatedProcedures} />
      </div>
    </>
  );
};

export default Botox;

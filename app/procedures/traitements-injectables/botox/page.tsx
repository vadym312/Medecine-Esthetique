'use client';

import React from 'react';
import { Hero } from '@/src/components/procedures/traitements-injectables/botox/Hero';
import { IntroSection } from '@/src/components/procedures/traitements-injectables/botox/Intro';
import { KeyPointsInfographic } from '@/src/components/procedures/traitements-injectables/botox/KeyPointsInfographic';
import { ContentSection } from '@/src/components/procedures/traitements-injectables/Content';
import { CallToAction } from '@/src/components/procedures/traitements-injectables/CallToAction';
import { RelatedProcedures } from '@/src/components/procedures/traitements-injectables/botox/RelatedProcedures';
import { botoxData } from '@/src/lib/mockData/procedures/traitements-injectables/Botox';

const Botox: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero
        title="Botox"
        imageUrl="/images/botox.png"
      />
      <IntroSection {...botoxData.intro}/>
      <KeyPointsInfographic />
      {botoxData.content.map((section, index) => (
        <ContentSection key={`botox-${index}`} {...section} />
      ))}
      <CallToAction {...botoxData.cta}/>
      <RelatedProcedures {...botoxData.relatedProcedures} />
    </div>
  );
};

export default Botox;

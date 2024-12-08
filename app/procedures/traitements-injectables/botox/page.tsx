'use client';

import React from 'react';
import { Hero } from '@/src/components/procedures/traitements-injectables/botox/Hero';
import { IntroSection } from '@/src/components/procedures/traitements-injectables/botox/Intro';
import { KeyPointsInfographic } from '@/src/components/procedures/traitements-injectables/botox/KeyPointsInfographic';
import { ContentSection } from '@/src/components/procedures/traitements-injectables/botox/Content';
import { CaseStudy } from '@/src/components/procedures/traitements-injectables/botox/CaseStudy';
import { VideoSection } from '@/src/components/procedures/traitements-injectables/botox/Video';
import { ExpertiseSection } from '@/src/components/procedures/traitements-injectables/botox/Expertise';
import { CallToAction } from '@/src/components/procedures/traitements-injectables/botox/CallToAction';
import { RelatedProcedures } from '@/src/components/procedures/traitements-injectables/botox/RelatedProcedures';
import {
  botoxSections,
  relatedProcedures,
  caseStudyData,
  videoSectionData,
  expertiseData,
} from '@/src/lib/mockData/procedures/traitements-injectables/Botox';

const Botox: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero
        title="Botox"
        imageUrl="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80"
      />
      <IntroSection />
      <KeyPointsInfographic />
      {botoxSections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
      <CaseStudy {...caseStudyData} />
      <VideoSection {...videoSectionData} />
      <ExpertiseSection {...expertiseData} />
      <CallToAction />
      <RelatedProcedures procedures={relatedProcedures} />
    </div>
  );
};

export default Botox;

'use client';

import React from 'react';
import { Hero } from '@/src/components/procedures/technologies-avancees/hifu/Hero';
import { KeyPointsGrid } from '@/src/components/procedures/technologies-avancees/hifu/KeyPoints/Grid';
import { VideoSection } from '@/src/components/procedures/technologies-avancees/hifu/Video';
import { CaseStudySection } from '@/src/components/procedures/technologies-avancees/hifu/CaseStudy';
import { ExpertiseSection } from '@/src/components/procedures/technologies-avancees/hifu/Expertise';
import { TestimonialsSection } from '@/src/components/procedures/technologies-avancees/hifu/Testimonials';
import { AppointmentSection } from '@/src/components/procedures/technologies-avancees/hifu/Appointment';
import { ProceduresGrid } from '@/src/components/procedures/Grid';
import { hifuKeyPoints } from '@/src/lib/mockData/procedures/technologies-avancees/hifu/KeyPoints';

import {
  introSection,
  agingSection,
  techniquesSection,
  resultsSection,
  caseStudyData,
  expertiseData,
  testimonials,
  relatedProcedures,
} from '@/src/lib/mockData/procedures/technologies-avancees/hifu/Data';

const HifuPage: React.FC = () => {
  return (
    <>
      <Hero
        title="HIFU"
        subtitle="Lifting Sans Chirurgie"
        imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
      />

      <KeyPointsGrid
        title="Points Clés du Traitement"
        points={hifuKeyPoints}
      />

      <VideoSection {...introSection} className="bg-white" isReversed={false} />

      <VideoSection
        {...agingSection}
        className="bg-gray-50"
        isReversed={true}
      />

      <VideoSection
        {...techniquesSection}
        className="bg-white"
        isReversed={false}
      />

      <VideoSection
        {...resultsSection}
        className="bg-gray-50"
        isReversed={true}
      />

      <CaseStudySection {...caseStudyData} className="bg-white" />

      <ExpertiseSection {...expertiseData} className="bg-gray-50" />

      <TestimonialsSection testimonials={testimonials} className="bg-white" />

      <AppointmentSection className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent" />

      <ProceduresGrid
        title="Ces procédures pourraient vous intéresser"
        procedures={relatedProcedures}
        className="bg-gray-50"
      />
    </>
  );
};

export default HifuPage;
'use client';

import React from 'react';
import { Hero } from '@/src/components/procedures/technologies-avancees/radiofrequence/Hero';
import { KeyPointsGrid } from '@/src/components/procedures/technologies-avancees/radiofrequence/KeyPoints/Grid';
import { VideoSection } from '@/src/components/procedures/technologies-avancees/radiofrequence/Video';
import { CaseStudySection } from '@/src/components/procedures/technologies-avancees/radiofrequence/CaseStudy';
import { ExpertiseSection } from '@/src/components/procedures/technologies-avancees/radiofrequence/Expertise';
import { TestimonialsSection } from '@/src/components/procedures/technologies-avancees/radiofrequence/Testimonials';
import { AppointmentSection } from '@/src/components/procedures/technologies-avancees/radiofrequence/Appointment';
import { ProceduresGrid } from '@/src/components/procedures/Grid';
import { radiofrequenceKeyPoints } from '@/src/lib/mockData/procedures/technologies-avancees/radiofrequence/KeyPoints';

import {
  introSection,
  agingSection,
  techniquesSection,
  resultsSection,
  caseStudyData,
  expertiseData,
  testimonials,
  relatedProcedures,
} from '@/src/lib/mockData/procedures/technologies-avancees/radiofrequence/Data';

const RadiofrequencePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Radiofréquence"
        subtitle="Raffermissement Cutané Non-Invasif"
        imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
      />

      <KeyPointsGrid
        title="Points Clés du Traitement"
        points={radiofrequenceKeyPoints}
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

export default RadiofrequencePage;
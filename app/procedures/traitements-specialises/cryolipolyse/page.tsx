'use client';

import React from 'react';
import { Hero } from '@/src/components/procedures/traitements-specialises/cryolipolyse/Hero';
import { KeyPointsGrid } from '@/src/components/procedures/traitements-specialises/cryolipolyse/KeyPoints/Grid';
import { VideoSection } from '@/src/components/procedures/traitements-specialises/cryolipolyse/Video';
import { CaseStudySection } from '@/src/components/procedures/traitements-specialises/cryolipolyse/CaseStudy';
import { ExpertiseSection } from '@/src/components/procedures/traitements-specialises/cryolipolyse/Expertise';
import { TestimonialsSection } from '@/src/components/procedures/traitements-specialises/cryolipolyse/Testimonials';
import { AppointmentSection } from '@/src/components/procedures/traitements-specialises/cryolipolyse/Appointment';
import { ProceduresGrid } from '@/src/components/procedures/Grid';
import { cryolipolyseKeyPoints } from '@/src/lib/mockData/procedures/traitements-specialises/cryolipolyse/KeyPoints';

import {
  introSection,
  agingSection,
  techniquesSection,
  resultsSection,
  caseStudyData,
  expertiseData,
  testimonials,
  relatedProcedures,
} from '@/src/lib/mockData/procedures/traitements-specialises/cryolipolyse/Data';

const CryolipolysePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Cryolipolyse"
        subtitle="Élimination des Graisses par le Froid"
        imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
      />

      <KeyPointsGrid
        title="Points Clés du Traitement"
        points={cryolipolyseKeyPoints}
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

export default CryolipolysePage;
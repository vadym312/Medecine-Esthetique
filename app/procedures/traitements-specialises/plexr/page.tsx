'use client';

import React from 'react';
import { Hero } from '@/src/components/procedures/traitements-specialises/plexr/Hero';
import { KeyPointsGrid } from '@/src/components/procedures/traitements-specialises/plexr/KeyPoints/Grid';
import { VideoSection } from '@/src/components/procedures/traitements-specialises/plexr/Video';
import { CaseStudySection } from '@/src/components/procedures/traitements-specialises/plexr/CaseStudy';
import { ExpertiseSection } from '@/src/components/procedures/traitements-specialises/plexr/Expertise';
import { TestimonialsSection } from '@/src/components/procedures/traitements-specialises/plexr/Testimonials';
import { AppointmentSection } from '@/src/components/procedures/traitements-specialises/plexr/Appointment';
import { ProceduresGrid } from '@/src/components/procedures/Grid';
import { plexrKeyPoints } from '@/src/lib/mockData/procedures/traitements-specialises/plexr/KeyPoints';

import {
  introSection,
  agingSection,
  techniquesSection,
  resultsSection,
  caseStudyData,
  expertiseData,
  testimonials,
  relatedProcedures,
} from '@/src/lib/mockData/procedures/traitements-specialises/plexr/Data';

const PlexrPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Plexr"
        subtitle="Blépharoplastie Sans Chirurgie"
        imageUrl="https://images.unsplash.com/photo-1522337094846-8a818192de1f"
      />

      <KeyPointsGrid
        title="Points Clés du Traitement"
        points={plexrKeyPoints}
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

export default PlexrPage;
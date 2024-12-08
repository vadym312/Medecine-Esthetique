'use client';

import React from 'react';
import { Hero } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/Hero';
import { KeyPointsGrid } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/KeyPoints/Grid';
import { VideoSection } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/Video';
import { CaseStudySection } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/CaseStudy';
import { ExpertiseSection } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/Expertise';
import { TestimonialsSection } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/Testimonials';
import { AppointmentSection } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/Appointment';
import { ProceduresGrid } from '@/src/components/procedures/Grid';
import { hyaluronicAcidKeyPoints } from '@/src/lib/mockData/procedures/traitements-injectables/acide-hyaluronique/KeyPoints';

import {
  introSection,
  agingSection,
  techniquesSection,
  resultsSection,
  caseStudyData,
  expertiseData,
  testimonials,
  relatedProcedures,
} from '@/src/lib/mockData/procedures/traitements-injectables/acide-hyaluronique/Data';

const AcideHyaluroniquePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Acide Hyaluronique"
        subtitle="La solution naturelle pour un rajeunissement harmonieux"
        imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
      />

      <KeyPointsGrid
        title="Points Clés de l'Acide Hyaluronique"
        points={hyaluronicAcidKeyPoints}
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

export default AcideHyaluroniquePage;
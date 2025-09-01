'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentTestimonials } from '@/src/components/shared/treatments/Testimonials';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { epilationLaserData } from '@/src/lib/mockData/procedures/technologies-avancees/epilation-laser';

const EpilationLaserPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...epilationLaserData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {epilationLaserData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...epilationLaserData.types} />
      <TreatmentProcedure {...epilationLaserData.procedure} />
      <TreatmentVideo {...epilationLaserData.video} />
      <TreatmentResults {...epilationLaserData.results} />
      <TreatmentTestimonials {...epilationLaserData.testimonials} />
      <TreatmentFAQ {...epilationLaserData.faq} />
      <TreatmentCTA {...epilationLaserData.cta} />
      <RelatedProcedures {...epilationLaserData.relatedProcedures} />
    </>
  );
};

export default EpilationLaserPage;
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
import { mesoliftData } from '@/src/lib/mockData/injections/soins/mesolift/Data';

const MesoliftPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...mesoliftData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {mesoliftData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...mesoliftData.types} />
      <TreatmentProcedure {...mesoliftData.procedure} />
      <TreatmentVideo {...mesoliftData.video} />
      <TreatmentResults {...mesoliftData.results} />
      <TreatmentTestimonials {...mesoliftData.testimonials} />
      <TreatmentFAQ {...mesoliftData.faq} />
      <TreatmentCTA {...mesoliftData.cta} />
      <RelatedProcedures {...mesoliftData.relatedProcedures} />
    </>
  );
};

export default MesoliftPage;
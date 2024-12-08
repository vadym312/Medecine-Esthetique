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
import { plisAmertumesData } from '@/src/lib/mockData/injections/levres/plis-amertume/Data';

const PlisAmertumePage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...plisAmertumesData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {plisAmertumesData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...plisAmertumesData.types} />
      <TreatmentProcedure {...plisAmertumesData.procedure} />
      <TreatmentVideo {...plisAmertumesData.video} />
      <TreatmentResults {...plisAmertumesData.results} />
      <TreatmentTestimonials {...plisAmertumesData.testimonials} />
      <TreatmentFAQ {...plisAmertumesData.faq} />
      <TreatmentCTA {...plisAmertumesData.cta} />
      <RelatedProcedures {...plisAmertumesData.relatedProcedures} />
    </>
  );
};

export default PlisAmertumePage;
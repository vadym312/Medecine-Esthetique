'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentTestimonials } from '@/src/components/shared/treatments/Testimonials';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { ridesPeribuccalesData } from '@/src/lib/mockData/injections/levres/rides-peribuccales/Data';

const RidesPeribuccalesPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...ridesPeribuccalesData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {ridesPeribuccalesData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...ridesPeribuccalesData.types} />
      <TreatmentProcedure {...ridesPeribuccalesData.procedure} />
      <TreatmentResults {...ridesPeribuccalesData.results} />
      <TreatmentTestimonials {...ridesPeribuccalesData.testimonials} />
      <TreatmentFAQ {...ridesPeribuccalesData.faq} />
      <TreatmentCTA {...ridesPeribuccalesData.cta} />
      <RelatedProcedures {...ridesPeribuccalesData.relatedProcedures} />
    </>
  );
};

export default RidesPeribuccalesPage;
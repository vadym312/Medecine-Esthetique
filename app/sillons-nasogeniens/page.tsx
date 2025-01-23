'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentAvant } from '@/src/components/shared/treatments/Avant_Après';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentTestimonials } from '@/src/components/shared/treatments/Testimonials';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { sillonsNasogeniensData } from '@/src/lib/mockData/injections/visage/sillons-nasogeniens/Data';

const SillonsNasogeniensPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...sillonsNasogeniensData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {sillonsNasogeniensData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...sillonsNasogeniensData.types} />
      <TreatmentProcedure {...sillonsNasogeniensData.procedure} />
      <TreatmentVideo {...sillonsNasogeniensData.video} />
      <TreatmentAvant {...sillonsNasogeniensData.avant_apres}/>
      <TreatmentResults {...sillonsNasogeniensData.results} />
      <TreatmentTestimonials {...sillonsNasogeniensData.testimonials} />
      <TreatmentFAQ {...sillonsNasogeniensData.faq} />
      <TreatmentCTA {...sillonsNasogeniensData.cta} />
      <RelatedProcedures {...sillonsNasogeniensData.relatedProcedures} />
    </>
  );
};

export default SillonsNasogeniensPage;
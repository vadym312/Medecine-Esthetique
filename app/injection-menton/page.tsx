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
import { mentonData } from '@/src/lib/mockData/injections/visage/menton/Data';

const MentonPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...mentonData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {mentonData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...mentonData.types} />
      <TreatmentProcedure {...mentonData.procedure} />
      <TreatmentAvant {...mentonData.avant_apres}/>
      <TreatmentVideo {...mentonData.video} />
      <TreatmentAvant {...mentonData.avant_apresd}/>
      <TreatmentResults {...mentonData.results} />
      <TreatmentTestimonials {...mentonData.testimonials} />
      <TreatmentFAQ {...mentonData.faq} />
      <TreatmentCTA {...mentonData.cta} />
      <RelatedProcedures {...mentonData.relatedProcedures} />
    </>
  );
};

export default MentonPage;
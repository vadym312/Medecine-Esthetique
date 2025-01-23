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
import { frontData } from '@/src/lib/mockData/injections/visage/front/Data';

const FrontPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...frontData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {frontData.intro.text}
        </p>
        <p className="text-center text-lg text-gray-700 leading-relaxed">Le <b>Dr Emmanuel Elard</b>, expert en esthétique médicale à Paris, utilise des techniques avancées comme la <b>myomodulation</b> pour offrir des résultats naturels et harmonieux.</p>
        <p className="text-center text-lg text-gray-700 leading-relaxed"><b>Prenez rendez-vous dès aujourd’hui pour bénéficier d’un traitement personnalisé.</b></p>
      </div>

      <TreatmentTypes {...frontData.types} />
      <TreatmentProcedure {...frontData.procedure} />
      <TreatmentAvant {...frontData.avant_apres}/>
      <TreatmentVideo {...frontData.video} />
      <TreatmentResults {...frontData.results} />
      <TreatmentTestimonials {...frontData.testimonials} />
      <TreatmentFAQ {...frontData.faq} />
      <TreatmentCTA {...frontData.cta} />
      <RelatedProcedures {...frontData.relatedProcedures} />
    </>
  );
};

export default FrontPage;
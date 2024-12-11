'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { KeyPointsGrid } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/KeyPoints/Grid';
import { ContentSection } from '@/src/components/procedures/traitements-injectables/Content';
import { CallToAction } from '@/src/components/procedures/traitements-injectables/CallToAction';
import { ProceduresGrid } from '@/src/components/procedures/Grid';
import { hyaluronicAcidKeyPoints } from '@/src/lib/mockData/procedures/traitements-injectables/acide-hyaluronique/KeyPoints';
import { acideData } from '@/src/lib/mockData/procedures/traitements-injectables/acide-hyaluronique/Data';

const AcideHyaluroniquePage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...acideData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {acideData.introText.map((intro, index) =>
          <p className="text-center text-lg text-gray-700 leading-relaxed" key={index}>
            {intro}
          </p>
        )}
      </div>

      <KeyPointsGrid
        title="Points Clés de l'Acide Hyaluronique"
        points={hyaluronicAcidKeyPoints}
      />
      {acideData.content.map((section, index) =>
        <ContentSection {...section} key={`acide-${index}`} className={`${index % 2 == 0 ? "bg-white" : "bg-gray-50"}`} />
      )}

      <CallToAction {...acideData.cta}/>

      <ProceduresGrid
        {...acideData.relatedProcedures}
        className="bg-gray-50"
      />
    </>
  );
};

export default AcideHyaluroniquePage;
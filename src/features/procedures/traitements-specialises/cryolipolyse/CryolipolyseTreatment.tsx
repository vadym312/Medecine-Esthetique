'use client';

import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { TreatmentProcess } from './components/TreatmentProcess';
import { Results } from './components/Results';
import { FAQ } from './components/FAQ';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { cryolipolyseData } from '@/src/lib/mockData/procedures/traitements-specialises/cryolipolyse';

export const CryolipolyseTreatment: React.FC = () => {
  return (
    <>
      <Hero {...cryolipolyseData.hero} />
      <Benefits {...cryolipolyseData.benefits} />
      <TreatmentProcess {...cryolipolyseData.process} />
      <Results {...cryolipolyseData.results} />
      <FAQ {...cryolipolyseData.faq} />
      <CaseStudies {...cryolipolyseData.caseStudies} />
      <Testimonials {...cryolipolyseData.testimonials} />
      <Booking {...cryolipolyseData.booking} />
    </>
  );
};
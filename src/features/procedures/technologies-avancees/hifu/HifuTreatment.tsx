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
import { hifuData } from '@/src/lib/mockData/procedures/technologies-avancees/hifu';

export const HifuTreatment: React.FC = () => {
  return (
    <>
      <Hero {...hifuData.hero} />
      <Benefits {...hifuData.benefits} />
      <TreatmentProcess {...hifuData.process} />
      <Results {...hifuData.results} />
      <FAQ {...hifuData.faq} />
      <CaseStudies {...hifuData.caseStudies} />
      <Testimonials {...hifuData.testimonials} />
      <Booking {...hifuData.booking} />
    </>
  );
};
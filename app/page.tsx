'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { Hero } from '@/src/components/homepage/Hero';
import { DoctorBanner } from '@/src/components/homepage/DoctorBanner';
import { Services } from '@/src/components/homepage/Services';
import { FeaturedTreatment } from '@/src/components/homepage/FeaturedTreatment';
import { Testimonials } from '@/src/components/homepage/Testimonials';
import { InstagramFeed } from '@/src/components/homepage/InstagramFeed';
import { BlogArticles } from '@/src/components/homepage/BlogArticles';
import { Contact } from '@/src/components/homepage/Contact';
import { siteConfig } from '@/src/config/site';

const Homepage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${siteConfig.domain}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      
      <Hero />
      <DoctorBanner />
      <Services />
      <FeaturedTreatment />
      <Testimonials />
      <InstagramFeed />
      <BlogArticles />
      <Contact />
    </>
  );
};

export default Homepage;

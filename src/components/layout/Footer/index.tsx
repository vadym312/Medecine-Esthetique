'use client';

import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Copyright } from './Copyright';
import { footer } from '@/src/lib/mockData/common';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-light text-white mb-6">
          {footer.title}
        </h2>
        <SocialLinks links={footer.social.links} />
        <Copyright text={footer.copyright.text} subtext={footer.copyright.subtext} />
      </div>
    </footer>
  );
};
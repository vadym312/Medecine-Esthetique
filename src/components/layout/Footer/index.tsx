'use client';

import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Copyright } from './Copyright';
import Link from 'next/link';

export interface FooterProps {
  title?: string;
  socialLinks?: {
    platform: 'tiktok' | 'instagram' | 'facebook' | 'linkedin';
    url: string;
  }[];
  copyright?: {
    text?: string;
    subtext?: string;
  };
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  title = 'Dr. Emmanuel ELARD',
  socialLinks,
  copyright,
}) => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-light text-white mb-6">
          {title}
        </h2>
        <SocialLinks links={socialLinks} />
        
        <div className="flex justify-center mb-6 space-x-6">
          <Link 
            href="/about-ai" 
            className="text-white hover:text-gold transition-colors text-sm"
          >
            Notre Approche IA
          </Link>
          <Link 
            href="/authors" 
            className="text-white hover:text-gold transition-colors text-sm"
          >
            Nos Experts
          </Link>
        </div>
        
        <Copyright {...copyright} />
      </div>
    </footer>
  );
};
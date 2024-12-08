import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Copyright } from './Copyright';

export interface SocialLink {
  platform: 'tiktok' | 'instagram' | 'facebook' | 'linkedin';
  url: string;
}
export interface FooterProps {
  title?: string;
  socialLinks?: SocialLink[];
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
  className = '',
}) => {
  return (
    <footer className={`bg-black py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-light text-white mb-6">
          {title}
        </h2>
        <SocialLinks links={socialLinks} />
        <Copyright {...copyright} />
      </div>
    </footer>
  );
};

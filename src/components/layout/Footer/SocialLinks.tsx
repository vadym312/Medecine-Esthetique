import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export interface SocialLink {
  platform: 'tiktok' | 'instagram' | 'facebook' | 'linkedin';
  url: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links = [
    { platform: 'tiktok', url: '#' },
    { platform: 'instagram', url: '#' },
    { platform: 'facebook', url: '#' },
    { platform: 'linkedin', url: '#' },
  ],
}) => {
  const renderIcon = (platform: string) => {
    switch (platform) {
      case 'tiktok':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        );
      case 'instagram':
        return <Instagram size={24} />;
      case 'facebook':
        return <Facebook size={24} />;
      case 'linkedin':
        return <Linkedin size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center gap-6 mb-6">
      {links.map(({ platform, url }) => (
        <a
          key={platform}
          href={url}
          className="text-white hover:text-primary transition-all duration-500 ease-in-out transform hover:scale-110"
          aria-label={`Suivez-nous sur ${platform}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderIcon(platform)}
        </a>
      ))}
    </div>
  );
};

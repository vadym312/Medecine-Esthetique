'use client';

import React from 'react';
import { Cpu, Briefcase, GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Credential {
  type: 'education' | 'certification' | 'award';
  name: string;
  issuedBy?: string;
  year?: string;
}

interface AITeamMemberProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  aiSpecialty?: string;
  credentials?: Credential[];
  profileUrl?: string;
  className?: string;
}

export const AITeamMember: React.FC<AITeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  aiSpecialty,
  credentials = [],
  profileUrl,
  className = ''
}) => {
  const getCredentialIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
      case 'certification':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'award':
        return <Award className="w-4 h-4 text-gold" />;
      default:
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {image ? (
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
          )}
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600">{role}</p>
            
            {aiSpecialty && (
              <div className="flex items-center mt-1">
                <Cpu className="w-4 h-4 text-blue-500 mr-1" />
                <span className="text-sm text-blue-700">{aiSpecialty}</span>
              </div>
            )}
          </div>
        </div>
        
        {bio && (
          <p className="text-gray-700 mb-4">{bio}</p>
        )}
        
        {credentials.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Qualifications</h4>
            <ul className="space-y-1">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-center text-sm">
                  {getCredentialIcon(credential.type)}
                  <span className="ml-2">
                    {credential.name}
                    {credential.issuedBy && <span className="text-gray-500"> • {credential.issuedBy}</span>}
                    {credential.year && <span className="text-gray-500"> • {credential.year}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {profileUrl && (
          <div className="mt-4">
            <Link 
              href={profileUrl}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Voir le profil complet →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// Import CheckCircle for credential icons
import { CheckCircle } from 'lucide-react';
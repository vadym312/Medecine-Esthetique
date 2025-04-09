'use client';

import React from 'react';
import { Author } from '@/src/types/author';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Award, BookOpen, Briefcase, Mail, Globe, Linkedin, Twitter, Facebook, Instagram, Users } from 'lucide-react';
import { AIContentBadge } from '@/src/components/shared/AIContentBadge';
import { formatDate } from '@/src/utils/formatDate';
import { AuthorSchema } from './AuthorSchema';

interface AuthorProfileProps {
  author: Author;
}

export const AuthorProfile: React.FC<AuthorProfileProps> = ({ author }) => {
  const formatJoinedDate = (dateString?: string) => {
    if (!dateString) return '';
    return formatDate(dateString);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'website':
        return <Globe className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getCredentialIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'certification':
        return <Award className="w-5 h-5 text-green-500" />;
      case 'award':
        return <Award className="w-5 h-5 text-gold" />;
      case 'publication':
        return <BookOpen className="w-5 h-5 text-purple-500" />;
      default:
        return <Award className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <AuthorSchema author={author} />
      
      {author.coverImage && (
        <div className="relative h-64 md:h-80 lg:h-96 w-full">
          <Image
            src={author.coverImage}
            alt={`${author.name} - ${author.title}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white rounded-lg shadow-md p-6 ${author.coverImage ? '-mt-20 relative z-10' : 'mt-12'}`}>
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{author.name}</h1>
                  {author.aiRole && (
                    <AIContentBadge size="sm" variant="subtle" />
                  )}
                </div>
                
                <p className="text-gray-600 font-medium mb-3">{author.title}</p>
                
                {author.joinedDate && (
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Membre depuis {formatJoinedDate(author.joinedDate)}</span>
                  </div>
                )}
                
                {author.socialProfiles && author.socialProfiles.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {author.socialProfiles.map((profile, index) => (
                      <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label={`${author.name} sur ${profile.platform}`}
                      >
                        {getSocialIcon(profile.platform)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Biographie</h2>
                <div className="prose prose-sm max-w-none">
                  {author.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {author.aiRole && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Rôle dans la Création de Contenu IA</h2>
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Responsabilité</h3>
                    <p className="text-gray-700">{author.aiRole}</p>
                  </div>
                  
                  {author.aiOversight && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Supervision et Validation</h3>
                      <p className="text-gray-700">{author.aiOversight}</p>
                    </div>
                  )}
                </div>
              )}
              
              {author.publications && author.publications.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Publications</h2>
                  <div className="space-y-4">
                    {author.publications.map((publication, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <h3 className="font-medium text-gray-900">
                          {publication.url ? (
                            <a 
                              href={publication.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 transition-colors"
                            >
                              {publication.title}
                            </a>
                          ) : (
                            publication.title
                          )}
                        </h3>
                        
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          {publication.publisher && (
                            <span className="mr-3">{publication.publisher}</span>
                          )}
                          
                          {publication.date && (
                            <span>{formatDate(publication.date)}</span>
                          )}
                        </div>
                        
                        {publication.description && (
                          <p className="text-gray-700 text-sm mt-2">{publication.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {author.teamMembers && author.teamMembers.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Membres de l'Équipe</h2>
                  <div className="space-y-4">
                    {author.teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        {member.avatar ? (
                          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={member.avatar}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                            <Users className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                        
                        <div>
                          <h3 className="font-medium text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.title}</p>
                          {member.role && (
                            <p className="text-xs text-gray-500 mt-1">{member.role}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Domaines d'Expertise</h2>
                <div className="space-y-3">
                  {author.expertise.map((item, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                      )}
                      {item.level && (
                        <div className="mt-2">
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full"
                              style={{ 
                                width: item.level === 'beginner' ? '25%' : 
                                       item.level === 'intermediate' ? '50%' : 
                                       item.level === 'advanced' ? '75%' : '100%' 
                              }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 capitalize">{item.level}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Qualifications</h2>
                <div className="space-y-3">
                  {author.credentials.map((credential, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        {getCredentialIcon(credential.type)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{credential.name}</h3>
                        <div className="flex flex-wrap text-sm text-gray-500 mt-1">
                          {credential.issuedBy && (
                            <span className="mr-2">{credential.issuedBy}</span>
                          )}
                          {credential.year && (
                            <span>{credential.year}</span>
                          )}
                        </div>
                        {credential.url && (
                          <a 
                            href={credential.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-800 mt-1 inline-block"
                          >
                            Voir le certificat
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {author.featuredPosts && author.featuredPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Articles Populaires</h2>
                  <div className="space-y-3">
                    {author.featuredPosts.map((slug, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                        <Link 
                          href={`/blog/${slug}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
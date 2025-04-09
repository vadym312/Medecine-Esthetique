export interface AuthorCredential {
  type: 'education' | 'certification' | 'award' | 'publication';
  name: string;
  issuedBy?: string;
  year?: string;
  url?: string;
}

export interface AuthorSocialProfile {
  platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'website' | 'email';
  url: string;
}

export interface AuthorExpertise {
  name: string;
  description?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  shortBio?: string;
  avatar: string;
  coverImage?: string;
  credentials: AuthorCredential[];
  socialProfiles?: AuthorSocialProfile[];
  expertise: AuthorExpertise[];
  aiRole?: string;
  aiOversight?: string;
  publications?: {
    title: string;
    url?: string;
    publisher?: string;
    date?: string;
    description?: string;
  }[];
  teamMembers?: {
    name: string;
    title: string;
    avatar?: string;
    role?: string;
  }[];
  joinedDate?: string;
  featuredPosts?: string[];
}
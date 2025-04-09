import { Author } from '@/src/types/author';

export const authors: Author[] = [
  {
    id: 'dr-emmanuel-elard',
    slug: 'dr-emmanuel-elard',
    name: 'Dr Emmanuel Elard',
    title: 'Médecin Esthétique - Directeur Médical',
    bio: 'Le Dr Emmanuel Elard est un médecin esthétique reconnu, spécialisé dans les techniques d\'injection avancées et l\'intégration des technologies d\'intelligence artificielle en médecine esthétique. Avec plus de 15 ans d\'expérience, il est pionnier dans l\'utilisation de l\'IA pour personnaliser les traitements esthétiques. Formé à l\'Université Paris XII, il est titulaire d\'un Diplôme Universitaire en Techniques d\'Injection et d\'un Master en Médecine Anti-Âge. Sa double expertise en médecine esthétique et en technologies numériques lui permet d\'offrir des soins à la pointe de l\'innovation. En tant que directeur médical, le Dr Elard supervise l\'ensemble du contenu médical produit par notre équipe, y compris celui assisté par l\'intelligence artificielle. Il valide personnellement chaque article pour garantir l\'exactitude scientifique et la pertinence clinique des informations partagées.',
    shortBio: 'Expert en médecine esthétique et pionnier dans l\'intégration de l\'IA pour des traitements personnalisés.',
    avatar: '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
    coverImage: '/images/about/dr-elard-specialiste-anti-age-paris.webp',
    credentials: [
      {
        type: 'education',
        name: 'Diplôme Universitaire en Techniques d\'Injection',
        issuedBy: 'Université Paris XII',
        year: '2008'
      },
      {
        type: 'education',
        name: 'Master en Médecine Anti-Âge',
        issuedBy: 'Université de Paris',
        year: '2010'
      },
      {
        type: 'certification',
        name: 'Formation avancée en IA médicale',
        issuedBy: 'Institut d\'Intelligence Artificielle Médicale',
        year: '2022'
      },
      {
        type: 'award',
        name: 'Prix de l\'Innovateur de l\'Année',
        issuedBy: 'Aesthetic Awards',
        year: '2023'
      }
    ],
    socialProfiles: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/dr-elard'
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/dr.elard'
      },
      {
        platform: 'website',
        url: 'https://medecine-esthetique.net'
      },
      {
        platform: 'email',
        url: 'mailto:contact@medecine-esthetique.net'
      }
    ],
    expertise: [
      {
        name: 'Injections d\'acide hyaluronique',
        description: 'Expert en techniques avancées d\'injection pour le rajeunissement facial',
        level: 'expert'
      },
      {
        name: 'Toxine botulique',
        description: 'Spécialiste des injections de Botox pour le traitement des rides d\'expression',
        level: 'expert'
      },
      {
        name: 'Intelligence artificielle en médecine esthétique',
        description: 'Pionnier dans l\'utilisation de l\'IA pour l\'analyse faciale et la planification des traitements',
        level: 'expert'
      },
      {
        name: 'Médecine anti-âge',
        description: 'Approche globale du vieillissement cutané',
        level: 'expert'
      }
    ],
    aiRole: 'Supervision et validation de tout contenu généré par IA',
    aiOversight: 'En tant que médecin spécialiste, je supervise personnellement tout contenu assisté par IA publié sur notre site. Chaque article est révisé pour garantir l\'exactitude médicale, la pertinence clinique et le respect des normes éthiques les plus élevées.',
    publications: [
      {
        title: 'L\'intelligence artificielle au service de la médecine esthétique : perspectives et applications',
        publisher: 'Journal de Médecine Esthétique',
        date: '2023-05-15',
        description: 'Étude des applications actuelles et futures de l\'IA dans la pratique de la médecine esthétique'
      },
      {
        title: 'Techniques avancées d\'injection d\'acide hyaluronique guidées par IA',
        publisher: 'Revue Internationale de Médecine Esthétique',
        date: '2022-11-10',
        description: 'Présentation d\'une nouvelle approche combinant expertise médicale et analyse faciale par IA'
      }
    ],
    joinedDate: '2010-01-01',
    featuredPosts: ['acide-hyaluronique-medecine-esthetique-importance-et-avantages', 'comprendre-transpiration-excessive-et-botox']
  },
  {
    id: 'sophie-martin',
    slug: 'sophie-martin',
    name: 'Dr Sophie Martin',
    title: 'Médecin Esthétique - Spécialiste IA',
    bio: 'Le Dr Sophie Martin est médecin esthétique spécialisée dans l\'application de l\'intelligence artificielle aux traitements esthétiques. Titulaire d\'un doctorat en Intelligence Artificielle Médicale de l\'École Polytechnique, elle combine expertise médicale et maîtrise des technologies numériques avancées.\n\nAu sein de notre équipe, le Dr Martin développe des algorithmes d\'analyse faciale permettant de personnaliser les traitements esthétiques selon la morphologie unique de chaque patient. Elle supervise également la création de contenu médical assisté par IA, assurant que toutes les informations partagées respectent les plus hauts standards scientifiques.\n\nSa double formation lui permet d\'avoir une vision holistique de la médecine esthétique moderne, où l\'art médical s\'enrichit des possibilités offertes par l\'intelligence artificielle, tout en maintenant l\'humain au centre de la démarche thérapeutique.',
    shortBio: 'Médecin esthétique spécialiste de l\'IA appliquée aux traitements personnalisés.',
    avatar: '/images/about/formateur-Dr-ELARD.webp',
    coverImage: '/images/about/dr-elard-specialiste-anti-age-paris.webp',
    credentials: [
      {
        type: 'education',
        name: 'Doctorat en Intelligence Artificielle Médicale',
        issuedBy: 'École Polytechnique',
        year: '2018'
      },
      {
        type: 'education',
        name: 'Diplôme d\'Études Spécialisées en Médecine Esthétique',
        issuedBy: 'Université de Paris',
        year: '2015'
      },
      {
        type: 'certification',
        name: 'Certification en Éthique de l\'IA en Santé',
        issuedBy: 'Institut d\'Éthique Numérique',
        year: '2020'
      }
    ],
    socialProfiles: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/dr-sophie-martin'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/drsophiemartin'
      }
    ],
    expertise: [
      {
        name: 'Intelligence artificielle en médecine',
        description: 'Développement et application d\'algorithmes d\'IA pour la médecine esthétique',
        level: 'expert'
      },
      {
        name: 'Analyse faciale assistée par ordinateur',
        description: 'Utilisation de technologies 3D pour l\'analyse morphologique',
        level: 'expert'
      },
      {
        name: 'Éthique de l\'IA en santé',
        description: 'Spécialiste des questions éthiques liées à l\'utilisation de l\'IA en médecine',
        level: 'advanced'
      }
    ],
    aiRole: 'Développement d\'algorithmes d\'IA et supervision de contenu',
    aiOversight: 'Je supervise le développement de nos outils d\'IA et veille à ce que tout contenu généré soit scientifiquement exact et éthiquement responsable. Mon expertise en IA médicale me permet d\'assurer que nos technologies respectent les plus hauts standards de qualité et de sécurité.',
    publications: [
      {
        title: 'L\'éthique de l\'IA dans la médecine esthétique moderne',
        publisher: 'Journal d\'Éthique Médicale',
        date: '2022-03-20',
        description: 'Analyse des enjeux éthiques liés à l\'utilisation de l\'IA en médecine esthétique'
      }
    ],
    joinedDate: '2019-06-01'
  },
  {
    id: 'ai-content-team',
    slug: 'ai-content-team',
    name: 'Équipe Éditoriale IA',
    title: 'Équipe de Création de Contenu Assistée par IA',
    bio: 'Notre équipe éditoriale IA représente une collaboration innovante entre experts humains et intelligence artificielle. Composée de médecins spécialistes, de rédacteurs médicaux et d\'ingénieurs en IA, cette équipe développe du contenu médical de haute qualité en utilisant les technologies d\'intelligence artificielle les plus avancées.\n\nLe processus de création commence par l\'identification des sujets pertinents par nos experts médicaux. L\'IA assiste ensuite dans la recherche et la structuration des informations, en s\'appuyant sur les dernières publications scientifiques. Chaque article passe par plusieurs étapes de révision humaine : une première validation par nos rédacteurs médicaux, puis une révision approfondie par nos médecins spécialistes qui vérifient l\'exactitude scientifique et la pertinence clinique des informations.\n\nCette approche collaborative nous permet de produire un contenu riche, précis et à jour, tout en maintenant l\'expertise humaine au cœur du processus. Notre engagement est de fournir des informations médicales fiables, accessibles et personnalisées, en combinant le meilleur de l\'intelligence artificielle et de l\'expertise humaine.',
    shortBio: 'Équipe collaborative d\'experts médicaux et d\'IA créant du contenu médical de haute qualité.',
    avatar: '/images/about/LO6ouTOs.webp',
    coverImage: '/images/about/dr-elard-specialiste-anti-age-paris.webp',
    credentials: [
      {
        type: 'certification',
        name: 'Certification en Rédaction Médicale Assistée par IA',
        issuedBy: 'Association Internationale de Communication Médicale',
        year: '2023'
      }
    ],
    expertise: [
      {
        name: 'Création de contenu médical',
        description: 'Développement d\'articles et de guides sur la médecine esthétique',
        level: 'expert'
      },
      {
        name: 'Vulgarisation scientifique',
        description: 'Adaptation d\'informations médicales complexes pour le grand public',
        level: 'expert'
      },
      {
        name: 'Recherche documentaire médicale',
        description: 'Utilisation de l\'IA pour identifier et synthétiser les dernières recherches',
        level: 'advanced'
      }
    ],
    aiRole: 'Création de contenu assistée par IA avec supervision humaine',
    aiOversight: 'Notre équipe utilise l\'IA comme outil d\'assistance pour la recherche, la structuration et la rédaction initiale. Chaque contenu est ensuite révisé par nos rédacteurs médicaux et validé par nos médecins spécialistes pour garantir l\'exactitude et la pertinence des informations.',
    teamMembers: [
      {
        name: 'Dr Emmanuel Elard',
        title: 'Directeur Médical',
        avatar: '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
        role: 'Validation finale du contenu médical'
      },
      {
        name: 'Dr Sophie Martin',
        title: 'Spécialiste IA',
        avatar: '/images/about/formateur-Dr-ELARD.webp',
        role: 'Supervision des algorithmes d\'IA'
      },
      {
        name: 'Marie Dubois',
        title: 'Rédactrice Médicale Senior',
        role: 'Édition et adaptation du contenu'
      },
      {
        name: 'Thomas Laurent',
        title: 'Ingénieur IA',
        role: 'Développement des outils d\'IA pour la création de contenu'
      }
    ],
    joinedDate: '2022-01-15'
  }
];

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors.find(author => author.slug === slug);
};

export const getAllAuthors = (): Author[] => {
  return authors;
};
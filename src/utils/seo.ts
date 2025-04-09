export const generateStructuredData = (data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: data.title,
    description: data.description,
    medicalSpecialty: 'Aesthetic Medicine',
    image: data.imageUrl,
    provider: {
      '@type': 'MedicalOrganization',
      name: 'Dr Emmanuel ELARD',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 avenue Dorian',
        addressLocality: 'Paris',
        postalCode: '75012',
        addressCountry: 'FR'
      },
      telephone: '+33184063773',
      url: 'https://medecine-esthetique.net'
    },
    availableService: {
      '@type': 'MedicalTherapy',
      name: data.title,
      description: data.description
    }
  };
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://medecine-esthetique.net';
  return `${baseUrl}${path}`;
};

export const generateBreadcrumbStructuredData = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Cabinet Dr Emmanuel ELARD - Médecine Esthétique Paris 12',
    description: 'Cabinet de médecine esthétique spécialisé en injections et traitements anti-âge à Paris 12, proche de Bastille, Nation et Gare de Lyon.',
    url: 'https://medecine-esthetique.net',
    telephone: '+33184063773',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 avenue Dorian',
      addressLocality: 'Paris',
      postalCode: '75012',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8481699',
      longitude: '2.3892899'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '10:00',
        closes: '12:00'
      }
    ],
    priceRange: '€€€',
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 12e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 11e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 4e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 5e arrondissement'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '48.8481699',
        longitude: '2.3892899'
      },
      geoRadius: '20000'
    },
    hasMap: 'https://www.google.com/maps?cid=6389019496242489637',
    sameAs: [
      'https://www.instagram.com/dr.elard',
      'https://www.facebook.com/dr.elard',
      'https://www.linkedin.com/in/dr-elard'
    ]
  };
}

export function generateMedicalServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  // Localize service name if needed
  const localizedName = service.name.includes('Paris') 
    ? service.name 
    : `${service.name} à Paris 12`;
  
  // Localize description if needed
  const localizedDescription = service.description.includes('Paris') 
    ? service.description 
    : `${service.description} Traitement réalisé à Paris 12, proche de Bastille, Nation et Gare de Lyon.`;

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: localizedName,
    description: localizedDescription,
    url: service.url,
    ...(service.image && { image: service.image }),
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    followup: 'Suivi personnalisé par le Dr Emmanuel ELARD à Paris 12',
    howPerformed: 'Procédure réalisée en cabinet médical avec des techniques avancées',
    preparation: 'Consultation préalable requise',
    status: 'https://schema.org/ActiveActionStatus',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Cabinet Dr Emmanuel ELARD - Paris 12',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '8 avenue Dorian',
        addressLocality: 'Paris',
        postalCode: '75012',
        addressCountry: 'FR'
      },
      telephone: '+33184063773',
      url: 'https://medecine-esthetique.net'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 12e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 11e arrondissement'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Paris 4e arrondissement'
      }
    ]
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.join(' ')
      }
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  articleBody?: string;
  keywords?: string[];
  articleSection?: string;
  aiAssisted?: boolean;
  aiDisclosure?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    url: article.url,
    author: {
      '@type': 'Person',
      name: article.authorName || 'Dr Emmanuel Elard',
      url: article.authorUrl || 'https://medecine-esthetique.net/dr-elard-emmanuel-paris-specialiste-injections'
    },
    publisher: {
      '@type': 'Organization',
      name: article.publisherName || 'Cabinet Dr Emmanuel ELARD',
      logo: {
        '@type': 'ImageObject',
        url: article.publisherLogo || 'https://medecine-esthetique.net/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    },
    ...(article.keywords && { keywords: article.keywords.join(', ') }),
    ...(article.articleSection && { articleSection: article.articleSection }),
    ...(article.articleBody && { articleBody: article.articleBody }),
    ...(article.aiAssisted && {
      creativeWorkStatus: 'AI-assisted',
      disambiguatingDescription: article.aiDisclosure || 'Cet article a été rédigé avec l\'assistance de l\'intelligence artificielle, sous la supervision et validation d\'experts médicaux qualifiés.'
    })
  };
}

export const localizeMetaTitle = (title: string, location: string = 'Paris 12') => {
  if (title.includes('Paris') || title.includes('paris')) {
    return title;
  }
  return `${title} à ${location}`;
};

export const localizeMetaDescription = (description: string, location: string = 'Paris 12') => {
  if (description.includes('Paris') || description.includes('paris')) {
    return description;
  }
  return `${description} Cabinet situé à ${location}, proche de Bastille, Nation et Gare de Lyon.`;
};

export const getParisDistricts = () => [
  'Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e', 
  'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e',
  'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e',
  'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e'
];

export const getParisLandmarks = () => [
  'Bastille', 'Nation', 'Gare de Lyon', 'Bercy', 'Bois de Vincennes',
  'Place de la République', 'Le Marais', 'Opéra Bastille'
];

export const optimizeImageAlt = (alt: string, location: string = 'Paris 12') => {
  if (!alt) return '';
  if (alt.includes('Paris') || alt.includes('paris')) {
    return alt;
  }
  return `${alt} - Médecine esthétique à ${location}`;
};

export const optimizeImageFilename = (filename: string, keywords: string[]) => {
  // Remove file extension
  const name = filename.split('.')[0];
  
  // Check if keywords are already in the filename
  const containsKeywords = keywords.some(keyword => 
    name.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (containsKeywords) {
    return filename;
  }
  
  // Add the first keyword if not already present
  const extension = filename.includes('.') ? filename.split('.').pop() : '';
  const newName = `${name}-${keywords[0].toLowerCase().replace(/\s+/g, '-')}-paris-12`;
  return extension ? `${newName}.${extension}` : newName;
};

// Generate variations of meta titles with different Paris districts
export const generateDistrictVariations = (baseTitle: string, count: number = 3) => {
  const districts = getParisDistricts();
  const shuffled = [...districts].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);
  
  return selected.map(district => {
    return localizeMetaTitle(baseTitle, district);
  });
};

// Generate variations of meta descriptions with different Paris landmarks
export const generateLandmarkVariations = (baseDescription: string, count: number = 3) => {
  const landmarks = getParisLandmarks();
  const shuffled = [...landmarks].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);
  
  return selected.map(landmark => {
    return `${baseDescription} Cabinet situé à Paris 12, à proximité de ${landmark}.`;
  });
};

// Check if a URL is likely a 404 based on common patterns
export const isLikely404 = (path: string): boolean => {
  // Common 404 patterns
  const likely404Patterns = [
    /\.php$/i,                    // PHP files
    /\.aspx?$/i,                  // ASP/ASPX files
    /\.html?$/i,                  // HTML files
    /\/wp-/i,                     // WordPress paths
    /\/admin/i,                   // Admin paths
    /\/login/i,                   // Login paths
    /\/wp-content\//i,            // WordPress content
    /\/wp-includes\//i,           // WordPress includes
    /\/wp-admin\//i,              // WordPress admin
    /\/feed\//i,                  // Feed paths
    /\/(tag|category)\//i,        // WordPress tags/categories
    /\/xmlrpc\.php/i,             // WordPress XML-RPC
    /\/wp-login\.php/i,           // WordPress login
    /\/wp-json\//i,               // WordPress REST API
    /\/index\.php/i,              // index.php files
    /\/assets\//i,                // Assets directories
    /\/uploads\//i,               // Uploads directories
    /\/themes\//i,                // Themes directories
    /\/plugins\//i,               // Plugins directories
    /\/includes\//i,              // Includes directories
    /\/js\//i,                    // JavaScript directories
    /\/css\//i,                   // CSS directories
    /\/images\//i,                // Images directories
    /\/img\//i,                   // Img directories
    /\/fonts\//i,                 // Fonts directories
    /\/vendor\//i,                // Vendor directories
    /\/node_modules\//i,          // Node modules
    /\/api\//i,                   // API paths
    /\/auth\//i,                  // Auth paths
    /\/user\//i,                  // User paths
    /\/account\//i,               // Account paths
    /\/profile\//i,               // Profile paths
    /\/register\//i,              // Register paths
    /\/signup\//i,                // Signup paths
    /\/signin\//i,                // Signin paths
    /\/logout\//i,                // Logout paths
    /\/password\//i,              // Password paths
    /\/reset\//i,                 // Reset paths
    /\/recover\//i,               // Recover paths
    /\/search\//i,                // Search paths
    /\/sitemap\//i,               // Sitemap paths
    /\/robots\//i,                // Robots paths
    /\/favicon\//i,               // Favicon paths
    /\/cgi-bin\//i,               // CGI-BIN paths
    /\/phpmyadmin\//i,            // phpMyAdmin paths
    /\/myadmin\//i,               // MyAdmin paths
    /\/pma\//i,                   // PMA paths
    /\/administrator\//i,         // Administrator paths
    /\/manager\//i,               // Manager paths
    /\/installation\//i,          // Installation paths
    /\/install\//i,               // Install paths
    /\/setup\//i,                 // Setup paths
    /\/config\//i,                // Config paths
    /\/configuration\//i,         // Configuration paths
    /\/settings\//i,              // Settings paths
    /\/options\//i,               // Options paths
    /\/preferences\//i,           // Preferences paths
    /\/backup\//i,                // Backup paths
    /\/restore\//i,               // Restore paths
    /\/update\//i,                // Update paths
    /\/upgrade\//i,               // Upgrade paths
    /\/download\//i,              // Download paths
    /\/upload\//i,                // Upload paths
    /\/file\//i,                  // File paths
    /\/files\//i,                 // Files paths
    /\/document\//i,              // Document paths
    /\/documents\//i,             // Documents paths
    /\/media\//i,                 // Media paths
    /\/video\//i,                 // Video paths
    /\/audio\//i,                 // Audio paths
    /\/photo\//i,                 // Photo paths
    /\/photos\//i,                // Photos paths
    /\/gallery\//i,               // Gallery paths
    /\/album\//i,                 // Album paths
    /\/albums\//i,                // Albums paths
    /\/portfolio\//i,             // Portfolio paths
    /\/project\//i,               // Project paths
    /\/projects\//i,              // Projects paths
    /\/product\//i,               // Product paths
    /\/products\//i,              // Products paths
    /\/service\//i,               // Service paths
    /\/services\//i,              // Services paths
    /\/shop\//i,                  // Shop paths
    /\/store\//i,                 // Store paths
    /\/cart\//i,                  // Cart paths
    /\/checkout\//i,              // Checkout paths
    /\/payment\//i,               // Payment paths
    /\/order\//i,                 // Order paths
    /\/orders\//i,                // Orders paths
    /\/invoice\//i,               // Invoice paths
    /\/invoices\//i,              // Invoices paths
    /\/receipt\//i,               // Receipt paths
    /\/receipts\//i,              // Receipts paths
    /\/transaction\//i,           // Transaction paths
    /\/transactions\//i,          // Transactions paths
    /\/member\//i,                // Member paths
    /\/members\//i,               // Members paths
    /\/subscription\//i,          // Subscription paths
    /\/subscriptions\//i,         // Subscriptions paths
    /\/newsletter\//i,            // Newsletter paths
    /\/newsletters\//i,           // Newsletters paths
    /\/mail\//i,                  // Mail paths
    /\/email\//i,                 // Email paths
    /\/webmail\//i,               // Webmail paths
    /\/contact-us\//i,            // Contact-us paths
    /\/about-us\//i,              // About-us paths
    /\/faq\//i,                   // FAQ paths
    /\/help\//i,                  // Help paths
    /\/support\//i,               // Support paths
    /\/ticket\//i,                // Ticket paths
    /\/tickets\//i,               // Tickets paths
    /\/forum\//i,                 // Forum paths
    /\/forums\//i,                // Forums paths
    /\/board\//i,                 // Board paths
    /\/boards\//i,                // Boards paths
    /\/thread\//i,                // Thread paths
    /\/threads\//i,               // Threads paths
    /\/topic\//i,                 // Topic paths
    /\/topics\//i,                // Topics paths
    /\/post\//i,                  // Post paths
    /\/posts\//i,                 // Posts paths
    /\/comment\//i,               // Comment paths
    /\/comments\//i,              // Comments paths
    /\/review\//i,                // Review paths
    /\/reviews\//i,               // Reviews paths
    /\/rating\//i,                // Rating paths
    /\/ratings\//i,               // Ratings paths
    /\/vote\//i,                  // Vote paths
    /\/votes\//i,                 // Votes paths
    /\/poll\//i,                  // Poll paths
    /\/polls\//i,                 // Polls paths
    /\/survey\//i,                // Survey paths
    /\/surveys\//i,               // Surveys paths
    /\/quiz\//i,                  // Quiz paths
    /\/quizzes\//i,               // Quizzes paths
    /\/test\//i,                  // Test paths
    /\/tests\//i,                 // Tests paths
    /\/exam\//i,                  // Exam paths
    /\/exams\//i,                 // Exams paths
    /\/assessment\//i,            // Assessment paths
    /\/assessments\//i,           // Assessments paths
    /\/evaluation\//i,            // Evaluation paths
    /\/evaluations\//i,           // Evaluations paths
    /\/report\//i,                // Report paths
    /\/reports\//i,               // Reports paths
    /\/stat\//i,                  // Stat paths
    /\/stats\//i,                 // Stats paths
    /\/statistic\//i,             // Statistic paths
    /\/statistics\//i,            // Statistics paths
    /\/analytics\//i,             // Analytics paths
    /\/dashboard\//i,             // Dashboard paths
    /\/panel\//i,                 // Panel paths
    /\/console\//i,               // Console paths
    /\/control\//i,               // Control paths
    /\/manage\//i,                // Manage paths
    /\/management\//i,            // Management paths
    /\/monitor\//i,               // Monitor paths
    /\/monitoring\//i,            // Monitoring paths
    /\/log\//i,                   // Log paths
    /\/logs\//i,                  // Logs paths
    /\/error\//i,                 // Error paths
    /\/errors\//i,                // Errors paths
    /\/debug\//i,                 // Debug paths
    /\/debugging\//i,             // Debugging paths
    /\/test\//i,                  // Test paths
    /\/testing\//i,               // Testing paths
    /\/dev\//i,                   // Dev paths
    /\/development\//i,           // Development paths
    /\/staging\//i,               // Staging paths
    /\/production\//i,            // Production paths
    /\/beta\//i,                  // Beta paths
    /\/alpha\//i,                 // Alpha paths
    /\/demo\//i,                  // Demo paths
    /\/example\//i,               // Example paths
    /\/sample\//i,                // Sample paths
    /\/template\//i,              // Template paths
    /\/templates\//i,             // Templates paths
    /\/theme\//i,                 // Theme paths
    /\/themes\//i,                // Themes paths
    /\/style\//i,                 // Style paths
    /\/styles\//i,                // Styles paths
    /\/script\//i,                // Script paths
    /\/scripts\//i,               // Scripts paths
    /\/module\//i,                // Module paths
    /\/modules\//i,               // Modules paths
    /\/component\//i,             // Component paths
    /\/components\//i,            // Components paths
    /\/element\//i,               // Element paths
    /\/elements\//i,              // Elements paths
    /\/widget\//i,                // Widget paths
    /\/widgets\//i,               // Widgets paths
    /\/plugin\//i,                // Plugin paths
    /\/plugins\//i,               // Plugins paths
    /\/extension\//i,             // Extension paths
    /\/extensions\//i,            // Extensions paths
    /\/addon\//i,                 // Addon paths
    /\/addons\//i,                // Addons paths
    /\/package\//i,               // Package paths
    /\/packages\//i,              // Packages paths
    /\/library\//i,               // Library paths
    /\/libraries\//i,             // Libraries paths
    /\/framework\//i,             // Framework paths
    /\/frameworks\//i,            // Frameworks paths
    /\/api\//i,                   // API paths
    /\/apis\//i,                  // APIs paths
    /\/rest\//i,                  // REST paths
    /\/soap\//i,                  // SOAP paths
    /\/graphql\//i,               // GraphQL paths
    /\/rpc\//i,                   // RPC paths
    /\/json\//i,                  // JSON paths
    /\/xml\//i,                   // XML paths
    /\/csv\//i,                   // CSV paths
    /\/txt\//i,                   // TXT paths
    /\/pdf\//i,                   // PDF paths
    /\/doc\//i,                   // DOC paths
    /\/docx\//i,                  // DOCX paths
    /\/xls\//i,                   // XLS paths
    /\/xlsx\//i,                  // XLSX paths
    /\/ppt\//i,                   // PPT paths
    /\/pptx\//i,                  // PPTX paths
    /\/zip\//i,                   // ZIP paths
    /\/rar\//i,                   // RAR paths
    /\/tar\//i,                   // TAR paths
    /\/gz\//i,                    // GZ paths
    /\/7z\//i,                    // 7Z paths
    /\/exe\//i,                   // EXE paths
    /\/dll\//i,                   // DLL paths
    /\/bin\//i,                   // BIN paths
    /\/dat\//i,                   // DAT paths
    /\/bak\//i,                   // BAK paths
    /\/backup\//i,                // Backup paths
    /\/old\//i,                   // Old paths
    /\/new\//i,                   // New paths
    /\/temp\//i,                  // Temp paths
    /\/tmp\//i,                   // Tmp paths
    /\/cache\//i,                 // Cache paths
    /\/log\//i,                   // Log paths
    /\/logs\//i,                  // Logs paths
    /\/error\//i,                 // Error paths
    /\/errors\//i,                // Errors paths
    /\/debug\//i,                 // Debug paths
    /\/test\//i,                  // Test paths
    /\/tests\//i,                 // Tests paths
    /\/dev\//i,                   // Dev paths
    /\/development\//i,           // Development paths
    /\/staging\//i,               // Staging paths
    /\/production\//i,            // Production paths
    /\/beta\//i,                  // Beta paths
    /\/alpha\//i,                 // Alpha paths
    /\/demo\//i,                  // Demo paths
    /\/example\//i,               // Example paths
    /\/sample\//i,                // Sample paths
  ];
  
  return likely404Patterns.some(pattern => pattern.test(path));
};
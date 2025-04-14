import { MenuItem } from '@/src/types/navigation';

const generateSlug = (label: string): string => {
  return label.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const getSpecialPath = (label: string): string | null => {
  const specialPaths: Record<string, string> = {
    'dr emmanuel elard': '/dr-elard-emmanuel-paris-specialiste-injections',
    'le cabinet': '/le-cabinet-paris-specialiste-injections',
    'sillons nasogéniens': '/sillons-nasogeniens',
    'cernes': '/injections-cernes-paris',
    'pommettes': '/injection-acide-hyaluronique-pommettes-paris',
    'tempes': '/injection-tempes',
    'front': '/injection-du-front',
    'menton': '/injection-menton',
    'ovale du visage': '/ovale-du-visage',
    'rhinoplastie médicale': '/rhinoplastie-medicale-paris',
    'augmentation des lèvres': '/augmentation-levres-paris',
    "plis d'amertume": '/plis-armetume-acide-hyaluronique-paris',
    'rides autour de la bouche': '/rides-autour-de-la-bouche',
    'skinbooster': '/skinbooster-paris',
    'rajeunissement des mains': '/rajeunissement-des-mains',
    'mésolift': '/mesolift',
    'hydrafacial': '/hydrafacial-paris',
    'rides du front': '/botox-rides-du-front',
    'rides du lion': '/botox-ride-du-lion',
    "pattes d'oie": '/botox-rides-pattes-d-oie',
    'masseter': '/botox-masseter',
    'transpiration': '/injection-botox-transpiration',
    'acide hyaluronique': '/acide-hyaluronique',
    'botox': '/botox',
    'hifu': '/hifu',
    'radiofréquence': '/radiofrequence',
    'plexr': '/plexr-blepharoplastie-sans-chirurgie',
    'cryolipolyse': '/cryolipolyse-paris',
    'blog': '/blog',
    'contact': 'https://contact.medecine-esthetique.net/',
    'tarifs': '/tarifs',
  };
  
  return specialPaths[label.toLowerCase()] || null;
};

export const generatePath = (item: MenuItem, parentPath?: string): string => {
  const specialPath = getSpecialPath(item.label);
  if (specialPath) return specialPath;

  const slug = generateSlug(item.label);
  
  if (parentPath === '/about') {
    return `/about/${slug}`;
  }

  if (parentPath?.startsWith('/injections')) {
    return `${parentPath}/${slug}`;
  }

  if (parentPath?.startsWith('/procedures')) {
    return `${parentPath}/${slug}`;
  }

  return parentPath ? `${parentPath}/${slug}` : `/${slug}`;
};

export const generatePaths = (items: MenuItem[], parentPath?: string): MenuItem[] => {
  return items.map(item => {
    const path = generatePath(item, parentPath);
    
    return {
      ...item,
      path,
      children: item.children ? generatePaths(item.children, path) : undefined
    };
  });
};
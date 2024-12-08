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
    'dr emmanuel elard': '/about/dr-emmanuel-elard',
    'le cabinet': '/about/le-cabinet',
    'à propos': '/about',
    'blog': '/blog',
    'contact': '/contact'
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
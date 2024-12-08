import { MenuItem } from '@/src/types/navigation';
import { generatePaths } from '@/src/utils/navigation';
import { validateMenuItems } from '@/src/utils/validation';
import { nanoid } from 'nanoid';

const generateId = (): string => nanoid();

interface BaseMenuItem extends Partial<Omit<MenuItem, 'children'>> {
  label: string;
  children?: BaseMenuItem[];
}

const addIds = (items: BaseMenuItem[]): MenuItem[] => {
  return items.map((item, index) => ({
    id: item.id || generateId(),
    label: item.label,
    order: item.order || index,
    children: item.children ? addIds(item.children) : undefined,
  }));
};

const baseItems: BaseMenuItem[] = [
  {
    label: 'À Propos',
    order: 1,
    children: [
      { label: 'Dr Emmanuel ELARD', order: 1 },
      { label: 'Le Cabinet', order: 2 },
    ],
  },
  {
    label: 'Injections',
    order: 2,
    children: [
      {
        label: 'Visage',
        order: 1,
        children: [
          { label: 'Sillons nasogéniens', order: 1 },
          { label: 'Cernes', order: 2 },
          { label: 'Pommettes', order: 3 },
          { label: 'Tempes', order: 4 },
          { label: 'Front', order: 5 },
          { label: 'Menton', order: 6 },
          { label: 'Ovale du visage', order: 7 },
          { label: 'Rhinoplastie Médicale', order: 8 },
        ],
      },
      {
        label: 'Lèvres',
        order: 2,
        children: [
          { label: 'Augmentation des lèvres', order: 1 },
          { label: "Plis d'amertume", order: 2 },
          { label: 'Rides autour de la bouche', order: 3 },
        ],
      },
      {
        label: 'Soins',
        order: 3,
        children: [
          { label: 'Skinbooster', order: 1 },
          { label: 'Rajeunissement des mains', order: 2 },
          { label: 'Mésolift', order: 3 },
        ],
      },
      {
        label: 'Botox',
        order: 4,
        children: [
          { label: 'Rides du front', order: 1 },
          { label: 'Rides du lion', order: 2 },
          { label: "Pattes d'oie", order: 3 },
          { label: 'Masseter', order: 4 },
          { label: 'Transpiration', order: 5 },
        ],
      },
    ],
  },
  {
    label: 'Procédures',
    order: 3,
    children: [
      {
        label: 'Traitements Injectables',
        order: 1,
        children: [
          { label: 'Acide hyaluronique', order: 1 },
          { label: 'Botox', order: 2 },
        ],
      },
      {
        label: 'Technologies Avancées',
        order: 2,
        children: [
          { label: 'HIFU', order: 1 },
          { label: 'Radiofréquence', order: 2 },
        ],
      },
      {
        label: 'Traitements Spécialisés',
        order: 3,
        children: [
          { label: 'Plexr', order: 1 },
          { label: 'Cryolipolyse', order: 2 },
        ],
      },
    ],
  },
  {
    label: 'Blog',
    order: 4,
  },
  {
    label: 'Contact',
    order: 5,
  },
];

const itemsWithIds = addIds(baseItems);
validateMenuItems(itemsWithIds);
export const navigationItems = generatePaths(itemsWithIds);
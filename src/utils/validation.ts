import { MenuItem } from '@/src/types/navigation';

export const validateMenuItems = (items: MenuItem[]): void => {
  const ids = new Set<string>();
  const paths = new Set<string>();

  const validate = (item: MenuItem) => {
    if (ids.has(item.id)) {
      throw new Error(`Duplicate id found: ${item.id}`);
    }
    ids.add(item.id);

    if (!item.label) {
      throw new Error(`Missing label for item with id: ${item.id}`);
    }

    if (item.path) {
      if (paths.has(item.path)) {
        throw new Error(`Duplicate path found: ${item.path}`);
      }
      paths.add(item.path);
    }

    if (item.children) {
      item.children.forEach(validate);
    }
  };

  items.forEach(validate);
};
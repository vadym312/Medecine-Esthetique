export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  children?: MenuItem[];
  order?: number;
}
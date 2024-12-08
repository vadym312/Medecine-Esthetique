import { LucideIcon } from 'lucide-react';
import { EXPERTISE_ICONS } from './constants';

export type ExpertiseIconType = keyof typeof EXPERTISE_ICONS;

export interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export interface ExpertiseTitleProps {
  title: string;
}

export interface ExpertiseItem {
  icon: ExpertiseIconType;
  title: string;
  description: string;
}

export interface ExpertiseProps {
  title: string;
  items: ExpertiseItem[];
}
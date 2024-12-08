import { AnimationControls } from 'framer-motion';

export interface IntersectionAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export type IntersectionAnimationReturn = [
  React.RefObject<any>,
  boolean,
  AnimationControls
];
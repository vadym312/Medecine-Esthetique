import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface UseIntersectionAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

type UseIntersectionAnimationReturn = [
  ReturnType<typeof useInView>[0],
  boolean,
  AnimationControls
];

export function useIntersectionAnimation({
  threshold = 0.1,
  triggerOnce = true,
}: UseIntersectionAnimationOptions = {}): UseIntersectionAnimationReturn {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return [ref, inView, controls];
}
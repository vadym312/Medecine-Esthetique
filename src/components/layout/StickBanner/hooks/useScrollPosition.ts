"use client";

import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position and determine banner visibility
 * @param threshold - Percentage of page scroll before showing (0-1)
 * @returns boolean indicating if banner should be visible
 */
export const useScrollPosition = (threshold: number = 0.2) => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollPosition = currentScrollY + window.innerHeight;
            const triggerHeight = document.documentElement.scrollHeight * threshold;

            // Show banner if scrolled past threshold AND not scrolling up
            const shouldShow = scrollPosition > triggerHeight && currentScrollY >= lastScrollY;

            setIsVisible(shouldShow);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold, lastScrollY]);

    return isVisible;
};
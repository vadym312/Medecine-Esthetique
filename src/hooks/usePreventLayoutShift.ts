'use client';

import { useLayoutEffect } from 'react';

export const usePreventLayoutShift = (selector: string): void => {
    useLayoutEffect(() => {
        const element = document.querySelector(selector) as HTMLElement;
        if (!element) return;

        const { height } = element.getBoundingClientRect();
        element.style.minHeight = `${height}px`;
    }, [selector]);
};
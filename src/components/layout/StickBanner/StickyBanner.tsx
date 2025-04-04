import React from 'react';
import { Button } from '@/src/components/ui/Button';
import { useScrollPosition } from './hooks/useScrollPosition';
import { cn } from '@/src/utils/cn';
import type { StickyBannerProps } from './types';
import Link from 'next/link';

export const StickyBanner: React.FC<StickyBannerProps> = ({
    buttonText,
    link,
    threshold = 0.2,
    className,
}) => {
    const isVisible = useScrollPosition(threshold);

    return (
        <div
            className={cn(
                'fixed bottom-0 left-0 w-full transform transition-transform duration-300',
                'bg-black/80 backdrop-blur-sm border-t border-gray-800',
                'py-3 px-6 shadow-lg z-30',
                isVisible ? 'translate-y-0' : 'translate-y-full',
                className
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-center items-center">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className='!rounded-full'>
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </div>
    );
};
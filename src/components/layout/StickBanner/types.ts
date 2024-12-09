export interface StickyBannerProps {
    /** Text to display on the button */
    buttonText: string;
    /** Percentage of page scroll before showing the banner (0-1) */
    threshold?: number;
    /** Additional CSS classes to apply to the banner */
    className?: string;
}
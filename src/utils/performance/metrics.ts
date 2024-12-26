// Define PerformanceLayoutShift if not available
interface PerformanceLayoutShift extends PerformanceEntry {
    hadRecentInput: boolean;
    value: number;
}

export const measureCLS = (): void => {
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            const layoutShiftEntry = entry as PerformanceLayoutShift;
            if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value;
            }
        }
    }).observe({ entryTypes: ['layout-shift'] });
};

export const measureLCP = (): void => {
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
};

export const measureFID = (): void => {
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            const inputEventEntry = entry as PerformanceEventTiming;
            console.log('FID:', inputEventEntry.processingStart - inputEventEntry.startTime);
        }
    }).observe({ entryTypes: ['first-input'] });
};
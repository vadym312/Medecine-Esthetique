export const deferNonCriticalResources = (): void => {
    const deferredScripts = document.querySelectorAll('script[data-defer]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const script = entry.target as HTMLScriptElement;
                script.src = script.dataset.src || '';
                observer.unobserve(script);
            }
        });
    });

    deferredScripts.forEach(script => observer.observe(script));
};

export const optimizeThirdPartyScripts = (): void => {
    const thirdPartyScripts = document.querySelectorAll('script[data-type="third-party"]');
    thirdPartyScripts.forEach(script => {
        script.setAttribute('async', '');
        script.setAttribute('defer', '');
    });
};
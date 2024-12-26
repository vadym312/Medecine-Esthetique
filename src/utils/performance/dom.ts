export const optimizeDOMSize = (): void => {
    document.querySelectorAll('*').forEach(element => {
        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === '') {
                node.remove();
            }
        });
    });
};
import { useEffect, useRef } from 'react';

// Declare gtag function for TypeScript
declare global {
    interface Window {
        gtag?: (
            command: string,
            eventName: string,
            params?: Record<string, any>
        ) => void;
    }
}

export function useScrollTracking(sectionIds: string[]) {
    const trackedSections = useRef<Set<string>>(new Set());
    const observersRef = useRef<IntersectionObserver[]>([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Function to setup observers
        const setupObservers = () => {
            // Check if gtag is available
            if (!window.gtag) {
                return false;
            }

            console.log('✅ Google Analytics loaded, setting up scroll tracking...');

            sectionIds.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (!element) {
                    console.warn(`Section with id "${sectionId}" not found`);
                    return;
                }

                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            // Track when section is 50% visible and hasn't been tracked yet
                            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                                if (!trackedSections.current.has(sectionId)) {
                                    trackedSections.current.add(sectionId);

                                    // Send event to Google Analytics
                                    if (window.gtag) {
                                        window.gtag('event', 'section_view', {
                                            section_name: sectionId,
                                            event_category: 'engagement',
                                            event_label: `Viewed section: ${sectionId}`,
                                        });

                                        console.log(`📊 GA Event: section_view - ${sectionId}`);
                                    }
                                }
                            }
                        });
                    },
                    {
                        threshold: [0.5], // Trigger when 50% visible
                    }
                );

                observer.observe(element);
                observersRef.current.push(observer);
            });

            return true;
        };

        // Try to setup immediately
        if (setupObservers()) {
            return;
        }

        // If GA not loaded yet, retry with exponential backoff
        let retryCount = 0;
        const maxRetries = 10;

        const retryInterval = setInterval(() => {
            retryCount++;

            if (setupObservers()) {
                clearInterval(retryInterval);
            } else if (retryCount >= maxRetries) {
                console.warn('Google Analytics failed to load after multiple retries');
                clearInterval(retryInterval);
            }
        }, 500); // Check every 500ms

        // Cleanup
        return () => {
            clearInterval(retryInterval);
            observersRef.current.forEach((observer) => observer.disconnect());
            observersRef.current = [];
        };
    }, [sectionIds]);
}

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

    useEffect(() => {
        // Check if gtag is available
        if (typeof window === 'undefined' || !window.gtag) {
            console.warn('Google Analytics not loaded');
            return;
        }

        const observers: IntersectionObserver[] = [];

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
                                window.gtag!('event', 'section_view', {
                                    section_name: sectionId,
                                    event_category: 'engagement',
                                    event_label: `Viewed section: ${sectionId}`,
                                });

                                console.log(`📊 GA Event: section_view - ${sectionId}`);
                            }
                        }
                    });
                },
                {
                    threshold: [0.5], // Trigger when 50% visible
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        // Cleanup
        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);
}

'use client';

import { useEffect, useRef } from 'react';

export function useReveal() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.v2-reveal-element').forEach(el => {
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
}

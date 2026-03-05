'use client';

import { useEffect, useRef } from 'react';

export default function MehrwertStickyV2() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const cards = cardsRef.current.filter(c => c !== null) as HTMLDivElement[];

            let progress = 0;
            if (rect.top <= 0) {
                progress = Math.min(1, Math.abs(rect.top) / (rect.height - window.innerHeight));
            }

            const segmentSize = 1 / cards.length;

            cards.forEach((card, index) => {
                const cardStartProgress = index * segmentSize;

                if (progress >= cardStartProgress) {
                    card.classList.add('active');
                    if (progress >= (index + 1) * segmentSize) {
                        card.classList.add('stacked');
                        card.style.zIndex = index.toString();
                    } else {
                        card.classList.remove('stacked');
                        card.style.zIndex = (index + 10).toString();
                    }
                } else {
                    card.classList.remove('active');
                    card.classList.remove('stacked');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // trigger once to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
        cardsRef.current[index] = el;
    };

    return (
        <section id="mehrwert" className="h-[400vh] relative bg-[#ffffff]" ref={containerRef}>
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                <div className="absolute top-20 left-0 w-full text-center px-6 z-10">
                    <h2 className="v2-text-h2 v2-reveal-element text-[#000000]">Warum wir die bessere Wahl sind</h2>
                </div>

                <div id="sticky-cards-container" className="w-full max-w-4xl mx-auto h-[60vh] mt-24 relative px-6">

                    {/* Card 1 */}
                    <div ref={setCardRef(0)} className="sticky-card bg-[#f9fafb] border border-[#c7c7c7] p-8 md:p-16 shadow-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="v2-text-h3 text-[#9eff20]">01</span>
                            <div className="h-px bg-[#c7c7c7] flex-1"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#000000]">Preis</span>
                        </div>
                        <h3 className="v2-text-h3 mb-6 text-[#000000]">Performance-Pricing</h3>
                        <p className="v2-text-p text-[#444343]">
                            Wir rechnen nicht nach Stunden ab. Wir berechnen den Nutzen. Wenn unsere KI Ihrem Unternehmen 10 Stunden Büroarbeit pro Woche einspart, ist das der Wertmaßstab – nicht die Zeit, die wir investiert haben. Sie zahlen für Ergebnisse, nicht für Anwesenheit.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div ref={setCardRef(1)} className="sticky-card bg-[#ffffff] border border-[#c7c7c7] p-8 md:p-16 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="v2-text-h3 text-[#9eff20]">02</span>
                            <div className="h-px bg-[#c7c7c7] flex-1"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#000000]">Speed</span>
                        </div>
                        <h3 className="v2-text-h3 mb-6 text-[#000000]">Radikale Agilität</h3>
                        <p className="v2-text-p text-[#444343]">
                            Keine Knebelverträge, keine Mindestlaufzeiten. Alles monatlich kündbar – ohne Wenn und Aber. Wir tragen keine aufgeblähten Agenturstrukturen auf Ihrem Rücken aus. Sie erreichen uns direkt, ohne Ticketsystem und Warteschleife. Wir liefern jeden Monat so viel Wert, dass Sie gar nicht kündigen wollen.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div ref={setCardRef(2)} className="sticky-card bg-[#f9fafb] border border-[#c7c7c7] p-8 md:p-16 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="v2-text-h3 text-[#9eff20]">03</span>
                            <div className="h-px bg-[#c7c7c7] flex-1"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#000000]">Qualität</span>
                        </div>
                        <h3 className="v2-text-h3 mb-6 text-[#000000]">Kompromisslose Präzision</h3>
                        <p className="v2-text-p text-[#444343]">
                            Wir kombinieren modernste KI-Innovation mit handwerklicher Sorgfalt und IT-Sicherheit auf Enterprise-Niveau. DSGVO-konform, stabil und durchdacht – jedes System, das wir bauen, ist bulletproof.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div ref={setCardRef(3)} className="sticky-card bg-[#000000] text-[#ffffff] border border-[#9eff20] p-8 md:p-16 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="v2-text-h3 text-[#9eff20]">04</span>
                            <div className="h-px bg-[#444343] flex-1"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#9eff20]">Individualität</span>
                        </div>
                        <h3 className="v2-text-h3 mb-6 text-[#ffffff]">Maßanzug statt Massenware</h3>
                        <p className="v2-text-p text-[#7a7a7a]">
                            Wir biegen nicht den Kunden für die Software, sondern programmieren die Software für den Kunden. Jede Lösung folgt dem individuellen Prozess Ihres Unternehmens – von Grund auf neu gedacht, nicht zusammengeklickt.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

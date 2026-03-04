'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const systemBlocks = [
    {
        title: 'Process Intelligence',
        description:
            'Bevor wir eine Zeile Code schreiben, müssen wir Ihre Pain Points verstehen. Durch eine tiefe, kostenlose Potenzialanalyse erlangen wir volles Verständnis für Ihre geschäftlichen Herausforderungen und decken auf, wo Sie aktuell Zeit und Geld durch ineffiziente Abläufe verlieren.',
    },
    {
        title: 'Agentic Core',
        description:
            'Wir entwickeln eine agentische Lösung für Ihr Problem. Wir aktivieren ungenutzte KI-Potenziale in Ihren bestehenden Tools, entwickeln maßgeschneiderte Software und schalten autonome KI-Mitarbeiter (Agenten) exakt dort dazwischen, wo sie Ihnen die meiste Arbeit abnehmen.',
    },
    {
        title: 'Secure Operations',
        description:
            'Nach der Entwicklung fängt unsere Arbeit erst richtig an. Wir übergeben Ihnen keine Software, mit der wir Sie danach alleine lassen. Sie erhalten ein schlüsselfertiges System. Wir begleiten das Onboarding ihres Teams und sichern den laufenden Betrieb: Höchste Datensicherheit nach DSGVO, Server-Hosting, ständige Wartung und Updates sowie proaktive Pflege übernehmen wir vollständig und dauerhaft.',
    },
];

export default function SystemGrid() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotationDeg, setRotationDeg] = useState(60.92);
    const [showActive, setShowActive] = useState(false);

    const isTransitioning = useRef(false);
    const centerHexRef = useRef<SVGPathElement>(null);
    const worldRef = useRef<SVGGElement>(null);

    // Initial setup — compute rotation origin once
    useEffect(() => {
        if (centerHexRef.current && worldRef.current) {
            const bbox = centerHexRef.current.getBBox();
            const cx = bbox.x + bbox.width / 2;
            const cy = bbox.y + bbox.height / 2;
            worldRef.current.style.transformOrigin = `${cx}px ${cy}px`;
        }
        const t = setTimeout(() => setShowActive(true), 100);
        return () => clearTimeout(t);
    }, []);

    // Auto-advance loop
    useEffect(() => {
        if (!showActive) return;
        const t = setTimeout(() => advance(), 5000);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showActive, activeIndex]);

    const advance = useCallback(() => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;

        // Fade out current
        setShowActive(false);
        // Rotate SVG
        setRotationDeg((prev) => prev + 120);

        // After most of the rotation (700ms) — fade in next
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
            setShowActive(true);
            setTimeout(() => {
                isTransitioning.current = false;
            }, 500);
        }, 700);
    }, []);

    /* ─────────────────────────────────────────── */
    /*  Render                                     */
    /* ─────────────────────────────────────────── */
    return (
        <section
            id="technologie"
            className="max-w-[1440px] mx-auto grid-border-b overflow-hidden"
        >
            {/* ── Section Label ── */}
            <div className="px-6 md:px-12 lg:px-16 pt-16 pb-4">
                <p className="label-text">System</p>
            </div>

            {/* ── Headline ── */}
            <motion.div
                className="px-6 md:px-12 lg:px-16 pb-12 lg:pb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <h2 className="section-headline font-sans uppercase">
                    Skalierbar.<br />
                    Sicher.<br />
                    Souverän.
                </h2>
            </motion.div>

            {/* ── Main Content: Text left, SVG right ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-12 px-6 md:px-12 lg:px-16 pb-16 lg:pb-20">

                {/* LEFT — Animated Text Block */}
                <div className="relative min-h-[280px] md:min-h-[260px] flex flex-col justify-center order-2 lg:order-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: showActive ? 1 : 0, y: showActive ? 0 : 16 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="mono-index text-sm font-bold text-text-muted block mb-5">
                                0{activeIndex + 1}
                            </span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight font-sans mb-5 leading-[1.05]">
                                {systemBlocks[activeIndex].title}
                            </h3>
                            <p className="text-text-deep leading-relaxed text-base md:text-lg max-w-[540px]">
                                {systemBlocks[activeIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* RIGHT — SVG Hexagon Animation (smaller, clickable) */}
                <div
                    className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0 cursor-pointer group"
                    onClick={advance}
                    title="Klicken zum Weiterschalten"
                >
                    <div className="w-full max-w-[360px] lg:max-w-[420px] aspect-square relative transition-transform duration-300 group-hover:scale-[1.02]">
                        {/* Scoped SVG styles */}
                        <style>{`
                            .sys-hex-outline {
                                fill: none;
                                stroke: #000;
                                stroke-miterlimit: 10;
                                stroke-width: 15px;
                                stroke-linejoin: round;
                                stroke-linecap: round;
                            }
                            .sys-hex-fill { fill: #000; }
                            .sys-green-center { fill: #9eff20; }
                            .sys-hex-text {
                                font-family: var(--font-inter), 'Inter', sans-serif;
                                font-size: 48px;
                                font-weight: 900;
                            }
                            .sys-text-black { fill: #000; }
                            .sys-text-white { fill: #fff; }
                            .sys-spacing-tight  { letter-spacing: -.09em; }
                            .sys-spacing-medium { letter-spacing: -.05em; }
                            .sys-fill-layer, .sys-text-layer {
                                opacity: 0;
                                transition: opacity 0.5s ease-in-out;
                            }
                            .sys-fill-layer.active, .sys-text-layer.active {
                                opacity: 1;
                            }
                        `}</style>

                        <svg
                            viewBox="0 0 845.45 872.62"
                            className="w-full h-full overflow-visible"
                        >
                            <g
                                ref={worldRef}
                                style={{
                                    transform: `rotate(${rotationDeg}deg)`,
                                    transition:
                                        'transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
                                    transformBox: 'view-box',
                                    transformOrigin: '422.7px 436.3px',
                                }}
                            >
                                {/* Outlines (always visible) */}
                                <path className="sys-hex-outline" d="M31.37,150.14c-13.38,8.01-24.11,27.32-23.86,42.91l4.11,256.75c.25,15.59,11.6,34.54,25.23,42.12l224.41,124.81c13.62,7.58,35.72,7.22,49.09-.79l220.3-131.94c13.38-8.01,24.11-27.32,23.86-42.91l-4.11-256.75c-.25-15.59-11.6-34.54-25.23-42.12L300.76,17.41c-13.62-7.58-35.72-7.22-49.09.79L31.37,150.14Z" />
                                <path className="sys-hex-outline" d="M176.94,393.07c-13.38,8.01-24.11,27.32-23.86,42.91l4.11,256.75c.25,15.59,11.6,34.54,25.23,42.12l224.41,124.81c13.62,7.58,35.72,7.22,49.09-.79l220.3-131.94c13.38-8.01,24.11-27.32,23.86-42.91l-4.11-256.75c-.25-15.59-11.6-34.54-25.23-42.12l-224.41-124.81c-13.62-7.58-35.72-7.22-49.09.79l-220.3,131.94Z" />
                                <path className="sys-hex-outline" d="M314.81,145.68c-13.38,8.01-24.11,27.32-23.86,42.91l4.11,256.75c.25,15.59,11.6,34.54,25.23,42.12l224.41,124.81c13.62,7.58,35.72,7.22,49.09-.79l220.3-131.94c13.38-8.01,24.11-27.32,23.86-42.91l-4.11-256.75c-.25-15.59-11.6-34.54-25.23-42.12L584.19,12.96c-13.62-7.58-35.72-7.22-49.09.79l-220.3,131.94Z" />

                                {/* Active fills */}
                                <path className={`sys-hex-fill sys-fill-layer ${showActive && activeIndex === 0 ? 'active' : ''}`} d="M31.37,150.14c-13.38,8.01-24.11,27.32-23.86,42.91l4.11,256.75c.25,15.59,11.6,34.54,25.23,42.12l224.41,124.81c13.62,7.58,35.72,7.22,49.09-.79l220.3-131.94c13.38-8.01,24.11-27.32,23.86-42.91l-4.11-256.75c-.25-15.59-11.6-34.54-25.23-42.12L300.76,17.41c-13.62-7.58-35.72-7.22-49.09.79L31.37,150.14Z" />
                                <path className={`sys-hex-fill sys-fill-layer ${showActive && activeIndex === 1 ? 'active' : ''}`} d="M176.94,393.07c-13.38,8.01-24.11,27.32-23.86,42.91l4.11,256.75c.25,15.59,11.6,34.54,25.23,42.12l224.41,124.81c13.62,7.58,35.72,7.22,49.09-.79l220.3-131.94c13.38-8.01,24.11-27.32,23.86-42.91l-4.11-256.75c-.25-15.59-11.6-34.54-25.23-42.12l-224.41-124.81c-13.62-7.58-35.72-7.22-49.09.79l-220.3,131.94Z" />
                                <path className={`sys-hex-fill sys-fill-layer ${showActive && activeIndex === 2 ? 'active' : ''}`} d="M314.81,145.68c-13.38,8.01-24.11,27.32-23.86,42.91l4.11,256.75c.25,15.59,11.6,34.54,25.23,42.12l224.41,124.81c13.62,7.58,35.72,7.22,49.09-.79l220.3-131.94c13.38-8.01,24.11-27.32,23.86-42.91l-4.11-256.75c-.25-15.59-11.6-34.54-25.23-42.12L584.19,12.96c-13.62-7.58-35.72-7.22-49.09.79l-220.3,131.94Z" />

                                {/* Green center (above fills) */}
                                <g>
                                    <path className="sys-green-center" d="M317.28,309.15c-13.38,8.01-24.11,27.32-23.86,42.91l1.49,93.2c.25,15.59,11.6,34.54,25.23,42.12l81.46,45.31c13.62,7.58,35.72,7.22,49.09-.79l79.97-47.89c13.38-8.01,24.11-27.32,23.86-42.91l-1.49-93.2c-.25-15.59-11.6-34.54-25.23-42.12l-81.46-45.31c-13.62-7.58-35.72-7.22-49.09.79l-79.97,47.89Z" />
                                    <path ref={centerHexRef} className="sys-hex-outline" d="M317.28,309.15c-13.38,8.01-24.11,27.32-23.86,42.91l1.49,93.2c.25,15.59,11.6,34.54,25.23,42.12l81.46,45.31c13.62,7.58,35.72,7.22,49.09-.79l79.97-47.89c13.38-8.01,24.11-27.32,23.86-42.91l-1.49-93.2c-.25-15.59-11.6-34.54-25.23-42.12l-81.46-45.31c-13.62-7.58-35.72-7.22-49.09.79l-79.97,47.89Z" />
                                </g>

                                {/* Text labels inside hexagons */}
                                {/* PI */}
                                <text className="sys-hex-text sys-text-black" transform="translate(82.47 338.24) rotate(-60.92)"><tspan x="0" y="0">PROCESS</tspan><tspan x="-59.68" y="57.6">INTELLIGENCE</tspan></text>
                                <text className={`sys-hex-text sys-text-white sys-text-layer ${showActive && activeIndex === 0 ? 'active' : ''}`} transform="translate(82.47 338.24) rotate(-60.92)"><tspan x="0" y="0">PROCESS</tspan><tspan x="-59.68" y="57.6">INTELLIGENCE</tspan></text>
                                {/* AC */}
                                <text className="sys-hex-text sys-text-black" transform="translate(542.2 720.7) rotate(178.65)"><tspan className="sys-spacing-medium" x="0" y="0">A</tspan><tspan x="35.81" y="0">GENTIC</tspan><tspan x="43.3" y="57.6">CORE</tspan></text>
                                <text className={`sys-hex-text sys-text-white sys-text-layer ${showActive && activeIndex === 1 ? 'active' : ''}`} transform="translate(542.2 720.7) rotate(178.65)"><tspan className="sys-spacing-medium" x="0" y="0">A</tspan><tspan x="35.81" y="0">GENTIC</tspan><tspan x="43.3" y="57.6">CORE</tspan></text>
                                {/* SO */}
                                <text className="sys-hex-text sys-text-black" transform="translate(652.81 144.03) rotate(58.66)"><tspan x="0" y="0">SECURE</tspan><tspan x="-61.79" y="57.6">OPER</tspan><tspan className="sys-spacing-tight" x="68.4" y="57.6">A</tspan><tspan x="102.13" y="57.6">TIONS</tspan></text>
                                <text className={`sys-hex-text sys-text-white sys-text-layer ${showActive && activeIndex === 2 ? 'active' : ''}`} transform="translate(652.81 144.03) rotate(58.66)"><tspan x="0" y="0">SECURE</tspan><tspan x="-61.79" y="57.6">OPER</tspan><tspan className="sys-spacing-tight" x="68.4" y="57.6">A</tspan><tspan x="102.13" y="57.6">TIONS</tspan></text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

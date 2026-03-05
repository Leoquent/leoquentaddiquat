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
                                <path className="sys-hex-outline" d="M332.97,41.95L493.29,134.51Q545.25,164.51 545.25,224.51L545.25,409.63Q545.25,469.63 493.29,499.63L332.97,592.19Q281.01,622.19 229.05,592.19L68.73,499.63Q16.77,469.63 16.77,409.63L16.77,224.51Q16.77,164.51 68.73,134.51L229.05,41.95Q281.01,11.95 332.97,41.95Z" />
                                <path className="sys-hex-outline" d="M478.54,284.88L638.86,377.44Q690.82,407.44 690.82,467.44L690.82,652.56Q690.82,712.56 638.86,742.56L478.54,835.12Q426.58,865.12 374.62,835.12L214.30,742.56Q162.34,712.56 162.34,652.56L162.34,467.44Q162.34,407.44 214.30,377.44L374.62,284.88Q426.58,254.88 478.54,284.88Z" />
                                <path className="sys-hex-outline" d="M616.41,37.50L776.73,130.06Q828.69,160.06 828.69,220.06L828.69,405.17Q828.69,465.17 776.73,495.17L616.41,587.73Q564.45,617.73 512.49,587.73L352.17,495.17Q300.21,465.17 300.21,405.17L300.21,220.06Q300.21,160.06 352.17,130.06L512.49,37.50Q564.45,7.50 616.41,37.50Z" />

                                {/* Active fills */}
                                <path className={`sys-hex-fill sys-fill-layer ${showActive && activeIndex === 0 ? 'active' : ''}`} d="M332.97,41.95L493.29,134.51Q545.25,164.51 545.25,224.51L545.25,409.63Q545.25,469.63 493.29,499.63L332.97,592.19Q281.01,622.19 229.05,592.19L68.73,499.63Q16.77,469.63 16.77,409.63L16.77,224.51Q16.77,164.51 68.73,134.51L229.05,41.95Q281.01,11.95 332.97,41.95Z" />
                                <path className={`sys-hex-fill sys-fill-layer ${showActive && activeIndex === 1 ? 'active' : ''}`} d="M478.54,284.88L638.86,377.44Q690.82,407.44 690.82,467.44L690.82,652.56Q690.82,712.56 638.86,742.56L478.54,835.12Q426.58,865.12 374.62,835.12L214.30,742.56Q162.34,712.56 162.34,652.56L162.34,467.44Q162.34,407.44 214.30,377.44L374.62,284.88Q426.58,254.88 478.54,284.88Z" />
                                <path className={`sys-hex-fill sys-fill-layer ${showActive && activeIndex === 2 ? 'active' : ''}`} d="M616.41,37.50L776.73,130.06Q828.69,160.06 828.69,220.06L828.69,405.17Q828.69,465.17 776.73,495.17L616.41,587.73Q564.45,617.73 512.49,587.73L352.17,495.17Q300.21,465.17 300.21,405.17L300.21,220.06Q300.21,160.06 352.17,130.06L512.49,37.50Q564.45,7.50 616.41,37.50Z" />

                                {/* Green center (above fills) */}
                                <g>
                                    <path className="sys-green-center" d="M445.62,267.51L524.92,313.30Q546.57,325.80 546.57,350.80L546.57,442.36Q546.57,467.36 524.92,479.86L445.62,525.65Q423.97,538.15 402.32,525.65L323.02,479.86Q301.37,467.36 301.37,442.36L301.37,350.80Q301.37,325.80 323.02,313.30L402.32,267.51Q423.97,255.01 445.62,267.51Z" />
                                    <path ref={centerHexRef} className="sys-hex-outline" d="M445.62,267.51L524.92,313.30Q546.57,325.80 546.57,350.80L546.57,442.36Q546.57,467.36 524.92,479.86L445.62,525.65Q423.97,538.15 402.32,525.65L323.02,479.86Q301.37,467.36 301.37,442.36L301.37,350.80Q301.37,325.80 323.02,313.30L402.32,267.51Q423.97,255.01 445.62,267.51Z" />
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

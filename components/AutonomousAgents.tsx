'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

const agents = [
    {
        index: '01',
        name: 'Angebots-Agent',
        headline: 'Angebote in Minuten statt Stunden.',
        description:
            'Ihr Kunde fragt an, der Agent erstellt das Angebot – inklusive Kalkulation, Materialpreisen und Terminvorschlag. Automatisch, präzise und in Ihrer Sprache.',
        detail:
            'Integration in bestehende Warenwirtschaft, automatische Preisanpassung und Nachverfolgung. Der Sonntag am Schreibtisch gehört der Vergangenheit.',
    },
    {
        index: '02',
        name: 'Dokumenten-Agent',
        headline: 'Vom Papierchaos zur digitalen Ordnung.',
        description:
            'Rechnungen, Lieferscheine, Verträge – der Agent erkennt, klassifiziert und archiviert Dokumente autonom. DSGVO-konform und revisionssicher.',
        detail:
            'OCR-Erkennung, automatische Zuordnung zu Projekten und lückenlose Dokumentation für jedes Audit.',
    },
    {
        index: '03',
        name: 'Termin-Agent',
        headline: 'Intelligentes Scheduling ohne Reibungsverluste.',
        description:
            'Koordiniert Kundentermine, Teamverfügbarkeit und Ressourcen. Erkennt Konflikte, bevor sie entstehen, und schlägt optimale Alternativen vor.',
        detail:
            'Nahtlose Integration in Kalender-Systeme, automatische Kundenkommunikation und dynamische Umplanung bei Änderungen.',
    },
];

export default function AutonomousAgents() {
    const [activeAgent, setActiveAgent] = useState(0);

    return (
        <section id="agenten" className="max-w-[1440px] mx-auto grid-border-b bg-white">
            {/* ── Section Label & Description ── */}
            <div className="px-6 md:px-12 lg:px-16 pt-16 pb-4">
                <p className="label-text">Agenten</p>
                <p className="mt-4 text-xs text-text-muted leading-relaxed max-w-[280px]">
                    Wir programmieren die Software so, wie Ihr Kopf arbeitet.
                </p>
            </div>

            {/* ── Section Header ── */}
            <motion.div
                className="px-6 md:px-12 lg:px-16 pb-12 lg:pb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease }}
            >
                <h2 className="section-headline font-sans uppercase text-left">
                    Autonome<br />
                    KI-Mitarbeiter.
                </h2>
                <p className="mt-6 text-lg text-text-deep max-w-xl leading-relaxed">
                    Wir bauen keine UX-Wüsten. Wir bauen autonome Mitarbeiter, die sich nahtlos in Ihren Alltag einfügen.
                </p>
            </motion.div>

            {/* ── Unified Horizontal Agent Selector ── */}
            <div className="px-6 md:px-12 lg:px-16 pb-8 border-b border-black/10">
                <div className="w-full overflow-x-auto hide-scrollbar flex justify-start lg:justify-center">
                    <div className="flex flex-nowrap md:flex-wrap justify-center p-1 bg-white rounded-full border-2 border-black hover:ring-inset hover:ring-1 hover:ring-black transition-all min-w-max md:min-w-0">
                        {agents.map((agent, i) => (
                            <button
                                key={agent.index}
                                onClick={() => setActiveAgent(i)}
                                className={`px-4 md:px-8 py-2.5 rounded-full text-sm font-sans font-bold transition-all relative whitespace-nowrap ${activeAgent === i
                                    ? 'text-white'
                                    : 'text-black hover:bg-black hover:text-white'
                                    }`}
                            >
                                {activeAgent === i && (
                                    <motion.div
                                        layoutId="activeAgentTab"
                                        className="absolute inset-0 bg-black rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{agent.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Agent Cards Content ── */}
            <div className="w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeAgent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease }}
                        className="grid grid-cols-1 xl:grid-cols-2 gap-0"
                    >
                        {/* Text Content */}
                        <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 xl:grid-border-r order-2 xl:order-1 flex flex-col justify-center">
                            <span className="mono-index text-sm font-bold text-text-muted mb-6 block">
                                {agents[activeAgent].index}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 font-sans">
                                {agents[activeAgent].name}
                            </h3>
                            <p className="text-xl font-semibold mb-6 leading-tight">
                                {agents[activeAgent].headline}
                            </p>
                            <p className="text-base text-text-deep leading-relaxed mb-4 max-w-lg">
                                {agents[activeAgent].description}
                            </p>
                            <p className="text-sm text-black/40 leading-relaxed max-w-lg">
                                {agents[activeAgent].detail}
                            </p>
                        </div>

                        {/* Visual Animation */}
                        <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 flex items-center justify-center order-1 xl:order-2 grid-border-b xl:border-b-0">
                            <div className="relative w-full aspect-square max-w-[280px] lg:max-w-[400px]">
                                <svg viewBox="0 0 300 300" className="w-full h-full">
                                    {/* Hex 1 — top center */}
                                    <motion.path
                                        d="M 150 20 L 200 50 L 200 110 L 150 140 L 100 110 L 100 50 Z"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0, ease }}
                                    />
                                    {/* Hex 2 — bottom left */}
                                    <motion.path
                                        d="M 100 110 L 150 140 L 150 200 L 100 230 L 50 200 L 50 140 Z"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3, ease }}
                                    />
                                    {/* Hex 3 — bottom right */}
                                    <motion.path
                                        d="M 200 110 L 250 140 L 250 200 L 200 230 L 150 200 L 150 140 Z"
                                        fill="#9eff20"
                                        fillOpacity={0.1}
                                        stroke="#9eff20"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.6, ease }}
                                    />

                                    {/* Connection dots */}
                                    {[[150, 140], [100, 110], [200, 110]].map(([cx, cy], i) => (
                                        <motion.circle
                                            key={i}
                                            cx={cx}
                                            cy={cy}
                                            r="3"
                                            fill={i === 2 ? '#9eff20' : 'black'}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 1 + i * 0.15 }}
                                        />
                                    ))}
                                </svg>

                                <div className="absolute bottom-2 left-0 right-0 text-center">
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-black/20 font-bold">
                                        Animation: Waben-Netzwerk
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

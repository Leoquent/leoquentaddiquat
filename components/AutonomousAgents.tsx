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
        <section id="agenten" className="grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] mx-auto grid-border-b">
            {/* Sidebar */}
            <aside className="hidden lg:flex lg:col-span-3 grid-border-r px-8 py-16 flex-col justify-between items-start">
                <div>
                    <p className="label-text">Agenten</p>
                    <p className="mt-4 text-xs text-text-muted leading-relaxed max-w-[180px]">
                        Wir programmieren die Software so, wie Ihr Kopf arbeitet.
                    </p>
                </div>

                {/* Agent mini-nav */}
                <div className="flex flex-col gap-3">
                    {agents.map((agent, i) => (
                        <button
                            key={agent.index}
                            onClick={() => setActiveAgent(i)}
                            className={`text-left text-xs uppercase tracking-widest font-bold transition-colors ${activeAgent === i ? 'text-black' : 'text-black/20 hover:text-black/50'
                                }`}
                        >
                            {agent.index} / {agent.name}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Content */}
            <div className="col-span-1 lg:col-span-9">
                {/* Section Header */}
                <motion.div
                    className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 grid-border-b"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease }}
                >
                    <p className="label-text lg:hidden mb-4">Agenten</p>
                    <h2 className="section-headline font-sans uppercase text-left">
                        Autonome<br />
                        KI-Mitarbeiter.
                    </h2>
                    <p className="mt-6 text-lg text-text-deep max-w-xl leading-relaxed">
                        Wir bauen keine UX-Wüsten. Wir bauen autonome Mitarbeiter, die sich nahtlos in Ihren Alltag einfügen.
                    </p>
                </motion.div>

                {/* Agent Cards */}
                <div className="grid grid-cols-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeAgent}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-0"
                        >
                            {/* Text */}
                            <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 lg:grid-border-r">
                                <span className="mono-index text-sm font-bold text-text-muted mb-6 block">
                                    {agents[activeAgent].index}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
                                    {agents[activeAgent].name}
                                </h3>
                                <p className="text-xl font-semibold mb-6 leading-tight">
                                    {agents[activeAgent].headline}
                                </p>
                                <p className="text-base text-text-deep leading-relaxed mb-4">
                                    {agents[activeAgent].description}
                                </p>
                                <p className="text-sm text-black/40 leading-relaxed">
                                    {agents[activeAgent].detail}
                                </p>
                            </div>

                            {/* SVG Placeholder: Ineinandergreifende, sich aufbauende Waben */}
                            <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 flex items-center justify-center">
                                {/* ANIMATION PLACEHOLDER: Ineinandergreifende, sich aufbauende Waben
                                     - Hexagone erscheinen nacheinander
                                     - Verbinden sich zu einem Netzwerk
                                     - Acid Lime Akzente */}
                                <div className="relative w-full aspect-square max-w-[320px]">
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
                                            fill="#CDFF00"
                                            fillOpacity={0.1}
                                            stroke="#CDFF00"
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
                                                fill={i === 2 ? '#CDFF00' : 'black'}
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

                {/* Mobile Agent Selector */}
                <div className="flex lg:hidden gap-2 px-6 py-6 grid-border-t">
                    {agents.map((agent, i) => (
                        <button
                            key={agent.index}
                            onClick={() => setActiveAgent(i)}
                            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-full border-2 transition-all ${activeAgent === i
                                ? 'bg-black text-white border-black'
                                : 'bg-transparent text-black/40 border-black/10 hover:border-black/30'
                                }`}
                        >
                            {agent.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

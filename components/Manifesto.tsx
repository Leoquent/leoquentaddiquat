'use client';

import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Manifesto() {
    return (
        <section id="manifest" className="max-w-[1440px] mx-auto grid-border-b">
            {/* ── Section Label ── */}
            <div className="px-6 md:px-12 lg:px-16 pt-16 pb-4">
                <p className="label-text">Die AGENTur</p>
            </div>

            {/* Content */}
            <div className="px-6 md:px-12 lg:px-16 pb-20 lg:pb-32 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                {/* Text Block */}
                <motion.div
                    className="flex-1 max-w-2xl pt-4 lg:pt-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease }}
                >

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tighter leading-[0.95] mb-8">
                        Strategic<br />
                        Agentic<br />
                        <span className="text-acid-lime">Excellence.</span>
                    </h2>

                    <div className="space-y-6 max-w-lg mb-16">
                        <p className="text-lg md:text-xl text-text-deep leading-relaxed">
                            Wir sind keine klassische Agentur, die Zeit gegen Geld tauscht.
                            Wir sind <span className="font-semibold text-black">Die AGENT<span className="text-acid-lime">ur</span></span> –
                            wir erschaffen autonome KI-Mitarbeiter, die sich genau an Ihre Arbeitsweise anpassen.
                        </p>

                        <p className="text-base text-black/50 leading-relaxed">
                            Für messbaren Nutzen und echte Freiräume. Maßanzug statt Massenware.
                        </p>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-10 border-t border-black/10">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-3 bg-acid-lime" />
                                <p className="label-text">Mission</p>
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed">
                                Wir transformieren Geschäftsprozesse in autonome digitale Architekturen. Durch die Verbindung von strategischer Kreativität und kompromissloser IT-Sicherheit schaffen wir messbaren Nutzen, der Unternehmen agiler, profitabler und menschlicher macht.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-3 bg-acid-lime" />
                                <p className="label-text">Vision</p>
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed">
                                Wir etablieren den neuen Standard für das intelligente Betriebssystem des europäischen Mittelstands – die grenzenlose Kraft der KI für jeden Unternehmer so einfach, zuverlässig und sicher wie ein Lichtschalter.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* SVG Placeholder: Einzelnes, sanft pulsierendes Hexagon */}
                <motion.div
                    className="flex-shrink-0 w-full lg:w-[320px] aspect-square flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, delay: 0.2, ease }}
                >
                    {/* ANIMATION PLACEHOLDER: Einzelnes, sanft pulsierendes Hexagon ("Breathing Intelligence") 
                         - Hexagon atmet sanft (scale pulse)
                         - Acid Lime Glow
                         - Geometrische Wabenform */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 300 300" className="w-full h-full">
                            {/* Outer Hexagon — black outline */}
                            <motion.path
                                d="M 150 30 L 260 75 L 260 225 L 150 270 L 40 225 L 40 75 Z"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease }}
                            />
                            {/* Inner Hexagon — acid lime, pulsing */}
                            <motion.path
                                d="M 150 70 L 230 100 L 230 200 L 150 230 L 70 200 L 70 100 Z"
                                fill="#9eff20"
                                fillOpacity={0.15}
                                stroke="#9eff20"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                animate={{
                                    scale: [1, 1.03, 1],
                                    fillOpacity: [0.1, 0.25, 0.1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                style={{ transformOrigin: '150px 150px' }}
                            />
                            {/* Center dot */}
                            <motion.circle
                                cx="150"
                                cy="150"
                                r="4"
                                fill="#9eff20"
                                animate={{
                                    r: [4, 6, 4],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </svg>

                        {/* Label overlay */}
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-black/20 font-bold">
                                Animation: Breathing Hexagon
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

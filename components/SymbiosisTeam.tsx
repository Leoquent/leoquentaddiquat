'use client';

import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const founders = [
    {
        name: 'Leonid',
        role: 'The Architect of Intent',
        expertise: 'Brand Strategy · Creative AI · Copywriting',
        description:
            'Er übersetzt Kundenbedürfnisse in präzise Sprachlogik. Er sorgt dafür, dass die KI nicht nur funktioniert, sondern „versteht" und verkauft. Er gestaltet die Schnittstelle zwischen Mensch und Maschine.',
    },
    {
        name: 'Admir',
        role: 'The Guardian of Execution',
        expertise: 'Cloud-Architektur · IT-Security · DSGVO',
        description:
            'Er baut das unzerstörbare Fundament. Er garantiert Datensicherheit, stabile Backends und reibungslose Code-Integration. Er macht die Vision „bulletproof".',
    },
];

export default function SymbiosisTeam() {
    return (
        <section id="symbiose" className="grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] mx-auto grid-border-b">
            {/* Sidebar */}
            <aside className="hidden lg:flex lg:col-span-3 grid-border-r px-8 py-16 flex-col justify-between items-start">
                <div>
                    <p className="label-text">Über uns</p>
                    <p className="mt-4 text-xs text-text-muted leading-relaxed max-w-[180px]">
                        Die perfekte Symbiose aus strategischer Kreativität und kompromissloser Technik.
                    </p>
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
                    <p className="label-text lg:hidden mb-4">Über uns</p>
                    <h2 className="section-headline font-sans uppercase text-left">
                        Die L<span className="text-acid-lime">&</span>A<br />
                        Symbiose.
                    </h2>
                    <p className="mt-6 text-lg text-text-deep max-w-xl leading-relaxed">
                        Wir schließen die Lücke zwischen dem Tech-Labor und Ihrem Praxisalltag.
                        Auf der einen Seite übersetzen wir Ihre tiefsten Geschäftsbedürfnisse in präzise Sprachlogik –
                        auf der anderen Seite gießen wir diese Vision in ein unzerstörbares, DSGVO-konformes Fundament.
                    </p>
                </motion.div>

                {/* Founder Cards + SVG */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Founders */}
                    <div className="lg:grid-border-r">
                        {founders.map((founder, i) => (
                            <motion.div
                                key={founder.name}
                                className={`px-6 md:px-12 lg:px-16 py-10 lg:py-14 ${i < founders.length - 1 ? 'grid-border-b' : ''
                                    } group hover:bg-black/[0.02] transition-colors`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                            >
                                <div className="flex items-baseline gap-4 mb-4">
                                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                                        {founder.name}
                                    </h3>
                                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-acid-lime">
                                        {founder.role}
                                    </span>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30 mb-4">
                                    {founder.expertise}
                                </p>
                                <p className="text-base text-text-deep leading-relaxed">
                                    {founder.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* SVG Placeholder: Zwei Hexagone die verschmelzen */}
                    <motion.div
                        className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 1, delay: 0.3, ease }}
                    >
                        {/* ANIMATION PLACEHOLDER: Zwei Hexagone, die sich in der Mitte treffen
                             - Ein Hexagon als Outline (schwarz) = Intent / Strategie
                             - Ein Hexagon gefüllt in Acid Lime = Execution / Technik
                             - Die Hexagone treffen sich in der Mitte und verschmelzen */}
                        <div className="relative w-full aspect-square max-w-[320px]">
                            <svg viewBox="0 0 300 300" className="w-full h-full">
                                {/* Left Hexagon — Intent (outline) */}
                                <motion.path
                                    d="M 90 80 L 140 55 L 190 80 L 190 145 L 140 170 L 90 145 Z"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease }}
                                />

                                {/* Right Hexagon — Execution (filled lime) */}
                                <motion.path
                                    d="M 110 155 L 160 130 L 210 155 L 210 220 L 160 245 L 110 220 Z"
                                    fill="#CDFF00"
                                    fillOpacity={0.2}
                                    stroke="#CDFF00"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.4, ease }}
                                />

                                {/* Overlap zone — center glow */}
                                <motion.circle
                                    cx="150"
                                    cy="150"
                                    r="12"
                                    fill="#CDFF00"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 0.6 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1 }}
                                />
                                <motion.circle
                                    cx="150"
                                    cy="150"
                                    r="4"
                                    fill="black"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.3 }}
                                />

                                {/* Labels */}
                                <text x="115" y="42" className="text-[8px] uppercase tracking-widest fill-black/30 font-bold">Intent</text>
                                <text x="155" y="262" className="text-[8px] uppercase tracking-widest fill-black/30 font-bold">Execution</text>
                            </svg>

                            <div className="absolute bottom-2 left-0 right-0 text-center">
                                <span className="text-[9px] uppercase tracking-[0.3em] text-black/20 font-bold">
                                    Animation: Symbiose-Hexagone
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

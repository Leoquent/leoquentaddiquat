'use client';

import { motion } from 'motion/react';

const features = [
    {
        index: '01',
        title: 'Agentic Core',
        desc: 'Eigene KI-Kerne, die komplexe Verwaltungslogik ohne menschliches Eingreifen autonom beherrschen.',
    },
    {
        index: '02',
        title: 'DSGVO-Sicherheit',
        desc: 'DSGVO-konforme Backends mit Deep IT-Administration und sicherer Cloud-Architektur.',
    },
    {
        index: '03',
        title: 'Custom Logic',
        desc: 'Wir biegen nicht den Kunden für die Software — wir programmieren die Software für den Prozess des Kunden.',
    },
];

export default function SystemGrid() {
    return (
        <section id="technologie" className="grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] mx-auto">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 grid-border-r px-8 py-16">
                <p className="label-text">System</p>
            </aside>

            {/* Content */}
            <div className="col-span-1 lg:col-span-9">
                {/* Section Headline */}
                <motion.div
                    className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 grid-border-b"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="section-headline font-sans uppercase text-left">
                        Skalierbar.<br />
                        Sicher.<br />
                        Souverän.
                    </h2>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.index}
                            className={`p-8 md:p-12 grid-border-b hover:bg-black/[0.02] transition-colors group ${i < features.length - 1 ? 'md:grid-border-r' : ''
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="mono-index text-sm font-bold text-text-muted mb-8">
                                {feature.index}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-text-deep leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
    {
        num: '01',
        title: 'Analyse',
        description: 'Bevor wir eine Zeile Code schreiben, müssen wir Ihre Pain Points verstehen. Durch eine tiefe, kostenlose Potenzialanalyse erlangen wir volles Verständnis für Ihre geschäftlichen Herausforderungen und decken auf, wo Sie aktuell Zeit und Geld durch ineffiziente Abläufe verlieren.'
    },
    {
        num: '02',
        title: 'Architektur',
        description: 'Wir konzipieren die exakte Blaupause für Ihr KI-System. Ein maßgeschneidertes Architektur-Design, das sich nahtlos in Ihre bestehende Geschäftslogik einfügt und für minimale Latenz, höchste Skalierbarkeit sowie strikte Datensicherheit ausgelegt ist.'
    },
    {
        num: '03',
        title: 'Entwicklung',
        description: 'Wir entwickeln eine agentische Lösung für Ihr Problem. Wir aktivieren ungenutzte KI-Potenziale in Ihren bestehenden Tools, implementieren maßgeschneiderte Software und schalten autonome KI-Mitarbeiter exakt dort dazwischen, wo sie Ihnen die meiste Arbeit abnehmen.'
    },
    {
        num: '04',
        title: 'Integration',
        description: 'Nach der Entwicklung sichern wir den laufenden Betrieb. Sie erhalten ein schlüsselfertiges System inklusive Team-Onboarding. Höchste Datensicherheit nach DSGVO, dediziertes Server-Hosting, ständige Wartung, Updates sowie proaktive Pflege übernehmen wir vollständig und dauerhaft.'
    }
];

export default function SystemProcess() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="prozess" className="max-w-[1440px] mx-auto bg-white pt-24 pb-24 md:pt-32 md:pb-32 grid-border-b">
            {/* Context/Header */}
            <div className="px-6 md:px-12 lg:px-16 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-black rounded-full" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/50">
                            Prozess & System
                        </span>
                    </div>
                    <h2 className="section-headline font-sans uppercase mb-6 leading-none">
                        Unser Weg zu<br />
                        Ihrer <span className="relative inline-block mt-2">
                            Lösung
                            <span className="absolute bottom-1 left-0 w-full h-[40%] bg-acid-lime -z-10" />
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-text-deep leading-relaxed max-w-2xl font-medium">
                        Transparente Meilensteine von der ersten Potenzialanalyse bis zum schlüsselfertigen autonomen Agenten im laufenden Betrieb.
                    </p>
                </motion.div>
            </div>

            {/* Brutalist Accordion List */}
            <div className="border-t border-black">
                {steps.map((step, idx) => {
                    const isActive = activeIndex === idx;

                    return (
                        <div
                            key={step.num}
                            onClick={() => setActiveIndex(idx)}
                            className={`group border-b border-black overflow-hidden cursor-pointer transition-colors duration-500 ${isActive ? 'bg-acid-lime' : 'bg-white hover:bg-neutral-50'}`}
                        >
                            <div className="px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16">

                                {/* Left Side: Number + Title */}
                                <div className="flex items-center lg:w-[45%] shrink-0 gap-6 md:gap-10">
                                    <span className={`text-2xl md:text-3xl lg:text-4xl font-mono font-bold transition-colors duration-500 ${isActive ? 'text-black/60' : 'text-black/30 group-hover:text-black/50'}`}>
                                        {step.num}
                                    </span>
                                    <h3
                                        className={`font-sans font-black uppercase tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-500 ${isActive ? 'text-black' : 'text-transparent group-hover:text-black'}`}
                                        style={!isActive ? { WebkitTextStroke: '1px black' } : undefined}
                                    >
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Right Side: Animated Description */}
                                <div className="lg:w-[55%] flex items-center">
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed pt-2 lg:pt-0 pb-2 text-black font-medium pr-4">
                                                    {step.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}

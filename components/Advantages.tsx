'use client';

import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as const;

const advantages = [
    {
        title: 'Zeit sparen',
        description: 'Automatische Datenverarbeitung und Prozessführung reduzieren den manuellen Aufwand drastisch. Ihr Team gewinnt wieder Raum für strategische Aufgaben.',
    },
    {
        title: 'Kosten reduzieren',
        description: 'Effizienzgewinne und Fehlervermeidung senken Ihre operativen Kosten signifikant – messbarer ROI ab dem Tag der Implementierung.',
    },
    {
        title: 'Wettbewerbsvorteil',
        description: 'Skalieren Sie beliebig, ohne zusätzliches Personal. KI-Agenten ermöglichen Ihnen, schneller und präziser am Markt zu agieren als Ihre Mitbewerber.',
    },
    {
        title: 'Maßgeschneidert',
        description: 'Wir zwingen Sie in kein Korsett aus Standard-Software. Jede Lösung wird individuell exakt auf Ihre spezifische Unternehmenslogik und Datenstruktur abgestimmt.',
    }
];

export default function Advantages() {
    return (
        <section id="mehrwert" className="max-w-[1440px] mx-auto grid-border-b bg-white pt-24 pb-24 md:pt-32 md:pb-32">
            <div className="px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease }}
                    className="lg:w-5/12"
                >
                    <div className="sticky top-32">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 bg-black rounded-full" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/50">
                                Mehrwert
                            </span>
                        </div>
                        <h2 className="section-headline font-sans uppercase mb-8 leading-[0.9]">
                            Der <span className="relative inline-block mt-2">
                                Addiquat
                                <span className="absolute bottom-1 left-0 w-full h-[40%] bg-acid-lime -z-10" />
                            </span><br />Vorteil
                        </h2>
                        <p className="text-lg md:text-xl text-text-deep leading-relaxed max-w-sm">
                            Warum führende Unternehmen auf unsere autonomen Architekturen vertrauen.
                        </p>
                    </div>
                </motion.div>

                <div className="lg:w-7/12 flex flex-col gap-12 lg:gap-16 pt-4">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.1 * index, ease }}
                            className="pl-6 md:pl-10 border-l-[6px] md:border-l-[8px] border-acid-lime"
                        >
                            <h3 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter mb-4 lg:mb-6 text-black">
                                {adv.title}
                            </h3>
                            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

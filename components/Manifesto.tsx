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
            <div className="px-6 md:px-12 lg:px-16 pb-20 lg:pb-32 flex flex-col pt-4 lg:pt-8 w-full">
                <motion.div
                    className="w-full flex justify-between items-start flex-col xl:flex-row gap-16 mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-sans font-black uppercase tracking-tighter leading-[0.85] text-black">
                        Strategic<br />
                        Agentic<br />
                        <span className="relative z-10 inline-block">
                            Excellence.
                            <span className="absolute inset-0 bg-acid-lime -z-10 -mx-1" />
                        </span>
                    </h2>

                    <div className="max-w-2xl xl:pt-6 space-y-8 lg:self-end">
                        <p className="text-xl md:text-2xl text-text-deep leading-relaxed font-medium">
                            Wir sind keine klassische Agentur, die Zeit gegen Geld tauscht.
                            Wir sind <span className="font-bold relative z-10 px-1">Die AGENTur<span className="absolute inset-0 bg-acid-lime -z-10" /></span> –
                            wir erschaffen autonome KI-Mitarbeiter, die sich genau an Ihre Arbeitsweise anpassen.
                        </p>

                        <p className="text-lg text-black/50 leading-relaxed font-semibold tracking-wide">
                            Für messbaren Nutzen und echte Freiräume. Maßanzug statt Massenware.
                        </p>
                    </div>
                </motion.div>

                {/* Mission & Vision - Full Width Brutalist Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-black/20 w-full">
                    <motion.div
                        className="py-12 md:py-16 md:pr-16 md:border-r border-black/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2, ease }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xs uppercase tracking-[0.1em] font-black text-black bg-acid-lime px-3 py-1">Mission</span>
                        </div>
                        <p className="text-lg lg:text-xl text-text-deep leading-relaxed font-medium">
                            Wir transformieren Geschäftsprozesse in autonome digitale Architekturen. Durch die Verbindung von strategischer Kreativität und kompromissloser IT-Sicherheit schaffen wir messbaren Nutzen, der Unternehmen agiler, profitabler und menschlicher macht.
                        </p>
                    </motion.div>

                    <motion.div
                        className="py-12 md:py-16 md:pl-16 border-t md:border-t-0 border-black/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.4, ease }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xs uppercase tracking-[0.1em] font-black text-black bg-acid-lime px-3 py-1">Vision</span>
                        </div>
                        <p className="text-lg lg:text-xl text-text-deep leading-relaxed font-medium">
                            Das europäische Ökosystem wird autonom. Wir bauen das fundamentale Betriebssystem für den Mittelstand – kompromisslos sicher, endlos skalierbar und so selbstverständlich nutzbar wie Elektrizität.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

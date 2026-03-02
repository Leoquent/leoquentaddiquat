'use client';

import { motion } from 'motion/react';

export default function FooterCTA() {
    return (
        <footer id="kontakt" className="bg-black text-white py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
                {/* Left — Headline + Contact */}
                <motion.div
                    className="lg:col-span-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12">
                        Bereit für<br />
                        <span className="text-acid-lime">echte Freiräume?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-8 md:gap-12 text-white/50">
                        <div>
                            <p className="label-text mb-4 !text-white">Büro</p>
                            <p className="text-sm leading-relaxed uppercase">
                                Berlin, Deutschland<br />
                                Remote-First
                            </p>
                        </div>
                        <div>
                            <p className="label-text mb-4 !text-white">Kontakt</p>
                            <p className="text-sm leading-relaxed uppercase">
                                hello@leoquent-addiquat.de<br />
                                +49 (0) 123 456 789
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right — Text + Email Form */}
                <motion.div
                    className="lg:col-span-6 flex flex-col justify-between lg:items-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="w-full max-w-md">
                        <p className="text-lg text-white/50 mb-8 leading-relaxed">
                            Keine Buzzwords. Nur Ergebnisse. Kontaktieren Sie uns, um über Ihre autonome Architektur-Transformation zu sprechen.
                        </p>

                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="E-MAIL-ADRESSE"
                                className="bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 focus:outline-none focus:border-acid-lime transition-colors text-sm tracking-widest uppercase"
                            />
                            <button
                                type="submit"
                                className="mt-4 bg-acid-lime text-black py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-full"
                            >
                                Kontakt aufnehmen
                            </button>
                        </form>
                    </div>

                    <div className="mt-12">
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
                            © 2025 Leoquent & Addiquat. Alle Rechte vorbehalten.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

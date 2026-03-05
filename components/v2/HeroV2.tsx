'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroV2() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden bg-black selection:bg-[#9eff20] selection:text-black">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9eff20] rounded-full blur-[160px] opacity-[0.07] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#9eff20] rounded-full blur-[140px] opacity-[0.05]"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="v2-text-label mb-8"
                    >
                        Strategic Agentic Excellence
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="v2-text-h1 mb-10 max-w-5xl mx-auto"
                    >
                        Wir bauen KI-Systeme, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9eff20]">die Ihre Arbeit machen.</span><br />
                        Nicht umgekehrt.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="v2-text-p text-[#888888] max-w-2xl mx-auto mb-16"
                    >
                        Ob wir bestehende Insellösungen vernetzen oder komplette Software von Grund auf neu programmieren:
                        Wir schaffen autonome Architekturen, die Ihre Arbeitsabläufe optimieren und den Erfolg maximieren.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row gap-8"
                    >
                        <a
                            href="#kontakt"
                            className="group relative px-10 py-5 bg-[#9eff20] text-black v2-text-btn overflow-hidden transition-all duration-500 hover:pr-14"
                        >
                            <span className="relative z-10">Kostenlose Potenzialanalyse</span>
                            <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={20} />
                        </a>
                        <a
                            href="#manifest"
                            className="px-10 py-5 border border-white/20 text-white v2-text-btn hover:bg-white hover:text-black transition-all duration-500"
                        >
                            Unsere Strategie entdecken
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#9eff20] to-transparent animate-infinite-scroll"></div>
            </motion.div>
        </section>
    );
}

'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroV3() {
    return (
        <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-0 px-6 sm:px-12 lg:px-24 overflow-hidden bg-[var(--v3-bg)] text-[var(--v3-text)]">
            {/* Cinematic Background Textures */}
            <div className="v3-grid-overlay"></div>
            <div className="v3-noise"></div>

            <div className="max-w-[1600px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full flex-grow items-center">

                {/* Folio Tagline - rotated on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-6 top-32 lg:left-12 lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90 origin-left v3-text-label whitespace-nowrap hidden md:block opacity-60"
                >
                    Strategic Agentic Excellence
                </motion.div>

                {/* Mobile top-tagline fallback */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="md:hidden v3-text-label self-start mb-12 opacity-80"
                >
                    Strategic Agentic Excellence
                </motion.div>

                {/* Main Headline (Manifesto Split-Style) */}
                <div className="col-span-1 lg:col-span-12 flex flex-col mt-4 lg:mt-0 lg:ml-12 2xl:ml-24">
                    <div className="v3-text-h1 flex flex-col tracking-[-0.04em] leading-[0.85] font-[900]">
                        {/* Word 1 */}
                        <div className="overflow-hidden p-1 -m-1">
                            <motion.div
                                initial={{ y: '100%' }}
                                animate={{ y: '0%' }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#111111]"
                            >
                                WIR BAUEN
                            </motion.div>
                        </div>

                        {/* Word 2 (Outline Contrast) */}
                        <div className="overflow-hidden p-1 -m-1">
                            <motion.div
                                initial={{ y: '100%' }}
                                animate={{ y: '0%' }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="v3-text-outline"
                            >
                                KI-SYSTEME,
                            </motion.div>
                        </div>

                        {/* Word 3 */}
                        <div className="overflow-hidden p-1 -m-1">
                            <motion.div
                                initial={{ y: '100%' }}
                                animate={{ y: '0%' }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#111111]"
                            >
                                DIE IHRE ARBEIT MACHEN.
                            </motion.div>
                        </div>

                        {/* Word 4 & Marker Highlight */}
                        <div className="overflow-visible pt-1 -mt-1 sm:mt-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#111111] relative self-start inline-block"
                            >
                                <span className="relative z-10 px-2 lg:px-4">NICHT UMGEKEHRT.</span>
                                {/* Acid Lime dynamic wipe behind text */}
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute bottom-[0.1em] top-[0.45em] left-0 right-[-2%] bg-[var(--v3-accent)] z-[-1] origin-left mix-blend-multiply"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subline and CTA positioned asymmetrically bottom right */}
            <div className="max-w-[1600px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-32 pt-16 lg:pt-0">
                <div className="col-span-1 lg:col-start-7 lg:col-span-6 flex flex-col gap-10 xl:pr-12 2xl:pr-24 lg:pl-4">
                    <motion.p
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="v3-text-p max-w-2xl text-[var(--v3-text)] lg:border-l lg:border-[var(--v3-grid)] lg:pl-8 py-2"
                    >
                        Ob wir bestehende Insellösungen vernetzen oder komplette Software von Grund auf neu programmieren: Wir schaffen autonome Architekturen, die Ihre Arbeitsabläufe optimieren und den Erfolg maximieren.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:pl-8"
                    >
                        {/* Acid Lime Magnetic Fill Button */}
                        <a
                            href="#kontakt"
                            className="group inline-flex relative items-center justify-between px-8 py-5 bg-[var(--v3-text)] text-[var(--v3-bg)] v3-text-btn overflow-hidden transition-all duration-500 hover:pr-14"
                        >
                            {/* Hover background layer */}
                            <div className="absolute inset-0 bg-[var(--v3-accent)] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>

                            {/* Button text */}
                            <span className="relative z-10 mr-8 transition-colors duration-500 group-hover:text-[#111111]">
                                Kostenlose Potenzialanalyse
                            </span>

                            {/* Hover Icon */}
                            <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 text-[#111111] z-10" size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Scroll Indicator - fine vertical rule */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 80 }}
                transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-[24px] sm:left-[48px] lg:left-[calc(50%-1px)] w-[1px] bg-gradient-to-t from-[var(--v3-text)] to-transparent opacity-20"
            />
        </section>
    );
}

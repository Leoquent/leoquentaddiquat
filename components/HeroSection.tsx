'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';

const ease = [0.16, 1, 0.3, 1] as const;

const phrases = [
    "endlose\nZettelwirtschaft.",
    "fehleranfällige\nRoutinearbeit.",
    "manuelle\nDatenpflege.",
    "starre\nSystemvorgaben.",
    "administrative\nDauerlast.",
    "Sonntage am\nSchreibtisch.",
    "isolierte\nInsellösungen.",
    "Software-\nsklaverei."
];

export default function HeroSection() {

    return (
        <section className="min-h-screen max-w-[1440px] mx-auto grid-border-b flex flex-col px-6 md:px-12 lg:px-16 pt-32 pb-16 justify-center overflow-hidden">
            {/* Main hero content */}
            <div className="flex flex-col w-full flex-grow justify-center">
                {/* Tagline */}
                <motion.div
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease }}
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">
                        Strategic Agentic Excellence
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease }}
                    className="perspective-[1000px] w-full"
                >
                    <h1 className="hero-headline font-sans uppercase flex flex-col items-start w-full">
                        <span className="opacity-90 mb-2">Wir beenden</span>
                        <div className="relative w-full min-h-[100px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[220px] xl:min-h-[240px] mb-8 lg:mb-12">
                            <Typewriter
                                words={phrases}
                                speed={60}
                                delayBetweenWords={1800}
                                className="block text-acid-lime font-serif font-bold opacity-90 text-[clamp(1.85rem,8.5vw,8rem)] tracking-[-0.04em] leading-[0.88] origin-top-left"
                            />
                        </div>
                    </h1>
                </motion.div>

                {/* Body + CTAs */}
                <motion.div
                    className="flex flex-col gap-12 mt-12 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease }}
                >
                    <div className="max-w-4xl">
                        <p className="text-lg md:text-xl text-text-deep leading-relaxed">
                            Standard-Software zwingt Sie zur Anpassung. Wir drehen den Spieß um.
                            Ob wir bestehende Insellösungen intelligent vernetzen oder neue KI-Systeme von Grund auf neu programmieren:
                            Wir schaffen <span className="text-black font-semibold">autonome Architekturen</span>,
                            die sich nahtlos in Ihren Arbeitsalltag integrieren.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 w-full">
                        <motion.a
                            href="#kontakt"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-acid-lime text-black px-10 py-4 rounded-full font-sans font-medium flex items-center justify-center gap-3 group transition-all hover:brightness-95 min-w-[240px]"
                        >
                            Jetzt befreien
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </motion.a>

                        <a
                            href="#system"
                            className="text-sm font-bold uppercase tracking-widest text-black/40 hover:text-black border-b-2 border-transparent hover:border-black transition-all pb-1 whitespace-nowrap"
                        >
                            Unsere Strategie entdecken
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

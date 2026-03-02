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
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] mx-auto grid-border-b">
            {/* Sidebar — desktop only */}
            <aside className="hidden lg:flex lg:col-span-3 grid-border-r px-8 py-16 pt-28 flex-col justify-start gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-3 bg-acid-lime" />
                        <p className="label-text">Mission</p>
                    </div>
                    <p className="mt-4 text-xs text-text-muted leading-relaxed max-w-[200px]">
                        Wir transformieren Geschäftsprozesse in autonome digitale Architekturen. Durch die Verbindung von strategischer Kreativität und kompromissloser IT-Sicherheit schaffen wir messbaren Nutzen, der Unternehmen agiler, profitabler und menschlicher macht.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-[200px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-3 bg-acid-lime" />
                        <p className="label-text">Vision</p>
                    </div>
                    <p className="mt-4 text-xs text-text-muted leading-relaxed">
                        Wir etablieren den neuen Standard für das intelligente Betriebssystem des europäischen Mittelstands – die grenzenlose Kraft der KI für jeden Unternehmer so einfach, zuverlässig und sicher wie ein Lichtschalter.
                    </p>
                </motion.div>
            </aside>

            {/* Main hero content */}
            <div className="col-span-1 lg:col-span-9 px-6 md:px-12 lg:px-16 pt-28 lg:pt-28 pb-16 flex flex-col justify-between min-h-screen lg:min-h-[85vh]">
                {/* Tagline — mobile only */}
                <motion.div
                    className="flex items-center gap-3 mb-8 lg:hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease }}
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
                        <div className="relative w-full min-h-[140px] mb-8 lg:min-h-[180px]">
                            <Typewriter
                                words={phrases}
                                speed={60}
                                delayBetweenWords={1800}
                                className="block text-acid-lime font-serif font-normal opacity-90 text-[clamp(2.5rem,7vw,7rem)] tracking-tight leading-[0.9] origin-top-left"
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

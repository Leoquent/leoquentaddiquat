'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function CoreCapabilities() {
    const cards = [
        {
            id: "01",
            title: "GENERATIVE\nMODELS",
            description: "Maßgeschneiderte LLMs und multimodale Systeme, die Ihre proprietären Daten verstehen und exakt in Ihrer Unternehmenssprache kommunizieren.",
            dark: true,
            href: "#kontakt"
        },
        {
            id: "02",
            title: "AUTONOMOUS\nAGENTS",
            description: "Intelligente Software-Agenten, die komplexe Workflows komplett eigenständig analysieren, entscheiden und fehlerfrei abarbeiten.",
            dark: false,
            href: "#kontakt"
        },
        {
            id: "03",
            title: "DATA\nINFRASTRUCTURE",
            description: "Robuste, skalierbare Datenarchitekturen als Fundament. Wir strukturieren Ihre unstrukturierten Daten für den optimalen KI-Einsatz.",
            dark: false,
            href: "#kontakt"
        }
    ];

    return (
        <section id="services" className="max-w-[1440px] mx-auto grid-border-b flex flex-col pt-24 md:pt-32 pb-0">
            <div className="px-6 md:px-12 lg:px-16 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-black rounded-full" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/50">
                            Services
                        </span>
                    </div>
                    <h2 className="section-headline font-sans uppercase text-black">
                        Unsere <span className="relative inline-block mt-2">
                            Kompetenzen
                            <span className="absolute bottom-1 left-0 w-full h-[40%] bg-acid-lime -z-10" />
                        </span>
                    </h2>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 w-full border-t border-border-light">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className={`group relative flex flex-col justify-between p-8 md:p-12 min-h-[450px] md:min-h-[500px] border-b lg:border-b-0 lg:border-r border-border-light last:border-b-0 last:border-r-0 ${card.dark ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 * index, ease }}
                    >
                        <div className="flex justify-between items-start mb-12">
                            <span className={`text-xs font-mono font-bold tracking-[0.2em] ${card.dark ? 'text-white/50' : 'text-black/40'}`}>
                                {card.id}
                            </span>
                        </div>

                        <div className="flex-grow">
                            <h3 className={`font-sans font-bold text-4xl lg:text-5xl uppercase tracking-tighter mb-6 whitespace-pre-line leading-none ${card.dark ? 'text-acid-lime' : 'text-black'
                                }`}>
                                {card.title}
                            </h3>
                            <p className={`text-lg max-w-[280px] mb-12 leading-relaxed ${card.dark ? 'text-white/70' : 'text-text-muted'
                                }`}>
                                {card.description}
                            </p>
                        </div>

                        <a
                            href={card.href}
                            className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest mt-auto transition-colors w-fit ${card.dark ? 'text-white hover:text-acid-lime' : 'text-black hover:text-black'
                                }`}
                        >
                            Details
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

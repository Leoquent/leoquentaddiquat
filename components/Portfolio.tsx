'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
    {
        title: 'Nexus Data AI',
        client: 'Finanzwesen',
        category: 'Data Infrastructure',
    },
    {
        title: 'Omni CRM',
        client: 'Einzelhandel',
        category: 'Generative Models',
    },
    {
        title: 'AutoLogistics',
        client: 'Supply Chain',
        category: 'Autonomous Agents',
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="max-w-[1440px] mx-auto grid-border-b bg-black text-white pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
            <div className="px-6 md:px-12 lg:px-16 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease }}
                    className="max-w-2xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-acid-lime rounded-full" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-acid-lime">
                            Auswahl
                        </span>
                    </div>
                    <h2 className="section-headline font-sans uppercase leading-none text-white">
                        Aktuelle <span className="relative inline-block mt-2 text-black">
                            Projekte
                            <span className="absolute bottom-1 left-0 w-full h-[60%] bg-acid-lime -z-10" />
                        </span>
                    </h2>
                </motion.div>

                <motion.a
                    href="#kontakt"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease }}
                    className="hidden md:flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-acid-lime pb-4 border-b border-transparent hover:border-acid-lime transition-all"
                >
                    Alle Cases ansehen
                    <ArrowRight className="w-4 h-4" />
                </motion.a>
            </div>

            <div className="px-6 md:px-12 lg:px-16">
                <div className="flex flex-col border-t border-white/20">
                    {projects.map((project, index) => (
                        <motion.a
                            href="#kontakt"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease }}
                            className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-white/20 transition-colors duration-500 overflow-hidden"
                        >
                            {/* Hover Background Reveal */}
                            <div className="absolute inset-0 bg-acid-lime/0 group-hover:bg-acid-lime/5 transition-colors duration-500 ease-out pointer-events-none" />

                            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 relative z-10 w-full md:w-auto">
                                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/30 group-hover:text-acid-lime/50 w-8 hidden md:block transition-colors">
                                    0{index + 1}
                                </span>

                                <h3 className="font-sans font-black text-4xl md:text-5xl lg:text-7xl uppercase tracking-tighter text-white group-hover:text-acid-lime transition-colors duration-500">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex items-center justify-between mt-8 md:mt-0 relative z-10">
                                <div className="flex flex-col gap-2 md:text-right mr-8 md:mr-12">
                                    <span className="text-sm font-bold text-white/60 uppercase tracking-widest">{project.client}</span>
                                    <span className="text-xs text-acid-lime/80 font-mono tracking-wider uppercase">{project.category}</span>
                                </div>

                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-acid-lime group-hover:border-acid-lime transition-all duration-500 shrink-0">
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

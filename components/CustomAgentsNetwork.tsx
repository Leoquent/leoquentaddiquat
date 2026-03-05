'use client';

import { motion } from 'motion/react';
import { Phone, FileText, Calendar, Receipt } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const agents = [
    {
        id: 'call',
        name: 'Call-Center Agent',
        description: 'Nimmt Anrufe in natürlicher Sprache auf, priorisiert Anliegen und trägt sie in Ihr CRM ein – 24/7 erreichbar.',
        icon: Phone,
        highlight: true,
        delay: 0.1
    },
    {
        id: 'termin',
        name: 'Termin-Agent',
        description: 'Koordiniert Kundentermine und Teamverfügbarkeiten. Erkennt Konflikte und schlägt Alternativen vor.',
        icon: Calendar,
        highlight: false,
        delay: 0.2
    },
    {
        id: 'dokument',
        name: 'Dokumenten-Agent',
        description: 'Erkennt, klassifiziert und archiviert Rechnungen oder Lieferscheine autonom und revisionssicher.',
        icon: FileText,
        highlight: false,
        delay: 0.3
    },
    {
        id: 'angebot',
        name: 'Angebots-Agent',
        description: 'Ihr Kunde fragt an, der Agent erstellt das Angebot inkl. Kalkulation und Terminvorschlag. Automatisch.',
        icon: Receipt,
        highlight: false,
        delay: 0.4
    }
];

export default function CustomAgentsNetwork() {
    return (
        <section id="agenten" className="bg-black text-white relative flex flex-col pt-32 pb-32 md:pb-48 overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-acid-lime/20 rounded-full blur-[150px] pointer-events-none" />

            {/* Content Container */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">

                <motion.div
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-32"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease }}
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 bg-acid-lime rounded-full animate-pulse" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-acid-lime">
                                Custom Agent Network
                            </span>
                        </div>
                        <h2 className="section-headline font-sans uppercase mb-6 text-white leading-[0.9]">
                            Ihr Autonomes<br />
                            <span className="relative inline-block mt-2 text-black">
                                Ökosystem
                                <span className="absolute bottom-1 left-0 w-full h-[60%] bg-acid-lime -z-10" />
                            </span>
                        </h2>
                    </div>
                    <div className="max-w-md lg:pb-4">
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-sans">
                            Wir bauen keine isolierten Tools, sondern vernetzte Schwärme aus spezialisierten KI-Kollegen, die Hand in Hand arbeiten.
                        </p>
                    </div>
                </motion.div>

                {/* Agents Grid - Editorial but with Card separation to match glow aesthetic */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20">
                    {agents.map((agent) => (
                        <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: agent.delay, ease }}
                            className={`p-8 md:p-10 flex flex-col min-h-[380px] justify-between transition-all border-b border-r border-white/20 group ${agent.highlight
                                ? 'bg-acid-lime text-black border-acid-lime'
                                : 'bg-transparent text-white hover:bg-white/5'
                                }`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[10px] font-mono font-bold tracking-[0.2em] ${agent.highlight ? 'text-black/50' : 'text-acid-lime'}`}>
                                    {agent.id.toUpperCase()}
                                </span>
                                <agent.icon className={`w-8 h-8 ${agent.highlight ? 'text-black' : 'text-white/50'}`} strokeWidth={1.5} />
                            </div>

                            <div className="pt-20">
                                <h3 className={`font-sans font-black text-2xl uppercase tracking-tighter mb-4 leading-none ${agent.highlight ? 'text-black' : 'text-white'
                                    }`}>
                                    {agent.name}
                                </h3>
                                <p className={`text-base leading-relaxed ${agent.highlight ? 'text-black/80' : 'text-white/70'
                                    }`}>
                                    {agent.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

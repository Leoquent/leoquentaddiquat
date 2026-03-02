'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const items = [
    {
        index: '01',
        label: 'Preis',
        title: 'Performance-Pricing',
        body: 'Wir rechnen nicht nach Stunden ab. Wir berechnen den Nutzen. Wenn unsere KI Ihrem Unternehmen 10 Stunden Büroarbeit pro Woche einspart, ist das der Wertmaßstab – nicht die Zeit, die wir investiert haben. Sie zahlen für Ergebnisse, nicht für Anwesenheit.',
    },
    {
        index: '02',
        label: 'Speed',
        title: 'Radikale Agilität',
        body: 'Keine Knebelverträge, keine Mindestlaufzeiten. Alles monatlich kündbar – ohne Wenn und Aber. Wir tragen keine aufgeblähten Agenturstrukturen auf Ihrem Rücken aus. Sie erreichen uns direkt, ohne Ticketsystem und Warteschleife. Wir liefern jeden Monat so viel Wert, dass Sie gar nicht kündigen wollen.',
    },
    {
        index: '03',
        label: 'Qualität',
        title: 'Kompromisslose Präzision',
        body: 'Wir kombinieren modernste KI-Innovation mit handwerklicher Sorgfalt und IT-Sicherheit auf Enterprise-Niveau. DSGVO-konform, stabil und durchdacht – jedes System, das wir bauen, ist bulletproof.',
    },
    {
        index: '04',
        label: 'Individualität',
        title: 'Maßanzug statt Massenware',
        body: 'Wir biegen nicht den Kunden für die Software, sondern programmieren die Software für den Kunden. Jede Lösung folgt dem individuellen Prozess Ihres Unternehmens – von Grund auf neu gedacht, nicht zusammengeklickt.',
    },
];

export default function WhyDifferent() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] mx-auto grid-border-b">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 grid-border-r px-8 py-16">
                <p className="label-text">Warum anders</p>
            </aside>

            {/* Accordion Rows */}
            <div className="col-span-1 lg:col-span-9">
                {items.map((item, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <motion.div
                            key={item.index}
                            className={`${i < items.length - 1 ? 'grid-border-b' : ''}`}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Clickable header row */}
                            <button
                                onClick={() => toggle(i)}
                                className={`w-full text-left h-auto min-h-[140px] md:min-h-[180px] grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-16 py-8 md:py-0 transition-all duration-300 group cursor-pointer
                                    ${isOpen ? 'bg-black text-white' : 'hover:bg-acid-lime hover:text-black'}`}
                            >
                                <div className="md:col-span-4 mb-2 md:mb-0">
                                    <span className={`mono-index text-xs transition-colors
                                        ${isOpen ? 'text-white/50' : 'text-text-muted group-hover:text-black/50'}`}>
                                        {item.index} / {item.label.toUpperCase()}
                                    </span>
                                </div>
                                <div className="md:col-span-7 flex items-center">
                                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                                        {item.title}
                                    </h4>
                                </div>
                                <div className="hidden md:flex md:col-span-1 justify-end">
                                    {isOpen
                                        ? <Minus className="w-5 h-5 opacity-60" />
                                        : <Plus className="w-5 h-5 opacity-30 group-hover:opacity-60 transition-opacity" />
                                    }
                                </div>
                            </button>

                            {/* Expandable body */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden bg-black"
                                    >
                                        <p className="px-6 md:px-16 pb-10 pt-2 text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
                                            {item.body}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

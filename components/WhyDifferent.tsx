'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

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

/* ─── Rounded Hexagon Path Generator ─── */
function hexPath(cx: number, cy: number, size: number, r: number): string {
    const v: [number, number][] = [];
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        v.push([cx + size * Math.cos(a), cy + size * Math.sin(a)]);
    }
    let d = '';
    for (let i = 0; i < 6; i++) {
        const prev = v[(i + 5) % 6], curr = v[i], next = v[(i + 1) % 6];
        const dx1 = prev[0] - curr[0], dy1 = prev[1] - curr[1];
        const dx2 = next[0] - curr[0], dy2 = next[1] - curr[1];
        const l1 = Math.hypot(dx1, dy1), l2 = Math.hypot(dx2, dy2);
        const t = Math.min(r, l1 / 2, l2 / 2);
        const sx = curr[0] + (dx1 / l1) * t, sy = curr[1] + (dy1 / l1) * t;
        const ex = curr[0] + (dx2 / l2) * t, ey = curr[1] + (dy2 / l2) * t;
        d += i === 0 ? `M${sx},${sy}` : `L${sx},${sy}`;
        d += `Q${curr[0]},${curr[1]},${ex},${ey}`;
    }
    return d + 'Z';
}

/* ─── Decorative hex constellation config ─── */
const hexDeco = [
    // Large anchor hexagons
    { cx: 130, cy: 170, s: 80, r: 26, fill: 'none', stroke: '#000', sw: 2, fo: 0, so: 0.06, fy: 12, dur: 7, del: 0 },
    { cx: 600, cy: 170, s: 90, r: 30, fill: '#9eff20', stroke: '#9eff20', sw: 2, fo: 0.04, so: 0.1, fy: -14, dur: 8, del: 0.3 },
    { cx: 1070, cy: 160, s: 75, r: 24, fill: 'none', stroke: '#000', sw: 2, fo: 0, so: 0.07, fy: 10, dur: 6.5, del: 0.15 },
    // Medium accents
    { cx: 340, cy: 90, s: 50, r: 16, fill: '#9eff20', stroke: 'none', sw: 0, fo: 0.05, so: 0, fy: -8, dur: 5.5, del: 0.2 },
    { cx: 820, cy: 250, s: 55, r: 18, fill: 'none', stroke: '#9eff20', sw: 1.5, fo: 0, so: 0.1, fy: 7, dur: 6, del: 0.4 },
    { cx: 440, cy: 270, s: 42, r: 14, fill: '#000', stroke: 'none', sw: 0, fo: 0.03, so: 0, fy: -5, dur: 5, del: 0.35 },
    { cx: 910, cy: 80, s: 48, r: 15, fill: 'none', stroke: '#000', sw: 1.5, fo: 0, so: 0.05, fy: 6, dur: 5.5, del: 0.1 },
    // Small details
    { cx: 55, cy: 60, s: 22, r: 8, fill: '#9eff20', stroke: 'none', sw: 0, fo: 0.08, so: 0, fy: 5, dur: 4, del: 0.1 },
    { cx: 240, cy: 270, s: 18, r: 6, fill: '#000', stroke: 'none', sw: 0, fo: 0.04, so: 0, fy: -4, dur: 3.5, del: 0.5 },
    { cx: 700, cy: 55, s: 28, r: 10, fill: 'none', stroke: '#000', sw: 1, fo: 0, so: 0.05, fy: 5, dur: 4, del: 0.25 },
    { cx: 980, cy: 290, s: 20, r: 7, fill: '#9eff20', stroke: 'none', sw: 0, fo: 0.07, so: 0, fy: -4, dur: 3.5, del: 0.45 },
    { cx: 1170, cy: 270, s: 30, r: 10, fill: 'none', stroke: '#9eff20', sw: 1, fo: 0, so: 0.08, fy: 5, dur: 4.5, del: 0.2 },
    // Tiny particles
    { cx: 490, cy: 45, s: 14, r: 5, fill: '#000', stroke: 'none', sw: 0, fo: 0.05, so: 0, fy: -3, dur: 3, del: 0.55 },
    { cx: 760, cy: 310, s: 16, r: 5, fill: '#9eff20', stroke: 'none', sw: 0, fo: 0.1, so: 0, fy: 3, dur: 3, del: 0.6 },
    { cx: 170, cy: 310, s: 12, r: 4, fill: '#000', stroke: 'none', sw: 0, fo: 0.04, so: 0, fy: -2, dur: 2.5, del: 0.65 },
];

const hexDots = [
    { cx: 300, cy: 170, r: 3, fill: '#9eff20', o: 0.2, fy: 4, dur: 3 },
    { cx: 500, cy: 130, r: 2, fill: '#000', o: 0.08, fy: -3, dur: 2.5 },
    { cx: 750, cy: 150, r: 3, fill: '#9eff20', o: 0.15, fy: 3, dur: 3.5 },
    { cx: 950, cy: 200, r: 2.5, fill: '#000', o: 0.06, fy: -2, dur: 2.8 },
    { cx: 1150, cy: 100, r: 2.5, fill: '#9eff20', o: 0.12, fy: 2, dur: 3 },
    { cx: 100, cy: 120, r: 2, fill: '#000', o: 0.06, fy: -2, dur: 2.5 },
    { cx: 650, cy: 280, r: 2.5, fill: '#9eff20', o: 0.1, fy: 3, dur: 3 },
];

export default function WhyDifferent() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="max-w-[1440px] mx-auto grid-border-b">
            {/* ── Section Label ── */}
            <div className="px-6 md:px-12 lg:px-16 pt-16 pb-8">
                <p className="label-text">Warum anders</p>
            </div>

            {/* Accordion Rows */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
                {items.map((item, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <motion.div
                            key={item.index}
                            className={`border-b border-black/10 ${i % 2 === 0 ? 'md:border-r md:border-black/10' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease }}
                        >
                            {/* Clickable header row */}
                            <button
                                onClick={() => toggle(i)}
                                className={`w-full text-left h-auto min-h-[140px] md:min-h-[160px] flex flex-col justify-between px-6 md:px-12 py-8 transition-all duration-300 group cursor-pointer
                                    ${isOpen ? 'bg-black text-white' : 'hover:bg-acid-lime hover:text-black'}`}
                            >
                                <div className="flex justify-between items-start w-full mb-6">
                                    <span className={`mono-index text-xs transition-colors
                                        ${isOpen ? 'text-white/50' : 'text-text-muted group-hover:text-black/50'}`}>
                                        {item.index} / {item.label.toUpperCase()}
                                    </span>
                                    <div className="flex items-center justify-end">
                                        {isOpen
                                            ? <Minus className="w-5 h-5 opacity-60" />
                                            : <Plus className="w-5 h-5 opacity-30 group-hover:opacity-60 transition-opacity" />
                                        }
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                                        {item.title}
                                    </h4>
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
                                        transition={{ duration: 0.4, ease }}
                                        className="overflow-hidden bg-black"
                                    >
                                        <p className="px-6 md:px-12 pb-10 pt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                                            {item.body}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* ── Hexagonal Geometry Decoration ── */}
            <motion.div
                className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.5, ease }}
            >
                <svg
                    viewBox="0 0 1200 340"
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                >
                    {/* Floating rounded hexagons */}
                    {hexDeco.map((h, i) => (
                        <motion.path
                            key={`hex-${i}`}
                            d={hexPath(h.cx, h.cy, h.s, h.r)}
                            fill={h.fill}
                            fillOpacity={h.fo}
                            stroke={h.stroke !== 'none' ? h.stroke : undefined}
                            strokeOpacity={h.so}
                            strokeWidth={h.sw}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{ y: [0, h.fy, 0] }}
                            transition={{
                                duration: h.dur,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: h.del,
                            }}
                        />
                    ))}

                    {/* Subtle accent dots */}
                    {hexDots.map((dot, i) => (
                        <motion.circle
                            key={`dot-${i}`}
                            cx={dot.cx}
                            cy={dot.cy}
                            r={dot.r}
                            fill={dot.fill}
                            opacity={dot.o}
                            animate={{ y: [0, dot.fy, 0] }}
                            transition={{
                                duration: dot.dur,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </svg>
            </motion.div>
        </section>
    );
}

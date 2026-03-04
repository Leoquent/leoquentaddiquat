'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const sectors = [
  {
    id: 'handwerk',
    title: 'Handwerk',
    heading: 'Schluss mit dem Sonntag am Schreibtisch.',
    desc: 'Wir automatisieren Ihre Angebots- und Rechnungsstellung. Aus der Werkstatt direkt ins System – ohne Umwege, ohne Papierkram.',
    details: 'Unsere Lösungen integrieren sich nahtlos in Ihren bestehenden Workflow und befreien Sie von administrativen Lasten, damit Sie sich wieder auf Ihr Handwerk konzentrieren können.'
  },
  {
    id: 'handel',
    title: 'Handel',
    heading: 'Der Handel der Zukunft ist autonom.',
    desc: 'Lager-Logistik-Schnittstellen und IoT-Integration für den modernen Mittelstand.',
    details: 'Wir verbinden Ihre physischen Bestände mit digitalen Marktplätzen und schaffen intelligente Prognose-Modelle, die Ihren Einkauf und Verkauf proaktiv steuern.'
  },
  {
    id: 'industrie',
    title: 'Industrie',
    heading: 'Produktion ohne Reibungsverluste.',
    desc: 'Intelligente Vernetzung von Maschinenparks und vollautomatische Supply-Chain-Steuerung.',
    details: 'Wir heben Industrie 4.0 auf die nächste Stufe: Vom vorausschauenden Wartungs-Agenten bis zur autonomen Maschinenplanung optimieren wir Ihre gesamte Wertschöpfungskette.'
  },
  {
    id: 'pharma',
    title: 'Pharma',
    heading: 'Höchste Präzision. Maximale Compliance.',
    desc: 'Sicheres Datenmanagement und lückenlose Dokumentation für kritische Prozesse.',
    details: 'Durch validierte, automatisierte Workflows sorgen wir dafür, dass regulatorische Anforderungen mühelos erfüllt werden – transparent, sicher und stets audit-ready.'
  },
  {
    id: 'logistik',
    title: 'Logistik',
    heading: 'Intelligentes Routing in Echtzeit.',
    desc: 'Autonome Dispositions-Systeme für maximale Auslastung und minimale Standzeiten.',
    details: 'Wir digitalisieren Ihre Flotten- und Lagerverwaltung mit KI-basierten Agenten, die Engpässe erkennen, bevor sie entstehen, und Lieferketten dynamisch optimieren.'
  }
];

export default function Sectors() {
  const [activeTab, setActiveTab] = useState(sectors[0].id);

  const activeSector = sectors.find(s => s.id === activeTab)!;

  return (
    <section className="max-w-[1440px] mx-auto grid-border-b bg-white overflow-hidden">
      {/* ── Section Label ── */}
      <div className="px-6 md:px-12 lg:px-16 pt-16 pb-4">
        <p className="label-text">Für wen</p>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-16 pb-16 lg:pb-24">
        <div className="flex flex-col items-start lg:items-center mb-16 lg:mb-24 gap-8 w-full">

          <div className="w-full overflow-x-auto pb-4 hide-scrollbar flex justify-start lg:justify-center">
            {/* Tab Switcher */}
            <div className="flex flex-nowrap md:flex-wrap justify-center p-1 bg-white rounded-full border-2 border-black hover:ring-inset hover:ring-1 hover:ring-black transition-all min-w-max md:min-w-0 group/container">
              {sectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(sector.id)}
                  className={`px-6 md:px-10 py-2.5 rounded-full text-sm font-sans font-bold transition-all relative whitespace-nowrap ${activeTab === sector.id
                    ? 'text-white'
                    : 'text-black hover:bg-black hover:text-white'
                    }`}
                >
                  {activeTab === sector.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{sector.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className="max-w-xl">
              <h3 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter mb-8 leading-[0.9]">
                {activeSector.title}
              </h3>

              <p className="text-2xl font-bold mb-6 leading-tight">
                {activeSector.heading}
              </p>

              <p className="text-lg text-black/60 mb-10 leading-relaxed">
                {activeSector.desc} {activeSector.details}
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-8 py-4 rounded-full font-sans font-medium flex items-center gap-3 group transition-all"
              >
                Mehr über {activeSector.title}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            </div>

            {/* Minimalist Graphic (Hexagon based) */}
            <div className="relative aspect-square flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                {/* Interlocking Hexagons Graphic */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  {/* Top Hexagon (Black) */}
                  <path d="M 200 40 L 320 110 L 320 250 L 200 320 L 80 250 L 80 110 Z" fill="none" stroke="black" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Bottom Hexagon (Acid Lime) */}
                  <motion.path
                    d="M 200 120 L 320 190 L 320 330 L 200 400 L 80 330 L 80 190 Z"
                    fill="none"
                    stroke="#9eff20"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />

                  {/* Central Icon Element (Arrow down) */}
                  <motion.path
                    d="M 200 120 L 200 200 M 180 180 L 200 200 L 220 180"
                    fill="none"
                    stroke="black"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

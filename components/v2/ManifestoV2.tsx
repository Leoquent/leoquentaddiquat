'use client';

import { motion } from 'motion/react';

export default function ManifestoV2() {
    const painPoints = [
        "Endlose Zettelwirtschaft",
        "Fehleranfällige Routinearbeit",
        "Manuelle Datenpflege",
        "Starre Systemvorgaben",
        "Administrative Dauerlast",
        "Sonntage am Schreibtisch",
        "Isolierte Insellösungen",
        "Software-Sklaverei"
    ];

    return (
        <section id="manifest" className="py-24 md:py-32 px-6 bg-black relative border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="v2-text-label mb-8"
                        >
                            Der Status Quo
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="v2-text-h2 text-white mb-10"
                        >
                            Software sollte arbeiten. <br />
                            <span className="text-[#9eff20]">Nicht Sie.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="v2-text-p mb-12 text-white/60"
                        >
                            Standard-Software zwingt Sie zur Anpassung. Wir drehen den Spieß um.
                            Jedes System, das wir bauen, folgt Ihrer Logik – nicht umgekehrt.
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="h-px w-full bg-gradient-to-r from-[#9eff20] to-transparent origin-left mb-12"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center gap-4 text-white/40 italic"
                        >
                            <span className="text-sm font-bold tracking-widest uppercase">Wir beenden das. Endgültig.</span>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
                        {painPoints.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-black p-8 group hover:bg-[#111] transition-colors duration-500"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-[10px] font-bold text-[#9eff20]/40 group-hover:text-[#9eff20] transition-colors mt-1">
                                        {(idx + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className="v2-text-h3 text-white/80 group-hover:text-white transition-colors">
                                        {point}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

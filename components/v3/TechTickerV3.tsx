'use client';

import React from 'react';
import { motion } from 'motion/react';

const technologies = [
    "GENERATIVE UI",
    "COMPUTER VISION",
    "PREDICTIVE MODELS",
    "NEURAL NETWORKS",
    "AUTONOMOUS AGENTS",
    "LLM ORCHESTRATION",
    "RAG SYSTEMS",
    "CUSTOM EMBEDDINGS"
];

export default function TechTickerV3() {
    return (
        <section className="relative w-full border-y border-[var(--v3-grid)] bg-[var(--v3-bg)] overflow-hidden flex items-center h-14 z-20">
            {/* Very subtile background noise for the lab vibe */}
            <div className="v3-noise opacity-[0.02]"></div>

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40
                }}
            >
                {/* 4 sets of the array for seamless infinite scrolling */}
                {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
                    <div key={index} className="flex items-center">
                        <span className="v3-ticker-text text-[var(--v3-text)] px-8">{tech}</span>
                        <span className="text-[var(--v3-accent)] text-[10px] opacity-80 mt-[1px]">■</span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

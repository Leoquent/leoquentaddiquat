'use client';

import { Bot, Network, ScanFace, Activity, BrainCircuit } from 'lucide-react';

export default function ScrollingTicker() {
    const tickerItems = [
        { label: "GENERATIVE UI", icon: Bot },
        { label: "COMPUTER VISION", icon: ScanFace },
        { label: "PREDICTIVE MODELS", icon: Activity },
        { label: "NEURAL NETWORKS", icon: Network },
        { label: "AUTONOMOUS AGENTS", icon: BrainCircuit }
    ];

    return (
        <section className="bg-white text-black py-4 overflow-hidden border-y border-black flex relative w-full items-center">
            <div className="flex w-max animate-[marquee_40s_linear_infinite]">
                {/* Double the content for seamless looping */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex px-8 items-center" aria-hidden={i === 1}>
                        {tickerItems.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <span className="font-sans font-black text-xl md:text-2xl tracking-tighter uppercase whitespace-nowrap px-8 md:px-12">
                                    {item.label}
                                </span>
                                {/* Icon as separator with brutalist styling */}
                                <div className="shrink-0 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                                    <item.icon
                                        className="w-8 h-8 md:w-10 md:h-10"
                                        stroke="black"
                                        strokeWidth={1.5}
                                        fill="#9eff20"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

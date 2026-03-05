'use client';

export default function TechTickerV2() {
    const keywords = [
        "GENERATIVE UI", "COMPUTER VISION", "PREDICTIVE MODELS",
        "NEURAL NETWORKS", "AUTONOMOUS AGENTS", "LLM ORCHESTRATION",
        "EDGE COMPUTING", "AGENTIC WORKFLOWS"
    ];

    return (
        <div className="w-full bg-black border-y border-white/5 py-6 overflow-hidden relative group">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {keywords.map((word, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center mx-12 text-[10px] font-bold tracking-[0.3em] text-white/40 hover:text-[#9eff20] transition-colors duration-500 cursor-default"
                            >
                                <span className="w-1 h-1 bg-[#9eff20] rounded-full mr-4 opacity-50"></span>
                                {word}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

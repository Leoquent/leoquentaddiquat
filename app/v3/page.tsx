'use client';

import './v3.css';
import HeroV3 from '@/components/v3/HeroV3';
import TechTickerV3 from '@/components/v3/TechTickerV3';

export default function Version3Page() {
    return (
        <div className="v3-container min-h-screen bg-[#FDFDFD] text-[#111111] font-sans antialiased overflow-x-hidden scroll-smooth uppercase-selection">
            <style jsx global>{`
                ::selection {
                    background-color: #9eff20;
                    color: #000000;
                }
            `}</style>

            <HeroV3 />
            <TechTickerV3 />

            {/* The Rest of the sections will go here */}
            {/* 
            <TheEnemyV3 />
            <SolutionsV3 />
            <ProcessV3 />
            <IndustriesV3 />
            <WhyUsV3 />
            <FinalCTAV3 />
            */}
        </div>
    );
}

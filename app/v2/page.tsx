'use client';

import './v2.css';
import { useReveal } from '@/components/v2/useReveal';
import HeaderV2 from '@/components/v2/HeaderV2';
import HeroV2 from '@/components/v2/HeroV2';
import TechTickerV2 from '@/components/v2/TechTickerV2';
import ManifestoV2 from '@/components/v2/ManifestoV2';
import ServicesV2 from '@/components/v2/ServicesV2';
import AgentsGalleryV2 from '@/components/v2/AgentsGalleryV2';
import ProcessV2 from '@/components/v2/ProcessV2';
import MehrwertStickyV2 from '@/components/v2/MehrwertStickyV2';
import BranchenNetworkV2 from '@/components/v2/BranchenNetworkV2';
import PortfolioV2 from '@/components/v2/PortfolioV2';
import AboutV2 from '@/components/v2/AboutV2';
import FooterV2 from '@/components/v2/FooterV2';

export default function Version2Page() {
    useReveal(); // Initialize scroll observer

    return (
        <div className="font-sans antialiased overflow-x-hidden v2-container scroll-smooth selection:bg-[#9eff20] selection:text-black">
            <HeaderV2 />
            <HeroV2 />
            <TechTickerV2 />
            <ManifestoV2 />
            <ServicesV2 />
            <AgentsGalleryV2 />
            <ProcessV2 />
            <MehrwertStickyV2 />
            <BranchenNetworkV2 />
            <PortfolioV2 />
            <AboutV2 />
            <FooterV2 />
        </div>
    );
}

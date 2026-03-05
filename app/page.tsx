'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScrollingTicker from '@/components/ScrollingTicker';
import Manifesto from '@/components/Manifesto';
import CoreCapabilities from '@/components/CoreCapabilities';
import SystemProcess from '@/components/SystemProcess';
import CustomAgentsNetwork from '@/components/CustomAgentsNetwork';
import Advantages from '@/components/Advantages';
import Portfolio from '@/components/Portfolio';
import Sectors from '@/components/Sectors';
import SymbiosisTeam from '@/components/SymbiosisTeam';
import FooterCTA from '@/components/FooterCTA';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ScrollingTicker />
      <Manifesto />
      <CoreCapabilities />
      <SystemProcess />
      <CustomAgentsNetwork />
      <Advantages />
      <Portfolio />
      <Sectors />
      <SymbiosisTeam />
      <FooterCTA />
    </main>
  );
}

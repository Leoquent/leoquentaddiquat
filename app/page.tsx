'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Manifesto from '@/components/Manifesto';
import SystemGrid from '@/components/SystemGrid';
import AutonomousAgents from '@/components/AutonomousAgents';
import Sectors from '@/components/Sectors';
import SymbiosisTeam from '@/components/SymbiosisTeam';
import WhyDifferent from '@/components/WhyDifferent';
import FooterCTA from '@/components/FooterCTA';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Manifesto />
      <SystemGrid />
      <AutonomousAgents />
      <Sectors />
      <SymbiosisTeam />
      <WhyDifferent />
      <FooterCTA />
    </main>
  );
}

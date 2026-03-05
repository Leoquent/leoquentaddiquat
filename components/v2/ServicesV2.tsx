import { Network, Bot, Database } from 'lucide-react';

export default function ServicesV2() {
    return (
        <section id="services" className="py-32 px-6 bg-gray-50 border-y border-[#c7c7c7]/30">
            <div className="max-w-[1440px] mx-auto">
                <div className="mb-20 md:mb-32 v2-reveal-element">
                    <h2 className="v2-text-h2 max-w-2xl text-[#000000]">Was wir erschaffen</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Card 1 */}
                    <div className="group bg-[#ffffff] p-10 md:p-14 border border-[#c7c7c7] hover:border-[#9eff20] transition-colors duration-500 v2-reveal-element">
                        <div className="w-16 h-16 bg-[#000000] text-[#9eff20] flex items-center justify-center rounded-sm mb-12 group-hover:bg-[#9eff20] group-hover:text-[#000000] transition-colors duration-500">
                            <Network size={32} />
                        </div>
                        <h3 className="v2-text-h4 mb-6 text-[#000000]">Generative Models</h3>
                        <p className="v2-text-p text-[#444343]">
                            Intelligente Systeme, die Ihre Daten verstehen und nutzen. Vom OCR bis zur natürlichen Sprachverarbeitung.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-[#ffffff] p-10 md:p-14 border border-[#c7c7c7] hover:border-[#9eff20] transition-colors duration-500 v2-reveal-element" style={{ transitionDelay: '200ms' }}>
                        <div className="w-16 h-16 bg-[#000000] text-[#9eff20] flex items-center justify-center rounded-sm mb-12 group-hover:bg-[#9eff20] group-hover:text-[#000000] transition-colors duration-500">
                            <Bot size={32} />
                        </div>
                        <h3 className="v2-text-h4 mb-6 text-[#000000]">Autonomous Agents</h3>
                        <p className="v2-text-p text-[#444343]">
                            KI-Mitarbeiter, die eigenständig arbeiten. Call-Center, Termin-Management, Bestandsoptimierung – 24/7 ohne Pausen.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-[#ffffff] p-10 md:p-14 border border-[#c7c7c7] hover:border-[#9eff20] transition-colors duration-500 v2-reveal-element" style={{ transitionDelay: '400ms' }}>
                        <div className="w-16 h-16 bg-[#000000] text-[#9eff20] flex items-center justify-center rounded-sm mb-12 group-hover:bg-[#9eff20] group-hover:text-[#000000] transition-colors duration-500">
                            <Database size={32} />
                        </div>
                        <h3 className="v2-text-h4 mb-6 text-[#000000]">Data Infrastructure</h3>
                        <p className="v2-text-p text-[#444343]">
                            Sichere, DSGVO-konforme Backends. Real-time Datenverarbeitung mit Enterprise-Sicherheit und höchster Präzision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

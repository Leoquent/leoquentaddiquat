export default function AboutV2() {
    return (
        <section id="about" className="py-32 px-6 bg-[#ffffff]">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-20 md:mb-32 v2-reveal-element">
                    <h2 className="v2-text-h2 max-w-4xl mx-auto text-[#000000]">Warum Leoquent & Addiquat die beste Kombination ist</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20">
                    {/* Leonid */}
                    <div className="v2-reveal-element">
                        <div className="w-full aspect-[3/4] bg-zinc-900 mb-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-[#ffffff] v2-text-h3 mb-2">Leonid</h3>
                                    <p className="text-[#9eff20] font-bold uppercase tracking-widest text-sm">The Architect of Intent</p>
                                </div>
                            </div>
                        </div>
                        <p className="v2-text-p text-[#444343]">
                            Brand Strategist & Creative AI Expert. Er versteht Kundenbedürfnisse auf tiefster Ebene und formt die Sprachlogik unserer KI-Systeme. Leonid sorgt dafür, dass Hightech verstanden wird, verkauft und als perfekte UX einleuchtet. Die Strategie und das Interface zum Menschen.
                        </p>
                    </div>

                    {/* Admir */}
                    <div className="v2-reveal-element" style={{ transitionDelay: '200ms' }}>
                        <div className="w-full aspect-[3/4] bg-zinc-900 mb-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-[#ffffff] v2-text-h3 mb-2">Admir</h3>
                                    <p className="text-[#9eff20] font-bold uppercase tracking-widest text-sm">The Guardian of Execution</p>
                                </div>
                            </div>
                        </div>
                        <p className="v2-text-p text-[#444343]">
                            Lead Architect & Security Expert. Er baut das unzerstörbare Fundament. Deep IT-Admin, Security, Cloud-Architektur, absolute DSGVO-Konformität. Admir macht die Lösung bulletproof – höchste Datensicherheit, stabile Backends, reibungslose Integration. Die rohe technologische Exekution.
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center v2-reveal-element border-t border-[#c7c7c7] pt-16">
                    <p className="text-[clamp(20px,2vw,24px)] font-bold text-[#000000] leading-relaxed">
                        Die Symbiose aus Innovation (Leonid) und Exekution (Admir) ist unsere Stärke. Wir sprechen nicht nur über KI – wir liefern sie sicher, smart und stabil an den Start.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function ProcessV2() {
    return (
        <section id="prozess" className="py-32 px-6 bg-[#000000] text-[#ffffff] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-px h-full bg-[#9eff20]/20 hidden md:block"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <h2 className="v2-text-h2 mb-20 md:mb-32 v2-reveal-element text-center text-[#ffffff]">
                    Unser Weg zu Ihrer Lösung
                </h2>

                <div className="flex flex-col md:flex-row justify-between items-stretch gap-12 md:gap-4 relative">
                    <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-[#444343] z-0"></div>

                    {/* Step 1 */}
                    <div className="flex-1 relative z-10 v2-reveal-element">
                        <div className="w-16 h-16 bg-[#9eff20] text-[#000000] rounded-full flex items-center justify-center font-bold text-xl mb-8 mx-auto md:mx-0">
                            01
                        </div>
                        <h3 className="v2-text-h4 mb-4 text-center md:text-left text-[#ffffff]">Analyse</h3>
                        <p className="text-[#7a7a7a] v2-text-p text-center md:text-left">
                            Verstehen Ihres aktuellen Systems, Workflows und der zentralen Schmerzpunkte.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 relative z-10 v2-reveal-element" style={{ transitionDelay: '200ms' }}>
                        <div className="w-16 h-16 bg-[#000000] border border-[#9eff20] text-[#9eff20] rounded-full flex items-center justify-center font-bold text-xl mb-8 mx-auto md:mx-0">
                            02
                        </div>
                        <h3 className="v2-text-h4 mb-4 text-center md:text-left text-[#ffffff]">Architektur</h3>
                        <p className="text-[#7a7a7a] v2-text-p text-center md:text-left">
                            Design der autonomen Lösung und nahtlose Integration mit bestehenden Tools.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 relative z-10 v2-reveal-element" style={{ transitionDelay: '400ms' }}>
                        <div className="w-16 h-16 bg-[#000000] border border-[#9eff20] text-[#9eff20] rounded-full flex items-center justify-center font-bold text-xl mb-8 mx-auto md:mx-0">
                            03
                        </div>
                        <h3 className="v2-text-h4 mb-4 text-center md:text-left text-[#ffffff]">Entwicklung</h3>
                        <p className="text-[#7a7a7a] v2-text-p text-center md:text-left">
                            Präzises Training und Programmierung der maßgeschneiderten KI-Agenten.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex-1 relative z-10 v2-reveal-element" style={{ transitionDelay: '600ms' }}>
                        <div className="w-16 h-16 bg-[#000000] border border-[#9eff20] text-[#9eff20] rounded-full flex items-center justify-center font-bold text-xl mb-8 mx-auto md:mx-0">
                            04
                        </div>
                        <h3 className="v2-text-h4 mb-4 text-center md:text-left text-[#ffffff]">Integration</h3>
                        <p className="text-[#7a7a7a] v2-text-p text-center md:text-left">
                            Sicheres Deployment, fortlaufendes Monitoring und stetige Optimierung.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

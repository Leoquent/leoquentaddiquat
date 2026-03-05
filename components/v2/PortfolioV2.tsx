import { CheckCircle2 } from 'lucide-react';

export default function PortfolioV2() {
    return (
        <section id="portfolio" className="py-32 px-6 bg-[#f9fafb]">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="v2-text-h2 mb-20 md:mb-32 v2-reveal-element text-center text-[#000000]">Wo wir bereits geholfen haben</h2>

                <div className="space-y-24">
                    {/* Case 1 */}
                    <div className="v2-reveal-element flex flex-col lg:flex-row gap-12 bg-[#ffffff] p-8 md:p-16 border border-[#c7c7c7] shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div className="w-full lg:w-1/3">
                            <span className="inline-block px-4 py-1 bg-[#000000] text-[#9eff20] text-sm font-bold tracking-widest uppercase mb-6">Mittelstand</span>
                            <h3 className="v2-text-h3 mb-6 text-[#000000]">Sanitär-Handwerk</h3>
                            <div className="mb-8">
                                <p className="text-sm font-bold text-[#7a7a7a] uppercase tracking-widest mb-2">Herausforderung</p>
                                <p className="v2-text-p font-medium text-[#000000]">
                                    Materialbestellungen von Baustelle ins System = 3-4 Stunden/Tag Büroarbeit. Fehleranfälligkeit ~8-10%. Planungschaos.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#7a7a7a] uppercase tracking-widest mb-2">Die Lösung</p>
                                <p className="v2-text-p text-[#444343]">
                                    Mobile-App mit KI-Fotoerkennung (Baustoffe fotografieren → automatisch ins ERP). Echtzeit-Bestandsverwaltung. Predictive Ordering basierend auf Projekten.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 lg:border-l lg:border-[#c7c7c7] lg:pl-12 flex flex-col justify-center">
                            <p className="text-sm font-bold text-[#000000] uppercase tracking-widest mb-8 border-b border-[#9eff20] pb-2 inline-block">Konkrete Ergebnisse</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">5 Stunden Büroarbeit/Woche gespart</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">0 Erfassungsfehler (vorher ~10%)</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">22% schnellere Projektabwicklung</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">2 Bürokräfte in Außendienst → Umsatz +18%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case 2 */}
                    <div className="v2-reveal-element flex flex-col lg:flex-row gap-12 bg-[#ffffff] p-8 md:p-16 border border-[#c7c7c7] shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div className="w-full lg:w-1/3">
                            <span className="inline-block px-4 py-1 bg-[#000000] text-[#9eff20] text-sm font-bold tracking-widest uppercase mb-6">Healthcare</span>
                            <h3 className="v2-text-h3 mb-6 text-[#000000]">Zahnarztpraxis</h3>
                            <div className="mb-8">
                                <p className="text-sm font-bold text-[#7a7a7a] uppercase tracking-widest mb-2">Herausforderung</p>
                                <p className="v2-text-p font-medium text-[#000000]">
                                    Patient-Triage manuell. Dokumentation nach Termin = 30min/Patient. No-Shows 18%. Kapazitätsverschwendung.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#7a7a7a] uppercase tracking-widest mb-2">Die Lösung</p>
                                <p className="v2-text-p text-[#444343]">
                                    Aria Call-Center Agent (automatische Patientenqualifizierung). Atlas Dokumenten-Processor (diktiert → KI schreibt). Sync Termin-Koordinator (Reminders, Optimierung).
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 lg:border-l lg:border-[#c7c7c7] lg:pl-12 flex flex-col justify-center">
                            <p className="text-sm font-bold text-[#000000] uppercase tracking-widest mb-8 border-b border-[#9eff20] pb-2 inline-block">Konkrete Ergebnisse</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">8 Stunden Administration/Woche erspart</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">No-Show Rate: 18% → 4% <span className="block text-sm font-normal text-[#7a7a7a] mt-1">= +14% Termine (+€8.400/Monat)</span></p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">Dokumentation: 30min → 3min pro Patient</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">24/7 Buchung, keine Wartezeiten</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case 3 */}
                    <div className="v2-reveal-element flex flex-col lg:flex-row gap-12 bg-[#ffffff] p-8 md:p-16 border border-[#c7c7c7] shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div className="w-full lg:w-1/3">
                            <span className="inline-block px-4 py-1 bg-[#000000] text-[#9eff20] text-sm font-bold tracking-widest uppercase mb-6">Retail</span>
                            <h3 className="v2-text-h3 mb-6 text-[#000000]">E-Commerce Shop</h3>
                            <div className="mb-8">
                                <p className="text-sm font-bold text-[#7a7a7a] uppercase tracking-widest mb-2">Herausforderung</p>
                                <p className="v2-text-p font-medium text-[#000000]">
                                    Social-Media Content = 6h/Woche manuell. Lager reaktiv (Overselling). Customer Service = täglich repetitive Fragen.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#7a7a7a] uppercase tracking-widest mb-2">Die Lösung</p>
                                <p className="v2-text-p text-[#444343]">
                                    Echo Social-Orchestrator (Posts autogen, scheduled, optimiert). Nexus Bestand-Optimizer (Predictive Inventory). Aria FAQ-Bot (Chat/Whatsapp autonomous).
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 lg:border-l lg:border-[#c7c7c7] lg:pl-12 flex flex-col justify-center">
                            <p className="text-sm font-bold text-[#000000] uppercase tracking-widest mb-8 border-b border-[#9eff20] pb-2 inline-block">Konkrete Ergebnisse</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">6 Stunden Social-Media/Woche automatisiert</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">Post-Konsistenz: 2-3x → 5x/Woche <span className="block text-sm font-normal text-[#7a7a7a] mt-1">= +31% Engagement</span></p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">Overselling-Beschwerden: -94%</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-3xl text-[#9eff20] shrink-0" size={32} />
                                    <p className="text-xl font-bold text-[#000000]">85% autonome Customer Service <span className="block text-sm font-normal text-[#7a7a7a] mt-1">= 1 FTE reinvestiert → Umsatz +27%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

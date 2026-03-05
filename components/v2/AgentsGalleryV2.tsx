import { Headset, FileSignature, ScanText, CalendarClock, PackageCheck, Share2 } from 'lucide-react';

export default function AgentsGalleryV2() {
    const agents = [
        {
            role: "Call-Center Agent",
            name: "Aria",
            icon: Headset,
            desc: "Kundenservice rund um die Uhr. Beantwortet Anfragen, löst Standardprobleme und leitet komplexe Fälle intelligent weiter.",
            delay: "0ms"
        },
        {
            role: "Angebots-Agent",
            name: "Quota",
            icon: FileSignature,
            desc: "Automatische Angebotserstellung basierend auf Kundenanfragen und Ihren hinterlegten Preisstrukturen in Sekunden.",
            delay: "100ms"
        },
        {
            role: "Dokumenten-Processor",
            name: "Atlas",
            icon: ScanText,
            desc: "OCR + Datenextraktion aus Verträgen, Rechnungen, PDFs. Strukturierte Daten statt Papierchaos.",
            delay: "200ms"
        },
        {
            role: "Termin-Koordinator",
            name: "Sync",
            icon: CalendarClock,
            desc: "Verwaltet Kalender, findet optimale Slots, sendet Reminders. Reduziert No-Shows, maximiert Auslastung.",
            delay: "300ms"
        },
        {
            role: "Bestand-Optimizer",
            name: "Nexus",
            icon: PackageCheck,
            desc: "Predictive Inventory Management. Warnt vor Stockouts, schlägt Reorders vor, verhindert Overselling.",
            delay: "400ms"
        },
        {
            role: "Social-Orchestrator",
            name: "Echo",
            icon: Share2,
            desc: "Erstellt Posts, scheduled Content, misst Performance. Konsistente Brand Voice über alle Kanäle.",
            delay: "500ms"
        }
    ];

    return (
        <section id="agenten" className="py-32 px-6 bg-[#ffffff]">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 md:mb-32 gap-8 v2-reveal-element">
                    <div className="max-w-2xl">
                        <h2 className="v2-text-h2 mb-6 text-[#000000]">Digitale Mitarbeiter für jeden Fall</h2>
                        <p className="v2-text-p text-[#444343] text-xl md:text-2xl">
                            Nur eine Auswahl – wir trainieren und deployen Agenten für Ihren exakten Workflow.
                        </p>
                    </div>
                    <a href="#kontakt" className="v2-text-btn uppercase tracking-widest font-bold border-b-2 border-[#9eff20] pb-1 hover:text-[#7a7a7a] transition-colors text-[#000000]">
                        Eigenen Agenten konzipieren
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12">
                    {agents.map((agent, idx) => {
                        const Icon = agent.icon;
                        return (
                            <div key={idx} className="v2-reveal-element border-t border-[#c7c7c7] pt-8 relative group" style={{ transitionDelay: agent.delay }}>
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#9eff20] transition-all duration-500 group-hover:w-full"></div>
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#9eff20] mb-2 block">{agent.role}</span>
                                        <h3 className="v2-text-h3 text-[#000000]">{agent.name}</h3>
                                    </div>
                                    <Icon className="text-4xl text-[#7a7a7a] group-hover:text-[#000000] transition-colors" size={40} />
                                </div>
                                <p className="v2-text-p text-[#444343]">
                                    {agent.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

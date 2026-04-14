"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Head from "next/head";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const painPoints = [
    "endlose|Zettelwirtschaft",
    "fehleranfällige|Routinearbeit",
    "manuelle|Datenpflege",
    "starre|Systemvorgaben",
    "administrative|Dauerlast",
    "Sonntage am|Schreibtisch",
    "isolierte|Insellösungen",
    "Softwaresklaverei"
];

const solutionsData = [
    {
        id: "01",
        title: "KI-Strategie",
        badges: ["Beratung", "Implementierung", "Architektur-Design"],
        text: "Wir übersetzen Ihre geschäftlichen Herausforderungen in intelligente KI-Strategien. Von der ersten Idee bis zur fertigen Roadmap – wir beraten, konzipieren und begleiten Ihre gesamte KI-Transformation."
    },
    {
        id: "02",
        title: "Autonome Agenten",
        badges: ["Workflow-Automation", "Dokumenten-Verarbeitung", "Kunden-Kommunikation", "Datenpflege"],
        text: "Intelligente KI-Mitarbeiter, die Routineaufgaben eigenständig erledigen. Vom Call-Center-Agenten über die automatische Rechnungsverarbeitung bis zur autonomen Terminplanung – 24/7, fehlerfrei."
    },
    {
        id: "03",
        title: "Custom Development",
        badges: ["CRM-Systeme", "Dashboards", "Planungstools", "Websites", "Automation"],
        text: "Wir programmieren exakt die Software, die Ihr Problem löst. Ob Buchhaltungstool, Daten-Dashboard, KI-gestützte Website oder komplette Plattform – maßgeschneidert auf Ihre Geschäftslogik."
    },
    {
        id: "04",
        title: "System-Integration",
        badges: ["API-Vernetzung", "Insellösung-Optimierung", "Daten-Migration", "Cloud-Anbindung"],
        text: "Ihre bestehenden Tools sind nicht das Problem – die fehlende Verbindung ist es. Wir vernetzen Ihre Systeme intelligent mit KI und schaffen nahtlosen Datenfluss."
    }
];

const industriesData = [
    {
        id: "real-estate", name: "Immobilien",
        cases: [
            { title: "Immobilienbewertung", desc: "KI-Algorithmen analysieren Marktdaten in Echtzeit, um Werte präzise vorherzusagen." },
            { title: "Marketing-Optimierung", desc: "Automatisierte Tools optimieren Inserate und sprechen Zielgruppen exakt an." }
        ]
    },
    {
        id: "healthcare", name: "Gesundheit",
        cases: [
            { title: "Datenbasierte Diagnostik", desc: "Hochmoderne Analysen zur Unterstützung kritischer medizinischer Entscheidungen." },
            { title: "Vernetzte Plattformen", desc: "Sichere Systeme zur Datenerfassung, die Diagnosen autonom unterstützen." }
        ]
    },
    {
        id: "education", name: "Bildung",
        cases: [
            { title: "Personalisiertes Lernen", desc: "KI analysiert Daten, um Lehrpläne dynamisch an individuelle Bedürfnisse anzupassen." },
            { title: "Automatisierte Bewertung", desc: "Intelligente Systeme übernehmen die Korrektur von Routineaufgaben und Prüfungen." }
        ]
    },
    {
        id: "construction", name: "Handwerk",
        cases: [
            { title: "Autonome Administration", desc: "Vom Baustellenprotokoll direkt zu präzisen Angeboten und Rechnungen – für Handwerk und Bau." },
            { title: "Einsatzplanung", desc: "KI-gestützte Disposition von Teams basierend auf Auftragslage, Wetter und Verfügbarkeiten." }
        ]
    },
    {
        id: "ecommerce", name: "Handel",
        cases: [
            { title: "Bestandsmanagement", desc: "Intelligente Prognose-Modelle steuern den Einkauf autonom – egal ob stationär oder E-Commerce." },
            { title: "Hyperpersonalisierung", desc: "KI analysiert Kundenverhalten in Millisekunden und empfiehlt hochkonvertierende Produkte." }
        ]
    },
    {
        id: "logistics", name: "Logistik",
        cases: [
            { title: "Echtzeit-Routing", desc: "KI-Agenten berechnen dynamisch die effizientesten Routen für ganze Flotten." },
            { title: "Predictive Maintenance", desc: "Systeme überwachen Sensordaten, um Wartungen einzuplanen, bevor es zum Stillstand kommt." }
        ]
    },
    {
        id: "agriculture", name: "Agrar",
        cases: [
            { title: "Ertragsanalyse", desc: "Computer Vision überwacht Pflanzengesundheit und optimiert den Ertrag autonom." },
            { title: "Ressourcensteuerung", desc: "Algorithmen steuern Bewässerung und Düngung präzise nach tagesaktuellen Daten." }
        ]
    },
    {
        id: "marketing", name: "Social",
        cases: [
            { title: "Content-Generierung", desc: "Agenten erstellen und skalieren Werbemittel autonom basierend auf Performance-Metriken." },
            { title: "Kampagnen-Steuerung", desc: "Intelligente Bots schichten Budgets in Echtzeit auf die profitabelste Zielgruppe um." }
        ]
    }
];

export default function Page() {

    const [navScrolled, setNavScrolled] = useState(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openIndustry, setOpenIndustry] = useState<string | null>(null);
    const [openSolution, setOpenSolution] = useState<string | null>(null);
    const [openMember, setOpenMember] = useState<string | null>(null);

    const typewriterRef = useRef<HTMLSpanElement>(null);
    const sqGeoCoreRef = useRef<HTMLDivElement>(null);
    const sqRingRef = useRef<HTMLDivElement>(null);

    // --- SCROLL NAV ---
    useEffect(() => {
        const handleScroll = () => {
            setNavScrolled(window.scrollY > 50);
            setScrolledPastHero(window.scrollY > window.innerHeight - 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- BODY SCROLL LOCK ---
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // --- GSAP ORCHESTRATOR ---
    useGSAP(() => {
        let mm = gsap.matchMedia();

        const words = gsap.utils.toArray('.hero-word') as HTMLElement[];
        const elements = gsap.utils.toArray('.hero-element') as HTMLElement[];

        // Set transform-origin to center for each word so 3D rotation looks natural
        words.forEach(w => { w.style.transformOrigin = '50% 50%'; });

        // --- HERO PARALLAX: subtle upward drift as user scrolls (All screens) ---
        const heroSection = document.getElementById('hero-sticky-section');
        if (heroSection) {
            gsap.to(heroSection, {
                y: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: "#content-wrapper",
                    start: "top bottom",
                    end: "top -20%",
                    scrub: true,
                }
            });
        }

        // --- DESKTOP ONLY ANIMATIONS (Animations play only if user has no reduced motion preference) ---
        mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
            
            // 1. HERO 3D Dispersion
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-wrapper",
                    start: "top bottom-=150px", 
                    end: "top 30%",
                    scrub: 0.5,
                    invalidateOnRefresh: true
                }
            });

            words.forEach((word, i) => {
                const dirX = (Math.random() - 0.5) * 200;           // lateral scatter
                const dirY = -(30 + Math.random() * 120);           // drift upward
                const dirZ = -(200 + Math.random() * 400);          // push deep into screen
                const rotX = -10 + (Math.random() - 0.5) * 60;      // tilt back
                const rotY = (Math.random() - 0.5) * 90;            // yaw
                const rotZ = (Math.random() - 0.5) * 25;            // slight roll
                const endScale = 0.4 + Math.random() * 0.3;         // shrink = depth

                heroTl.to(word, {
                    x: dirX, y: dirY, z: dirZ,
                    rotationX: rotX, rotationY: rotY, rotationZ: rotZ,
                    opacity: 0,
                    filter: "blur(16px)",
                    scale: endScale,
                    ease: "power1.in",
                    immediateRender: false
                }, 0);
            });

            gsap.set(words, {
                opacity: 1, filter: "none", x: 0, y: 0, z: 0,
                rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1,
                willChange: "transform, opacity"
            });
            gsap.set(elements, {
                opacity: 1, filter: "none", y: 0, z: 0, scale: 1,
                willChange: "transform, opacity"
            });

            heroTl.to(elements, {
                y: -40, z: -150, opacity: 0, filter: "blur(10px)",
                scale: 0.85, ease: "power1.in"
            }, 0);

            // 2. STATUS QUO (Removed per user request to avoid jumping/bugs)

            // 3. SOLUTIONS
            const solHeader = document.querySelector('#solutions > div > div:first-child') as HTMLElement;
            const solCards = gsap.utils.toArray('#solutions .group') as HTMLElement[];
            
            const solTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#solutions',
                    start: "top 75%",
                    end: "center 50%",
                    scrub: 1,
                }
            });
            if (solHeader) solTl.from(solHeader, { opacity: 0, y: 50, duration: 1 });
            if (solCards.length > 0) solTl.from(solCards, { opacity: 0, scale: 0.95, y: 50, duration: 2, stagger: 0.2 }, "-=0.5");

            // 4. PROZESS
            const prozHeader = document.querySelector('#prozess > div > div:first-child') as HTMLElement;
            const prozSteps = gsap.utils.toArray('#prozess .grid > div') as HTMLElement[];
            
            const prozTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#prozess',
                    start: "top 75%",
                    end: "center center",
                    scrub: 1,
                }
            });
            if (prozHeader) prozTl.from(prozHeader, { opacity: 0, y: 50, duration: 1 });
            if (prozSteps.length > 0) prozTl.from(prozSteps, { opacity: 0, y: 50, duration: 2, stagger: 0.2 }, "-=0.5");

            // 5. BRANCHEN
            const branchenHeader = document.querySelector('#branchen > div > div:first-child') as HTMLElement;
            const branchenStrips = gsap.utils.toArray('#branchen .hidden.md\\:flex > div') as HTMLElement[];
            
            const branchenTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#branchen',
                    start: "top 75%",
                    end: "center center",
                    scrub: 1,
                }
            });
            if (branchenHeader) branchenTl.from(branchenHeader, { opacity: 0, y: 50, duration: 1 });
            if (branchenStrips.length > 0) branchenTl.from(branchenStrips, { opacity: 0, y: 50, stagger: 0.15, duration: 2, ease: "power2.out" }, "-=0.5");

            // 6. WARUM WIR
            const wwHeader = document.querySelector('#warum-wir > div > div:first-child') as HTMLElement;
            const wwCards = gsap.utils.toArray('#warum-wir .group') as HTMLElement[];
            
            const wwTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#warum-wir',
                    start: "top 80%",
                    end: "center center",
                    scrub: 1,
                }
            });
            if (wwHeader) wwTl.from(wwHeader, { opacity: 0, y: 50, duration: 1 });
            if (wwCards.length > 0) wwTl.from(wwCards, { opacity: 0, y: 50, rotationY: 5, transformOrigin: "left center", stagger: 0.1, ease: "power2.out" }, "-=0.5");

            // 7. CTA
            const ctaReveal = document.querySelector('#cta .reveal') as HTMLElement;
            const ctaExecute = document.querySelector('#cta span.text-\\[20vw\\]') as HTMLElement;
            
            const ctaTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#cta',
                    start: "top 90%",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });
            
            if (ctaExecute) ctaTl.fromTo(ctaExecute, { y: 150 }, { y: -50, duration: 2 });
            if (ctaReveal) ctaTl.from(ctaReveal, { opacity: 0, y: 80, duration: 1 }, "-=1.5");

        });

        // Cleanup
        return () => mm.revert();
    }, { scope: undefined });

    // --- 3D INTERACTION ---
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sqGeoCoreRef.current) return;

        const coreRect = sqGeoCoreRef.current.getBoundingClientRect();
        const coreCenterX = coreRect.left + coreRect.width / 2;
        const coreCenterY = coreRect.top + coreRect.height / 2;

        let x = (e.clientX - coreCenterX) / (window.innerWidth / 2);
        let y = (e.clientY - coreCenterY) / (window.innerHeight / 2);

        x = Math.max(-2, Math.min(2, x));
        y = Math.max(-2, Math.min(2, y));

        const rotX = -y * 30;
        const rotY = (x * 40) - 15;

        sqGeoCoreRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

        if (sqRingRef.current) {
            sqRingRef.current.style.transform = `translateZ(20px) rotate(${12 + (x * 10)}deg)`;
        }
    };

    const handleMouseLeave = () => {
        if (sqGeoCoreRef.current) {
            sqGeoCoreRef.current.style.transform = `rotateX(0deg) rotateY(-15deg)`;
        }
        if (sqRingRef.current) {
            sqRingRef.current.style.transform = `translateZ(20px) rotate(12deg)`;
        }
    };

    // --- TYPEWRITER ---
    useEffect(() => {
        let currentPainIndex = 0;
        let currentCharIndex = 0;
        let isDeletingPhase = false;
        let timeoutId: NodeJS.Timeout;

        const typeWriterLoop = () => {
            if (!typewriterRef.current) return;
            const fullText = painPoints[currentPainIndex];

            if (isDeletingPhase) {
                currentCharIndex--;
            } else {
                currentCharIndex++;
            }

            let words = fullText.split('|');
            let html = '';
            let globalCharCount = 0;

            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                html += '<span>';

                for (let j = 0; j < word.length; j++) {
                    if (globalCharCount < currentCharIndex) {
                        html += word[j];
                    } else {
                        html += `<span class="opacity-0">${word[j]}</span>`;
                    }
                    globalCharCount++;
                }
                html += '</span>';

                if (i < words.length - 1) {
                    html += '<span class="typewriter-space"> </span><br class="typewriter-break" />';
                    globalCharCount++;
                }
            }

            typewriterRef.current.innerHTML = html;

            let typeSpeed = isDeletingPhase ? 30 : 70;

            if (!isDeletingPhase && currentCharIndex === fullText.length) {
                typeSpeed = 2000;
                isDeletingPhase = true;
            } else if (isDeletingPhase && currentCharIndex === 0) {
                isDeletingPhase = false;
                currentPainIndex = (currentPainIndex + 1) % painPoints.length;
                typeSpeed = 500;
            }

            timeoutId = setTimeout(typeWriterLoop, typeSpeed);
        };

        timeoutId = setTimeout(typeWriterLoop, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Terminal Command Sent: Analyse Requested");
    };

    return (
        <div className="bg-vanta text-bone font-sans antialiased relative w-full" style={{ overflowX: 'clip' }}>
            <div className="noise-bg"></div>

            <nav id="main-nav" className={`fixed top-0 w-full z-50 border-b transition-all duration-300 flex justify-center ${navScrolled ? 'shadow-2xl' : ''} ${scrolledPastHero ? 'bg-vanta text-white border-gridline' : 'bg-white text-vanta border-black/5'} ${isMobileMenuOpen ? 'bg-vanta text-white border-gridline' : ''}`}>
                <div className={`w-full max-w-[1440px] flex justify-between items-center px-6 md:px-8 lg:px-10 transition-all duration-300 ${navScrolled ? 'py-3' : 'py-6'}`}>
                    <a href="#" onClick={(e) => { scrollToTop(e); closeMobileMenu(); }} className="flex items-center gap-2 sm:gap-3 font-sans font-normal text-base sm:text-lg tracking-tighter shrink-0 hover:opacity-80 transition-opacity cursor-pointer z-50">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 transition-colors duration-300 ${(scrolledPastHero || isMobileMenuOpen) ? 'bg-lime' : 'bg-vanta'}`}
                            style={{
                                WebkitMaskImage: `url('${basePath}/logo.png')`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center",
                                maskImage: `url('${basePath}/logo.png')`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center"
                            }}>
                        </div>
                        <div className="flex items-center gap-1.5 leading-none mt-[-1px]">
                            <span>leoquent <span className="text-lime">&amp;</span> addequat</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-mute">
                        <a href="#status-quo-section" className="hover:text-lime transition-colors">Status Quo</a>
                        <a href="#solutions" className="hover:text-lime transition-colors">Solutions</a>
                        <a href="#prozess" className="hover:text-lime transition-colors">Prozess</a>
                        <a href="#branchen" className="hover:text-lime transition-colors">Branchen</a>
                        <a href="#warum-wir" className="hover:text-lime transition-colors">Warum Wir</a>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                        <div className="hidden lg:block">
                            <a href="#cta" className={`font-mono text-[10px] sm:text-sm border px-3 py-1.5 sm:px-4 sm:py-2 uppercase transition-colors duration-500 ease-in-out ${scrolledPastHero ? 'bg-lime text-vanta border-lime btn-glitch' : 'border-gridline hover:border-lime hover:text-lime bg-vanta text-white'}`}>
                                <span className="sm:hidden">ANALYSIEREN</span>
                                <span className="hidden sm:inline">Potenzial analysieren</span>
                            </a>
                        </div>

                        {/* Hamburger Button */}
                        <button 
                            onClick={toggleMobileMenu}
                            className={`lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative ${isMobileMenuOpen ? 'menu-open' : ''}`}
                            aria-label="Toggle Menu"
                        >
                            <span className={`hamburger-line line-top w-6 h-0.5 mb-1.5 ${(scrolledPastHero || isMobileMenuOpen) ? 'bg-white' : 'bg-vanta'}`}></span>
                            <span className={`hamburger-line line-middle w-6 h-0.5 mb-1.5 ${(scrolledPastHero || isMobileMenuOpen) ? 'bg-white' : 'bg-vanta'}`}></span>
                            <span className={`hamburger-line line-bottom w-6 h-0.5 ${(scrolledPastHero || isMobileMenuOpen) ? 'bg-white' : 'bg-vanta'}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-vanta z-40 mobile-menu-overlay flex flex-col justify-center items-center lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible mobile-menu-open' : 'opacity-0 invisible pointer-events-none'}`}>
                    <div className="flex flex-col gap-8 text-center px-10">
                        {[
                            { name: "Status Quo", href: "#status-quo-section" },
                            { name: "Solutions", href: "#solutions" },
                            { name: "Prozess", href: "#prozess" },
                            { name: "Branchen", href: "#branchen" },
                            { name: "Warum Wir", href: "#warum-wir" }
                        ].map((link, i) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="mobile-menu-link text-3xl font-bold uppercase tracking-tighter text-white hover:text-lime transition-colors"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#cta" 
                            onClick={closeMobileMenu}
                            className="mobile-menu-link mt-4 inline-block bg-lime text-vanta font-mono font-bold uppercase py-4 px-8 border border-lime mobile-menu-link"
                            style={{ transitionDelay: '500ms' }}
                        >
                            Potenzial Analysieren
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero – fixed in the background behind content */}
            <section className="fixed top-0 left-0 right-0 h-[100svh] flex flex-col bg-white z-0 overflow-hidden" id="hero-sticky-section">
                <div className="w-full flex-1 px-6 py-6 md:px-8 md:py-12 lg:px-10 lg:py-20 flex flex-col justify-center relative mx-auto max-w-[1440px]" style={{ perspective: '1200px', perspectiveOrigin: '50% 40%' }}>
                    <div className="font-mono mb-6 md:mb-8 uppercase text-sm tracking-widest hero-element">
                        <span className="brutalist-marker text-vanta">Strategic Agentic Excellence</span>
                    </div>

                    <h1 className="hero-headline text-vanta uppercase mb-6 md:mb-8" style={{ transformStyle: 'preserve-3d' }}>
                        <span className="hero-word inline-block">KI-Systeme,</span>{" "}
                        <span className="hero-word inline-block">die</span>{" "}
                        <span className="hero-word inline-block">Ihre</span>{" "}
                        <span className="hero-word inline-block">Arbeit</span>{" "}
                        <span className="hero-word inline-block">machen.</span>
                        <br className="hero-break hidden xl:block" />
                        <span className="hero-word inline-block brutalist-marker">Nicht</span>{" "}
                        <span className="hero-word inline-block brutalist-marker">umgekehrt.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-mute leading-relaxed mb-8 md:mb-10 hero-element">
                        Ob bestehende Insellösungen vernetzen oder komplette Tools von Grund auf neu programmieren:<br />
                        Wir schaffen autonome Architekturen, die Arbeitsabläufe optimieren und Erfolg maximieren.
                    </p>

                    <div className="flex items-center gap-6 hero-element">
                        <a href="#cta" className="btn-glitch inline-block bg-lime text-vanta font-mono font-bold uppercase py-4 px-8 border border-lime transition-all duration-75">
                            Potenzial Analysieren
                        </a>
                        <span className="font-mono text-xs text-mute uppercase hidden sm:block">Status: <br /><span className="text-lime animate-pulse">unverbindlich</span></span>
                    </div>
                </div>
            </section>

            {/* Content area – starts at viewport bottom (ticker flush), scrolls up over hero */}
            <div className="relative z-10" id="content-wrapper" style={{ marginTop: 'calc(100svh - 48px)' }}>
                {/* Ticker – flush at viewport bottom on load, scrolls up with content */}
                <div className="h-[48px] shrink-0 border-t border-b border-gridline text-lime overflow-hidden flex items-center whitespace-nowrap bg-[#080808] w-full relative">
                    <div className="animate-marquee font-mono text-xs uppercase tracking-widest flex gap-12 items-center pr-12 shrink-0">
                        <span>GENERATIVE UI</span> <span className="opacity-30">/</span>
                        <span>COMPUTER VISION</span> <span className="opacity-30">/</span>
                        <span>PREDICTIVE MODELS</span> <span className="opacity-30">/</span>
                        <span>NEURAL NETWORKS</span> <span className="opacity-30">/</span>
                        <span>AUTONOMOUS AGENTS</span> <span className="opacity-30">/</span>
                        <span>DATA PIPELINES</span> <span className="opacity-30">/</span>
                        <span>GENERATIVE UI</span> <span className="opacity-30">/</span>
                        <span>COMPUTER VISION</span> <span className="opacity-30">/</span>
                        <span>PREDICTIVE MODELS</span> <span className="opacity-30">/</span>
                        <span>NEURAL NETWORKS</span> <span className="opacity-30">/</span>
                        <span>AUTONOMOUS AGENTS</span> <span className="opacity-30">/</span>
                        <span>DATA PIPELINES</span> <span className="opacity-30">/</span>
                    </div>
                    <div className="animate-marquee font-mono text-xs uppercase tracking-widest flex gap-12 items-center pr-12 shrink-0" aria-hidden="true">
                        <span>GENERATIVE UI</span> <span className="opacity-30">/</span>
                        <span>COMPUTER VISION</span> <span className="opacity-30">/</span>
                        <span>PREDICTIVE MODELS</span> <span className="opacity-30">/</span>
                        <span>NEURAL NETWORKS</span> <span className="opacity-30">/</span>
                        <span>AUTONOMOUS AGENTS</span> <span className="opacity-30">/</span>
                        <span>DATA PIPELINES</span> <span className="opacity-30">/</span>
                        <span>GENERATIVE UI</span> <span className="opacity-30">/</span>
                        <span>COMPUTER VISION</span> <span className="opacity-30">/</span>
                        <span>PREDICTIVE MODELS</span> <span className="opacity-30">/</span>
                        <span>NEURAL NETWORKS</span> <span className="opacity-30">/</span>
                        <span>AUTONOMOUS AGENTS</span> <span className="opacity-30">/</span>
                        <span>DATA PIPELINES</span> <span className="opacity-30">/</span>
                    </div>
                </div>
                <section id="status-quo-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="border-b border-gridline bg-[#080808] text-white overflow-hidden flex justify-center">
                    <div className="w-full max-w-[1440px] relative">
                        <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[5%] pointer-events-none z-0 overflow-hidden opacity-20 lg:opacity-30 mix-blend-screen" style={{ perspective: '1200px' }}>
                        <div id="sq-geo-core" ref={sqGeoCoreRef} className="hidden lg:block relative w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[650px] lg:h-[650px] preserve-3d transition-transform duration-1000 ease-out" style={{ transform: "rotateX(0deg) rotateY(-15deg)" }}>
                            <div className="absolute inset-0 border border-gridline flex items-start p-4" style={{ transform: "translateZ(-100px)" }}>
                            </div>
                            <div id="sq-ring" ref={sqRingRef} className="absolute inset-8 border border-mute/30 rotate-12 transition-all duration-700" style={{ transform: "translateZ(20px)" }}></div>
                            <div className="absolute inset-20 border border-lime/10 -rotate-12" style={{ transform: "translateZ(80px)" }}></div>
                            <div className="absolute inset-[38%] border border-lime/30 bg-lime/5 backdrop-blur-md flex items-center justify-center animate-pulse" style={{ transform: "translateZ(150px)" }}>
                                <div className="w-1.5 h-1.5 bg-lime opacity-50"></div>
                            </div>
                            <div className="absolute top-1/2 left-[-30%] w-[160%] h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" style={{ transform: "translateZ(40px)" }}></div>
                            <div className="absolute left-1/2 top-[-30%] w-px h-[160%] bg-gradient-to-b from-transparent via-white/10 to-transparent" style={{ transform: "translateZ(40px)" }}></div>
                        </div>
                    </div>

                    <div className="px-6 py-6 md:px-8 md:py-12 lg:px-10 lg:py-20 flex flex-col gap-8 md:gap-12 relative z-10 w-full border-x border-gridline">
                        <div className="reveal w-full">
                            <p className="font-mono text-xs uppercase mb-6 tracking-widest">
                                <span className="brutalist-marker text-vanta">Status Quo</span>
                            </p>
                            <h2 className="section-headline w-full" style={{ transitionDelay: '100ms' }}>
                                <span className="text-white">WIR BEENDEN</span><br />
                                <span id="typewriter" ref={typewriterRef} className="text-lime block min-h-[2.4em] md:min-h-0"></span>
                            </h2>
                        </div>

                        <div className="w-full max-w-4xl reveal" style={{ transitionDelay: '200ms' }}>
                            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white/90">
                                Software sollte Zeit sparen. Nicht Zeit kosten.
                            </h3>
                            <p className="text-base md:text-lg text-bone/80 leading-relaxed font-light">
                                Standard-Tools zwingen Ihr Unternehmen in starre Prozesse und rauben Ihnen wertvolle Zeit. Wir
                                drehen den Spieß um: Wir konzipieren und programmieren <span className="bg-lime text-vanta px-1.5 py-0.5 font-normal">autonome Architekturen</span>, die sich
                                kompromisslos Ihrer Geschäftslogik unterwerfen.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 pt-8 md:pt-12 border-t border-gridline/20 reveal" style={{ transitionDelay: '300ms' }}>
                            <p className="text-[10px] md:text-xs text-mute/60 leading-relaxed font-mono tracking-wide">
                                <span className="text-lime/70 uppercase">Mission</span> · Wir verwandeln Unternehmenswissen in autonome Systeme. Mit strategischer Kreativität und kompromissloser IT-Sicherheit machen wir KI für den Mittelstand skalierbar – und so einfach und sicher wie Licht einschalten.
                            </p>
                            <p className="text-[10px] md:text-xs text-mute/60 leading-relaxed font-mono tracking-wide">
                                <span className="text-lime/70 uppercase">Vision</span> · Das autonome Betriebssystem für den europäischen Mittelstand – die Infrastruktur, auf der Unternehmen der Zukunft laufen.
                            </p>
                        </div>
                    </div>
                    </div>
                </section>

                <section id="solutions" className="border-b border-gridline bg-vanta text-white flex justify-center">
                    <div className="w-full max-w-[1440px]">
                        <div className="px-6 py-6 md:px-8 md:py-12 lg:px-10 lg:py-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal border-x border-gridline">
                        <div>
                            <p className="font-mono text-xs uppercase mb-6 tracking-widest">
                                <span className="brutalist-marker text-vanta">Solutions</span>
                            </p>
                            <h2 className="section-headline max-w-2xl">
                                Ihre Logik.<br />Unser Code.
                            </h2>
                        </div>
                        <p className="max-w-md text-mute text-sm leading-relaxed font-light">
                            Egal ob bestehende Systeme intelligent vernetzen oder komplett neue Software entwickeln – wir bauen
                            exakt die Lösung, die Ihr Problem löst.
                        </p>
                    </div>

                    <div className="w-full">
                        {/* Desktop: 2-Column Grid with Hover */}
                        <div className="hidden md:grid grid-cols-2 reveal border-x border-gridline">
                            {solutionsData.map((sol, idx) => (
                                <div 
                                    key={sol.id} 
                                    className="group relative bg-vanta p-8 lg:p-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col overflow-hidden hover:bg-lime h-auto min-h-[300px]"
                                >
                                
                                    <h3 className="text-xl md:text-2xl uppercase font-bold mb-4 text-white group-hover:text-vanta transition-colors duration-500 relative z-10">{sol.title}</h3>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                                        {sol.badges.map(b => (
                                            <span key={b} className="border border-lime/30 group-hover:border-vanta/30 group-hover:bg-vanta group-hover:text-lime px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-lime/70 bg-lime/5 transition-all duration-500">{b}</span>
                                        ))}
                                    </div>

                                    <div className="mt-auto translate-y-[120%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10">
                                        <p className="text-vanta/80 text-sm leading-relaxed font-light pt-4 border-t border-vanta/20 transition-colors duration-500">
                                            {sol.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile: Accordion Menu */}
                        <div className="md:hidden grid grid-cols-1 reveal border-x border-gridline">
                            {solutionsData.map((sol, idx) => (
                                <div 
                                    key={`mobile-${sol.id}`} 
                                    onClick={() => setOpenSolution(openSolution === sol.id ? null : sol.id)}
                                    className={`group relative p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col overflow-hidden cursor-pointer border-b border-gridline last:border-b-0 ${openSolution === sol.id ? 'bg-lime' : 'bg-vanta'}`}
                                >
                                
                                    <div className="flex flex-row items-center justify-between gap-4 relative z-10 w-full">
                                        <div className="flex flex-col gap-4 w-full">
                                            <h3 className={`text-xl uppercase font-bold transition-colors duration-500 shrink-0 ${openSolution === sol.id ? 'text-vanta' : 'text-white'}`}>
                                                {sol.title}
                                            </h3>
                                            
                                            <div className="flex flex-wrap gap-2">
                                                {sol.badges.map(b => (
                                                    <span key={b} className={`border px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest transition-all duration-500 ${openSolution === sol.id ? 'border-vanta/30 bg-vanta text-lime' : 'border-lime/30 text-lime/70 bg-lime/5'}`}>
                                                        {b}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-end shrink-0 pl-2 mt-0.5">
                                            <span className={`font-mono text-2xl font-light transition-transform duration-500 leading-none ${openSolution === sol.id ? 'rotate-45 text-vanta' : 'text-lime/50'}`}>+</span>
                                        </div>
                                    </div>

                                    <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openSolution === sol.id ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr] mt-0'}`}>
                                        <div className="overflow-hidden relative z-10 w-full">
                                            <p className={`text-sm leading-relaxed font-light pt-4 border-t transition-all duration-500 ${openSolution === sol.id ? 'text-vanta/90 border-vanta/20 opacity-100' : 'text-vanta/0 border-transparent opacity-0'}`}>
                                                {sol.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </section>

                <section id="prozess" className="border-b border-gridline relative bg-white text-vanta flex justify-center">
                    <div className="w-full max-w-[1440px]">
                        <div className="px-6 py-6 md:px-8 md:py-12 lg:px-10 lg:py-20 border-b border-x border-gridline flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal">
                        <div>
                            <p className="font-mono text-xs uppercase mb-6 tracking-widest">
                                <span className="brutalist-marker text-vanta">Prozess</span>
                            </p>
                            <h2 className="section-headline">Unser Weg zu<br />Ihrer Lösung.</h2>
                        </div>
                        <p className="max-w-md text-mute text-sm leading-relaxed font-light">Transparente Meilensteine von der Analyse bis zum Betrieb. Keine Blackbox.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-x border-gridline">
                        <div className="p-6 md:p-10 group hover:bg-[#0a0a0a] transition-colors reveal border-b md:border-b-0 md:border-r border-gridline" style={{ transitionDelay: '0ms' }}>
                            <div className="font-mono text-lime mb-6 text-2xl group-hover:animate-pulse">01</div>
                            <h3 className="text-xl uppercase font-bold mb-4 group-hover:text-white transition-colors">Analyse</h3>
                            <p className="text-mute text-sm group-hover:text-white/80 transition-colors">Wir identifizieren Ihre Flaschenhälse und ungenutzte Potenziale in einer tiefen, kostenlosen Potenzialanalyse.</p>
                        </div>
                        <div className="p-6 md:p-10 group hover:bg-[#0a0a0a] transition-colors reveal border-b md:border-b-0 md:border-r border-gridline" style={{ transitionDelay: '100ms' }}>
                            <div className="font-mono text-lime mb-6 text-2xl group-hover:animate-pulse">02</div>
                            <h3 className="text-xl uppercase font-bold mb-4 group-hover:text-white transition-colors">Architektur</h3>
                            <p className="text-mute text-sm group-hover:text-white/80 transition-colors">Wir entwerfen die maßgeschneiderte Blaupause für Ihr System – ausgelegt für minimale Latenz und höchste Sicherheit.</p>
                        </div>
                        <div className="p-6 md:p-10 group hover:bg-[#0a0a0a] transition-colors reveal border-b md:border-b-0 md:border-r border-gridline" style={{ transitionDelay: '200ms' }}>
                            <div className="font-mono text-lime mb-6 text-2xl group-hover:animate-pulse">03</div>
                            <h3 className="text-xl uppercase font-bold mb-4 group-hover:text-white transition-colors">Entwicklung</h3>
                            <p className="text-mute text-sm group-hover:text-white/80 transition-colors">Wir programmieren, testen und iterieren Ihre autonome Lösung in enger Abstimmung mit Ihnen.</p>
                        </div>
                        <div className="p-6 md:p-10 group hover:bg-lime group-hover:text-vanta transition-colors reveal" style={{ transitionDelay: '300ms' }}>
                            <div className="font-mono text-lime mb-6 text-2xl group-hover:text-vanta">04</div>
                            <h3 className="text-xl uppercase font-bold mb-4 group-hover:text-vanta transition-colors">Betrieb</h3>
                            <p className="text-mute text-sm group-hover:text-vanta/80 transition-colors">Integration, dediziertes Hosting, ständige Wartung & updates. Sie erhalten ein schlüsselfertiges System. Dauerhaft.</p>
                        </div>
                    </div>
                    </div>
                </section>

                <section id="branchen" className="border-b border-gridline bg-vanta text-white flex justify-center">
                    <div className="w-full max-w-[1440px]">
                        <div className="px-6 py-6 md:px-8 md:py-12 lg:px-10 lg:py-20 border-x border-gridline flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal">
                        <div>
                            <p className="font-mono text-xs uppercase mb-6 tracking-widest">
                                <span className="brutalist-marker text-vanta">Zukunftssicherheit</span>
                            </p>
                            <h2 className="section-headline">Der Mittelstand<br />wird autonom.</h2>
                        </div>
                        <p className="max-w-md md:text-right text-mute text-sm leading-relaxed font-light">
                            Egal aus welcher Branche Sie kommen: Wir bauen spezifische KI-Systeme, die reale Probleme lösen.
                        </p>
                    </div>

                    {/* Desktop: Vertical Film Strips */}
                    <div className="hidden md:flex w-full border-x border-gridline" style={{ height: '370px' }}>
                        {industriesData.map((ind) => (
                            <div
                                key={ind.id}
                                className="group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex-[1] hover:flex-[4] hover:bg-lime"
                            >
                                {/* Vertical name — top-aligned, stays at left edge on hover */}
                                <span
                                    className="absolute top-5 lg:top-6 left-1/2 -translate-x-1/2 group-hover:left-3 group-hover:lg:left-4 group-hover:translate-x-0 uppercase font-black text-white group-hover:text-vanta transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap pointer-events-none"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        transform: 'rotate(180deg)',
                                        fontSize: 'clamp(1.8rem, 4.8vh, 2.6rem)',
                                        letterSpacing: '0.06em',
                                        lineHeight: 0.9
                                    }}
                                >
                                    {ind.name}
                                </span>

                                {/* Expanded content — Masked gracefully by the moving vertical word */}
                                <div
                                    className="absolute top-5 lg:top-6 bottom-0 right-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] left-[65%] group-hover:left-[clamp(3rem,7vh,4.5rem)] pointer-events-none"
                                >
                                    <div className="absolute top-0 right-3 lg:right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-100 space-y-4 w-[180px] md:w-[220px] lg:w-[280px] xl:w-[340px] pb-4">
                                        {ind.cases.map((c, i) => (
                                            <div key={i} className="relative pl-3 border-l-2 border-vanta/30">
                                                <h4 className="text-[10px] lg:text-[11px] uppercase font-bold text-vanta/80 mb-0.5 tracking-wider">{c.title}</h4>
                                                <p className="text-vanta/50 text-[10px] lg:text-[11px] leading-relaxed">{c.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Stacked Rows */}
                    <div className="md:hidden border-x border-gridline">
                        {industriesData.map((ind) => (
                            <div 
                                key={ind.id} 
                                onClick={() => setOpenIndustry(openIndustry === ind.id ? null : ind.id)}
                                className={`group border-b border-gridline last:border-b-0 px-6 py-5 transition-all duration-300 cursor-pointer ${openIndustry === ind.id ? 'bg-lime' : ''}`}
                            >
                                <h3 className={`text-lg uppercase font-bold transition-colors ${openIndustry === ind.id ? 'text-vanta' : 'text-mute'}`}>{ind.name}</h3>
                                <div className={`grid transition-all duration-500 ${openIndustry === ind.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                    <div className="overflow-hidden">
                                        <div className="space-y-4 pt-4">
                                            {ind.cases.map((c, i) => (
                                                <div key={i}>
                                                    <h4 className="text-sm uppercase font-bold text-vanta/90 mb-1">{c.title}</h4>
                                                    <p className="text-vanta/60 text-sm">{c.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </section>

                <section id="warum-wir" className="border-b border-gridline bg-white text-vanta flex justify-center">
                    <div className="w-full max-w-[1440px]">
                        {/* Cards: Grid clipped at the bottom to prevent layout bleed */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-x border-gridline overflow-hidden relative z-10 bg-white">
                        <div className="px-6 py-6 md:px-8 md:py-12 lg:px-10 lg:py-20 border-b border-gridline col-span-2 lg:col-span-4 bg-white flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal relative z-10">
                            <div>
                                <p className="font-mono text-xs uppercase mb-6 tracking-widest">
                                    <span className="brutalist-marker text-vanta">Warum wir</span>
                                </p>
                                <h2 className="section-headline text-vanta">Keine Standard-Agentur.<br />Keine Kompromisse.</h2>
                            </div>
                            <p className="max-w-md text-vanta/80 text-sm leading-relaxed font-light relative z-10">Wir tauschen nicht Zeit gegen Geld. Wir liefern Systeme, die messbare Effizienz bringen. Kompromisslos auf den Erfolg des Mittelstands ausgerichtet.</p>
                        </div>

                        {[
                            { title: "Performance Pricing", text: "Sie zahlen für das funktionierende Ergebnis und garantierten ROI. Wir gewinnen, wenn Sie gewinnen." },
                            { title: "Radikale Agilität", text: "Keine monatelangen Wasserfall-Projekte. Wir bauen schnelle Prototypen und iterieren live an Ihren Daten." },
                            { title: "DSGVO-Konform", text: "Modernste KI-Innovation plus IT-Sicherheit. Alles DSGVO-konform, stabil und gehostet in Deutschland." },
                            { title: "Maßanzug statt Masse", text: "Wir biegen nicht den Kunden für die Software. Jede Lösung wird individuell für Ihren Prozess entwickelt." }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`group relative p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#0a0a0a] hover:border-[#0a0a0a] reveal z-10 ${
                                    idx === 0 ? 'border-b border-r border-gridline lg:border-b-0' : idx === 1 ? 'border-b border-gridline lg:border-b-0 lg:border-r' : idx === 2 ? 'border-r border-gridline' : ''
                                }`}
                                style={{ transitionDelay: `${idx * 80}ms` }}
                            >

                                {/* Title — stays fixed, color transitions */}
                                <h3 className="font-mono text-[10px] sm:text-xs md:text-sm lg:text-base text-vanta uppercase font-bold mb-2 md:mb-4 group-hover:text-white transition-colors duration-500">{item.title}</h3>

                                {/* Text — read-first on mobile, slides up on hover for desktop */}
                                <div className="translate-y-0 opacity-100 lg:translate-y-[120%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                    <p className="text-[10px] sm:text-xs lg:text-sm text-vanta/70 group-hover:text-white/70 leading-relaxed font-light mt-2 md:mt-4 border-t border-vanta/20 group-hover:border-white/20 pt-2 md:pt-4 transition-colors duration-500">{item.text}</p>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 bg-vanta text-white lg:min-h-[600px]">
                            {/* Intro Column */}
                            <div className="lg:col-span-4 px-6 py-6 md:px-8 md:py-12 lg:px-10 lg:py-20 border-b lg:border-b-0 lg:border-r border-gridline flex flex-col justify-between reveal">
                                <div>
                                <p className="font-mono text-xs uppercase mb-4">
                                    <span className="brutalist-marker text-vanta">Über uns</span>
                                </p>
                                <h2 className="text-3xl lg:text-4xl uppercase font-bold mb-6 leading-tight">Strategische Kreativität trifft<br /> <span className="text-lime/90">unzerstörbares</span> Tech-Fundament.</h2>
                            </div>
                            <p className="text-mute text-sm max-w-sm mt-8 lg:mt-0">Zwei Spezialisten vereint. Eine Lücke geschlossen: die zwischen dem, was KI verspricht &mdash; und dem, was Ihr Unternehmen wirklich braucht.</p>
                        </div>

                        {/* Card: Leonid */}
                        <div 
                            className="lg:col-span-4 relative group overflow-hidden bg-[#0a0a0a] border-b lg:border-b-0 lg:border-r border-gridline min-h-[550px] lg:min-h-[650px] flex flex-col justify-end cursor-pointer lg:cursor-default"
                            onClick={() => setOpenMember(openMember === 'leonid' ? null : 'leonid')}
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-no-repeat bg-[length:115%] bg-[center_10%] opacity-40 grayscale contrast-125 saturate-0 group-hover:saturate-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
                                style={{ backgroundImage: `url('${basePath}/FOTOS/leonid_v4.png')` }}
                            />
                            
                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-vanta via-vanta/70 to-transparent transition-opacity duration-700 z-10 ${openMember === 'leonid' ? 'opacity-90' : 'opacity-60'} lg:opacity-90`} />

                            {/* Content Block */}
                            <div className={`absolute left-6 right-6 md:left-8 md:right-8 bottom-6 md:bottom-10 z-20 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${openMember === 'leonid' ? 'translate-y-0' : 'translate-y-[calc(100%-70px)]'} lg:translate-y-[calc(100%-70px)] lg:group-hover:translate-y-0 pointer-events-auto lg:pointer-events-none lg:group-hover:pointer-events-auto`}>
                                
                                {/* Title (Always visible) */}
                                <div className="pointer-events-auto shrink-0 flex justify-between items-end w-full">
                                    <div>
                                        <h3 className="text-4xl uppercase font-black mb-1 text-white/90 group-hover:text-white transition-colors duration-500">Leonid</h3>
                                        <p className="font-mono text-lime/80 text-[10px] sm:text-xs tracking-widest uppercase mb-0 group-hover:text-lime transition-colors duration-500">The Architect of Intent</p>
                                    </div>
                                    <div className={`lg:hidden w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 mb-1 ${openMember === 'leonid' ? 'rotate-45 border-lime text-lime' : 'border-white/30 text-white/70'}`}>
                                        <span className="text-2xl font-light leading-none mt-[-2px]">+</span>
                                    </div>
                                </div>
                                
                                {/* Hidden Hover Content */}
                                <div className={`flex flex-col ${openMember === 'leonid' ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4`}>
                                    
                                    <div className="bg-lime/5 border-l-2 border-lime pl-3 py-2 mb-4">
                                        <p className="text-lime font-mono text-[10px] tracking-wider uppercase leading-relaxed">
                                            Übersetzt tiefe Geschäftsbedürfnisse in präzise Sprachlogik und Workflows. Gestaltet die Schnittstelle zwischen Mensch und Maschine.
                                        </p>
                                    </div>
                                    
                                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed font-light mb-4">
                                        Viele kommen heute mit KI-Lösungen. Die wenigsten verstehen den Menschen dahinter.<br /><br />
                                        Leonid kommt aus einer Welt, in der jedes Wort zählt und jede Idee beweisbar sein muss. Als Senior Copywriter und Konzeptioner in internationalen Agenturnetzwerken hat er gelernt: Strategie ohne Kreativität ist eine Tabelle. Kreativität ohne Strategie ist Dekoration. Er vereint beides &mdash; und gießt diese Symbiose in präzise KI-Architekturen.<br /><br />
                                        In KI-Workshops hat er Creative Teams auf das vorbereitet, was kommt. Heute baut er es selbst. Als Creative AI Engineer gestaltet er die Schnittstelle zwischen dem, was Ihr Unternehmen meint &mdash; und dem, was die KI versteht.
                                    </p>
                                    
                                    <span className="text-lime/90 font-mono text-[10px] tracking-wider uppercase opacity-90 block">ENTWICKELT DIE STRATEGISCHE VISION &mdash; UND SORGT DAFÜR, DASS DIE KI JEDE GESCHÄFTSLOGIK PRÄZISE VERSTEHT.</span>
                                </div>
                            </div>
                        </div>

                        {/* Card: Admir */}
                        <div 
                            className="lg:col-span-4 relative group overflow-hidden bg-[#0a0a0a] min-h-[550px] lg:min-h-[650px] flex flex-col justify-end cursor-pointer lg:cursor-default"
                            onClick={() => setOpenMember(openMember === 'admir' ? null : 'admir')}
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40 grayscale contrast-125 saturate-0 group-hover:saturate-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
                                style={{ backgroundImage: `url('${basePath}/FOTOS/admir_v2.png')` }}
                            />
                            
                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-vanta via-vanta/70 to-transparent transition-opacity duration-700 z-10 ${openMember === 'admir' ? 'opacity-90' : 'opacity-60'} lg:opacity-90`} />

                            {/* Content Block */}
                            <div className={`absolute left-6 right-6 md:left-8 md:right-8 bottom-6 md:bottom-10 z-20 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${openMember === 'admir' ? 'translate-y-0' : 'translate-y-[calc(100%-70px)]'} lg:translate-y-[calc(100%-70px)] lg:group-hover:translate-y-0 pointer-events-auto lg:pointer-events-none lg:group-hover:pointer-events-auto`}>
                                
                                {/* Title (Always visible) */}
                                <div className="pointer-events-auto shrink-0 flex justify-between items-end w-full">
                                    <div>
                                        <h3 className="text-4xl uppercase font-black mb-1 text-white/90 group-hover:text-white transition-colors duration-500">Admir</h3>
                                        <p className="font-mono text-lime/80 text-[10px] sm:text-xs tracking-widest uppercase mb-0 group-hover:text-lime transition-colors duration-500">The Guardian of Execution</p>
                                    </div>
                                    <div className={`lg:hidden w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 mb-1 ${openMember === 'admir' ? 'rotate-45 border-lime text-lime' : 'border-white/30 text-white/70'}`}>
                                        <span className="text-2xl font-light leading-none mt-[-2px]">+</span>
                                    </div>
                                </div>
                                
                                {/* Hidden Hover Content */}
                                <div className={`flex flex-col ${openMember === 'admir' ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4`}>
                                    
                                    <div className="bg-lime/5 border-l-2 border-lime pl-3 py-2 mb-4">
                                        <p className="text-lime font-mono text-[10px] tracking-wider uppercase leading-relaxed">
                                            Verwandelt Konzepte in produktionsreifen Code. Garantiert DSGVO-Konformität, stabile Infrastruktur und lückenlose Sicherheit.
                                        </p>
                                    </div>
                                    
                                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed font-light mb-4">
                                        Es gibt unzählige Visionen für KI. Admir ist derjenige, der das Fundament dafür gießt, damit sie in der Realität bestehen &mdash; sicher, skalierbar und absolut DSGVO-konform.<br /><br />
                                        Als IT-Berater hat er Projekte für den Mittelstand gerettet, die vor dem Aus standen. Als SaaS-Insider hat er komplexe Prozesse automatisiert. Und weil er die moderne KI-Entwicklung seit ihren absoluten Anfängen begleitet, trennt er den Hype präzise vom Machbaren. Heute schreibt er als Technical AI Engineer den Code, der Konzepte in produktionsreife Systeme übersetzt &mdash; mit sauberer Architektur, starker Verschlüsselung und Hosting in Deutschland.<br /><br />
                                        Er baut die Infrastruktur unter der Oberfläche. Und was er programmiert, das hält.
                                    </p>
                                    
                                    <span className="text-lime/90 font-mono text-[10px] tracking-wider uppercase opacity-90 block">BAUT DAS TECHNISCHE FUNDAMENT &mdash; UND SORGT DAFÜR, DASS JEDE ZEILE CODE ABSOLUT SICHER UND COMPLIANT LÄUFT.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <section id="cta" className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-vanta text-white w-full">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                        <span className="text-[20vw] font-bold uppercase leading-none">Execute</span>
                    </div>

                    <div className="relative z-10 w-full max-w-2xl mx-auto reveal">
                        <h2 className="text-5xl md:text-7xl uppercase font-bold mb-6">Bereit für echte<br /><span className="brutalist-marker">Freiräume?</span></h2>
                        <p className="text-mute mb-12">Der erste Schritt ist menschlich: Eine unverbindliche Potenzialanalyse. Wir zeigen Ihnen, wo Sie Zeit bluten. Der zweite Schritt: Automatisierung.</p>

                        <form className="flex flex-col sm:flex-row w-full group relative" onSubmit={handleFormSubmit}>
                            <input type="email" placeholder="ihre@email.com" required className="w-full bg-transparent border-b-2 border-gridline py-4 px-2 font-mono text-white focus:outline-none focus:border-lime transition-colors peer rounded-none" />
                            <button type="submit" className="mt-4 sm:mt-0 sm:ml-4 bg-lime text-vanta font-mono font-bold uppercase px-8 py-4 whitespace-nowrap hover:bg-white hover:text-vanta transition-colors duration-0">
                                Jetzt befreien
                            </button>
                        </form>
                    </div>
                </section>

                <footer className="border-t border-gridline flex justify-center font-mono text-xs text-mute bg-vanta text-white w-full">
                    <div className="w-full max-w-[1440px] px-6 py-6 md:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; {new Date().getFullYear()} leoquent &amp; addequat. All systems nominal.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-lime">Impressum</a>
                            <a href="#" className="hover:text-lime">Datenschutz</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

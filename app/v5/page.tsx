"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Head from "next/head";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const painPoints = [
    "endlose|Zettelwirtschaft.",
    "fehleranfällige|Routinearbeit.",
    "manuelle|Datenpflege.",
    "starre|Systemvorgaben.",
    "administrative|Dauerlast.",
    "Sonntage am|Schreibtisch.",
    "isolierte|Insellösungen.",
    "Softwaresklaverei."
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
        id: "real-estate", icon: "🏢", name: "Immobilien",
        cases: [
            { title: "Immobilienbewertung", desc: "KI-Algorithmen analysieren Marktdaten in Echtzeit, um Werte präzise vorherzusagen." },
            { title: "Marketing-Optimierung", desc: "Automatisierte Tools analysieren Daten, um Inserate zu optimieren und Zielgruppen exakt anzusprechen." }
        ]
    },
    {
        id: "healthcare", icon: "⚕️", name: "Gesundheitswesen",
        cases: [
            { title: "Datenbasierte Diagnostik", desc: "Bereitstellung hochmoderner Datenanalysen zur Unterstützung kritischer Entscheidungen." },
            { title: "Vernetzte Plattformen", desc: "Entwicklung sicherer Systeme zur Datenerfassung, die Diagnosen autonom unterstützen." }
        ]
    },
    {
        id: "education", icon: "🎓", name: "Bildung",
        cases: [
            { title: "Personalisiertes Lernen", desc: "KI analysiert Daten, um dynamische Lehrpläne an individuelle Bedürfnisse anzupassen." },
            { title: "Automatisierte Bewertung", desc: "Intelligente Systeme übernehmen die Korrektur von Routineaufgaben und Prüfungen." }
        ]
    },
    {
        id: "construction", icon: "🔨", name: "Handwerk & Bau",
        cases: [
            { title: "Autonome Administration", desc: "Daten von der Baustelle werden sofort in präzise Angebote und Rechnungen umgewandelt." },
            { title: "Einsatzplanung", desc: "KI-gestützte Disposition von Teams basierend auf Auftragslage, Wetter und Verfügbarkeiten." }
        ]
    },
    {
        id: "ecommerce", icon: "📦", name: "Handel & E-Commerce",
        cases: [
            { title: "Proaktives Bestandsmanagement", desc: "Intelligente Prognose-Modelle überwachen Lieferketten und steuern den Einkauf völlig autonom." },
            { title: "Hyperpersonalisierung", desc: "KI analysiert Verhalten in Millisekunden und empfiehlt hochkonvertierende Produkte." }
        ]
    },
    {
        id: "logistics", icon: "🚚", name: "Logistik & Supply",
        cases: [
            { title: "Echtzeit-Routing", desc: "KI-Agenten berechnen dynamisch die effizientesten Routen für Flotten." },
            { title: "Predictive Maintenance", desc: "Systeme überwachen Sensordaten, um Wartungen einzuplanen, bevor es zum Stillstand kommt." }
        ]
    },
    {
        id: "agriculture", icon: "🌾", name: "Landwirtschaft",
        cases: [
            { title: "Automatisierte Ertragsanalyse", desc: "Computer Vision überwacht Pflanzengesundheit und optimiert den Ertrag." },
            { title: "Ressourcensteuerung", desc: "Algorithmen steuern Bewässerung und Düngung präzise nach tagesaktuellen Daten." }
        ]
    },
    {
        id: "marketing", icon: "📱", name: "Social Media",
        cases: [
            { title: "Content-Generierung", desc: "Agenten erstellen und skalieren Werbemittel autonom basierend auf Metriken." },
            { title: "Kampagnen-Steuerung", desc: "Intelligente Bots schichten Budgets in Millisekunden auf die profitabelste Zielgruppe um." }
        ]
    }
];

export default function Page() {
    const [activeSolution, setActiveSolution] = useState(0);
    const [activeIndustry, setActiveIndustry] = useState(0);
    const [navScrolled, setNavScrolled] = useState(false);

    const typewriterRef = useRef<HTMLSpanElement>(null);
    const sqGeoCoreRef = useRef<HTMLDivElement>(null);
    const sqRingRef = useRef<HTMLDivElement>(null);

    // --- SCROLL NAV ---
    useEffect(() => {
        const handleScroll = () => {
            setNavScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- HERO SCROLL HIGHLIGHT / DISPERSION ---
    useGSAP(() => {
        const words = gsap.utils.toArray('.hero-word') as HTMLElement[];
        const elements = gsap.utils.toArray('.hero-element') as HTMLElement[];

        // Set transform-origin to center for each word so 3D rotation looks natural
        words.forEach(w => { w.style.transformOrigin = '50% 50%'; });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#content-wrapper",
                start: "top bottom-=150px",  // starts after 100px of scrolling – guaranteed sharp on load
                end: "top 30%",
                scrub: 0.5,
                invalidateOnRefresh: true
            }
        });

        // 3D Depth Dispersion – words tumble upward-backward into the scene
        words.forEach((word, i) => {
            const dirX = (Math.random() - 0.5) * 200;           // lateral scatter
            const dirY = -(30 + Math.random() * 120);           // drift upward
            const dirZ = -(200 + Math.random() * 400);          // push deep into screen
            const rotX = -10 + (Math.random() - 0.5) * 60;     // tilt back
            const rotY = (Math.random() - 0.5) * 90;            // yaw
            const rotZ = (Math.random() - 0.5) * 25;            // slight roll
            const endScale = 0.4 + Math.random() * 0.3;         // shrink = depth

            tl.to(word, {
                x: dirX,
                y: dirY,
                z: dirZ,
                rotationX: rotX,
                rotationY: rotY,
                rotationZ: rotZ,
                opacity: 0,
                filter: "blur(16px)",
                scale: endScale,
                ease: "power1.in",
                immediateRender: false
            }, 0);
        });

        // Ensure clean state on load for words and static elements
        gsap.set(words, {
            opacity: 1,
            filter: "none",
            x: 0,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scale: 1,
            willChange: "transform, opacity"
        });
        gsap.set(elements, {
            opacity: 1,
            filter: "none",
            y: 0,
            z: 0,
            scale: 1,
            willChange: "transform, opacity"
        });

        // Fade out other hero static elements with depth
        tl.to(elements, {
            y: -40,
            z: -150,
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.85,
            ease: "power1.in"
        }, 0);

        // --- HERO PARALLAX: subtle upward drift as user scrolls ---
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

    }, { scope: undefined });

    // --- REVEAL ANIMATIONS ---
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));
        return () => revealObserver.disconnect();
    }, []);

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
                html += '<span class="brutalist-marker mx-1">';

                for (let j = 0; j < word.length; j++) {
                    if (globalCharCount === currentCharIndex) {
                        html += '<span class="animate-pulse text-vanta absolute">_</span>';
                    }

                    if (globalCharCount < currentCharIndex) {
                        html += word[j];
                    } else {
                        html += `<span class="opacity-0">${word[j]}</span>`;
                    }
                    globalCharCount++;
                }
                html += '</span>';

                if (i < words.length - 1) {
                    if (globalCharCount === currentCharIndex) {
                        html += '<span class="animate-pulse text-vanta absolute">_</span>';
                    }
                    html += '<br />';
                    globalCharCount++;
                }
            }

            if (globalCharCount === currentCharIndex) {
                html += '<span class="animate-pulse text-vanta absolute">_</span>';
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
        <div className="bg-white min-h-screen">
            <div className="bg-white text-black font-sans antialiased border-x border-gridline mx-auto max-w-[1920px] relative" style={{ overflowX: 'clip' }}>
                <div className="fixed inset-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] border-x border-gridline pointer-events-none z-[9999]"></div>
                <div className="noise-bg"></div>

                <nav id="main-nav" className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] backdrop-blur-sm z-50 flex justify-between items-center px-6 border-b border-gridline transition-all duration-300 ${navScrolled ? 'py-3 bg-white/95 shadow-2xl' : 'py-6 bg-white/90'}`}>
                    <div className="flex items-center gap-3 font-sans font-normal text-lg tracking-tighter shrink-0">
                        <div className="w-10 h-10 bg-black shrink-0"
                            style={{
                                WebkitMaskImage: "url('/logo.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center",
                                maskImage: "url('/logo.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center"
                            }}>
                        </div>
                        <div className="flex items-center gap-1.5 leading-none mt-[-1px]">
                            <span className="text-black">leoquent <span className="text-lime">&amp;</span> addequat</span>
                            <span className="text-mute font-mono text-xs ml-2 font-normal hidden sm:inline-block mt-0.5">[v2.0]</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-mute">
                        <a href="#status-quo-section" className="hover:text-lime transition-colors">Status Quo</a>
                        <a href="#solutions" className="hover:text-lime transition-colors">Solutions</a>
                        <a href="#prozess" className="hover:text-lime transition-colors">Prozess</a>
                        <a href="#branchen" className="hover:text-lime transition-colors">Branchen</a>
                        <a href="#warum-wir" className="hover:text-lime transition-colors">Warum Wir</a>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                        <a href="#cta" className="font-mono text-sm border border-gridline px-4 py-2 hover:border-lime hover:text-lime transition-colors duration-0 uppercase bg-white">
                            System Initialisieren
                        </a>
                    </div>
                </nav>

                {/* Hero – fixed in the background behind content */}
                <section className="fixed top-0 left-0 right-0 h-[100svh] bg-white z-0 overflow-hidden" id="hero-sticky-section">
                    <div className="max-w-[1920px] mx-auto h-full pt-28 flex flex-col">
                        <div className="w-full flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative" style={{ perspective: '1200px', perspectiveOrigin: '50% 40%' }}>
                            <div className="font-mono mb-6 md:mb-8 uppercase text-sm tracking-widest flex items-center gap-4 hero-element">
                                <span className="bg-lime text-black px-2">[01]</span>
                                <div className="h-px bg-black/30 w-12 md:w-24"></div>
                                <span className="bg-lime text-black px-2">Strategic Agentic Excellence</span>
                            </div>

                            <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-[5.5vw] xl:text-[6.5vw] leading-[1] font-bold tracking-tight mb-6 md:mb-8 text-black uppercase" style={{ transformStyle: 'preserve-3d' }}>
                                <span className="hero-word inline-block">Wir</span>{" "}
                                <span className="hero-word inline-block">bauen</span>{" "}
                                <span className="hero-word inline-block">KI-Systeme,</span>
                                <br className="hero-break hidden xl:block" />
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
                                    Potenzialanalyse_Starten
                                </a>
                                <span className="font-mono text-xs text-mute uppercase hidden sm:block">Status: <br /><span className="text-lime animate-pulse">unverbindlich</span></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content area – starts at viewport bottom (ticker flush), scrolls up over hero */}
                <div className="relative z-10" id="content-wrapper" style={{ marginTop: 'calc(100svh - 48px)' }}>
                    {/* Ticker – flush at viewport bottom on load, scrolls up with content */}
                    <div className="h-[48px] shrink-0 border-t border-b border-gridline text-lime overflow-hidden flex items-center whitespace-nowrap w-full bg-[#080808]">
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
                    <section id="status-quo-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="border-b border-gridline bg-white relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[5%] pointer-events-none z-0 overflow-hidden opacity-20 lg:opacity-30 mix-blend-multiply" style={{ perspective: '1200px' }}>
                            <div id="sq-geo-core" ref={sqGeoCoreRef} className="relative w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[650px] lg:h-[650px] preserve-3d transition-transform duration-1000 ease-out" style={{ transform: "rotateX(0deg) rotateY(-15deg)" }}>
                                <div className="absolute inset-0 border border-gridline flex items-start p-4" style={{ transform: "translateZ(-100px)" }}>
                                    <span className="font-mono text-[10px] text-mute uppercase tracking-widest opacity-30">[SYS_DATA: FRAGMENTED]</span>
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

                        <div className="p-8 md:p-12 lg:p-16 lg:py-32 flex flex-col justify-center min-h-[70vh] relative z-10">
                            <p className="font-mono text-black text-xs uppercase mb-10 tracking-widest flex items-center gap-4 reveal">
                                <span className="w-2 h-2 bg-lime animate-pulse"></span>
                                <span className="bg-lime px-2">[DER STATUS QUO]</span>
                            </p>
                            <h2 className="font-display text-4xl sm:text-6xl md:text-[5.5vw] font-bold uppercase tracking-tight leading-[1.05] mb-8 min-h-[3.5em] reveal w-full" style={{ transitionDelay: '100ms', hyphens: 'auto', WebkitHyphens: 'auto' }}>
                                WIR BEENDEN<br />
                                <span id="typewriter" ref={typewriterRef} className="block mt-1"></span>
                            </h2>
                            <div className="max-w-3xl mt-2 border-l-2 border-gridline pl-6 reveal" style={{ transitionDelay: '250ms' }}>
                                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-black">
                                    Software sollte Zeit sparen. Nicht kosten.
                                </h3>
                                <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                                    Standard-Tools zwingen Ihr Unternehmen in starre Prozesse und rauben Ihnen wertvolle Zeit. Wir
                                    drehen den Spieß um: Wir konzipieren und programmieren <span className="bg-lime text-vanta px-1.5 py-0.5 font-normal">autonome Architekturen</span>, die sich
                                    kompromisslos Ihrer Geschäftslogik unterwerfen. Exakt so, wie Sie es brauchen.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="solutions" className="border-b border-gridline bg-white">
                        <div className="p-8 md:p-12 lg:p-16 border-b border-gridline flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal">
                            <div>
                                <p className="font-mono text-mute text-xs uppercase mb-6 tracking-widest">[SOLUTIONS]</p>
                                <h2 className="font-display text-4xl md:text-6xl uppercase font-bold tracking-tight max-w-2xl leading-[1.05]">
                                    Ihre Logik.<br />Unser Code.
                                </h2>
                            </div>
                            <p className="max-w-md text-mute text-sm leading-relaxed font-light">
                                Egal ob bestehende Systeme intelligent vernetzen oder komplett neue Software entwickeln – wir bauen
                                exakt die Lösung, die Ihr Problem löst.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
                            <div className="lg:col-span-4 flex flex-col border-b lg:border-b-0 lg:border-r border-gridline" id="solution-tabs">
                                {solutionsData.map((sol, idx) => (
                                    <button key={sol.id} onClick={() => setActiveSolution(idx)} className={`w-full text-left p-6 md:p-8 border-b border-gridline hover:bg-gray-50 transition-colors flex items-center gap-6 group focus:outline-none ${activeSolution === idx ? 'bg-gray-50' : ''} flex-1`}>
                                        <span className={`font-mono text-sm group-hover:text-lime transition-colors ${activeSolution === idx ? 'text-lime' : 'text-mute'}`}>[{sol.id}]</span>
                                        <span className={`font-display text-xl uppercase font-bold tracking-wide ${activeSolution === idx ? 'text-black' : 'text-mute'} group-hover:text-black`}>{sol.title}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="lg:col-span-8 p-8 md:p-12 lg:p-20 relative flex flex-col justify-center" id="solution-content">
                                <div className="absolute top-8 right-8 font-mono text-lime text-[10px] uppercase tracking-widest animate-pulse">[SYS_MODULE_{solutionsData[activeSolution].id}_ACTIVE]</div>
                                <div className="max-w-xl animate-[glitch_0.2s_ease-out]" key={activeSolution}>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {solutionsData[activeSolution].badges.map(b => (
                                            <span key={b} className="bg-lime text-black px-3 py-1 text-[10px] md:text-xs font-mono uppercase tracking-widest border border-black/10">{b}</span>
                                        ))}
                                    </div>
                                    <h3 className="font-display text-4xl uppercase font-bold mb-6 tracking-tight text-black">{solutionsData[activeSolution].title}</h3>
                                    <p className="text-black font-light text-lg leading-relaxed">{solutionsData[activeSolution].text}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="prozess" className="border-b border-gridline relative">
                        <div className="p-8 md:p-12 border-b border-gridline reveal">
                            <p className="font-mono text-mute text-xs uppercase mb-4">[Prozess]</p>
                            <h2 className="font-syne text-4xl md:text-5xl uppercase font-bold">Unser Weg zu<br />Ihrer Lösung.</h2>
                            <p className="text-mute mt-4">Transparente Meilensteine von der Analyse bis zum Betrieb. Keine Blackbox.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gridline">
                            <div className="p-8 md:p-12 group hover:bg-gray-50 transition-colors reveal" style={{ transitionDelay: '0ms' }}>
                                <div className="font-mono text-black bg-lime inline-block px-2 mb-6 text-2xl group-hover:animate-pulse">01</div>
                                <h3 className="font-syne text-xl uppercase font-bold mb-4">Analyse</h3>
                                <p className="text-mute text-sm">Wir identifizieren Ihre Flaschenhälse und ungenutzte Potenziale in einer tiefen, kostenlosen Potenzialanalyse.</p>
                            </div>
                            <div className="p-8 md:p-12 group hover:bg-gray-50 transition-colors reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="font-mono text-black bg-lime inline-block px-2 mb-6 text-2xl group-hover:animate-pulse">02</div>
                                <h3 className="font-syne text-xl uppercase font-bold mb-4">Architektur</h3>
                                <p className="text-mute text-sm">Wir entwerfen die maßgeschneiderte Blaupause für Ihr System – ausgelegt für minimale Latenz und höchste Sicherheit.</p>
                            </div>
                            <div className="p-8 md:p-12 group hover:bg-gray-50 transition-colors reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="font-mono text-black bg-lime inline-block px-2 mb-6 text-2xl group-hover:animate-pulse">03</div>
                                <h3 className="font-syne text-xl uppercase font-bold mb-4">Entwicklung</h3>
                                <p className="text-mute text-sm">Wir programmieren, testen und iterieren Ihre autonome Lösung in enger Abstimmung mit Ihnen.</p>
                            </div>
                            <div className="p-8 md:p-12 group hover:bg-lime group-hover:text-vanta transition-colors reveal" style={{ transitionDelay: '300ms' }}>
                                <div className="font-mono text-mute mb-6 text-2xl group-hover:text-vanta">04</div>
                                <h3 className="font-syne text-xl uppercase font-bold mb-4">Betrieb</h3>
                                <p className="text-mute text-sm group-hover:text-vanta/80">Integration, dediziertes Hosting, ständige Wartung &amp; updates. Sie erhalten ein schlüsselfertiges System. Dauerhaft.</p>
                            </div>
                        </div>
                    </section>

                    <section id="branchen" className="border-b border-gridline">
                        <div className="p-8 md:p-12 border-b border-gridline flex justify-between items-end reveal">
                            <div>
                                <p className="font-mono text-lime text-xs uppercase mb-4">[Zukunftssicherheit]</p>
                                <h2 className="font-syne text-4xl md:text-5xl uppercase font-bold">Der Mittelstand<br />wird autonom.</h2>
                            </div>
                            <p className="hidden lg:block max-w-md text-right text-mute text-sm">
                                Egal aus welcher Branche Sie kommen: Wir bauen spezifische KI-Systeme, die reale Probleme lösen.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="border-b lg:border-b-0 lg:border-r border-gridline flex flex-col" id="industry-list">
                                {industriesData.map((ind, idx) => (
                                    <button key={ind.id} onMouseEnter={() => setActiveIndustry(idx)} className={`w-full text-left p-6 border-b border-gridline hover:bg-lime hover:text-vanta transition-all duration-0 font-syne text-xl uppercase font-bold group flex justify-between items-center ${activeIndustry === idx ? 'bg-lime text-black' : 'text-mute'}`}>
                                        <span className="group-hover:translate-x-4 transition-transform duration-100 flex items-center gap-4">
                                            <span className="text-2xl opacity-50 grayscale group-hover:grayscale-0">{ind.icon}</span>
                                            {ind.name}
                                        </span>
                                        <span className="font-mono text-xs opacity-0 group-hover:opacity-100 uppercase">Load_Data</span>
                                    </button>
                                ))}
                            </div>
                            <div className="p-8 md:p-12 lg:p-20 relative min-h-[500px] flex flex-col justify-center bg-white" id="industry-display">
                                <div className="absolute inset-0 border-[16px] border-white pointer-events-none"></div>
                                <div className="absolute top-8 right-8 w-2 h-2 bg-lime animate-ping"></div>
                                <div id="industry-content-inner" key={activeIndustry}>
                                    <div className="font-mono text-mute text-xs mb-8 uppercase border-b border-gridline pb-4 flex justify-between">
                                        <span>Target_Sector: {industriesData[activeIndustry].name}</span>
                                        <span className="text-lime">Status: Verified</span>
                                    </div>
                                    <div className="space-y-12">
                                        {industriesData[activeIndustry].cases.map((c, i) => (
                                            <div key={i} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-lime">
                                                <h4 className="font-display text-2xl uppercase font-bold mb-3">{c.title}</h4>
                                                <p className="text-mute">{c.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="warum-wir" className="border-b border-gridline">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-gridline">
                            <div className="p-8 md:p-12 border-b md:border-b-0 border-r border-gridline col-span-1 md:col-span-2 lg:col-span-4 bg-white reveal">
                                <p className="font-mono text-mute text-xs uppercase mb-4">[Warum wir]</p>
                                <h2 className="font-syne text-3xl md:text-4xl uppercase font-bold">Keine Standard-Agentur.<br />Keine Kompromisse.</h2>
                                <p className="text-mute mt-4 max-w-2xl text-black">Wir tauschen nicht Zeit gegen Geld. Wir liefern Systeme, die messbare Effizienz bringen. Kompromisslos auf den Erfolg des Mittelstands ausgerichtet.</p>
                            </div>

                            <div className="p-8 border-b lg:border-b-0 border-r border-gridline reveal">
                                <h3 className="font-mono text-lime uppercase mb-4">01. Performance Pricing</h3>
                                <p className="text-sm text-mute">Sie zahlen für das funktionierende Ergebnis und garantierten ROI. Wir gewinnen, wenn Sie gewinnen.</p>
                            </div>
                            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gridline reveal">
                                <h3 className="font-mono text-lime uppercase mb-4">02. Radikale Agilität</h3>
                                <p className="text-sm text-mute">Keine monatelangen Wasserfall-Projekte. Wir bauen schnelle Prototypen und iterieren live an Ihren Daten.</p>
                            </div>
                            <div className="p-8 border-b md:border-b-0 border-r border-gridline reveal">
                                <h3 className="font-mono text-lime uppercase mb-4">03. Enterprise Sicherheit</h3>
                                <p className="text-sm text-mute">Modernste KI-Innovation plus IT-Sicherheit. Alles DSGVO-konform, stabil und gehostet in Deutschland.</p>
                            </div>
                            <div className="p-8 reveal">
                                <h3 className="font-mono text-lime uppercase mb-4">04. Maßanzug statt Masse</h3>
                                <p className="text-sm text-mute">Wir biegen nicht den Kunden für die Software. Jede Lösung wird individuell für Ihren Prozess entwickelt.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            <div className="lg:col-span-4 p-8 md:p-12 border-r border-gridline reveal">
                                <p className="font-mono text-mute text-xs uppercase mb-4">[Über uns]</p>
                                <h2 className="font-syne text-3xl uppercase font-bold mb-6">Strategische Kreativität trifft unzerstörbares Tech-Fundament.</h2>
                                <p className="text-mute text-sm">Wir schließen die Lücke zwischen dem Laborzweck und Ihrem Praxisalltag. Zwei Spezialisten, perfekt verzahnt.</p>
                            </div>

                            <div className="lg:col-span-4 p-8 md:p-12 border-r border-gridline relative group overflow-hidden bg-white">
                                <div className="text-gray-200 font-mono text-[8px] leading-[8px] mb-8 select-none group-hover:text-lime/60 transition-colors duration-700 h-32 overflow-hidden">
                                    01101100 01100101 01101111<br />
                                    ██╗   ███████╗ ██████╗ <br />
                                    ██║   ██╔════╝██╔═══██╗<br />
                                    ██║   █████╗  ██║   ██║<br />
                                    ██║   ██╔══╝  ██║   ██║<br />
                                    ███████╗███████╗╚██████╔╝<br />
                                    ╚══════╝╚══════╝ ╚═════╝ <br />
                                    01101100 01100101 01101111
                                </div>
                                <h3 className="font-syne text-2xl uppercase font-bold mb-2 text-black">Leonid</h3>
                                <p className="font-mono text-lime text-xs mb-6 bg-black inline-block px-1">&gt; The Architect of Intent</p>
                                <p className="text-black text-sm">Er übersetzt tiefe Geschäftsbedürfnisse in präzise Sprachlogik und Workflows. Gestaltet die Schnittstelle zwischen Mensch und Maschine. *Sorgt dafür, dass die KI Ihr Geschäft &quot;versteht&quot;.*</p>
                            </div>

                            <div className="lg:col-span-4 p-8 md:p-12 relative group overflow-hidden bg-white">
                                <div className="text-gray-200 font-mono text-[8px] leading-[8px] mb-8 select-none group-hover:text-lime/60 transition-colors duration-700 h-32 overflow-hidden">
                                    01100001 01100100 01101101<br />
                                    █████╗ ██████╗ ███╗   ███╗<br />
                                    ██╔══██╗██╔══██╗████╗ ████║<br />
                                    ███████║██║  ██║██╔████╔██║<br />
                                    ██╔══██║██║  ██║██║╚██╔╝██║<br />
                                    ██║  ██║██████╔╝██║ ╚═╝ ██║<br />
                                    ╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝<br />
                                    01100001 01100100 01101101
                                </div>
                                <h3 className="font-syne text-2xl uppercase font-bold mb-2 text-black">Admir</h3>
                                <p className="font-mono text-lime text-xs mb-6 bg-black inline-block px-1">&gt; The Guardian of Execution</p>
                                <p className="text-black text-sm">Baut das Backend-Fundament, das Ihre Daten schützt. Garantiert absolute Datensicherheit, stabile Server-Deployments und reibungslosen Code, der niemals einbricht. *Macht die Vision &quot;bulletproof&quot;.*</p>
                            </div>
                        </div>
                    </section>

                    <section id="cta" className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                            <span className="font-syne text-[20vw] font-bold uppercase leading-none">Execute</span>
                        </div>

                        <div className="relative z-10 w-full max-w-2xl mx-auto reveal">
                            <p className="font-mono text-black bg-lime inline-block px-2 text-sm uppercase mb-6">[System Override Ready]</p>
                            <h2 className="font-syne text-5xl md:text-7xl uppercase font-bold mb-6">Bereit für echte<br /><span className="brutalist-marker">Freiräume?</span></h2>
                            <p className="text-mute mb-12">Der erste Schritt ist menschlich: Eine unverbindliche Potenzialanalyse. Wir zeigen Ihnen, wo Sie Zeit bluten. Der zweite Schritt: Automatisierung.</p>

                            <form className="flex flex-col sm:flex-row w-full group relative" onSubmit={handleFormSubmit}>
                                <input type="email" placeholder="ihre@email.com" required className="w-full bg-transparent border-b-2 border-gridline py-4 px-2 font-mono text-black focus:outline-none focus:border-lime transition-colors peer rounded-none" />
                                <button type="submit" className="mt-4 sm:mt-0 sm:ml-4 bg-black text-white font-mono font-bold uppercase px-8 py-4 whitespace-nowrap hover:bg-lime hover:text-vanta transition-colors duration-0">
                                    Jetzt befreien
                                </button>
                            </form>
                        </div>
                    </section>

                    <footer className="border-t border-gridline p-6 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-mute">
                        <p>&copy; {new Date().getFullYear()} Addiquat. All systems nominal.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-lime">Impressum</a>
                            <a href="#" className="hover:text-lime">Datenschutz</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

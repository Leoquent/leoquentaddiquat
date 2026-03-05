'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeaderV2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (!isMenuOpen) {
                if (currentScrollY > 200) {
                    if (currentScrollY > lastScrollY) {
                        setScrolled(true);
                    } else {
                        setScrolled(false);
                    }
                } else {
                    setScrolled(false);
                }
            }
            lastScrollY = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => {
        if (isMenuOpen) closeMenu();
        else openMenu();
    };

    const handleMouseLeavePanel = () => {
        closeTimeoutRef.current = setTimeout(() => {
            closeMenu();
        }, 300);
    };

    const handleMouseEnterPanel = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };

    const handleMouseLeaveToggle = () => {
        if (isMenuOpen) {
            closeTimeoutRef.current = setTimeout(() => {
                closeMenu();
            }, 300);
        }
    };

    const handleMouseEnterToggle = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full z-[60] flex justify-between items-start p-6 md:p-12 pointer-events-none transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'
                    }`}
            >
                <a href="#hero" className="w-32 pointer-events-auto block transition-opacity hover:opacity-70">
                    <img
                        src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/brand-assets/leoquent.github.io/logo-1772720719412.png"
                        alt="L&A Logo"
                        className="w-full h-auto brightness-0 invert"
                    />
                </a>

                <button
                    onClick={toggleMenu}
                    onMouseEnter={handleMouseEnterToggle}
                    onMouseLeave={handleMouseLeaveToggle}
                    aria-expanded={isMenuOpen}
                    className="pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 hover:bg-black/90 text-white backdrop-blur-md transition-all duration-300 focus:outline-none z-[60] border border-white/10 group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    <div className="relative h-[1.2em] overflow-hidden min-w-[45px] text-left">
                        <div
                            className={`flex flex-col font-bold uppercase tracking-wider text-xs transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'translate-y-[-66.666%]' : 'translate-y-0'
                                }`}
                        >
                            <span className="h-[1.2em] leading-tight flex items-center">Menu</span>
                            <span className="h-[1.2em] leading-tight flex items-center text-white/40">...</span>
                            <span className="h-[1.2em] leading-tight flex items-center text-[#9eff20]">Close</span>
                        </div>
                    </div>
                    <div className="relative w-4 h-4 text-white">
                        <span
                            className={`absolute top-1/2 left-0 w-full h-[1px] bg-white rounded-full -translate-y-1/2 transition-transform duration-500 origin-center ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'rotate-45 bg-[#9eff20]' : 'rotate-0'
                                }`}
                        ></span>
                        <span
                            className={`absolute top-0 left-1/2 w-[1px] h-full bg-white rounded-full -translate-x-1/2 transition-transform duration-500 origin-center ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? '-rotate-45 bg-[#9eff20]' : 'rotate-90'
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            <div className={`fixed inset-0 z-50 overflow-hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Layers */}
                <div
                    className={`absolute top-0 right-0 bottom-0 w-full md:w-[40vw] lg:w-[30vw] bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[51] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                ></div>
                <div
                    className={`absolute top-0 right-0 bottom-0 w-full md:w-[40vw] lg:w-[30vw] bg-[#9eff20] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[52] delay-75 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                ></div>

                {/* Main Panel */}
                <aside
                    onMouseEnter={handleMouseEnterPanel}
                    onMouseLeave={handleMouseLeavePanel}
                    className={`absolute top-0 right-0 bottom-0 w-full md:w-[40vw] lg:w-[30vw] bg-black transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 flex flex-col pt-32 pb-12 px-8 md:px-16 overflow-y-auto shadow-2xl z-[53] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex-1 flex flex-col min-h-min">
                        <nav>
                            <ul className="flex flex-col gap-8 list-none p-0 m-0">
                                {[
                                    { href: '#hero', num: '00', title: 'Vision' },
                                    { href: '#services', num: '01', title: 'Solutions' },
                                    { href: '#agenten', num: '02', title: 'Agenten' },
                                    { href: '#prozess', num: '03', title: 'Prozess' },
                                    { href: '#branchen', num: '04', title: 'Branchen' },
                                    { href: '#about', num: '05', title: 'Team' },
                                    { href: '#kontakt', num: '06', title: 'Kontakt' }
                                ].map((item, idx) => (
                                    <li key={item.title} className="overflow-hidden">
                                        <a
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="group relative flex items-baseline gap-4 no-underline block"
                                        >
                                            <div
                                                className={`flex items-center gap-6 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen
                                                    ? 'translate-y-0 rotate-0 opacity-100'
                                                    : 'translate-y-[140%] rotate-12 opacity-0'
                                                    }`}
                                                style={{ transitionDelay: isMenuOpen ? `${200 + idx * 100}ms` : '0ms' }}
                                            >
                                                <span className="text-[10px] font-bold opacity-30 text-white transition-colors group-hover:text-[#9eff20]">
                                                    {item.num}
                                                </span>
                                                <span className="inline-block font-black text-4xl lg:text-6xl text-white uppercase tracking-tighter transition-colors group-hover:text-[#9eff20] group-hover:italic group-hover:translate-x-2 transition-transform duration-300">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div
                            className={`mt-auto pt-16 transition-all duration-500 ease-out delay-800 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-30 text-white">
                                Connect
                            </h3>
                            <ul className="flex flex-wrap gap-x-10 gap-y-4 list-none p-0 m-0">
                                {['Instagram', 'LinkedIn', 'YouTube'].map((social, idx) => (
                                    <li key={social}>
                                        <a
                                            href="#"
                                            className={`text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#9eff20] transition-all py-1 inline-block duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                                }`}
                                            style={{ transitionDelay: isMenuOpen ? `${800 + idx * 80}ms` : '0ms' }}
                                        >
                                            {social}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div >
                </aside >
            </div >
        </>
    );
}

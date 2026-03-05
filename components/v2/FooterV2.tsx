export default function FooterV2() {
    return (
        <footer id="kontakt" className="py-32 md:py-48 px-6 bg-[#000000] text-[#ffffff] relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
                <div className="w-[100vw] h-[100vw] rounded-full border border-[#9eff20] animate-ping" style={{ animationDuration: '10s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="v2-text-h1 mb-8 text-[#ffffff]">Bereit für echte Freiräume?</h2>
                <p className="v2-text-p text-[#7a7a7a] text-xl md:text-2xl mb-16 max-w-2xl mx-auto">
                    Lassen Sie uns darüber sprechen, wie autonome Systeme Ihr Unternehmen befreien.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="mailto:hello@leoquent.de" className="v2-text-btn px-10 py-5 bg-[#9eff20] text-[#000000] font-bold hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300 transform hover:scale-105">
                        Jetzt Gespräch starten
                    </a>
                    <a href="mailto:hello@leoquent.de" className="v2-text-btn text-[#7a7a7a] hover:text-[#ffffff] transition-colors border-b border-[#7a7a7a] hover:border-[#ffffff] pb-1">
                        hello@leoquent.de
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 w-full px-6 flex justify-between items-center text-xs text-[#7a7a7a] font-bold tracking-widest uppercase">
                <span>© 2024 Leoquent & Addiquat</span>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-[#9eff20] transition-colors">Impressum</a>
                    <a href="#" className="hover:text-[#9eff20] transition-colors">Datenschutz</a>
                </div>
            </div>
        </footer>
    );
}

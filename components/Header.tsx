'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Logo from './Logo';
import { X } from 'lucide-react';
import { useScrollDirection } from '@/hooks/use-scroll-direction';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible, isPastHero } = useScrollDirection();

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-colors duration-300 ${isPastHero
          ? 'bg-white/90 backdrop-blur-md grid-border-b'
          : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-2">
          <Logo className="h-8" />
          <span className="font-sans text-lg font-bold tracking-tight text-black">
            leoquent <span className="text-acid-lime">&</span> addequat
          </span>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 flex flex-col justify-center items-end gap-1.5 cursor-pointer group z-50"
          aria-label="Menü öffnen"
        >
          <div className="w-8 h-[2px] bg-black transition-all group-hover:w-6" />
          <div className="w-8 h-[2px] bg-black" />
        </button>
      </motion.header>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] p-12 shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Menü schließen"
              >
                <X className="w-8 h-8 text-black" />
              </button>

              <div className="mt-24 space-y-12">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30 mb-8">Navigation</div>
                <nav className="flex flex-col gap-8">
                  {[
                    { label: 'Services', href: '#services' },
                    { label: 'Agenten', href: '#agenten' },
                    { label: 'Prozess', href: '#prozess' },
                    { label: 'Mehrwert', href: '#mehrwert' },
                    { label: 'Portfolio', href: '#portfolio' },
                    { label: 'Über uns', href: '#ueber-uns' },
                    { label: 'Kontakt', href: '#kontakt' },
                  ].map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl md:text-5xl font-sans font-bold text-black hover:text-acid-lime transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="pt-12 border-t border-black/5">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/30 mb-4">Kontakt</div>
                  <p className="text-xl font-sans text-black/60">
                    hello@leoquent-addequat.de <br />
                    +49 (0) 123 456 789
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

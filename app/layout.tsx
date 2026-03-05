import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Leoquent & Addiquat | Die AGENTur für den Mittelstand',
  description: 'Wir befreien Sie von administrativen Lasten. Mit autonomen KI-Mitarbeitern, die genau so arbeiten, wie Sie denken.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} bg-vanta text-bone overflow-x-hidden`}>
      <body suppressHydrationWarning className="antialiased selection:bg-[#CCFF00] selection:text-[#050505]">
        {children}
      </body>
    </html>
  );
}

'use client';

import Image from 'next/image';

export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Leoquent & Addiquat Logo"
        width={100}
        height={100}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}

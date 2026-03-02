'use client';

import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={`${basePath}/logo.png`}
        alt="Leoquent & Addequat Logo"
        width={100}
        height={100}
        className="h-full w-auto object-contain"
        priority
        unoptimized
      />
    </div>
  );
}

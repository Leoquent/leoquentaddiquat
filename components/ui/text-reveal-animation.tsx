'use client';

import React from "react";

export function TextReveal({ word, className }: { word?: string; className?: string }) {
    const WORD = word || "Animations";

    return (
        <div className={className}>
            <div className="h1">
                {WORD.split("").map((char, i) => (
                    <span
                        style={{ "--index": i } as React.CSSProperties}
                        key={i}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <style jsx>{`
        .h1 {
          animation: reveal 0.5s ease;
          overflow: hidden;
          margin: 0;
          line-height: inherit;
          white-space: pre-wrap;
        }
        .h1 span {
          display: inline-block;
          opacity: 0;
          color: inherit;
          animation: reveal 0.5s ease-in-out forwards;
          animation-delay: calc(0.02s * var(--index));
        }
        @keyframes reveal {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
}

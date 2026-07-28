"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const COLS = 4;
const ROWS = 5;

export default function AssemblePhoto() {
  const [assembled, setAssembled] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setAssembled(true), 250);
    const t2 = setTimeout(() => setDone(true), 250 + COLS * ROWS * 45 + 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative">
      {/* glow atrás da moldura */}
      <div
        aria-hidden
        className={`absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/25 to-accent2/25 blur-xl transition-opacity duration-1000 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative overflow-hidden rounded-3xl border border-line">
        {/* imagem real (acessibilidade + fallback), aparece ao final */}
        <Image
          src="/marcus.jpg"
          alt="Marcus Marincek"
          width={480}
          height={600}
          priority
          className={`relative block w-full object-cover transition-opacity duration-500 ${
            done ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* camada de tiles que se montam */}
        <div
          aria-hidden
          className={`absolute inset-0 grid transition-opacity duration-500 ${
            done ? "opacity-0" : "opacity-100"
          }`}
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
        >
          {Array.from({ length: COLS * ROWS }).map((_, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            // ordem de montagem: do centro para fora
            const cx = Math.abs(col - (COLS - 1) / 2);
            const cy = Math.abs(row - (ROWS - 1) / 2);
            const delay = (cx + cy) * 90 + ((i * 37) % 120);

            return (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{
                  opacity: assembled ? 1 : 0,
                  transform: assembled
                    ? "translate(0,0) rotate(0deg) scale(1)"
                    : `translate(${(col % 2 === 0 ? -1 : 1) * 18}px, ${
                        (row % 2 === 0 ? -1 : 1) * 18
                      }px) rotate(${(i % 2 === 0 ? -1 : 1) * 4}deg) scale(0.85)`,
                  transition: `transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 0.5s ease ${delay}ms`,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    width: `${COLS * 100}%`,
                    height: `${ROWS * 100}%`,
                    left: `${-col * 100}%`,
                    top: `${-row * 100}%`,
                    backgroundImage: "url(/marcus.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>

      {/* badge de status */}
      <div
        className={`absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/40 bg-ink/90 px-4 py-1.5 font-mono text-[11px] tracking-widest text-accent shadow-[0_0_20px_-4px_rgba(110,231,183,0.5)] backdrop-blur transition-all duration-700 ${
          done ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <span className="live-dot mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        OPEN TO WORK · AI IN PRODUCTION
      </div>
    </div>
  );
}

"use client";
import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full bg-luxuryBlack flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* SUBTLE LUXURY BACKGROUND ASSET (Added section) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.12] mix-blend-screen pointer-events-none filter saturate-50"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop')` }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxuryGreen/15 rounded-full blur-[120px] pointer-events-none"></div>
      
      <p className="text-[20px] md:text-s font-semibold uppercase tracking-[0.4em] text-emerald-700 mb-4 relative z-10">
        Global Reliability • Unparalleled Service
      </p>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight drop-shadow-[0_10px_30px_rgba(4,67,39,0.3)] relative z-10">
        GNN LOGISTICS INC<span className="text-luxuryMint"></span>
      </h1>
      
      <p className="mt-6 text-lg md:text-base text-gray-400 font-light max-w-xl leading-relaxed tracking-wide relative z-10">
        Next-generation distribution networks, engineered with ultimate corporate precision, luxury operational integrity, and flawless execution.
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 relative z-10">
        <a href="#contact" className="text-sm font-medium uppercase tracking-[0.2em] bg-black text-white border border-white px-8 py-3.5 rounded-full transition-all hover:bg-white hover:text-black">
            Ship with Us
        </a>
     </div>

    </section>
  );
}
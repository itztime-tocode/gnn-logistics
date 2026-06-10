"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxuryBlack/60 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-[0.3em] text-emerald-700">
        GNN<span className="text-emerald-700">   Logistics</span>
      </div>
      <div className="hidden md:flex space-x-10 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400">
        <a href="#hero" className="hover:text-white transition-colors">Home</a>
        <a href="#overview" className="hover:text-white transition-colors">Overview</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#kpi" className="hover:text-white transition-colors">Operations</a>
        <a href="#contact" className="hover:text-white transition-colors">Inquire</a>
      </div>
      <div className="hidden md:block">
        <a href="#contact" className="text-[10px] uppercase tracking-[0.15em] text-white bg-white/5 border border-white/10 hover:border-luxuryMint px-5 py-2.5 rounded-full transition-all hover:bg-luxuryGreen/20">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
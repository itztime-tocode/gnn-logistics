"use client";
import React from 'react';

export default function Overview() {
  return (
    <section id="overview" className="w-full bg-luxuryBlack py-24 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Modular Grid Layout Header */}
        <div className="mb-16 max-w-2xl">
          <h3 className="text-[15px] font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-3">
            // Corporate Overview
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Engineering global trade networks with absolute elitist stability.
          </h2>
        </div>

        {/* Asymmetrical Apple-Style Bento Content Grid Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Massive Card (Spans 2 columns on Desktop) */}
          <div className="md:col-span-2 bg-luxuryCard border border-white/5 p-8 md:p-12 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:border-luxuryGreen/40 hover:-translate-y-1">
            <div>
              <span className="text-s font-mono text-emerald-700">OUR MISSION //</span>
              <p className="mt-6 text-lg md:text-xl font-light text-gray-300 leading-relaxed">
                To transform traditional commercial supply chain fragmentation into a seamless, high-integrity luxury asset transportation ecosystem. We safeguard your corporate logistical assets through elite tracking, security, and velocity.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-6">
              <div>
                <h4 className="text-2xl font-bold text-white">99.8%</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Accuracy Index</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">24/7</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Active Oversight</p>
              </div>
            </div>
          </div>

          {/* Accent Mini Column Card */}
          <div className="bg-luxuryGreen/10 border border-luxuryGreen/20 p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:border-luxuryMint/40 hover:-translate-y-1">
            <div>
              <span className="text-s font-mono text-emerald-700">SUSTAINABILITY COMMITMENT //</span>
              <h4 className="text-xl font-bold text-white mt-6 leading-snug">
                Carbon Neutral Freight Redirection.
              </h4>
              <p className="mt-4 text-xs font-light text-gray-400 leading-relaxed">
                Utilizing state-of-the-art biofuel operations aluxuryMind hyper-optimized pathfinding algorithms to eliminate operational emissions by 2030.
              </p>
            </div>
            <div className="mt-8 text-xs text-white underline tracking-wider cursor-pointer hover:text-luxuryMint transition-colors">
              Read Green Paper →
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
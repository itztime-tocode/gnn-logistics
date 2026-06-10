"use client";
import React from 'react';

// The clean, structured data matrix for our premium services
const servicesData = [
  {
    id: "01",
    title: "Air Freight Forwarding",
    tag: "GLOBAL VELOCITY",
    imgUrl: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFpciUyMEZyZWlnaHQlMjBGb3J3YXJkaW5nfGVufDB8fDB8fHww",
    desc: "Time-critical delivery frameworks engineered with elite priority boarding protocols and custom global aviation lane allocation."
  },
  {
    id: "02",
    title: "Sea Freight Operations",
    tag: "MARITIME SCALE",
    imgUrl: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VhJTIwRnJlaWdodCUyME9wZXJhdGlvbnN8ZW58MHx8MHx8fDA%3D",
    desc: "Intercontinental maritime cargo routing with high-security container integrity and priority terminal offloading structures."
  },
  {
    id: "03",
    title: "Smart Warehousing",
    tag: "AUTOMATED OVERSIGHT",
    imgUrl: "https://plus.unsplash.com/premium_photo-1764691278029-f3c2bc8e676a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNtYXJ0JTIwd2FyZWhvdXNlfGVufDB8fDB8fHww",
    desc: "Next-generation multi-tier fulfillment nodes managed via automated robotics, pristine atmospheric monitoring, and live positioning."
  },
  {
    id: "04",
    title: "Tech Logistics & AI",
    tag: "PREDICTIVE PATHS",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    desc: "Machine learning pathfinding nodes that predict weather disruptions, port gridlocks, and fuel efficiencies ahead of time."
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-luxuryBlack py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading Header Block */}
        <div className="mb-16">
          <h2 className="text-[15px] font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-3">
             // Premium Capabilities
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Logistical Excellence. Reimagined for Global Scale.
          </h3>
        </div>

        {/* Dynamic Grid Layout container mapping out individual Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 bg-luxuryCard flex flex-col justify-end p-6 cursor-pointer transition-all duration-500 hover:border-luxuryGreen/60 hover:-translate-y-1.5"
            >
              
              {/* THE BRIGHTENING IMAGE CONTAINER */}
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-[0.4] blur-[0.1px] scale-100 group-hover:scale-105 group-hover:brightness-[0.95] group-hover:blur-none transition-all duration-700 ease-out"
                style={{ backgroundImage: `url(${service.imgUrl})` }}
              ></div>

              {/* High-end Premium Dark Gradient Shield overlay layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-luxuryBlack/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-85"></div>

              {/* Card Structural Floating Text Elements */}
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                
                <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-luxuryMint bg-luxuryGreen/40 border border-luxuryMint/20 px-2.5 py-1 rounded-md">
                  {service.tag}
                </span>

                <h4 className="text-lg font-bold text-white tracking-tight mt-4 group-hover:text-luxuryMint transition-colors duration-300">
                  {service.title}
                </h4>

                {/* Subtext Paragraph expands and reveals itself smoothly on hover */}
                <p className="mt-3 text-xs text-luxuryBlack font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {service.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500 group-hover:text-emerald-700 flex justify-between items-center transition-colors">
                  <span>SPECIFICATION PANEL {service.id}</span>
                  <span className="transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">→</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
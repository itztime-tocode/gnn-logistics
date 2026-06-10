"use client";
import React from 'react';

const reviews = [
  {
    id: 1,
    quote: "GNN Logistics completely overhauled our enterprise fulfillment speeds. Their automated oversight metric systems gave our management layer absolute transparency.",
    author: "Marcus Vance",
    role: "VP of Supply Chain, Vertex Industries"
  },
  {
    id: 2,
    quote: "The Air Freight priority allocation framework saved our Q4 product drop from terminal gridlocks. Exceptional customer speed and professional execution.",
    author: "Elena Rostova",
    role: "Director of Global Operations, Nova Tech Labs"
  },
  {
    id: 3,
    quote: "Prisinte warehouse accuracy benchmarks and zero-emission pathfinding structures. GNN is the premier modern partner for luxury brand distribution networks.",
    author: "Julian Sterling",
    role: "Chief Operating Officer, Sterling Aviation"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#050505] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-[15px] font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-3">
             // Global Proof
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Trusted by Industry Pioneers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-luxuryCard border-4 border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-luxuryGreen/30 transition-all duration-300">
              <p className="text-sm text-gray-400 font-light leading-relaxed italic">
                "{review.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-white/5">
                <h4 className="text-lg font-bold text-emerald-700 tracking-tight">{review.author}</h4>
                <p className="text-[10px] text-luxuryMint font-mono uppercase tracking-wider mt-1">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
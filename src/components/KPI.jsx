"use client";
import React from 'react';

// Expanded premium operational data matrix featuring all 8 industry core metrics
const kpis = [
  { 
    id: "01", 
    name: "On-Time Delivery (OTD)", 
    rate: "99.2%", 
    formula: "(On-Time / Total) × 100", 
    desc: "Measures the percentage of shipments delivered to the destination on or before the committed time window." 
  },
  { 
    id: "02", 
    name: "Perfect Order Rate", 
    rate: "98.5%", 
    formula: "(Perfect / Total) × 100", 
    desc: "Tracks orders delivered completely undamaged, exactly on time, in full quantity, accompanied by flawless documentation." 
  },
  { 
    id: "03", 
    name: "Warehouse Accuracy Rate", 
    rate: "99.9%", 
    formula: "(Accurate Count / Total Count) × 100", 
    desc: "Indicates precision matching between the physical inventory records and your digital warehouse management hub." 
  },
  { 
    id: "04", 
    name: "Transportation Utilization", 
    rate: "94.2%", 
    formula: "(Actual Capacity / Available Capacity) × 100", 
    desc: "Measures asset optimization efficiency by calculating wasted space across line-haul freight flights and cargo trucks." 
  },
  { 
    id: "05", 
    name: "Order Lead Time (OLT)", 
    rate: "4.2 Hrs", 
    formula: "Timestamp(Delivery) - Timestamp(Purchase)", 
    desc: "The total average velocity elapsed from the exact millisecond an order is placed to the moment it safely arrives." 
  },
  { 
    id: "06", 
    name: "Inventory Turnover Velocity", 
    rate: "12.4x", 
    formula: "Cost of Goods Sold / Average Inventory Value", 
    desc: "Calculates the sheer performance speed of how many times entire supply configurations are sold and replenished annually." 
  },
  { 
    id: "07", 
    name: "Freight Cost Per Unit", 
    rate: "$0.14", 
    formula: "Total Outbound Shipping Spend / Total Units Shipped", 
    desc: "Monitors baseline shipping spending margins broken down directly against individual product unit scale metrics." 
  },
  { 
    id: "08", 
    name: "Dwell Time Performance", 
    rate: "18 Min", 
    formula: "Total Hours Stationary inside Terminal Yards", 
    desc: "Tracks transit efficiency bottlenecking by calculating how long freight assets wait inside yard check-points before exit." 
  }
];

export default function KPI() {
  return (
    <section id="kpi" className="w-full bg-[#050505] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Dashboard Title Header */}
        <div className="mb-16">
          <h2 className="text-[15px] font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-3">
            // Live Operations Control
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Essential Logistics KPIs
          </h3>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest font-mono">
            Measure Today, Deliver Tomorrow.
          </p>
        </div>

        {/* Dynamic 8-Card Grid: Auto-flows onto row 2 on desktop layouts flawlessly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => (
            <div 
              key={kpi.id} 
              className="bg-luxuryCard border-4 border-white/7 p-6 rounded-4xl relative overflow-hidden group hover:border-luxuryGreen/40 transition-all duration-300"
            >
              <span className="text-[10px] font-mono font-bold text-luxuryMint bg-luxuryGreen/20 px-2 py-0.5 rounded">
                KPI {kpi.id}
              </span>
              
              <h4 className="text-sm font-bold text-emerald-700 mt-4 tracking-tight group-hover:text-luxuryMint transition-colors">
                {kpi.name}
              </h4>
              
              <div className="text-3xl font-extrabold text-white my-3">
                {kpi.rate}
              </div>
              
              <p className="text-[12px] text-gray-500 font-mono mb-2">
                {kpi.formula}
              </p>
              
              <p className="text-xs text-gray-400 font-light leading-relaxed border-t border-white/5 pt-3">
                {kpi.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
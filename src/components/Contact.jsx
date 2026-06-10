"use client";
import React, { useState } from 'react';

export default function Contact() {
  // Form State Architecture
  const [formData, setFormData] = useState({ company: '', email: '', phone: '', scale: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  // Premium Strict Client-Side Input Validation Logic
  const validateForm = () => {
    let localErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Standard E.164 phone evaluation regex

    if (!formData.company.trim()) localErrors.company = "Corporate entity name is required.";
    if (!emailRegex.test(formData.email)) localErrors.email = "Please enter a valid business email.";
    if (!formData.phone.trim()) {
      localErrors.phone = "Contact phone vector is required.";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      localErrors.phone = "Invalid format. Use international digits (e.g., +14155552671).";
    }
    if (formData.scale.trim().length < 10) localErrors.scale = "Please provide more logistical details (minimum 10 characters).";

    setErrors(localErrors);
    return Object.keys(localErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Halts processing if validation layout fails

    setStatus({ loading: true, success: false, error: false });

    // 🔗 Your working, authorized Google Web App API macro link
    const targetUrl = "https://script.google.com/macros/s/AKfycbzoTaed50azwaClP2orkBRuQRep6e_IiN_AbvEC2NpXmPQZF-KQvz89XnPXdXmUpQv0/exec"; 

    try {
      // Bulletproof stream URL param payload formulation to bypass browser CORS rules completely
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("company", formData.company);
      urlEncodedData.append("email", formData.email);
      urlEncodedData.append("phone", formData.phone);
      urlEncodedData.append("scale", formData.scale);

      await fetch(targetUrl, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlEncodedData.toString()
      });

      setStatus({ loading: false, success: true, error: false });
      setFormData({ company: '', email: '', phone: '', scale: '' }); // Erase form on success
    } catch (err) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="w-full bg-[#050505] py-24 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Title */}
        <div className="mb-16">
          <h2 className="text-[15px] font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-3">
            // Secure Procurement Node
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Initiate Logistics Integration
          </h3>
          <p className="mt-4 text-sm text-gray-400 font-light max-w-md">
            Submit your corporate freight scale parameters to receive an optimized routing evaluation analysis from our logistics engineers.
          </p>
        </div>

        {/* Two-Column Grid: Corporate Profile vs Interactive Input Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/*  LEFT COLUMN: EXPANDED COMPANY INFORMATION BLOCK */}
          <div className="lg:col-span-5 space-y-8 text-gray-400">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-white mb-3">Corporate Headquarters</h4>
              <p className="text-sm font-light leading-relaxed">
                GNN Logistics International Plaza<br />
                Suite 4800, Global Commerce District<br />
                New York, NY 10001, United States
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-white mb-3">Inquiry & Routing Support</h4>
              <p className="text-sm font-light leading-relaxed">
                Enterprise Intake: <span className="text-luxuryMint font-mono block sm:inline">+1 (800) 555-GNN-LOG</span><br />
                Global Operations: <span className="text-gray-300 font-mono">ops@gnn-logistics-mock.com</span>
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-white mb-3">Operational Window</h4>
              <p className="text-sm font-light">
                Continuous Coverage: <span className="text-luxuryMint">24 / 7 / 365</span><br />
                Customs Clearance Nodes: Automated Live Tracking Matrix
              </p>
            </div>
            
            <div className="p-5 bg-luxuryCard border border-white/5 rounded-2xl">
              <span className="text-[13px] uppercase tracking-wider font-mono text-luxuryMint block mb-1">System Core Integrity Status</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                All data fields processed inside this workspace are protected via secure transport encryption protocols before spreadsheet injection arrays.
              </p>
            </div>
          </div>

          {/*  RIGHT COLUMN: BULLETPROOF WORKING AUTOMATION FORM */}
          <div className="lg:col-span-7 bg-luxuryCard border border-white/5 rounded-3xl p-8 md:p-10 relative">
            {status.success ? (
              <div className="text-center py-12 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-luxuryGreen/20 border border-luxuryMint mx-auto flex items-center justify-center mb-4">
                  <span className="text-luxuryMint font-bold text-lg">✓</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Transmission Authenticated</h3>
                <p className="text-lg text-gray-400 mt-2">The logistical scale data matrix has been written to the master sheet array seamlessly.</p>
                <button 
                  onClick={() => setStatus({ ...status, success: false })} 
                  className="mt-6 text-[15px] font-mono text-gray-500 hover:text-white underline tracking-wider uppercase"
                >
                  Submit Another Parameter Block
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-mono text-gray-500 uppercase tracking-wider mb-2">Corporate Entity Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className={`w-full bg-[#050505] border ${errors.company ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-luxuryMint transition-colors`} 
                      placeholder="e.g., SpaceX Supply Hubs" 
                    />
                    {errors.company && <p className="text-[10px] text-red-500 mt-1 font-mono">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-mono text-gray-500 uppercase tracking-wider mb-2">Secure Business Email</label>
                    <input 
                      type="text" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={`w-full bg-[#050505] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-luxuryMint transition-colors`} 
                      placeholder="ops@enterprise.com" 
                    />
                    {errors.email && <p className="text-[10px] text-red-500 mt-1 font-mono">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-mono text-gray-500 uppercase tracking-wider mb-2">Contact Phone Vector (E.164 Standard)</label>
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className={`w-full bg-[#050505] border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-luxuryMint transition-colors`} 
                    placeholder="+14155552671" 
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-mono">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[13px] font-mono text-gray-500 uppercase tracking-wider mb-2">Estimated Monthly Cargo Scale / Destination Hubs</label>
                  <textarea 
                    rows="4" 
                    name="scale" 
                    value={formData.scale} 
                    onChange={handleChange} 
                    className={`w-full bg-[#050505] border ${errors.scale ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-luxuryMint transition-colors resize-none`} 
                    placeholder="Describe your primary destination parameters or freight volume thresholds..." 
                  />
                  {errors.scale && <p className="text-[10px] text-red-500 mt-1 font-mono">{errors.scale}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={status.loading} 
                  className="w-full text-[13px] font-medium uppercase tracking-[0.2em] bg-black text-white hover:bg-white hover:text-black border border-white py-4 rounded-xl transition-all duration-300 flex justify-center items-center"
                >
                  {status.loading ? "Running Data Spreadsheet Stream..." : "Submit Optimization Request"}
                </button>
                {status.error && <p className="text-xs text-red-500 text-center font-mono mt-2">Transmission pipeline disrupted. Verify network link mapping.</p>}
              </form>
            )}
          </div>

        </div>

        {/*  RE-IMPLEMENTED COMPLETE HIGH-END EXPANDED FOOTER LAYER */}
        <div className="pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-gray-500">
          
          {/* Column 1: Brand Philosophy Statement */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-base font-bold tracking-[0.3em] text-emerald-700 uppercase">
              GNN<span className="text-luxuryMint">.</span>
            </div>
            <p className="text-[13px] font-light leading-relaxed max-w-xs text-gray-400">
              Architecting next-generation physical asset pipelines via premium global infrastructure arrays and high-capacity digital oversight platforms.
            </p>
          </div>

          {/* Column 2: Structural Link Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-[15px] uppercase font-bold text-emerald-700 tracking-widest">Navigation</h5>
            <ul className="space-y-2 text-[15px] font-light">
              <li><a href="#hero" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="#overview" className="hover:text-white transition-colors">Core Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#kpi" className="hover:text-white transition-colors">Performance Controls</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media Connectivity Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[15px] uppercase font-bold text-emerald-700 tracking-widest">Connect Matrix (Socials)</h5>
            <ul className="space-y-2 text-[15px] font-light">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-luxuryMint transition-colors">🗲 LinkedIn / Corporate Profiles</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-luxuryMint transition-colors">🗲 X.com / System Deployments</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-luxuryMint transition-colors">🗲 GitHub Network Repos</a></li>
            </ul>
          </div>

          {/* Column 4: Regulatory Metadata Security Keys */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[15px] uppercase font-bold text-emerald-700 tracking-widest">Regulatory Assets</h5>
            <p className="text-[15px] font-light leading-relaxed text-gray-400">
              Security clearance signature token: <span className="font-mono text-gray-400 block text-[10px] mt-1 bg-white/5 p-1.5 rounded text-center border border-white/5">GNN-2026-AUTOMATED-PROD</span>
              All pipeline transaction actions are sandbox isolated under strict tracking.
            </p>
          </div>

        </div>

        {/* Fine-Print Corporate Baseline */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[13px] font-mono text-white gap-4">
          <div>© 2026 GNN Logistics Inc. Private Architectural Sandbox Assets. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#hero" className="hover:text-white transition-colors">Back to Top ▲</a>
            <a href="#overview" className="hover:text-white transition-colors">Terms of Operations</a>
            <a href="#services" className="hover:text-white transition-colors">Privacy Infrastructure</a>
          </div>
        </div>

      </div>
    </section>
  );
}
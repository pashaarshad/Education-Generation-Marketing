"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/hero_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      
      {/* Background overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-0" />

      {/* Grid lines background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Headline and Copy */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-xs font-semibold text-purple-300 w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Digital Admission Growth System
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            Fill More College Seats. <br />
            <span className="text-gradient-purple">Generate More Admissions.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
            We help colleges increase student inquiries, applications, and enrollments through a predictable digital growth system. Reduce agent dependency and build digital ownership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              suppressHydrationWarning
              onClick={() => scrollTo("booking")}
              className="px-8 py-4 rounded-full font-semibold bg-brand-purple hover:bg-brand-violet text-white transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] cursor-pointer flex items-center justify-center gap-2 group"
            >
              Book Admission Growth Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              suppressHydrationWarning
              onClick={() => scrollTo("solutions")}
              className="px-8 py-4 rounded-full font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              See How It Works
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 border-t border-white/10 pt-6 max-w-lg">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-medium text-slate-200">Data-driven student profiling</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-medium text-slate-200">Predictable inquiry pipelines</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-medium text-slate-200">CRM & WhatsApp automation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-medium text-slate-200">Zero broker agent commission</span>
            </div>
          </div>
        </div>

        {/* Right Column: Static Premium Dashboard Graphic */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[450px] md:h-[500px]">
          
          {/* Dashboard Frame (NO animate-float, completely still) */}
          <div className="w-full max-w-[500px] glass-panel rounded-2xl p-5 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative">
            
            {/* Header of Mockup */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-slate-500 ml-2 font-mono">admission-growth-dashboard v2.4</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400" /> Live
              </span>
            </div>

            {/* Top Grid: Cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-2xs font-semibold uppercase tracking-wider">Inquiries Generated</span>
                  <Users className="w-3.5 h-3.5 text-brand-violet" />
                </div>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display font-bold text-lg text-white">4,289</span>
                  <span className="text-3xs text-emerald-400 font-semibold">+24.5%</span>
                </div>
              </div>
              
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-2xs font-semibold uppercase tracking-wider">Confirmed Enrollments</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display font-bold text-lg text-white">1,102</span>
                  <span className="text-3xs text-emerald-400 font-semibold">+34.8%</span>
                </div>
              </div>
            </div>

            {/* Dashboard main visual: Custom Chart */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xs font-semibold text-slate-300">Admission Funnel Conversion Trend</span>
                <span className="text-3xs text-slate-500">June 2026</span>
              </div>
              
              {/* SVG Line Chart */}
              <div className="w-full h-36 relative">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  
                  {/* Gradient Area under curve */}
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0170B9" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0170B9" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M 0 130 C 50 110, 100 80, 150 90 C 200 100, 250 50, 300 40 C 350 30, 400 10, 400 10 L 400 150 L 0 150 Z"
                    fill="url(#chart-grad)"
                  />
                  
                  {/* Curve Line */}
                  <path
                    d="M 0 130 C 50 110, 100 80, 150 90 C 200 100, 250 50, 300 40 C 350 30, 400 10, 400 10"
                    fill="none"
                    stroke="#0170B9"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Highlight dots */}
                  <circle cx="150" cy="90" r="4.5" fill="#0170B9" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="300" cy="40" r="4.5" fill="#0170B9" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="400" cy="10" r="4.5" fill="#0170B9" stroke="#fff" strokeWidth="1.5" />
                </svg>
                
                {/* Floating overlay chip */}
                <div className="absolute top-2 right-4 px-2.5 py-1 rounded bg-[#0e0d15] border border-brand-purple/20 text-3xs font-semibold text-white shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                  Seat Fill Rate: <span className="text-emerald-400 font-bold">94.2%</span>
                </div>
              </div>
            </div>

            {/* Bottom row: Conversion metrics */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-lg bg-[#0e0d15] border border-white/5 flex flex-col text-center">
                <span className="text-3xs text-slate-500 font-semibold uppercase">Cost per Lead</span>
                <span className="text-xs font-bold text-rose-400 mt-0.5">-41%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0d15] border border-white/5 flex flex-col text-center">
                <span className="text-3xs text-slate-500 font-semibold uppercase">Application Conversion</span>
                <span className="text-xs font-bold text-emerald-400 mt-0.5">3.2x</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0d15] border border-white/5 flex flex-col text-center">
                <span className="text-3xs text-slate-500 font-semibold uppercase">Admissions Revenue</span>
                <span className="text-xs font-bold text-white mt-0.5">₹4.8 Cr</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

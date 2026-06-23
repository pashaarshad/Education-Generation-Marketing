"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Zap, HelpCircle } from "lucide-react";

export default function About() {
  const corePillars = [
    {
      title: "Target Admissions",
      desc: "Attracting profiles that meet course eligibility guidelines, keeping counselors busy talking to interested candidates.",
    },
    {
      title: "Enrollment Yield",
      desc: "Improving application conversion rates, helping students successfully complete physical document verification.",
    },
    {
      title: "Fee Revenue Impact",
      desc: "Placing immediate financial stability back into departments by filling high-fee vacant seat caps.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-dark/25">
      
      {/* Background glow */}
      <div className="gradient-blob w-[400px] h-[400px] bg-brand-indigo/5 bottom-[-10%] left-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* About Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-violet mb-3">
            <Zap className="w-3.5 h-3.5" />
            Our Core Philosophy
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            We Don't Sell Marketing.<br />
            <span className="text-gradient-purple">We Help Colleges Grow Admissions.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-4 max-w-xl">
            Most digital agencies report on impressions, clicks, and page likes. But you can't pay salaries or fund new campus blocks with page likes. We focus on the only metrics that matter: enrollments and revenue.
          </p>
        </div>

        {/* Side-by-Side: Pillars & Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {corePillars.map((pillar, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/5 flex gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center shrink-0 text-brand-violet text-sm font-bold font-mono">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                  <p className="text-slate-400 text-xs md:text-sm mt-1.5 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Comparison Table */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="grid grid-cols-3 bg-[#0e0d15] border-b border-white/10 p-4 font-display font-semibold text-center text-xs md:text-sm">
                <div className="text-left text-slate-400">Metric / Focus</div>
                <div className="text-rose-400">Typical Agency</div>
                <div className="text-brand-violet">AdmitGrowth System™</div>
              </div>

              {/* Rows */}
              <div className="flex flex-col text-2xs md:text-xs">
                
                {/* Row 1 */}
                <div className="grid grid-cols-3 p-4 border-b border-white/5 text-center items-center">
                  <div className="text-left font-medium text-slate-300">Deliverable Metric</div>
                  <div className="text-slate-400 flex items-center justify-center gap-1">
                    Clicks & Impressions
                  </div>
                  <div className="text-white font-bold flex items-center justify-center gap-1.5">
                    Confirmed Admissions
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-3 p-4 border-b border-white/5 text-center items-center">
                  <div className="text-left font-medium text-slate-300">Lead Quality Verification</div>
                  <div className="text-rose-500/80 font-medium flex items-center justify-center gap-1">
                    <X className="w-3.5 h-3.5 shrink-0" /> No Verification
                  </div>
                  <div className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                    <Check className="w-3.5 h-3.5 shrink-0" /> Verified Profiles
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-3 p-4 border-b border-white/5 text-center items-center">
                  <div className="text-left font-medium text-slate-300">Follow-up Speed</div>
                  <div className="text-rose-500/80 font-medium flex items-center justify-center gap-1">
                    <X className="w-3.5 h-3.5 shrink-0" /> 24-48 Hours
                  </div>
                  <div className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                    <Check className="w-3.5 h-3.5 shrink-0" /> Instant Automations
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-3 p-4 border-b border-white/5 text-center items-center">
                  <div className="text-left font-medium text-slate-300">Counseling Team Support</div>
                  <div className="text-rose-500/80 font-medium flex items-center justify-center gap-1">
                    <X className="w-3.5 h-3.5 shrink-0" /> Zero Coaching
                  </div>
                  <div className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                    <Check className="w-3.5 h-3.5 shrink-0" /> CRM & Script Coaching
                  </div>
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-3 p-4 text-center items-center bg-brand-purple/5">
                  <div className="text-left font-semibold text-white">Financial Model</div>
                  <div className="text-slate-400">Fixed Monthly Retainer</div>
                  <div className="text-brand-violet font-extrabold">Outcomes & Capacity Scaling</div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

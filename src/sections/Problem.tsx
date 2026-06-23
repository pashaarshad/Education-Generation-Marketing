"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Search, TrendingDown, Users, ZapOff } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      title: "Low Admission Inquiries",
      desc: "Struggling to attract high-intent students actively looking for courses, resulting in direct intake shortage.",
      icon: Users,
    },
    {
      title: "Poor Website Conversion",
      desc: "Your website gets visitors, but standard forms fail to convert traffic into real, contactable inquiries.",
      icon: TrendingDown,
    },
    {
      title: "Weak Social Presence",
      desc: "Uninspiring social profiles fail to build trust with parents and students during their selection process.",
      icon: ZapOff,
    },
    {
      title: "High Local Competition",
      desc: "Nearby institutions out-marketing you, pulling students away with aggressive digital campaigns.",
      icon: Search,
    },
    {
      title: "Chasing Unqualified Leads",
      desc: "Your admission counselors waste 90% of their time calling cold, bulk-purchased databases that never convert.",
      icon: AlertCircle,
    },
  ];

  return (
    <section id="problems" className="py-24 relative overflow-hidden bg-white">
      
      {/* Background glow */}
      <div className="gradient-blob w-[400px] h-[400px] bg-rose-500/5 top-[20%] right-[-10%]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-600">
            <AlertCircle className="w-3.5 h-3.5" />
            The High Cost of Empty Seats
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mt-2">
            Empty Seats Cost More <br />
            Than Bad Marketing
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            Vacant classrooms aren't just empty space—they are directly draining your college's financial health, reputation, and growth potential.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                key={idx}
                className="rounded-2xl p-6 border border-slate-100 bg-slate-50 flex flex-col justify-between hover:border-rose-400 hover:bg-white hover:shadow-[0_15px_30px_rgba(244,63,94,0.06)] transition-all duration-300 group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-rose-600 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs font-semibold text-rose-500/80 mt-6 group-hover:text-rose-600 transition-colors">
                  Revenue Drain Factor
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}

          {/* Special CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl p-6 border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-white flex flex-col justify-between lg:col-span-1 shadow-[0_4px_20px_rgba(124,58,237,0.03)]"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-4">
                <span className="text-xs font-bold font-mono">ROI</span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                How much is it costing you?
              </h3>
              <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                Use our interactive opportunity assessment below to discover the exact yearly and lifetime revenue lost due to empty seats in your departments.
              </p>
            </div>
            
            <button
              onClick={() => {
                const element = document.getElementById("reports");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full py-3 mt-6 rounded-xl font-semibold bg-brand-purple hover:bg-brand-violet text-white transition-all duration-300 text-xs text-center cursor-pointer shadow-[0_4px_15px_rgba(124,58,237,0.2)]"
            >
              Analyze Your Seat Leakage
            </button>
          </motion.div>
        </div>

        {/* Warning Callout Box */}
        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-[0_4px_20px_rgba(244,63,94,0.02)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center shrink-0 text-rose-600">
              <AlertCircle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold text-slate-900">The Hidden Danger of Broker Agents</h4>
              <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-xl">
                Broker agents charge up to 30% of first-year tuition fees and lock your database. You gain temporary admissions but lose branding equity and digital ownership.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-5 py-2.5 rounded-lg text-xs font-semibold border border-rose-300 text-rose-600 hover:bg-rose-600 hover:text-white transition-all cursor-pointer whitespace-nowrap"
          >
            Stop Agent Dependency
          </button>
        </div>

      </div>
    </section>
  );
}

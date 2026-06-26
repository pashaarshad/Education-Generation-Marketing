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

        {/* Side-by-Side: Image and Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Authentic Empty Classroom Image */}
          <div className="lg:col-span-5 relative h-[380px] lg:h-[480px] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
              alt="Empty Lecture Hall Chairs representing vacant college seats"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-3xs font-bold uppercase tracking-wider text-rose-300">Revenue Drain Factor</span>
              <h3 className="font-display font-bold text-lg text-white mt-1">Every vacant seat represents ₹1.5L+ in lost tuition fees annually.</h3>
            </div>
          </div>

          {/* Right Column: Problems Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={idx}
                  className="rounded-2xl p-5 border border-slate-100 bg-slate-50 flex flex-col justify-between hover:border-rose-400 hover:bg-white hover:shadow-[0_15px_30px_rgba(244,63,94,0.05)] transition-all duration-300 group shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-rose-600 transition-colors">
                      {prob.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-3xs font-semibold text-rose-500/80 mt-4 group-hover:text-rose-600 transition-colors">
                    Revenue Drain Factor
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}

            {/* Special CTA Card (Occupies last spot) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-2xl p-5 border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-white flex flex-col justify-between shadow-[0_4px_20px_rgba(124,58,237,0.02)]"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-3">
                  <span className="text-2xs font-bold font-mono">ROI</span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">
                  How much is it costing you?
                </h3>
                <p className="text-slate-600 text-xs md:text-sm mt-1.5 leading-relaxed">
                  Use our opportunity assessment to discover the revenue lost from vacant seat caps.
                </p>
              </div>
              
              <button
                suppressHydrationWarning
                onClick={() => {
                  const element = document.getElementById("reports");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-2.5 mt-4 rounded-xl font-semibold bg-brand-purple hover:bg-brand-violet text-white transition-all duration-300 text-xs text-center cursor-pointer shadow-[0_4px_15px_rgba(124,58,237,0.15)]"
              >
                Analyze Your Seat Leakage
              </button>
            </motion.div>
          </div>
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
            suppressHydrationWarning
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

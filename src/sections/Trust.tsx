"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Percent, Users2 } from "lucide-react";

export default function Trust() {
  const stats = [
    {
      value: "50+",
      label: "Colleges Served",
      desc: "Engineering, medical, and business institutions nationwide",
      icon: GraduationCap,
    },
    {
      value: "10K+",
      label: "Qualified Leads",
      desc: "Attracted through targeted, profile-matched digital channels",
      icon: Users2,
    },
    {
      value: "₹50Cr+",
      label: "Revenue Impact",
      desc: "Additional tuition fee revenue secured from direct enrollments",
      icon: Briefcase,
    },
    {
      value: "95%",
      label: "Client Retention",
      desc: "Partner colleges scaling their intake systems year after year",
      icon: Percent,
    },
  ];

  const benefits = [
    "Increase admission inquiries",
    "Improve application-to-enrollment conversion",
    "Reduce dependency on third-party admission agents",
    "Build stronger, permanent digital visibility",
  ];

  return (
    <section className="py-24 border-y border-slate-100 relative bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Benefits Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple w-fit">
              <Award className="w-3.5 h-3.5" />
              Strategic Growth Partner
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Trusted Admission Growth Partner For Modern Colleges
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2 max-w-lg">
              Traditional marketing agencies sell clicks and impressions. We partner with colleges to build a scalable, predictable pipeline that fills empty seats with high-intent students.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="rounded-2xl p-6 border border-slate-100 bg-slate-50 relative overflow-hidden group hover:border-brand-purple/40 hover:bg-white hover:shadow-[0_15px_30px_rgba(124,58,237,0.06)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight group-hover:text-brand-purple transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

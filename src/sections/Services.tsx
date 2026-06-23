"use client";

import { motion } from "framer-motion";
import { UserCheck, Shuffle, Send, Share2, Laptop, HardDrive, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Student Lead Generation",
      outcome: "Generate Qualified Inquiries",
      desc: "Attract students matching your criteria, interested in specific courses, ready to speak with your counselors.",
      icon: UserCheck,
    },
    {
      title: "Funnel Optimization",
      outcome: "Convert Inquiries to Applications",
      desc: "Identify bottlenecks in your enrollment journey, streamlining forms to maximize visitor-to-inquiry ratios.",
      icon: Shuffle,
    },
    {
      title: "Meta & Google Ads",
      outcome: "Reach High-Intent Prospects",
      desc: "Deploy ROI-focused campaigns directly targeting search queries and student demographics on Instagram, Facebook & Google Search.",
      icon: Send,
    },
    {
      title: "Social Media Management",
      outcome: "Build Trust & Institution Equity",
      desc: "Turn your profiles into social proof powerhouses, creating organic engagement that builds confidence with parents and students.",
      icon: Share2,
    },
    {
      title: "Website & Landing Pages",
      outcome: "Maximize Page Lead Ratios",
      desc: "Design blazing-fast, mobile-friendly landing pages built specifically for admission conversion, loaded with interactive components.",
      icon: Laptop,
    },
    {
      title: "CRM & WhatsApp Automation",
      outcome: "Zero Leakage Intake Pipeline",
      desc: "Set up automatic lead routing, WhatsApp follow-ups, and counselor pipelines. Never let a qualified inquiry go cold.",
      icon: HardDrive,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="gradient-blob w-[500px] h-[500px] bg-brand-purple/5 top-[10%] right-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-violet">
            <Sparkles className="w-3.5 h-3.5" />
            Outcome-First Services
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mt-2">
            We Don't Just Offer Services. <br />
            <span className="text-gradient-purple">We Deliver Enrollment Growth.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            We align all digital assets toward a single metric: filling your departments with high-quality students.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-violet">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xs font-bold text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Outcome Led
                    </span>
                  </div>
                  
                  <span className="text-3xs font-semibold text-slate-500 uppercase tracking-widest">{service.title}</span>
                  <h3 className="font-display font-bold text-lg text-white mt-1.5 leading-snug">
                    {service.outcome}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-2xs text-slate-400 group-hover:text-white">
                  <span>Learn more about implementation</span>
                  <svg className="w-3.5 h-3.5 text-brand-violet group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

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
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Funnel Optimization",
      outcome: "Convert Inquiries to Applications",
      desc: "Identify bottlenecks in your enrollment journey, streamlining forms to maximize visitor-to-inquiry ratios.",
      icon: Shuffle,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Meta & Google Ads",
      outcome: "Reach High-Intent Prospects",
      desc: "Deploy ROI-focused campaigns directly targeting search queries and student demographics on Instagram, Facebook & Google Search.",
      icon: Send,
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Social Media Management",
      outcome: "Build Trust & Institution Equity",
      desc: "Turn your profiles into social proof powerhouses, creating organic engagement that builds confidence with parents and students.",
      icon: Share2,
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Website & Landing Pages",
      outcome: "Maximize Page Lead Ratios",
      desc: "Design blazing-fast, mobile-friendly landing pages built specifically for admission conversion, loaded with interactive components.",
      icon: Laptop,
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "CRM & WhatsApp Automation",
      outcome: "Zero Leakage Intake Pipeline",
      desc: "Set up automatic lead routing, WhatsApp follow-ups, and counselor pipelines. Never let a qualified inquiry go cold.",
      icon: HardDrive,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      
      {/* Background glow */}
      <div className="gradient-blob w-[500px] h-[500px] bg-brand-purple/5 top-[10%] right-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple">
            <Sparkles className="w-3.5 h-3.5" />
            Outcome-First Services
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mt-2">
            We Don't Just Offer Services. <br />
            <span className="text-gradient-purple">We Deliver Enrollment Growth.</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            We align all digital assets toward a single metric: filling your departments with high-quality students.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                key={idx}
                className="rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 flex flex-col justify-between hover:border-brand-purple/40 hover:bg-white hover:shadow-[0_15px_30px_rgba(1,112,185,0.06)] transition-all duration-300 group shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
              >
                {/* Header Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/95 border border-slate-200/50 flex items-center justify-center text-brand-purple shadow-sm z-10">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
                  <div>
                    <span className="text-3xs font-semibold text-slate-400 uppercase tracking-widest">{service.title}</span>
                    <h3 className="font-display font-bold text-lg text-slate-900 mt-1.5 leading-snug">
                      {service.outcome}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm mt-3 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-2xs text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span>Learn more about implementation</span>
                    <svg className="w-3.5 h-3.5 text-brand-purple group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

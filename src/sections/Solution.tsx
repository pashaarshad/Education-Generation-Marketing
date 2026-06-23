"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Target, RefreshCw, BarChart2, ShieldCheck } from "lucide-react";

export default function Solution() {
  const steps = [
    {
      num: "01",
      title: "Admission Funnel Audit",
      desc: "We analyze your current traffic sources, website conversion loops, and follow-up response speed to identify exactly where your inquiries are leaking.",
      icon: ClipboardCheck,
      color: "from-purple-500 to-indigo-500",
    },
    {
      num: "02",
      title: "Student Lead Generation",
      desc: "We launch highly targeted Meta & Google campaigns based on student demographics, interest profiles, and course search intent to drive qualified inquiries.",
      icon: Target,
      color: "from-indigo-500 to-violet-500",
    },
    {
      num: "03",
      title: "Conversion Optimization",
      desc: "We design premium landing pages, setup multi-step high-converting inquiry forms, and implement WhatsApp chatbots and automated nurturing sequences.",
      icon: RefreshCw,
      color: "from-violet-500 to-brand-purple",
    },
    {
      num: "04",
      title: "Enrollment Growth Scale",
      desc: "We setup CRM platforms and provide direct coaching to your admission counseling team, enabling them to convert digital inquiries into confirmed admissions.",
      icon: BarChart2,
      color: "from-brand-purple to-purple-600",
    },
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-brand-dark/10">
      
      {/* Background glow */}
      <div className="gradient-blob w-[500px] h-[500px] bg-brand-purple/5 top-[30%] left-[-10%] animate-pulse-slow" />
      <div className="gradient-blob w-[500px] h-[500px] bg-brand-indigo/5 bottom-[10%] right-[-10%] animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-violet">
            <ShieldCheck className="w-3.5 h-3.5" />
            The Proven Growth Blueprint
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mt-2">
            The College Admission <br />
            Growth System™
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
            A continuous, 4-step digital framework designed to attract qualified student profiles, maximize funnel conversion, and fill vacant seats.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/20 via-brand-purple/30 to-purple-600/10 -translate-x-1/2" />

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full md:w-[45%] glass-panel rounded-2xl p-6 md:p-8 border border-white/5 bg-[#0e0d15]/80 hover:border-brand-purple/35 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-semibold shadow-lg`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-display font-extrabold text-2xl text-white/10 group-hover:text-brand-purple/20 transition-colors">
                        {step.num}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-violet transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Bullet Center Indicator */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050508] border-2 border-brand-purple/40 items-center justify-center z-20">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${step.color} animate-pulse`} />
                  </div>

                  {/* Empty Spacer Column (to balance grid) */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

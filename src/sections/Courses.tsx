"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";

export default function Courses() {
  const featuredPrograms = [
    {
      title: "Engineering & Technology",
      levels: "B.Tech / M.Tech / BCA",
      vacanciesFilled: "45% Vacancies Filled in 90 Days",
      metric: "+180% Lead Growth",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      desc: "Targeting high-intent candidates for Computer Science, AI, Machine Learning, and Cyber Security streams.",
      bullets: ["AI-based student profiling", "Geotargeted regional campaigns", "Virtual lab tour pages"]
    },
    {
      title: "Business & Management",
      levels: "MBA / BBA / PGDM",
      vacanciesFilled: "3.8x Rise in Qualified Inquiries",
      metric: "+240% Direct Intake",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      desc: "Positioning your management programs for ambitious students focused on placements, fintech, and analytics.",
      bullets: ["Corporate profile matching", "LinkedIn outreach loops", "Placement highlight ads"]
    },
    {
      title: "Medical & Allied Health",
      levels: "MBBS / BDS / Nursing / Pharma",
      vacanciesFilled: "Capacity Reached 4 Weeks Early",
      metric: "100% Seat Fill Rate",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      desc: "Securing student counseling bookings and direct inquiries for highly competitive healthcare programs.",
      bullets: ["NEET score match targeting", "Parent-centric trust building", "WhatsApp counseling loops"]
    },
    {
      title: "Law & Liberal Humanities",
      levels: "BA LLB / Psychology / Arts",
      vacanciesFilled: "Zero Broker Dependency Achieved",
      metric: "3.2x Application Conversion",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600",
      desc: "Building long-term prestige and direct enrollment pipelines for law, global studies, and design programs.",
      bullets: ["Prestige branding videos", "Alumni success stories", "Interactive program webinars"]
    }
  ];

  return (
    <section id="courses" className="py-24 relative overflow-hidden bg-slate-50/50">
      {/* Background glow */}
      <div className="gradient-blob w-[500px] h-[500px] bg-brand-indigo/5 top-[10%] left-[-10%] animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple">
            <Sparkles className="w-3.5 h-3.5" />
            Niche Campaign Capabilities
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mt-2">
            Targeted Program Growth Campaigns
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            We build custom lead funnels optimized for the unique requirements and student personas of each major department.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPrograms.map((program, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(1,112,185,0.06)] hover:border-brand-purple/20 transition-all duration-300 group"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-purple text-white text-3xs font-extrabold tracking-wider uppercase shadow-lg">
                    {program.metric}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                    <span className="text-3xs font-bold text-sky-300 uppercase tracking-widest">{program.levels}</span>
                    <h3 className="font-display font-bold text-xl text-white mt-1">{program.title}</h3>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-3xs font-bold border border-emerald-100 mb-4">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {program.vacanciesFilled}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {program.desc}
                  </p>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-2xs font-extrabold uppercase text-slate-400 tracking-wider">Campaign Strategy Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {program.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-2xs text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="p-6 md:p-8 pt-0 border-t border-slate-50 mt-6">
                <button
                  suppressHydrationWarning
                  onClick={() => {
                    const element = document.getElementById("booking");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full py-3.5 rounded-xl bg-slate-50 hover:bg-brand-purple text-slate-700 hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  Request Campaign Blueprint
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

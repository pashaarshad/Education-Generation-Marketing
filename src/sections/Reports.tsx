"use client";

import { motion } from "framer-motion";
import ROICalculator from "@/components/ROICalculator";
import { FileText, Shield, CheckSquare } from "lucide-react";

export default function Reports() {
  const features = [
    {
      title: "Competitor Analysis",
      desc: "Detailed intelligence mapping competitor admissions digital budgets, keywords, and local search market share.",
    },
    {
      title: "Seat Gap Diagnostic",
      desc: "Analyze specific course vacancy rates and quantify departments leaking the highest percentage of tuition fee potential.",
    },
    {
      title: "Missing Search Demand",
      desc: "Reveal search terms with high monthly volumes in your region that your website is failing to capture.",
    },
  ];

  return (
    <section id="reports" className="py-24 relative overflow-hidden bg-white">
      
      {/* Background glow */}
      <div className="gradient-blob w-[500px] h-[500px] bg-brand-purple/5 top-[20%] left-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple w-fit">
              <FileText className="w-3.5 h-3.5" />
              Pre-Pitch Value Diagnostics
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Get Your Admission <br />
              Opportunity Report
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2 max-w-lg">
              We believe in showing the exact value left on the table before discussing retainers. Claim a custom opportunity analysis mapping your seat gap and competitor benchmarks.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4 border-l border-slate-100 pl-0 lg:pl-8">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0 text-brand-purple mt-0.5">
                <CheckSquare className="w-3 h-3" />
              </div>
              <p className="text-slate-700 text-xs md:text-sm">
                <strong>No Obligation:</strong> Our diagnostic reports are completely free and delivered within 48 hours.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0 text-brand-purple mt-0.5">
                <Shield className="w-3 h-3" />
              </div>
              <p className="text-slate-700 text-xs md:text-sm">
                <strong>Secure & Private:</strong> Your intake capacities and specific challenges remain strictly confidential.
              </p>
            </div>
          </div>
        </div>

        {/* ROI Calculator Placement */}
        <div className="mb-16">
          <ROICalculator />
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2 hover:border-brand-purple/30 hover:bg-white hover:shadow-[0_10px_25px_rgba(124,58,237,0.04)] transition-all"
            >
              <h4 className="font-display font-bold text-base text-slate-900">{feat.title}</h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-1">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

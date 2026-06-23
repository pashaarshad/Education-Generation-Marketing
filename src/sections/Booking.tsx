"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, PhoneCall, Sparkles, Check } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    collegeName: "",
    contactName: "",
    email: "",
    phone: "",
    intakeSize: "100-500",
    challenges: [] as string[],
  });
  
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    "Review your current digital ads & inquiry strategy",
    "Analyze your website user experience & form funnel",
    "Identify exact gaps leaking qualified student leads",
    "Compare your performance against local competitors",
    "Deliver 3 actionable, custom growth recommendations",
  ];

  const availableChallenges = [
    "Low inquiry volume",
    "Poor lead conversion rate",
    "Dependence on broker agents",
    "Counseling team productivity",
    "Weak branding visibility",
  ];

  const handleCheckboxChange = (challenge: string) => {
    setFormData((prev) => {
      const exists = prev.challenges.includes(challenge);
      if (exists) {
        return {
          ...prev,
          challenges: prev.challenges.filter((c) => c !== challenge),
        };
      } else {
        return {
          ...prev,
          challenges: [...prev.challenges, challenge],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-[#050508] border-t border-white/10">
      
      {/* Background glow */}
      <div className="gradient-blob w-[500px] h-[500px] bg-brand-purple/10 bottom-[-10%] right-[-10%] animate-pulse-slow" />
      <div className="gradient-blob w-[400px] h-[400px] bg-brand-indigo/5 top-[-10%] left-[-10%] animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-xs font-semibold text-purple-300 w-fit">
              <PhoneCall className="w-3.5 h-3.5" />
              Claim Your Strategy Call
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Free College Admission <br />
              <span className="text-gradient-purple">Growth Audit</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Book a private, 30-minute diagnostic session with our enrollment growth specialists. We will dissect your current setup and hand you a clear, actionable game plan.
            </p>

            <div className="h-[1px] bg-white/10 w-full my-2" />

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">What we cover in this session:</h4>
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center shrink-0 text-brand-violet mt-0.5">
                    <Check className="w-3 h-3 text-brand-violet" strokeWidth={3} />
                  </div>
                  <span className="text-xs md:text-sm text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-2xs text-slate-400">
              ⚡ <strong>Note:</strong> Zero sales pressure. If you like the plan, we can discuss partnering. If not, the recommendations are yours to keep.
            </div>
          </div>

          {/* Right Column: Dynamic Form Card */}
          <div className="lg:col-span-6">
            <motion.div
              layout
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative bg-[#0e0d15]/90"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">
                    Request Admission Strategy Audit
                  </h3>

                  {/* College Name & Contact Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-2xs font-semibold uppercase text-slate-400">College / University Name</label>
                      <input
                        suppressHydrationWarning
                        required
                        type="text"
                        placeholder="e.g. Imperial Institute"
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        className="p-3 rounded-lg bg-black border border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-xs text-white outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-2xs font-semibold uppercase text-slate-400">Contact Person Name</label>
                      <input
                        suppressHydrationWarning
                        required
                        type="text"
                        placeholder="e.g. Dr. Amit Sharma"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="p-3 rounded-lg bg-black border border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-xs text-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-2xs font-semibold uppercase text-slate-400">Official Email ID</label>
                      <input
                        suppressHydrationWarning
                        required
                        type="email"
                        placeholder="e.g. admissions@college.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="p-3 rounded-lg bg-black border border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-xs text-white outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-2xs font-semibold uppercase text-slate-400">WhatsApp / Phone Number</label>
                      <input
                        suppressHydrationWarning
                        required
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="p-3 rounded-lg bg-black border border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-xs text-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Intake Size */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-2xs font-semibold uppercase text-slate-400">Average Annual Intake Target</label>
                    <select
                      suppressHydrationWarning
                      value={formData.intakeSize}
                      onChange={(e) => setFormData({ ...formData, intakeSize: e.target.value })}
                      className="p-3 rounded-lg bg-black border border-white/10 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-xs text-white outline-none transition-all"
                    >
                      <option value="Under 100">Under 100 Students</option>
                      <option value="100-500">100 to 500 Students</option>
                      <option value="500-1000">500 to 1,000 Students</option>
                      <option value="1000+">1,000+ Students</option>
                    </select>
                  </div>

                  {/* Core Challenges (Checkboxes) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-2xs font-semibold uppercase text-slate-400">Select Core Challenges (Choose all that apply)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      {availableChallenges.map((challenge, idx) => {
                        const isChecked = formData.challenges.includes(challenge);
                        return (
                          <div
                            key={idx}
                            onClick={() => handleCheckboxChange(challenge)}
                            className={`p-2.5 rounded-lg border text-2xs cursor-pointer select-none transition-all flex items-center justify-between ${
                              isChecked
                                ? "bg-brand-purple/10 border-brand-purple text-white font-semibold"
                                : "bg-black border-white/5 text-slate-400 hover:border-white/10"
                            }`}
                          >
                            <span>{challenge}</span>
                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                              isChecked ? "bg-brand-purple border-brand-purple text-white" : "border-white/20"
                            }`}>
                              {isChecked && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    suppressHydrationWarning
                    type="submit"
                    className="w-full py-4 mt-2 rounded-xl font-semibold bg-brand-purple hover:bg-brand-violet text-white transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] cursor-pointer text-center text-xs"
                  >
                    Schedule My Free Growth Audit Call
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Audit Request Received!</h3>
                  <p className="text-slate-300 text-sm mt-3 max-w-sm">
                    Thank you, <strong>{formData.contactName}</strong>. Our team will review <strong>{formData.collegeName}</strong>'s digital assets and reach out on <strong>{formData.email}</strong> within 24 hours to schedule your session.
                  </p>
                  <button
                    suppressHydrationWarning
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs font-semibold text-brand-violet hover:underline cursor-pointer"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

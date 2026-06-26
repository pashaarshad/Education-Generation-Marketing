"use client";

import { useState } from "react";
import { DollarSign, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [emptySeats, setEmptySeats] = useState(50);
  const [annualFees, setAnnualFees] = useState(150000);
  const [courseDuration, setCourseDuration] = useState(3);

  // Calculations
  const yearlyLoss = emptySeats * annualFees;
  const lifetimeLoss = yearlyLoss * courseDuration;
  
  // Generation Marketing Recovery Target (75% recovery rate)
  const targetRecoveryRate = 0.75;
  const recoverableAnnual = yearlyLoss * targetRecoveryRate;
  const recoverableLifetime = lifetimeLoss * targetRecoveryRate;

  // Format currency in Indian Rupees format (or general formatting if preferred, let's format beautifully in INR)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-slate-200 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative z-10">
        
        {/* Left Side: Inputs */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple mb-3">
              <Sparkles className="w-3 h-3" />
              Admission Opportunity Calculator
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900">
              Calculate Your Revenue Leakage
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Every vacant seat represents lost revenue. Move the sliders to see what you are leaving on the table.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Input 1: Empty Seats */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">Vacant Seats / Year</label>
                <span className="font-display font-bold text-lg text-brand-purple">{emptySeats} Seats</span>
              </div>
              <input
                suppressHydrationWarning
                type="range"
                min="5"
                max="300"
                step="5"
                value={emptySeats}
                onChange={(e) => setEmptySeats(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
              <div className="flex justify-between text-2xs text-slate-400">
                <span>5 Seats</span>
                <span>300 Seats</span>
              </div>
            </div>

            {/* Input 2: Annual Fees */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">Average Annual Fee Per Student</label>
                <span className="font-display font-bold text-lg text-brand-purple">{formatCurrency(annualFees)}</span>
              </div>
              <input
                suppressHydrationWarning
                type="range"
                min="30000"
                max="500000"
                step="10000"
                value={annualFees}
                onChange={(e) => setAnnualFees(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
              <div className="flex justify-between text-2xs text-slate-400">
                <span>₹30,000</span>
                <span>₹5,000,00</span>
              </div>
            </div>

            {/* Input 3: Course Duration */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">Average Course Duration</label>
                <span className="font-display font-bold text-lg text-brand-purple">{courseDuration} Years</span>
              </div>
              <input
                suppressHydrationWarning
                type="range"
                min="1"
                max="5"
                step="1"
                value={courseDuration}
                onChange={(e) => setCourseDuration(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
              <div className="flex justify-between text-2xs text-slate-400">
                <span>1 Year</span>
                <span>5 Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Results (Remains dark for premium contrast emphasis) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 rounded-2xl bg-[#0e0d15] border border-white/5 relative overflow-hidden text-white shadow-xl">
          {/* Diagnostic Overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-6">
            {/* Box 1: Revenue Leakage */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Active Revenue Leakage
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-3xl md:text-4xl text-rose-500 tracking-tight">
                  {formatCurrency(yearlyLoss)}
                </span>
                <span className="text-xs text-slate-400 mt-1">Lost revenue every year</span>
              </div>
              <div className="text-xs text-slate-500 mt-2 border-t border-white/5 pt-2 flex justify-between">
                <span>Lifetime Loss ({courseDuration} yrs):</span>
                <span className="font-semibold text-rose-400/90">{formatCurrency(lifetimeLoss)}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-brand-purple/10 w-full" />

            {/* Box 2: Opportunity Recoverable */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Recoverable Opportunity (with Generation Marketing System™)
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-3xl md:text-4xl text-emerald-400 tracking-tight">
                  {formatCurrency(recoverableAnnual)}
                </span>
                <span className="text-xs text-slate-400 mt-1">Annual revenue recovered at 75% efficiency</span>
              </div>
              <div className="text-xs text-slate-500 mt-2 border-t border-white/5 pt-2 flex justify-between">
                <span>Lifetime Recoverable Value:</span>
                <span className="font-semibold text-emerald-400">{formatCurrency(recoverableLifetime)}</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <button
            suppressHydrationWarning
            onClick={() => {
              const element = document.getElementById("booking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full py-4 mt-4 rounded-xl font-semibold bg-white text-slate-900 hover:bg-brand-violet hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] text-center cursor-pointer flex items-center justify-center gap-2"
          >
            Claim Your Free Audit Report
            <Sparkles className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

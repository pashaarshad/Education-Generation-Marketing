"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "9c4bc675-52b4-4379-ac52-f68277dbf7bc";
      if (web3FormsKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `📧 New Newsletter Signup: ${email}`,
            from_name: "Generation Marketing Portal",
            email: email,
            message: `User signed up for the newsletter: ${email}`,
          }),
        });

        if (response.ok) {
          setSubscribed(true);
          setEmail("");
        } else {
          alert("Something went wrong. Please try again.");
        }
      } else {
        // Fallback simulation
        setTimeout(() => {
          setSubscribed(true);
          setEmail("");
        }, 600);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to subscribe. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#030305] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Segment: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo, tagline, and details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.svg"
                  alt="Generation Marketing Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-violet transition-colors">
                Generation Marketing<span className="text-brand-purple text-xs align-super">™</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
              More Inquiries. More Admissions. More Growth. Helping colleges build predictable, commission-free student enrollment systems nationwide.
            </p>

            <div className="flex flex-col gap-3 text-2xs md:text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-purple shrink-0" />
                <a href="mailto:managementgenerationmarketing@gmail.com" className="hover:text-white transition-colors">managementgenerationmarketing@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-purple shrink-0" />
                <a href="tel:+919111219829" className="hover:text-white transition-colors">+91 91112 19829</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-purple shrink-0" />
                <span>Kuchaman City, Jaipur</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xs font-semibold uppercase text-slate-500 tracking-wider">System Overview</h4>
              <nav className="flex flex-col gap-2.5 text-2xs md:text-xs text-slate-400">
                <button suppressHydrationWarning onClick={() => handleScrollTo("problems")} className="text-left hover:text-white transition-colors cursor-pointer">
                  The Problem
                </button>
                <button suppressHydrationWarning onClick={() => handleScrollTo("solutions")} className="text-left hover:text-white transition-colors cursor-pointer">
                  The Solution
                </button>
                <button suppressHydrationWarning onClick={() => handleScrollTo("services")} className="text-left hover:text-white transition-colors cursor-pointer">
                  Growth Services
                </button>
                <button suppressHydrationWarning onClick={() => handleScrollTo("reports")} className="text-left hover:text-white transition-colors cursor-pointer">
                  ROI Diagnostics
                </button>
              </nav>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-2xs font-semibold uppercase text-slate-500 tracking-wider">Agency</h4>
              <nav className="flex flex-col gap-2.5 text-2xs md:text-xs text-slate-400">
                <button suppressHydrationWarning onClick={() => handleScrollTo("about")} className="text-left hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
                <button suppressHydrationWarning onClick={() => handleScrollTo("booking")} className="text-left hover:text-white transition-colors cursor-pointer">
                  Book Strategy Audit
                </button>
                <span className="text-left text-slate-600 select-none">
                  Privacy Policy
                </span>
                <span className="text-left text-slate-600 select-none">
                  Terms of Service
                </span>
              </nav>
            </div>
          </div>

          {/* Call-to-action mini module */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-2xs font-semibold uppercase text-slate-500 tracking-wider">Newsletter</h4>
            <p className="text-2xs text-slate-400 leading-relaxed">
              Get bi-weekly student acquisition tips and digital enrollment trends sent directly to your inbox.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  suppressHydrationWarning
                  required
                  type="email"
                  placeholder="Dean/Director Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 rounded bg-brand-dark border border-white/5 text-3xs text-white outline-none w-full focus:border-brand-purple"
                />
                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 rounded bg-brand-purple text-white text-3xs font-semibold hover:bg-brand-violet transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "..." : "Join"}
                </button>
              </form>
            ) : (
              <p className="text-xs text-emerald-400 font-semibold animate-pulse">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>

        </div>

        {/* Bottom Segment: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-3xs md:text-2xs text-slate-500">
          
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Generation Marketing. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made for Education Marketing <Sparkles className="w-3 h-3 text-brand-purple" />
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-white transition-colors p-1.5 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors p-1.5 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors p-1.5 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

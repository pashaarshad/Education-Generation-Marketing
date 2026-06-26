"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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

  const navLinks = [
    { label: "The Problem", id: "problems" },
    { label: "The Solution", id: "solutions" },
    { label: "Services", id: "services" },
    { label: "Program Campaigns", id: "courses" },
    { label: "Revenue Opportunities", id: "reports" },
    { label: "About", id: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050508]/95 backdrop-blur-md border-b border-brand-purple/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-[#050508]/90 backdrop-blur-sm border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9">
            <Image
              src="/logo.svg"
              alt="Generation Marketing Logo"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-violet transition-colors duration-300">
            Generation Marketing<span className="text-brand-purple text-xs align-super">™</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              suppressHydrationWarning
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            suppressHydrationWarning
            onClick={() => handleScrollTo("booking")}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-brand-purple hover:bg-brand-violet text-white transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] cursor-pointer flex items-center gap-2"
          >
            Book Free Audit
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          suppressHydrationWarning
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#050508]/95 backdrop-blur-lg z-40 flex flex-col p-6 animate-fade-in">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <button
                suppressHydrationWarning
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-lg font-medium text-left text-slate-300 hover:text-white transition-colors duration-200 pb-3 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              suppressHydrationWarning
              onClick={() => handleScrollTo("booking")}
              className="mt-4 w-full py-4 rounded-full font-semibold bg-brand-purple hover:bg-brand-violet text-white transition-all duration-300 text-center shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              Book Free Growth Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

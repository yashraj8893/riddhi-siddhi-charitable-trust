import React from 'react';
import { ShieldCheck, FileText, Sparkles, Percent } from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';

export default function TaxMarquee({ onOpenTaxCalc, onOpen10BE }) {
  return (
    <div className="bg-gradient-to-r from-trust-900 via-trust-600 to-trust-900 text-white text-xs sm:text-sm py-2 px-4 relative z-40 border-b border-trust-500/30 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 flex-shrink-0 font-bold tracking-wide uppercase text-amber-300 text-[11px] sm:text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <Percent className="w-3.5 h-3.5" /> 80G Tax Exemption:
        </div>

        {/* Scrolling Ticker Text */}
        <div className="relative overflow-hidden w-full mx-3 sm:mx-6">
          <div className="inline-block whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            <span className="mx-4 text-white/95 font-medium">
              As per Indian Income Tax Department rules, all donations are entitled to <span className="text-amber-300 font-bold">50% Tax Exemption under Section 80G</span> (PAN: <span className="font-mono font-bold text-amber-200">{TRUST_INFO.pan}</span>, Reg No: <span className="font-mono font-bold text-amber-200">{TRUST_INFO.regNo}</span>).
            </span>
            <span className="mx-4 text-white/90">
              • Provide your PAN during donation to claim instant 10BE certificate • Your data is 100% confidential & encrypted •
            </span>
            <span className="mx-4 text-white/95 font-medium">
              As per Indian Income Tax Department rules, all donations are entitled to <span className="text-amber-300 font-bold">50% Tax Exemption under Section 80G</span> (PAN: <span className="font-mono font-bold text-amber-200">{TRUST_INFO.pan}</span>, Reg No: <span className="font-mono font-bold text-amber-200">{TRUST_INFO.regNo}</span>).
            </span>
          </div>
        </div>

        {/* Quick Trigger Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onOpenTaxCalc}
            className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold bg-amber-400 hover:bg-amber-300 text-trust-900 px-2.5 py-0.5 rounded-full transition-all shadow-sm"
          >
            <Sparkles className="w-3 h-3" /> Calculate Savings
          </button>
          <a
            href={TRUST_INFO.form10BEUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold bg-crimson-500 hover:bg-crimson-600 text-white px-2.5 py-0.5 rounded-full transition-all shadow-sm"
          >
            <FileText className="w-3 h-3" /> Form 10BE
          </a>
        </div>
      </div>
    </div>
  );
}

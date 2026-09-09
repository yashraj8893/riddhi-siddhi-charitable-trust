import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Calculator, ShieldCheck, X, Sparkles } from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';

const DONOR_ALERTS = [
  { name: "Rohan M.", location: "Mumbai", amount: "₹2,500", cause: "Medical Emergency Appeal", time: "3 mins ago" },
  { name: "Sneha K.", location: "Thane", amount: "₹1,500", cause: "Meals for All (Hunger Relief)", time: "7 mins ago" },
  { name: "Vikram P.", location: "Pune", amount: "₹5,000", cause: "Airoli Shelter Home Support", time: "12 mins ago" },
  { name: "Ananya S.", location: "Navi Mumbai", amount: "₹3,000", cause: "Education for Every Child", time: "18 mins ago" },
  { name: "Deepak G.", location: "Delhi", amount: "₹10,000", cause: "Old Age Home Healthcare Pack", time: "25 mins ago" }
];

export default function StickyDonate({ onOpenDonate, onOpenTaxCalc }) {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Helpline Button */}
      <a
        href={TRUST_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Helpline"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>

      {/* 80G Tax Calculator Quick Trigger */}
      <button
        onClick={onOpenTaxCalc}
        className="hidden sm:flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-slate-800 hover:text-crimson-600 border border-slate-200 text-xs font-bold px-3.5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        title="Calculate 80G Tax Exemption"
      >
        <Calculator className="w-3.5 h-3.5 text-amber-500" />
        <span>80G Tax Calc</span>
      </button>

      {/* Floating Donate Main Pill */}
      <button
        onClick={() => onOpenDonate()}
        className="btn-donate-primary flex items-center gap-2 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 border border-white/20 transition-all"
      >
        <Heart className="w-4 h-4 fill-white" />
        <span>Donate Now</span>
        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
          80G Exemption
        </span>
      </button>
    </div>
  );
}

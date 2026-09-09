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
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show first alert after 4 seconds
    const initialTimer = setTimeout(() => {
      setShowAlert(true);
    }, 4000);

    // Rotate alert every 18 seconds
    const interval = setInterval(() => {
      setShowAlert(false);
      setTimeout(() => {
        setCurrentAlertIndex((prev) => (prev + 1) % DONOR_ALERTS.length);
        setShowAlert(true);
      }, 1000);
    }, 18000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const activeDonor = DONOR_ALERTS[currentAlertIndex];

  return (
    <>
      {/* Live Recent Donor Toast (Bottom-Left) */}
      {showAlert && (
        <div className="fixed bottom-20 left-4 z-40 max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-200/80 animate-in slide-in-from-left duration-300 hidden sm:block">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                <Heart className="w-4 h-4 fill-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  {activeDonor.name} <span className="font-normal text-slate-500">from {activeDonor.location}</span>
                </p>
                <p className="text-[11px] text-slate-600">
                  donated <span className="font-bold text-crimson-600">{activeDonor.amount}</span> for {activeDonor.cause}
                </p>
                <span className="text-[10px] text-slate-400 font-medium">{activeDonor.time} • 80G Certified</span>
              </div>
            </div>
            <button 
              onClick={() => setShowAlert(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Right Actions Dock */}
      <div className="fixed right-4 bottom-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* WhatsApp Helpline Button */}
        <a
          href={TRUST_INFO.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="sr-only">WhatsApp Chat</span>
        </a>

        {/* 80G Tax Calculator Quick Trigger */}
        <button
          onClick={onOpenTaxCalc}
          className="hidden sm:flex items-center gap-2 bg-trust-900/90 backdrop-blur-md text-amber-300 hover:text-white border border-amber-400/40 text-xs font-bold px-3.5 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
          title="Calculate 80G Tax Exemption"
        >
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>80G Tax Calc</span>
        </button>

        {/* Floating Donate Main Pill */}
        <button
          onClick={() => onOpenDonate()}
          className="btn-donate-primary flex items-center gap-2 text-sm sm:text-base px-6 py-3 rounded-full shadow-xl hover:shadow-2xl border border-white/20"
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>Donate Now</span>
          <span className="text-[10px] bg-white/25 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
            80G Tax Saver
          </span>
        </button>

      </div>
    </>
  );
}

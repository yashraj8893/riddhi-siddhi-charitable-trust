import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, Sparkles, ArrowRight, Percent, CheckCircle2 } from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';

export default function TaxCalculatorModal({ isOpen, onClose, onProceedToDonate }) {
  const [donationAmount, setDonationAmount] = useState(5000);
  const [taxSlab, setTaxSlab] = useState(0.30); // Default 30% slab

  if (!isOpen) return null;

  // Section 80G calculation: 50% deduction of donation amount from taxable income
  const eligible80GDeduction = donationAmount * 0.5;
  const taxSavings = Math.round(eligible80GDeduction * taxSlab);
  const effectiveCost = donationAmount - taxSavings;

  const handleProceed = () => {
    onClose();
    if (onProceedToDonate) {
      onProceedToDonate(donationAmount);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-trust-900 text-white p-6 relative border-b border-trust-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Percent className="w-4 h-4" /> Section 80G Benefit Estimator
          </div>
          <h3 className="font-display font-extrabold text-2xl text-white">
            80G Tax Exemption Calculator
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            See how much you save on Indian Income Tax when supporting Riddhi Siddhi Charitable Trust (PAN: {TRUST_INFO.pan})
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Donation Amount Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Donation Amount (INR)
              </label>
              <span className="font-display font-extrabold text-xl text-crimson-600 font-mono">
                ₹{donationAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-crimson-500"
            />
            
            <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
              <span>₹500</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
              <span>₹1,00,000</span>
            </div>
          </div>

          {/* Tax Slab Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              Your Income Tax Slab Rate
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "10% Slab", rate: 0.10 },
                { label: "15% Slab", rate: 0.15 },
                { label: "20% Slab", rate: 0.20 },
                { label: "30% Slab", rate: 0.30 }
              ].map((slab) => (
                <button
                  key={slab.rate}
                  type="button"
                  onClick={() => setTaxSlab(slab.rate)}
                  className={`py-2.5 px-2 text-xs font-bold rounded-xl border-2 transition-all ${
                    taxSlab === slab.rate
                      ? 'border-trust-600 bg-trust-50 text-trust-800 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {slab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-gradient-to-br from-slate-50 to-trust-50/50 border border-slate-200/80 rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-600">Total Contribution:</span>
              <span className="font-bold text-slate-900 font-mono">₹{donationAmount.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-600">80G Eligible Deduction (50%):</span>
              <span className="font-bold text-trust-700 font-mono">₹{eligible80GDeduction.toLocaleString('en-IN')}</span>
            </div>

            <div className="h-px bg-slate-200 my-1"></div>

            <div className="flex items-center justify-between">
              <div>
                <span className="block font-bold text-sm text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Your Estimated Tax Savings:
                </span>
                <span className="text-[11px] text-slate-500">Under Section 80G of Income Tax Act</span>
              </div>
              <span className="font-display font-extrabold text-2xl text-emerald-600 font-mono">
                ₹{taxSavings.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Effective Out-of-Pocket Cost:</span>
              <span className="font-bold text-crimson-600 font-mono text-sm">
                ₹{effectiveCost.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-slate-400 leading-normal">
            * Note: Tax savings are calculated based on 50% deduction of donation amount under Section 80G. An official Form 10BE certificate with your PAN will be provided by RSCT for your tax filing.
          </p>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleProceed}
            className="w-full py-3.5 bg-gradient-to-r from-crimson-500 to-rose-600 hover:from-crimson-600 hover:to-rose-700 text-white font-extrabold text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Donate ₹{donationAmount.toLocaleString('en-IN')} & Claim 80G Benefit</span>
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </div>
  );
}

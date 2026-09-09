import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, Copy, CheckCircle2, QrCode, 
  Smartphone, FileCheck, ArrowRight, Heart 
} from 'lucide-react';
import { BANK_ACCOUNTS, TRUST_INFO } from '../data/trustData';
import { TrustLogoSvg, TrustSealSvg, Tax80GBadgeSvg, SafeDonationShieldSvg } from '../components/SvgAssets';

export default function BankDetailsView({ onOpenDonate, onOpenReceipt }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyText = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-10">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 lg:p-14 border border-emerald-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Official Verified Bank Accounts • 100% Tax Deductible
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Bank Details &amp; Direct UPI Transfer
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Make direct NEFT, RTGS, IMPS, or UPI transfers into our official audited non-profit accounts. All domestic donations are entitled to 50% Section 80G Tax Exemption.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenDonate()}
                className="btn-donate-primary text-xs sm:text-sm px-6 py-3 rounded-full"
              >
                Donate Online
              </button>
              <button
                onClick={onOpenReceipt}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-300 transition-all flex items-center gap-1.5"
              >
                <FileCheck className="w-4 h-4 text-emerald-600" /> Generate 80G Tax Receipt
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BANK CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BANK_ACCOUNTS.map((bank, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${bank.gradient} text-white p-6 relative`}>
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {bank.badge}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white">
                  {bank.bankName}
                </h3>
                <span className="text-xs text-white/80 block mt-0.5">{bank.type}</span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 text-xs sm:text-sm flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  
                  {/* Account Name */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[11px] text-slate-400 font-bold block uppercase">Account Holder Name</span>
                    <span className="font-bold text-slate-800 text-sm block mt-0.5">{bank.accountName}</span>
                  </div>

                  {/* Account Number */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold block uppercase">Account Number</span>
                      <span className="font-mono font-extrabold text-base text-trust-900">{bank.accountNumber}</span>
                    </div>
                    <button
                      onClick={() => copyText(`acc-${idx}`, bank.accountNumber)}
                      className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-trust-600 shadow-sm"
                      title="Copy Account Number"
                    >
                      {copiedKey === `acc-${idx}` ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* IFSC Code */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold block uppercase">IFSC Code</span>
                      <span className="font-mono font-extrabold text-sm text-slate-800">{bank.ifsc}</span>
                    </div>
                    <button
                      onClick={() => copyText(`ifsc-${idx}`, bank.ifsc)}
                      className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-trust-600 shadow-sm"
                      title="Copy IFSC Code"
                    >
                      {copiedKey === `ifsc-${idx}` ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Branch */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[11px] text-slate-400 font-bold block uppercase">Branch Location</span>
                    <span className="font-semibold text-slate-700">{bank.branch}</span>
                  </div>

                </div>

                <div className="pt-3 border-t border-slate-100 text-center text-xs font-bold text-emerald-700 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Thank You For Your Support</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCAN TO DONATE QR SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-trust-50 via-white to-crimson-50/40 border border-trust-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-xl">
          
          <div className="max-w-md mx-auto space-y-2">
            <span className="text-xs font-bold text-crimson-600 uppercase tracking-wider">Instant UPI Payment</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              Scan to Donate with Any UPI App
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Supports Google Pay, PhonePe, Paytm, BHIM, Amazon Pay & mobile banking apps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            {/* Primary Trust UPI QR - Official Trust Image */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-trust-800 bg-trust-50 px-3 py-1 rounded-full inline-block">
                    Official HDFC Trust QR
                  </span>
                  <img
                    src={TRUST_INFO.googlePayImage}
                    alt="Google Pay UPI Verified"
                    className="h-5 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="p-2 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
                  <img
                    src={TRUST_INFO.qrCodeImage}
                    alt="Official Riddhi Siddhi Trust HDFC QR Code"
                    className="w-48 h-48 mx-auto object-contain rounded-xl"
                    onError={(e) => {
                      e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=riddhisiddhict@hdfcbank&pn=Riddhi%20Siddhi%20Charitable%20Trust&cu=INR&tn=Donation%2080G";
                    }}
                  />
                </div>
              </div>
              <div className="text-xs text-center pt-1">
                <span className="text-slate-500 font-semibold block">HDFC UPI ID:</span>
                <span className="font-mono font-bold text-trust-900 text-sm">riddhisiddhict@hdfcbank</span>
              </div>
            </div>

            {/* Axis / Secondary UPI QR */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    Direct Axis UPI QR
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Instant</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=9820737415@axisbank&pn=Riddhi%20Siddhi%20Charitable%20Trust&cu=INR&tn=Donation%2080G"
                    alt="Axis QR Code"
                    className="w-48 h-48 mx-auto object-contain rounded-xl"
                  />
                </div>
              </div>
              <div className="text-xs text-center pt-1">
                <span className="text-slate-500 font-semibold block">Axis UPI ID:</span>
                <span className="font-mono font-bold text-trust-900 text-sm">9820737415@axisbank</span>
              </div>
            </div>

          </div>

          <div className="pt-2">
            <button
              onClick={onOpenReceipt}
              className="px-8 py-3.5 bg-gradient-to-r from-trust-600 to-trust-800 hover:from-trust-700 hover:to-trust-900 text-white font-bold text-sm rounded-full shadow-lg transition-all"
            >
              Generate 80G Tax Receipt After Direct Transfer
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

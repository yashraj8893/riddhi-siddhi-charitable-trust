import React from 'react';
import { ShieldCheck, FileText, Lock, RefreshCw, CheckCircle2 } from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';

export default function TermsView() {
  return (
    <div className="space-y-6 sm:space-y-8 py-6 sm:py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-2 bg-trust-50 text-trust-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-600" /> Regulatory Compliance
        </div>
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
          Terms &amp; Conditions, Privacy &amp; 80G Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last Updated: {new Date().getFullYear()} • Riddhi Siddhi Charitable Trust (Reg No. {TRUST_INFO.regNo})
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
        
        {/* Section 1 */}
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-trust-600" /> 1. Overview & Trust Registration
          </h2>
          <p>
            Riddhi Siddhi Charitable Trust (RSCT) is a registered charitable non-profit organization established in 2014 under the Maharashtra Public Trusts Act, holding Registration Number <strong>{TRUST_INFO.regNo}</strong> and Permanent Account Number (PAN) <strong>{TRUST_INFO.pan}</strong>. By accessing this website or making donations, you agree to the policies set forth herein.
          </p>
        </section>

        {/* Section 2: 80G Tax Exemption Policy */}
        <section className="space-y-2 bg-amber-50/60 p-5 rounded-2xl border border-amber-200">
          <h2 className="font-display font-bold text-base text-amber-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600" /> 2. Section 80G Tax Exemption & PAN Disclosure
          </h2>
          <p className="text-amber-950">
            As per statutory rules issued by the Indian Income Tax Department (CBDT), all donors desiring a 50% tax deduction under Section 80G of the Income Tax Act, 1961 must mandatorily provide their Full Name, Complete Postal Address, and valid PAN (Permanent Account Number).
          </p>
          <p className="text-amber-950">
            RSCT will file your annual donation details under Form 10BD with the Income Tax Department and issue the mandatory Form 10BE certificate required to claim exemption in your ITR.
          </p>
        </section>

        {/* Section 3: Privacy & Non-Disclosure */}
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" /> 3. Data Privacy & Confidentiality
          </h2>
          <p>
            We treat your personal information, phone number, email address, and financial donation records with strict confidentiality. RSCT never sells, rents, trades, or transfers your private details to any third-party marketing companies. Your data is used exclusively for issuing official tax receipts, regulatory compliance, and periodic trust impact updates.
          </p>
        </section>

        {/* Section 4: Refund & Cancellation Policy */}
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-crimson-600" /> 4. Donation Refund Policy
          </h2>
          <p>
            Donations made to Riddhi Siddhi Charitable Trust are voluntary charitable contributions used for social welfare, medical surgeries, and shelter upkeep. As a non-profit organization, donations are normally non-refundable once disbursed. However, in cases of inadvertent double-deduction or technical banking error, donors may submit a refund request to <a href={`mailto:${TRUST_INFO.email}`} className="text-trust-600 font-bold underline">{TRUST_INFO.email}</a> within 7 days along with transaction proof.
          </p>
        </section>

        {/* Section 5: Governing Law & Jurisdiction */}
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" /> 5. Governing Law & Jurisdiction
          </h2>
          <p>
            Any disputes or legal queries concerning the operations of Riddhi Siddhi Charitable Trust shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Thane/Mumbai, Maharashtra.
          </p>
        </section>

      </div>
    </div>
  );
}

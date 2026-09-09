import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, CheckCircle2, FileText, 
  Send, Sparkles, ArrowRight, Eye, PhoneCall, Mail 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CSR_INITIATIVES, CSR_THEMATIC_AREAS, TRUST_INFO, CORPORATE_PARTNERS } from '../data/trustData';
import { TrustLogoSvg, TrustSealSvg, VerifiedNgoSealSvg, Tax80GBadgeSvg } from '../components/SvgAssets';

export default function CSRView({ onOpenDonate }) {
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('₹5,00,000 - ₹10,00,000');
  const [interestArea, setInterestArea] = useState('School Infrastructure & Sanitation');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
    setSubmitted(true);
  };

  return (
    <div className="space-y-8 sm:space-y-12 py-6 sm:py-8">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 text-amber-600" /> Schedule VII Corporate Social Responsibility (CSR)
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Partner with Us for High-Impact CSR
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Riddhi Siddhi Charitable Trust partners with leading corporate enterprises under Schedule VII of the Companies Act 2013 to execute measurable school renovations, drinking water plants, hunger alleviation, and healthcare projects.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-xs font-bold text-crimson-600 uppercase tracking-wider">Completed CSR Work</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Before &amp; After Renovation Highlights
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            See the transformative tangible difference made by our corporate partners across Maharashtra government schools.
          </p>
        </div>

        <div className="space-y-6">
          {CSR_INITIATIVES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Single Full Transformation Image */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 relative group cursor-pointer">
                  <img
                    src={item.image}
                    alt={`${item.title} - Before & After Transformation`}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    Before &amp; After Photo
                  </div>
                </div>
              </div>

              {/* Transformation Narrative & Impact */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block bg-trust-50 text-trust-800 border border-trust-200 text-xs font-bold px-3 py-1 rounded-full">
                  {item.category} • {item.location}
                </div>
                
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                  {item.title}
                </h3>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 bg-rose-50/70 border border-rose-200/80 rounded-2xl space-y-1">
                    <span className="text-[11px] font-extrabold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-600"></span> Before Intervention
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.beforeText}
                    </p>
                  </div>

                  <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl space-y-1">
                    <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span> After CSR Transformation
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {item.afterText}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between text-xs pt-2">
                  <span className="text-slate-600 font-semibold">Direct Beneficiaries:</span>
                  <span className="font-bold text-trust-900 font-mono text-sm">{item.partnerBeneficiaries}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 CSR THEMATIC FOCUS AREAS (SCHEDULE VII) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-xs font-bold text-trust-600 uppercase tracking-wider">Schedule VII Aligned</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Key CSR Thematic Areas
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            We assist corporate partners in executing measurable, high-impact CSR programs across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CSR_THEMATIC_AREAS.map((theme, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={theme.image} 
                  alt={theme.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  {theme.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSR INQUIRY & PROPOSAL BUILDER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-trust-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1.5">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Corporate Collaboration</span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Request a Custom CSR Proposal
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our CSR compliance team will prepare a structured DPR (Detailed Project Report) with timeline, budget breakdown, and 80G tax utilization certificates.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Company / Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tata Consultancy Services"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Contact Person & Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma (CSR Head)"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Official Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. csr@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Mobile / Direct Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9820737415"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Target CSR Focus Area</label>
                  <select
                    value={interestArea}
                    onChange={(e) => setInterestArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                  >
                    <option>School Infrastructure & Sanitation</option>
                    <option>Child Education & Digital Smart Classrooms</option>
                    <option>Hunger Alleviation & Large Meal Drives</option>
                    <option>Rural Medical Camps & Equipment Support</option>
                    <option>Old Age Home Geriatric Care & Healthcare</option>
                    <option>Disaster Relief Emergency Fund</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Estimated Annual CSR Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium"
                  >
                    <option>₹2,00,000 - ₹5,00,000</option>
                    <option>₹5,00,000 - ₹10,00,000</option>
                    <option>₹10,00,000 - ₹25,00,000</option>
                    <option>₹25,00,000 - ₹50,00,000</option>
                    <option>Above ₹50,00,000</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit CSR Proposal Request</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display font-bold text-2xl text-white">
                Thank You, {contactPerson}!
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Your CSR inquiry for <span className="text-amber-300 font-bold">{companyName}</span> has been routed to our Managing Trustee. We will send the customized proposal to {email} within 24 hours.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

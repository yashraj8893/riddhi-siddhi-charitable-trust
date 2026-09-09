import React, { useState } from 'react';
import { 
  Heart, ArrowRight, ShieldCheck, Award, Sparkles, 
  Users, Utensils, GraduationCap, HeartHandshake, Activity,
  Check, ChevronRight, Home as HomeIcon, Percent, Lock,
  Building2, FileCheck, BookOpen, AlertCircle
} from 'lucide-react';
import { 
  TRUST_INFO, IMPACT_STATS, CORE_PROJECTS, MEDICAL_APPEALS, 
  CORPORATE_PARTNERS 
} from '../data/trustData';

const PRESET_AMOUNTS = [
  { amt: 650, desc: "1 School Kit & Rainwear" },
  { amt: 800, desc: "1 Month Child Nutrition" },
  { amt: 1500, desc: "1 Family Monthly Ration" },
  { amt: 2500, desc: "Emergency Medical Aid" },
  { amt: 5000, desc: "1 Month Senior Care" }
];

export default function HomeView({ 
  setActiveView, 
  onOpenDonate, 
  onOpenTaxCalc, 
  onOpenReceipt, 
  onOpenVolunteer 
}) {
  // Hero Quick Donation Card State
  const [heroAmount, setHeroAmount] = useState(1500);
  const [heroCustomAmount, setHeroCustomAmount] = useState('');
  const [heroIsMonthly, setHeroIsMonthly] = useState(false);
  const [heroCause, setHeroCause] = useState('medical');

  const navTo = (viewId, projectId = null) => {
    setActiveView(viewId, projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeDonationAmount = heroCustomAmount ? parseFloat(heroCustomAmount) || 0 : heroAmount;
  const estimatedTaxSaving = Math.round((activeDonationAmount * 0.5) * 0.30);

  const handleHeroDonate = (e) => {
    e.preventDefault();
    onOpenDonate(heroCause);
  };

  return (
    <div className="space-y-8 sm:space-y-12 pb-12">
      
      {/* 🌟 1. HERO SECTION (COMPACT & HIGH-IMPACT) */}
      <section className="relative bg-gradient-to-b from-trust-50/30 via-white to-slate-50/40 border-b border-slate-200/60 pt-6 pb-8 lg:pt-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Mission & Trust (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-trust-50 border border-trust-200/80 text-trust-800 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-trust-600 flex-shrink-0" />
                <span>Section 80G Certified • 50% Tax Exemption • Estd. 2014</span>
              </div>

              {/* Dignified Editorial Headline */}
              <h1 className="font-display font-black text-2.5xl sm:text-3.5xl lg:text-4xl text-trust-950 tracking-tight leading-[1.2]">
                Every child nourished, <br />
                every life healed, <br />
                <span className="text-crimson-600">every elder honored.</span>
              </h1>

              {/* Mission Statement */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Since 2014, <strong className="text-trust-900 font-semibold">Riddhi Siddhi Charitable Trust</strong> has been on the frontlines across Maharashtra—providing safe 24/7 shelter for orphaned children in Airoli, daily meals for daily-wage families, and funding life-saving pediatric surgeries.
              </p>

              {/* Primary Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenDonate()}
                  className="btn-donate-primary text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <Heart className="w-4 h-4 fill-white animate-pulse" />
                  <span>Donate to a Cause</span>
                </button>
                <button
                  onClick={() => navTo('projects')}
                  className="px-5 py-2.5 bg-white hover:bg-trust-50 text-trust-900 font-bold text-xs sm:text-sm rounded-full border border-slate-200 hover:border-trust-300 shadow-xs transition-all flex items-center gap-1.5"
                >
                  <span>Explore 9 Programs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>

              {/* Key Trust Counters */}
              <div className="pt-4 border-t border-slate-200/70 grid grid-cols-3 gap-3 max-w-md">
                <div>
                  <span className="block font-display font-black text-lg sm:text-xl text-trust-950 font-mono">150,000+</span>
                  <span className="text-[11px] text-slate-500 font-medium">Meals Provided</span>
                </div>
                <div>
                  <span className="block font-display font-black text-lg sm:text-xl text-trust-950 font-mono">65+</span>
                  <span className="text-[11px] text-slate-500 font-medium">Children in Shelter</span>
                </div>
                <div>
                  <span className="block font-display font-black text-lg sm:text-xl text-crimson-600 font-mono">50%</span>
                  <span className="text-[11px] text-slate-500 font-medium">80G Tax Saved</span>
                </div>
              </div>

            </div>

            {/* Right Column: Clean, Modern Giving Box (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg border border-slate-200/80 text-slate-800">
                
                {/* Giving Box Header */}
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-trust-950">
                    <Heart className="w-4 h-4 text-crimson-600 fill-crimson-600" />
                    <span>Quick Contribution</span>
                  </div>
                  <span className="text-[10px] font-bold bg-trust-50 text-trust-700 border border-trust-200 px-2 py-0.5 rounded-full">
                    80G Tax Deductible
                  </span>
                </div>

                <form onSubmit={handleHeroDonate} className="space-y-3">
                  
                  {/* One-Time vs Monthly Toggle */}
                  <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setHeroIsMonthly(false)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        !heroIsMonthly ? 'bg-white text-trust-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Give Once
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroIsMonthly(true)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${
                        heroIsMonthly ? 'bg-crimson-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" /> Monthly Sponsor
                    </button>
                  </div>

                  {/* Preset Amount Grid */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Select Amount
                      </span>
                      <span className="text-[10px] text-crimson-600 font-semibold truncate max-w-[200px]">
                        {PRESET_AMOUNTS.find(p => p.amt === heroAmount && !heroCustomAmount)?.desc}
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {PRESET_AMOUNTS.map((p) => (
                        <button
                          key={p.amt}
                          type="button"
                          onClick={() => { setHeroAmount(p.amt); setHeroCustomAmount(''); }}
                          className={`py-1.5 px-1 rounded-lg text-xs font-bold border transition-all text-center ${
                            heroAmount === p.amt && !heroCustomAmount
                              ? 'border-crimson-600 bg-crimson-50 text-crimson-700 shadow-xs ring-1 ring-crimson-500 font-black'
                              : 'border-slate-200 text-slate-700 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                          }`}
                        >
                          ₹{p.amt.toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-xs">₹</span>
                    <input
                      type="number"
                      min="100"
                      placeholder="Or enter custom amount"
                      value={heroCustomAmount}
                      onChange={(e) => { setHeroCustomAmount(e.target.value); setHeroAmount(0); }}
                      className="w-full pl-7 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-crimson-500"
                    />
                  </div>

                  {/* Cause Selection */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Direct Support Towards
                    </label>
                    <select
                      value={heroCause}
                      onChange={(e) => setHeroCause(e.target.value)}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-trust-600"
                    >
                      <option value="medical">🩺 Critical Pediatric Surgeries &amp; Medical Aid</option>
                      <option value="shelter">🏠 Airoli Child Shelter Home (65+ Kids)</option>
                      <option value="education">📚 Child Education &amp; School Kits</option>
                      <option value="old-age">🤝 Abandoned Seniors Healthcare &amp; Care</option>
                      <option value="meals">🍲 Meals for All (Zero Hunger Initiative)</option>
                      <option value="women">✨ Women Skill Development &amp; Tailoring</option>
                      <option value="animal">🐾 Stray Animal Feeding &amp; Medical Care</option>
                      <option value="disaster">🛡️ Disaster Emergency Relief</option>
                    </select>
                  </div>

                  {/* 80G Tax Benefit Summary */}
                  <div className="bg-trust-50 border border-trust-200 rounded-xl p-2 text-xs text-trust-900 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-trust-800">
                      80G Tax Saved (50% deduction):
                    </span>
                    <span className="font-mono font-bold text-trust-950">₹{estimatedTaxSaving.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-donate-primary py-2.5 text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Proceed to Donate ₹{activeDonationAmount.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[10px] text-slate-400 font-medium">
                    100% Secure • Instant 80G Tax Receipt Generated
                  </p>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 2. IMPACT AT A GLANCE (4 CLEAN STAT CARDS IN BRAND PALETTE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-9 h-9 mx-auto rounded-xl bg-trust-50 text-trust-600 flex items-center justify-center mb-2">
              <Utensils className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-xl sm:text-2xl text-trust-950 block font-mono">
              150,000+
            </span>
            <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block">
              Nutritious Meals Served
            </span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-9 h-9 mx-auto rounded-xl bg-crimson-50 text-crimson-600 flex items-center justify-center mb-2">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-xl sm:text-2xl text-trust-950 block font-mono">
              5,000+
            </span>
            <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block">
              School Kits Distributed
            </span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-9 h-9 mx-auto rounded-xl bg-trust-50 text-trust-700 flex items-center justify-center mb-2">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-xl sm:text-2xl text-trust-950 block font-mono">
              1,200+
            </span>
            <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block">
              Seniors Supported
            </span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-9 h-9 mx-auto rounded-xl bg-crimson-50 text-crimson-600 flex items-center justify-center mb-2">
              <Activity className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-xl sm:text-2xl text-trust-950 block font-mono">
              500+
            </span>
            <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block">
              Surgeries &amp; Medical Aid
            </span>
          </div>
        </div>
      </section>

      {/* 🌟 3. URGENT MEDICAL APPEALS (3 FEATURED CASES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-crimson-600 text-xs font-bold uppercase tracking-wider mb-0.5">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse"></span>
              Emergency Medical Appeals
            </div>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-trust-950 tracking-tight">
              Critical Pediatric Surgeries
            </h2>
          </div>

          <button
            onClick={() => navTo('causes')}
            className="flex items-center gap-1 text-xs font-bold text-trust-700 hover:text-trust-900 transition-colors self-start sm:self-auto"
          >
            <span>View All Cases</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {MEDICAL_APPEALS.slice(0, 3).map((appeal) => (
            <div
              key={appeal.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={appeal.image}
                  alt={appeal.patientName}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5 bg-crimson-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  {appeal.disease}
                </div>
                <div className="absolute bottom-2.5 left-2.5 bg-trust-950/80 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-md font-medium">
                  Age: {appeal.age} • {appeal.hospital}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-trust-950 mb-0.5">
                    {appeal.patientName}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {appeal.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-600">Raised: ₹{appeal.raisedAmount.toLocaleString('en-IN')}</span>
                      <span className="text-crimson-600">Goal: ₹{appeal.targetAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-crimson-500 via-rose-500 to-crimson-600 rounded-full"
                        style={{ width: `${appeal.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onOpenDonate('medical')}
                      className="flex-1 py-2 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" /> Donate
                    </button>
                    <button
                      onClick={() => navTo('causes')}
                      className="px-3.5 py-2 bg-trust-50 hover:bg-trust-100 text-trust-900 font-bold text-xs rounded-xl transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 4. CORE SOCIAL INITIATIVES (4 PILLARS PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
          <div>
            <span className="text-xs font-bold text-trust-600 uppercase tracking-wider block mb-0.5">
              9 Humanitarian Pillars
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-trust-950 tracking-tight">
              Our Core Social Programs
            </h2>
          </div>

          <button
            onClick={() => navTo('projects')}
            className="flex items-center gap-1 text-xs font-bold text-crimson-600 hover:text-crimson-700 transition-colors self-start sm:self-auto"
          >
            <span>View All 9 Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_PROJECTS.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => navTo('projects', project.id)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-trust-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  {project.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-trust-950 group-hover:text-crimson-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-0.5 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-crimson-600 flex items-center gap-1 text-xs">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">{project.progress}% Funded</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 5. GROUND IMPACT: AIROLI SHELTER & FOUNDER SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-trust-50/50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-trust-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5">
              <div className="aspect-[16/11] rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative group bg-trust-950">
                <img 
                  src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Supporting-Orphans-A-Commitment-to-Social-Work-in-India.webp" 
                  alt="Children at Riddhi Siddhi Shelter Home, Airoli" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 bg-crimson-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                  Airoli, Navi Mumbai
                </div>
                <div className="absolute bottom-2.5 inset-x-2.5 bg-trust-950/80 backdrop-blur-md text-white p-2.5 rounded-xl text-xs font-semibold">
                  65+ Resident Children • 4 Hot Meals Daily • Education
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-7 space-y-3 text-left">
              <div className="inline-flex items-center gap-1.5 bg-trust-100/80 text-trust-900 text-xs px-3 py-0.5 rounded-full font-bold">
                <HomeIcon className="w-3.5 h-3.5 text-trust-700" /> Full-Time Residential Care
              </div>

              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-trust-950 leading-tight">
                Shelter Home for Orphaned &amp; Destitute Children
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                Our residential ashram in Airoli, Mumbai provides safe shelter, 4 nutritious meals daily, stitched school uniforms, clean dormitories, and remedial education so abandoned children can grow up with joy, dignity, and real prospects.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => onOpenDonate('shelter')}
                  className="btn-donate-primary text-xs px-5 py-2 rounded-full shadow-xs"
                >
                  Sponsor a Child (₹800/mo)
                </button>
                <button
                  onClick={() => navTo('shelter')}
                  className="px-4 py-2 bg-white hover:bg-trust-50 text-trust-900 font-bold text-xs rounded-full border border-slate-300 transition-all shadow-xs"
                >
                  Shelter Details &amp; Wishlist →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 6. CORPORATE PARTNERS (CLEAN ROW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
          Trusted by Organizations &amp; Corporate Giving Partners
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-0.5">
          {CORPORATE_PARTNERS.slice(0, 6).map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-xl border border-slate-200 shadow-xs text-trust-950 text-xs font-bold"
            >
              {partner.logoUrl ? (
                <img 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  className="h-4 sm:h-5 w-auto max-w-[80px] object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <div className={`w-4 h-4 rounded font-black text-[9px] flex items-center justify-center ${partner.color}`}>
                  {partner.logoText.slice(0, 2)}
                </div>
              )}
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 7. FINAL HIGH-IMPACT CTA (AUTHENTIC TRUST GRADIENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-trust-900 via-trust-800 to-crimson-800 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-lg">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
            Make a Direct Difference Today
          </h2>
          <p className="text-trust-100 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Every contribution brings warm food to an elder, a school kit to a rural child, or life-saving surgery to a patient. Claim your 50% Section 80G tax benefit with an instant receipt.
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => onOpenDonate()}
              className="px-6 py-2.5 bg-white hover:bg-slate-50 text-crimson-700 font-extrabold text-xs sm:text-sm rounded-full shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Donate Now (Instant 80G Receipt)
            </button>
            <button
              onClick={onOpenVolunteer}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-full border border-white/20 transition-all"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

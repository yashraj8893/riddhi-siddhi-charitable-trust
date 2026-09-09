import React, { useState } from 'react';
import { 
  Heart, ArrowRight, ShieldCheck, Award, Sparkles, 
  Users, Utensils, GraduationCap, HeartHandshake, Activity,
  CheckCircle2, ChevronRight, Play, Eye, Backpack, Home as HomeIcon,
  PhoneCall, FileText, ChevronDown, ChevronUp, Clock, Check,
  QrCode, Smartphone, Building2, HelpCircle, Lock, Percent,
  Download, MapPin, TrendingUp, Calendar, AlertCircle, Share2,
  FileCheck, Shield, BookOpen
} from 'lucide-react';
import { 
  TRUST_INFO, IMPACT_STATS, CORE_PROJECTS, MEDICAL_APPEALS, 
  CSR_INITIATIVES, AWARDS_LIST, CORPORATE_PARTNERS, GALLERY_ITEMS, FAQS, SHELTER_ITEMS_NEEDED 
} from '../data/trustData';
import { 
  TrustLogoSvg, TrustSealSvg, Tax80GBadgeSvg, 
  SafeDonationShieldSvg, VerifiedNgoSealSvg, MandalaPatternSvg, Form10BEBadgeSvg 
} from '../components/SvgAssets';

const PRESET_AMOUNTS = [650, 800, 1500, 2500, 5000];

const LIVE_DONORS = [
  { name: "Sneha K.", city: "Mumbai", amount: "₹2,500", cause: "Medical Emergency Surgeries", time: "2m ago" },
  { name: "Kiran P.", city: "Pune", amount: "₹800", cause: "Child Nutrition & Milk Support", time: "5m ago" },
  { name: "Suresh N.", city: "Thane", amount: "₹1,300", cause: "2 Rural School Kits & Rainwear", time: "11m ago" },
  { name: "Meera D.", city: "Navi Mumbai", amount: "₹5,000", cause: "Dignity for Senior Elders", time: "18m ago" },
  { name: "Rajesh K.", city: "Bengaluru", amount: "₹1,500", cause: "Meals for All (Zero Hunger)", time: "24m ago" },
  { name: "Pooja V.", city: "New Delhi", amount: "₹3,500", cause: "Tribal Student Bicycle & Fees", time: "31m ago" },
  { name: "Anand M.", city: "Ahmedabad", amount: "₹2,400", cause: "Shelter Cooking Oil 15L Tin", time: "39m ago" }
];

const CSR_PRESETS = [
  { budget: "₹2,00,000", students: "300+ Students", kits: "300 Kits", meals: "4,000 Meals", classrooms: "1 School Gate" },
  { budget: "₹5,00,000", students: "750+ Students", kits: "750 Kits", meals: "10,000 Meals", classrooms: "2 Classrooms Renovation" },
  { budget: "₹10,00,000", students: "1,500+ Students", kits: "1,500 Kits", meals: "22,000 Meals", classrooms: "Full WASH & Water Plant" },
  { budget: "₹25,00,000", students: "4,000+ Students", kits: "4,000 Kits", meals: "60,000 Meals", classrooms: "Complete Tribal School Campus" }
];

export default function HomeView({ 
  setActiveView, 
  onOpenDonate, 
  onOpenTaxCalc, 
  onOpenReceipt, 
  onOpenVolunteer,
  onOpenLightbox 
}) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [csrTab, setCsrTab] = useState(0);
  const [csrBudgetIndex, setCsrBudgetIndex] = useState(1);

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
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* 🌟 HERO SECTION (GIVEINDIA & AKSHAYA PATRA WARM DENSE STYLE) */}
      <section className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF6] to-[#FFF9EE] border-b border-amber-200/70 pt-6 pb-10 lg:pt-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Mission, Dignity & Authentic Field Showcase (7 Cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Trust Verification Pill */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/90 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Reg. No: {TRUST_INFO.regNo} • 50% Tax Exemption under Section 80G • Form 10BE Compliant</span>
              </div>

              {/* Dignified Editorial Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-trust-950 tracking-tight leading-[1.16]">
                Together, We Bring <br className="hidden sm:inline" />
                <span className="text-crimson-600">Nourishment, Education &amp; Health</span> <br className="hidden sm:inline" />
                to Those Forgotten.
              </h1>

              {/* Empathetic Mission Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                Since 2014, <strong className="text-slate-900 font-bold">Riddhi Siddhi Charitable Trust</strong> has been on the frontlines across Maharashtra—operating 24/7 child shelter homes in Airoli, feeding daily-wage families, equipping tribal school children, and funding life-saving pediatric surgeries.
              </p>

              {/* High-Resolution Field Photo Banner with Glassmorphism Overlays */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-amber-200/80 aspect-[16/9] group bg-slate-900">
                <img 
                  src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Supporting-Orphans-A-Commitment-to-Social-Work-in-India.webp" 
                  alt="Children at Riddhi Siddhi Shelter Home, Airoli" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Airoli Child Care Ashram • Verified Ground Operation</span>
                </div>

                {/* Bottom 3 Real Metric Badges */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-wrap items-center justify-between gap-2 text-white">
                  <span className="text-xs font-bold text-slate-100">
                    "Every child deserves nutritious meals, clean shelter, and quality education."
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-bold">
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20">65+ Shelter Kids</span>
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/20">150k+ Meals</span>
                  </div>
                </div>
              </div>

              {/* Action Link Pills */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenDonate()}
                  className="btn-donate-primary text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Support a Life Today</span>
                </button>
                <button
                  onClick={() => navTo('projects')}
                  className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-300 transition-all shadow-sm flex items-center gap-1"
                >
                  <span>Explore 9 Social Initiatives</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>

            </div>

            {/* Right Column: GiveIndia High-Converting Giving Box + Trust Pillars (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl p-5 sm:p-7 giving-box-shadow border border-slate-200/90 text-slate-800 relative">
                
                {/* 80G Guarantee Ribbon Header */}
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-trust-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Section 80G Tax Exemption (50%)</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Form 10BE
                  </span>
                </div>

                <form onSubmit={handleHeroDonate} className="space-y-3.5">
                  
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
                      <Heart className="w-3.5 h-3.5 fill-current text-rose-300" /> Monthly Sponsor
                    </button>
                  </div>

                  {/* Preset Impact Giving Tiles */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                        Select Giving Amount
                      </label>
                      <span className="text-[10px] text-crimson-600 font-bold truncate max-w-[200px]">
                        {heroAmount === 650 && "🎒 1 School Kit & Raincoat"}
                        {heroAmount === 800 && "🥛 1 Month Child Milk & Nutrition"}
                        {heroAmount === 1500 && "🌾 1 Family Monthly Ration Kit"}
                        {heroAmount === 2500 && "🩺 Critical Pediatric Diagnostic Aid"}
                        {heroAmount === 5000 && "👵 1 Month Full Senior Care"}
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {PRESET_AMOUNTS.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setHeroAmount(amt); setHeroCustomAmount(''); }}
                          className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all text-center ${
                            heroAmount === amt && !heroCustomAmount
                              ? 'border-crimson-600 bg-crimson-50 text-crimson-700 font-black shadow-sm ring-1 ring-crimson-500'
                              : 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-white hover:border-slate-300'
                          }`}
                        >
                          ₹{amt.toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount Input */}
                  <div>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-sm">₹</span>
                      <input
                        type="number"
                        min="100"
                        placeholder="Or enter custom amount (e.g. ₹2,000)"
                        value={heroCustomAmount}
                        onChange={(e) => { setHeroCustomAmount(e.target.value); setHeroAmount(0); }}
                        className="w-full pl-8 pr-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-crimson-500"
                      />
                    </div>
                  </div>

                  {/* Allocate to Cause */}
                  <div>
                    <label className="block text-[11px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                      Direct Support Towards
                    </label>
                    <select
                      value={heroCause}
                      onChange={(e) => setHeroCause(e.target.value)}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-trust-600"
                    >
                      <option value="medical">🩺 Critical Pediatric Surgeries &amp; Medical Aid</option>
                      <option value="shelter">🏠 Airoli Child Shelter Home Nutrition &amp; Care</option>
                      <option value="education">📚 Child Education, School Bags &amp; Kits</option>
                      <option value="old-age">🤝 Abandoned Elders &amp; Senior Citizen Dignity</option>
                      <option value="meals">🍲 Meals for All (Hunger Alleviation Rations)</option>
                      <option value="women">✨ Women Vocational Tailoring &amp; Empowerment</option>
                      <option value="animal">🐾 Stray Animal Feeding &amp; Medical Aid</option>
                      <option value="disaster">🛡️ Disaster Emergency Relief &amp; Floods</option>
                    </select>
                  </div>

                  {/* 80G Tax Benefit Live Calculation */}
                  <div className="bg-emerald-50 border border-emerald-200/90 rounded-xl p-2.5 text-xs text-emerald-950 flex items-start gap-2">
                    <Percent className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-900">Estimated 80G Tax Saved: </span>
                      <span className="font-mono font-black text-emerald-800">₹{estimatedTaxSaving.toLocaleString('en-IN')}</span>
                      <p className="text-[10px] text-emerald-700 mt-0.5 leading-tight">
                        50% tax deduction under Section 80G of Income Tax Act 1961.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-donate-primary py-3 text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Proceed to Donate ₹{activeDonationAmount.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-3 pt-0.5 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-600" /> 100% Encrypted</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Check className="w-3 h-3 text-trust-600" /> UPI / Cards / NetBanking</span>
                  </div>

                </form>

              </div>

              {/* 3 Balanced Key Trust Pillars Under Giving Box */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <span className="block font-black text-base text-crimson-600 font-mono">150,000+</span>
                  <span className="text-[10px] text-slate-600 font-bold leading-tight block">Hot Meals</span>
                </div>
                <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <span className="block font-black text-base text-emerald-600 font-mono">100% Direct</span>
                  <span className="text-[10px] text-slate-600 font-bold leading-tight block">Field Aid</span>
                </div>
                <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <span className="block font-black text-base text-trust-800 font-mono">10+ Years</span>
                  <span className="text-[10px] text-slate-600 font-bold leading-tight block">Estd. 2014</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 🌟 LIVE DONOR ACTIVITY STREAM / WALL OF HOPE */}
      <section className="bg-[#FFF8E7] border-b border-amber-200/80 py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4">
          <div className="flex items-center gap-1.5 flex-shrink-0 text-[11px] font-black text-amber-950 uppercase tracking-wider bg-amber-200/70 px-3 py-1 rounded-full border border-amber-300/80">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Live Giving Stream</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-flex gap-8 animate-marquee text-xs text-slate-700 font-medium">
              {LIVE_DONORS.concat(LIVE_DONORS).map((d, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <strong className="text-slate-900 font-bold">{d.name}</strong> ({d.city}) contributed <span className="font-mono text-crimson-700 font-bold">{d.amount}</span> for <span className="text-trust-800 font-semibold">{d.cause}</span> • <span className="text-slate-400 text-[10px]">{d.time}</span>
                  <span className="text-slate-300 mx-2">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 GOVERNMENT ACCREDITATIONS & REGULATORY STATUTORY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">
                Official Statutory Registrations &amp; Tax Accreditations
              </span>
            </div>
            <button
              onClick={onOpenReceipt}
              className="text-xs font-bold text-crimson-600 hover:text-crimson-700 flex items-center gap-1 self-start sm:self-auto"
            >
              <FileCheck className="w-4 h-4" /> Download Instant 80G Receipt →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100 pt-1">
            <div className="p-2 space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">NITI Aayog NGO Darpan</span>
              <span className="font-mono font-extrabold text-sm sm:text-base text-trust-900 block">MH/2018/0198421</span>
              <span className="text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5" /> Govt of India Verified
              </span>
            </div>

            <div className="p-2 space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Income Tax PAN &amp; 12A</span>
              <span className="font-mono font-extrabold text-sm sm:text-base text-crimson-600 block">{TRUST_INFO.pan}</span>
              <span className="text-xs text-slate-500">Public Charitable Trust</span>
            </div>

            <div className="p-2 space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Section 80G Certified</span>
              <span className="font-extrabold text-sm sm:text-base text-emerald-600 block">50% Tax Exemption</span>
              <span className="text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5" /> Form 10BE Compliant
              </span>
            </div>

            <div className="p-2 space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Global Foreign Donations</span>
              <span className="font-extrabold text-sm sm:text-base text-trust-700 block">FCRA (SBI New Delhi)</span>
              <span className="text-xs text-slate-500">Ministry of Home Affairs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 IMPACT STATS COUNTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
          <span className="text-xs font-bold text-trust-600 uppercase tracking-wider">A Decade of Measurable Impact</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/90 text-center hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-slate-100 text-trust-700 flex items-center justify-center mb-2.5">
                {idx === 0 && <Utensils className="w-5 h-5 text-amber-600" />}
                {idx === 1 && <GraduationCap className="w-5 h-5 text-trust-700" />}
                {idx === 2 && <HeartHandshake className="w-5 h-5 text-crimson-600" />}
                {idx === 3 && <Users className="w-5 h-5 text-emerald-600" />}
                {idx === 4 && <Activity className="w-5 h-5 text-rose-600" />}
              </div>
              <span className="font-display font-black text-xl sm:text-2xl text-slate-900 block font-mono">
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 URGENT MEDICAL EMERGENCY APPEALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-crimson-600 text-xs font-bold uppercase tracking-wider mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-500 animate-ping"></span> Urgent Medical Appeals
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Emergency Pediatric &amp; Surgical Appeals
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              Children battling critical illnesses whose families urgently need community support.
            </p>
          </div>

          <button
            onClick={() => navTo('causes')}
            className="self-start md:self-auto flex items-center gap-1.5 text-xs sm:text-sm font-bold text-trust-700 hover:text-trust-900 transition-colors"
          >
            <span>View All Cases</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEDICAL_APPEALS.slice(0, 3).map((appeal) => (
            <div
              key={appeal.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={appeal.image}
                  alt={appeal.patientName}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-crimson-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {appeal.disease}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg font-semibold">
                  Age: {appeal.age} • {appeal.hospital}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-1">
                    {appeal.patientName}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {appeal.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-600">Raised: ₹{appeal.raisedAmount.toLocaleString('en-IN')}</span>
                      <span className="text-crimson-600">Target: ₹{appeal.targetAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-crimson-500 rounded-full"
                        style={{ width: `${appeal.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onOpenDonate('medical')}
                      className="flex-1 py-2.5 bg-crimson-500 hover:bg-crimson-600 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" /> Donate Now
                    </button>
                    <button
                      onClick={() => navTo('causes')}
                      className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
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

      {/* 🌟 4 CORE PILLARS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-trust-50 text-trust-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> 9 Humanitarian Pillars
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1.5">
              Our Core Social Programs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              From child education and nutrition to elder care and animal welfare across Maharashtra.
            </p>
          </div>

          <button
            onClick={() => navTo('projects')}
            className="self-start md:self-auto flex items-center gap-1.5 text-xs sm:text-sm font-bold text-crimson-600 hover:text-crimson-700 transition-colors"
          >
            <span>View All 9 Projects Grid</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_PROJECTS.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => navTo('projects', project.id)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-trust-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-crimson-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-crimson-600 text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Support Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">{project.progress}% Raised</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 AIROLI SHELTER HOME SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-amber-200/90 relative group">
                <img 
                  src="https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Our-Orphanage-A-Future-Full-of-Hope.webp" 
                  alt="Airoli Child Shelter Home"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-trust-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase shadow">
                  Airoli, Mumbai
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 text-xs px-3.5 py-1 rounded-full font-bold">
                <HomeIcon className="w-3.5 h-3.5 text-amber-600" /> Full-Time Residential Care • 65+ Resident Children
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                Shelter Home for Orphaned &amp; Destitute Children
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                Our residential ashram in Airoli, Mumbai provides safe shelter, 4 nutritious meals daily, stitched school uniforms, clean dormitories, and remedial education so abandoned children can grow up with joy, dignity, and real prospects.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenDonate('shelter')}
                  className="btn-donate-primary text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md"
                >
                  Sponsor a Child (₹800/mo)
                </button>
                <button
                  onClick={() => navTo('shelter')}
                  className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-300 transition-all shadow-sm"
                >
                  Shelter Details &amp; Wishlist →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 FOUNDER STORY & MISSION TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-center">
              <div className="aspect-[3/4] max-w-[220px] mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                <img 
                  src={TRUST_INFO.founderImage} 
                  alt="Founder Mr. Gopalsingh Solanki" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-sm sm:text-base text-slate-900">Mr. Gopalsingh Solanki</h3>
                <span className="text-xs text-crimson-600 font-semibold block">Founder &amp; Managing Trustee</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-2 bg-crimson-50 text-crimson-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-crimson-200">
                <Heart className="w-3.5 h-3.5 fill-current text-crimson-600" /> Founder's Vision
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
                "No one should suffer in isolation when humanity has the power to heal."
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                Riddhi Siddhi Charitable Trust was founded on the fundamental conviction that every human life deserves dignity, nourishment, and medical care. In overlooked urban slums and rural tribal pockets of Maharashtra, our teams show up daily with hot cooked meals, school stationery kits, elder care assistance, and emergency hospital surgical funding.
              </p>

              <div className="pt-1">
                <button
                  onClick={() => navTo('about')}
                  className="font-bold text-xs sm:text-sm text-crimson-600 hover:text-crimson-700 flex items-center gap-1.5"
                >
                  <span>Read Full About Us &amp; Trust Credentials</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 CORPORATE PARTNERS LOGO MARQUEE */}
      <section className="bg-slate-50 border-y border-slate-200 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">
            Trusted by Leading Organizations &amp; Corporate Donors
          </span>
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="flex gap-4 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {CORPORATE_PARTNERS.concat(CORPORATE_PARTNERS).map((partner, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm flex-shrink-0"
              >
                {partner.logoUrl ? (
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name} 
                    className="h-7 w-auto max-w-[110px] object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ) : (
                  <div className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center ${partner.color}`}>
                    {partner.logoText.slice(0, 3)}
                  </div>
                )}
                <span className="font-bold text-xs text-slate-800">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 PHOTO GALLERY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold text-trust-600 uppercase tracking-wider block">Moments of Joy</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              Grassroots Action Gallery
            </h2>
          </div>
          <button
            onClick={() => navTo('gallery')}
            className="text-xs sm:text-sm font-bold text-crimson-600 hover:text-crimson-700 flex items-center gap-1"
          >
            <span>Explore 284+ Photos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_ITEMS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.image, item.title, item.category)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3.5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-amber-300 uppercase">{item.category}</span>
                <span className="text-xs font-bold truncate">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-gradient-to-r from-crimson-600 via-rose-600 to-crimson-700 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3.5">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              Let's Make a Meaningful Difference Together
            </h2>
            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed">
              Every single rupee brings warm food to an elder, a school kit to a rural child, or life-saving medicine to a patient. Claim your 50% 80G tax benefit while transforming lives today.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenDonate()}
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-crimson-700 font-extrabold text-xs sm:text-sm rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Donate Now (Instant 80G Receipt)
              </button>
              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto px-7 py-3.5 bg-black/20 hover:bg-black/30 text-white font-bold text-xs sm:text-sm rounded-full border border-white/20 transition-all"
              >
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Heart, BookOpen, Sparkles, ArrowRight, ShieldCheck, 
  CheckCircle2, Utensils, HeartHandshake, Activity, 
  Backpack, ShieldAlert, Home as HomeIcon, ChevronRight,
  ArrowLeft, Users, Percent, Gift, Check, Share2, Building2
} from 'lucide-react';
import { CORE_PROJECTS, TRUST_INFO, SCHOOL_KIT_ITEMS } from '../data/trustData';
import { Tax80GBadgeSvg, Form10BEBadgeSvg } from '../components/SvgAssets';

const CATEGORIES = [
  "All Projects",
  ...Array.from(new Set(CORE_PROJECTS.map(p => p.category)))
];

// Project-specific impact tiers for realistic micro-donations
const PROJECT_TIERS = {
  education: [
    { amount: 650, label: "1 Student School Kit", desc: "Waterproof bag, raincoat, 12 notebooks, pens & geometry set" },
    { amount: 1500, label: "Coaching & Stationery", desc: "After-school remedial tuition & academic materials for 3 months" },
    { amount: 3500, label: "Bicycle & Annual Support", desc: "Sturdy bicycle for tribal student travel + full year fees" }
  ],
  shelter: [
    { amount: 800, label: "1 Month Child Nutrition", desc: "Daily fresh milk, seasonal fruits & high-protein meals" },
    { amount: 1500, label: "Clothing & Medical Care", desc: "2 pairs of stitched uniforms, footwear, doctor checkups" },
    { amount: 5000, label: "Full Child Living Sponsor", desc: "30 days 24/7 boarding, nutrition, tuition & security" }
  ],
  'old-age': [
    { amount: 800, label: "Geriatric Medicine Pack", desc: "Monthly hypertension, diabetes & joint pain prescriptions" },
    { amount: 1500, label: "1 Month Nutritious Meals", desc: "4 daily soft geriatric meals, vitamins & caretaker support" },
    { amount: 4500, label: "Adopt a Senior's Care", desc: "Full monthly shelter, nursing, meals and emotional therapy" }
  ],
  health: [
    { amount: 1000, label: "Emergency Diagnostics", desc: "Urgent pathology blood work, scans and primary medication" },
    { amount: 2500, label: "Transfusion & Therapy", desc: "Pediatric blood transfusion and essential immune injections" },
    { amount: 10000, label: "Surgery Co-Funding", desc: "Direct hospital billing support for critical pediatric operations" }
  ],
  'meals-for-all': [
    { amount: 500, label: "20 Wholesome Hot Meals", desc: "Fresh dal, rice, sabzi and rotis cooked in hygienic kitchens" },
    { amount: 1500, label: "1 Monthly Grocery Ration Kit", desc: "10kg Rice, 10kg Wheat, 3kg Dal, 2L Oil, Spices, Sugar & Salt" },
    { amount: 3000, label: "2 Families Monthly Rations", desc: "Feeds two daily-wage laborer households for an entire month" }
  ],
  'women-empowerment': [
    { amount: 1000, label: "Vocational Starter Kit", desc: "Fabrics, sewing accessories, shears & basic tailoring guides" },
    { amount: 2500, label: "Sewing Machine Aid", desc: "Co-funds an electric sewing machine for a self-employed mother" },
    { amount: 5000, label: "6-Month Skill Academy", desc: "Full certified diploma in stitching, craft & computer literacy" }
  ],
  'animal-welfare': [
    { amount: 500, label: "1 Week Stray Dog Meals", desc: "Daily boiled rice, protein broth and biscuits for 10 dogs" },
    { amount: 1200, label: "Monthly Street Feeding Pack", desc: "Daily nutritious feeding across designated Mumbai routes" },
    { amount: 3000, label: "Emergency Rescue & Meds", desc: "First-aid wound dressing, anti-rabies vaccination & foster care" }
  ],
  'disaster-relief': [
    { amount: 1000, label: "Emergency Tarpaulin & Mats", desc: "Heavy-duty waterproof shelter sheets and sleeping mats" },
    { amount: 2500, label: "Flood Relief Survival Kit", desc: "Dry food rations, halogen torch, chlorine tablets & blankets" },
    { amount: 5000, label: "Family Rebuilding Support", desc: "Essential utensils, clothes and dry ration pack for flood victims" }
  ],
  'school-kits': [
    { amount: 650, label: "1 Monsoon Academic Kit", desc: "Heavy waterproof bag, rainwear, notebooks & water bottle" },
    { amount: 1300, label: "2 Rural Children Kits", desc: "Equips two siblings with complete school stationery and bags" },
    { amount: 3250, label: "5 Tribal Students Kit Pack", desc: "Full monsoon protection & academic kits for five village kids" }
  ]
};

const DEFAULT_TIERS = [
  { amount: 500, label: "Grassroots Supporter", desc: "Provides immediate aid and vital supplies" },
  { amount: 1500, label: "Monthly Champion", desc: "Covers one month of critical needs for a beneficiary" },
  { amount: 5000, label: "Pillar of Hope", desc: "Funds deep structural welfare and long-term empowerment" }
];

export default function ProjectsView({ 
  selectedProjectId, 
  setSelectedProjectId, 
  setActiveView, 
  onOpenDonate 
}) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [copiedLink, setCopiedLink] = useState(false);

  // Determine if a specific project is selected
  const activeProject = selectedProjectId 
    ? CORE_PROJECTS.find(p => p.id === selectedProjectId) 
    : null;

  // Scroll to top whenever active project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProjectId]);

  const handleSelectProject = (projectId) => {
    if (setSelectedProjectId) {
      setSelectedProjectId(projectId);
    }
    if (setActiveView) {
      setActiveView('projects', projectId);
    }
  };

  const handleBackToAll = () => {
    if (setSelectedProjectId) {
      setSelectedProjectId(null);
    }
    if (setActiveView) {
      setActiveView('projects', null);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const filteredProjects = selectedCategory === "All Projects"
    ? CORE_PROJECTS
    : CORE_PROJECTS.filter(p => p.category === selectedCategory);

  const activeTiers = activeProject 
    ? (PROJECT_TIERS[activeProject.id] || DEFAULT_TIERS)
    : DEFAULT_TIERS;

  return (
    <div className="space-y-8 sm:space-y-12 py-6 sm:py-8">
      
      {/* ========================================================================= */}
      {/* 🌟 SCENARIO A: SINGLE PROJECT DEDICATED SPOTLIGHT VIEW */}
      {/* ========================================================================= */}
      {activeProject ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-in fade-in-50 duration-300">
          
          {/* Top Breadcrumb & Back Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <button 
                onClick={handleBackToAll}
                className="hover:text-crimson-600 transition-colors flex items-center gap-1 font-bold text-trust-800"
              >
                <ArrowLeft className="w-4 h-4" /> All 9 Projects
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400">{activeProject.category}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-crimson-600 font-bold truncate max-w-[200px] sm:max-w-none">
                {activeProject.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
                title="Copy direct project link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? "Link Copied!" : "Share Project"}</span>
              </button>
              <button
                onClick={handleBackToAll}
                className="px-4 py-1.5 bg-trust-50 hover:bg-trust-100 text-trust-700 rounded-full text-xs font-bold transition-all"
              >
                View Grid
              </button>
            </div>
          </div>

          {/* Dedicated Spotlight Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Authentic Photography & Impact Card (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Project Image Box with Gradient Badges */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/10] bg-slate-100">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (activeProject.fallbackImage && e.currentTarget.src !== activeProject.fallbackImage) {
                      e.currentTarget.src = activeProject.fallbackImage;
                    }
                  }}
                />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-white/95 backdrop-blur-md text-trust-950 text-xs font-black px-3.5 py-1 rounded-full shadow-lg">
                    {activeProject.category}
                  </span>
                  <span className="bg-emerald-600/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 80G Tax Exemption
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-amber-300 block">
                      Riddhi Siddhi Grassroots Initiative
                    </span>
                    <h3 className="font-display font-extrabold text-lg sm:text-2xl text-white leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Comprehensive Narrative Story */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-5">
                <div className="flex items-center gap-2 text-trust-600 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-crimson-500" /> Ground Reality & RSCT Mission
                </div>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  About the {activeProject.title} Program
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                  {activeProject.fullDesc}
                </p>

                {/* Verified Impact Callout Box */}
                <div className="bg-gradient-to-r from-trust-50 via-indigo-50 to-trust-50 p-5 rounded-2xl border border-trust-100 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-trust-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-extrabold text-trust-900 uppercase tracking-wider block">
                      Verified Field Impact
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-trust-800">
                      {activeProject.impact}
                    </p>
                  </div>
                </div>

                {/* Transparency Guarantee Strip */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Instant 80G Tax Receipt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Form 10BE IT Filing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>100% Direct Allocation</span>
                  </div>
                </div>
              </div>

              {/* School Kit Specific Items Gallery when viewing education / school-kits */}
              {(activeProject.id === 'school-kits' || activeProject.id === 'education') && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Kit Contents</span>
                    <h3 className="font-display font-bold text-xl text-slate-900">What Goes Inside Each School Kit</h3>
                    <p className="text-xs text-slate-600 mt-1">High-quality, waterproof supplies designed to withstand rural monsoon commutes.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {SCHOOL_KIT_ITEMS.map((item, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-2xl p-3 border border-slate-200 flex flex-col justify-between">
                        <div className="aspect-square rounded-xl overflow-hidden bg-white mb-2 p-2 flex items-center justify-center">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{item.name}</h4>
                          <span className="font-mono font-extrabold text-xs text-crimson-600 block mt-0.5">₹{item.cost}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Video Embed */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <span className="text-xs font-bold text-slate-700 block">Watch Rural School Kit Distribution Drive:</span>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                      <iframe
                        src="https://www.youtube.com/embed/dq1C9Cs2Nrs?si=MMnGvzhSO_IgW4-g"
                        title="School Kits Drive Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: High-Converting Project Donation Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 relative overflow-hidden">
                
                {/* 80G Top Ribbon */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Tax80GBadgeSvg className="w-7 h-7" />
                    <div>
                      <span className="font-display font-extrabold text-xs text-slate-900 block">50% Tax Exemption</span>
                      <span className="text-[10px] text-slate-500 block">Sec 80G • Form 10BE Compliant</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase">
                    Active Cause
                  </span>
                </div>

                {/* Progress Bar & Goal */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-baseline text-xs font-bold">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Raised So Far</span>
                      <span className="text-base text-slate-900 font-extrabold">{activeProject.raised}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block text-[10px] uppercase">Required Goal</span>
                      <span className="text-base text-crimson-600 font-extrabold">{activeProject.goal}</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-crimson-600 rounded-full transition-all duration-1000"
                      style={{ width: `${activeProject.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 text-right block">
                    {activeProject.progress}% Funded by Kind Donors
                  </span>
                </div>

                {/* Itemized Micro-Sponsorship Packages */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                    Choose What You Wish to Sponsor
                  </span>
                  
                  <div className="space-y-2">
                    {activeTiers.map((tier, idx) => (
                      <div
                        key={idx}
                        onClick={() => onOpenDonate(activeProject.id)}
                        className="p-3.5 rounded-2xl border-2 border-slate-200 hover:border-crimson-500 hover:bg-crimson-50/40 transition-all cursor-pointer group flex items-start justify-between gap-3"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-xs text-slate-900 group-hover:text-crimson-700">
                              {tier.label}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-tight">
                            {tier.desc}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="font-mono font-extrabold text-sm sm:text-base text-crimson-600 block">
                            ₹{tier.amount.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[10px] text-slate-400 group-hover:text-crimson-600 font-bold">
                            Select →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => onOpenDonate(activeProject.id)}
                    className="w-full py-4 bg-gradient-to-r from-crimson-500 via-rose-600 to-crimson-600 hover:from-crimson-600 hover:to-rose-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5 fill-white animate-pulse" />
                    <span>Donate to {activeProject.title}</span>
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> UPI / Cards / NetBanking
                    </span>
                    <span>•</span>
                    <span>Instant WhatsApp Receipt</span>
                  </div>
                </div>

              </div>

              {/* Direct Bank Transfer Callout - Clean NGO Style */}
              <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-emerald-200/80 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-display font-extrabold text-xs text-slate-900 uppercase tracking-wide">
                      Direct Bank &amp; UPI Transfer
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    80G Tax Exemption
                  </span>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  Transfer directly to verified trust bank account:
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-500 font-medium text-[11px]">HDFC A/C No:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm tracking-wide">50200004807417</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-500 font-medium text-[11px]">IFSC Code:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">HDFC0001230</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-slate-500 font-medium text-[11px]">UPI ID:</span>
                    <span className="font-bold text-trust-800 text-xs sm:text-sm">riddhisiddhict@hdfcbank</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] border-t border-slate-100">
                  <span className="text-slate-500 font-medium">A/C Name: {TRUST_INFO.name}</span>
                  <button
                    onClick={() => setActiveView && setActiveView('bank')}
                    className="text-crimson-600 font-bold hover:underline"
                  >
                    View All Banks →
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Other 8 Projects Quick Switcher */}
          <div className="pt-12 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold text-trust-600 uppercase tracking-wider block">
                  Continue Exploring
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                  Other Humanitarian Initiatives
                </h3>
              </div>
              <button
                onClick={handleBackToAll}
                className="text-xs font-bold text-crimson-600 hover:text-crimson-700 flex items-center gap-1"
              >
                <span>View All 9 Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CORE_PROJECTS.filter(p => p.id !== activeProject.id).slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectProject(p.id)}
                  className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-crimson-500 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden relative">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold text-trust-900 px-2 py-0.5 rounded-full">
                        {p.category}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-crimson-600 transition-colors line-clamp-1">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {p.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-crimson-600 text-[11px]">View Cause →</span>
                    <span className="text-[10px] text-slate-400 font-bold">{p.progress}% Raised</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      ) : (
        /* ========================================================================= */
        /* 🌟 SCENARIO B: ALL 9 PROJECTS FULL GALLERY & CATEGORY VIEW */
        /* ========================================================================= */
        <div className="space-y-8 sm:space-y-12">
          
          {/* Page Header Hero */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-200/80 shadow-sm relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 9 Core Grassroots Social Initiatives • 100% Tax Deductible
                </div>

                <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                  Our Projects &amp; Humanitarian Campaigns
                </h1>

                <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Every initiative is direct, personal, and urgent. Click on any project to explore its full story, field impact metrics, and support the causes closest to your heart with 50% Section 80G tax exemption.
                </p>
              </div>
            </div>
          </section>

          {/* CATEGORY FILTER BUTTONS */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-crimson-500 text-white shadow-md scale-105'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* PROJECTS LIST GRID */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div 
                    onClick={() => handleSelectProject(project.id)}
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        if (project.fallbackImage && e.currentTarget.src !== project.fallbackImage) {
                          e.currentTarget.src = project.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-trust-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {project.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-crimson-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                      80G Tax Exemption
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <h3 
                        onClick={() => handleSelectProject(project.id)}
                        className="font-display font-extrabold text-xl text-slate-900 hover:text-crimson-600 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                        {project.fullDesc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1 text-xs">
                        <span className="font-bold text-trust-700 block">Verified Impact:</span>
                        <span className="text-slate-700 font-medium">{project.impact}</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-500">Raised: {project.raised}</span>
                          <span className="text-crimson-600">Goal: {project.goal}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-500 to-crimson-500 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => onOpenDonate(project.id)}
                          className="flex-1 py-3 bg-gradient-to-r from-crimson-500 to-rose-600 hover:from-crimson-600 hover:to-rose-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                        >
                          <Heart className="w-4 h-4 fill-white" />
                          <span>Support Program</span>
                        </button>
                        <button
                          onClick={() => handleSelectProject(project.id)}
                          className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all"
                          title="View detailed project page"
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

        </div>
      )}

    </div>
  );
}


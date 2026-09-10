import React from 'react';
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
import HeroBannerSlider from '../components/HeroBannerSlider';

export default function HomeView({ 
  setActiveView, 
  onOpenDonate, 
  onOpenTaxCalc, 
  onOpenReceipt, 
  onOpenVolunteer 
}) {
  const navTo = (viewId, projectId = null) => {
    setActiveView(viewId, projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 sm:space-y-12 pb-12">
      
      {/* 🌟 0. OFFICIAL HERO BANNER SLIDER (AUTHENTIC RSCT GRAPHIC SLIDES) */}
      <HeroBannerSlider 
        setActiveView={setActiveView} 
        onOpenDonate={onOpenDonate} 
      />
      
      {/* 🌟 1. CLEAN MISSION & DIRECT ACTION SECTION */}
      <section className="relative bg-gradient-to-b from-trust-50/20 via-white to-slate-50/30 border-b border-slate-200/60 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-trust-50 border border-trust-200 text-trust-800 px-3.5 py-1 rounded-full text-xs font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Section 80G Certified • 50% Tax Exemption • Registered NGO Estd. 2014</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-trust-950 tracking-tight leading-tight">
            Every child nourished, every life healed, <br className="hidden sm:block" />
            <span className="text-crimson-600">every elder honored.</span>
          </h1>

          {/* Mission Statement */}
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Since 2014, <strong className="text-trust-900 font-semibold">Riddhi Siddhi Charitable Trust</strong> has been on the frontlines across Maharashtra—providing safe 24/7 shelter for orphaned children in Airoli, daily meals for daily-wage families, and funding life-saving pediatric surgeries.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenDonate()}
              className="btn-donate-primary text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate to a Cause</span>
            </button>
            <button
              onClick={() => navTo('projects')}
              className="px-5 py-2.5 bg-white hover:bg-trust-50 text-trust-900 font-bold text-xs sm:text-sm rounded-full border border-slate-200 hover:border-trust-300 shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>Explore 9 Programs</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
            <button
              onClick={onOpenTaxCalc}
              className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs sm:text-sm rounded-full border border-amber-200 shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>80G Tax Calculator</span>
            </button>
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

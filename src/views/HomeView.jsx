import React from 'react';
import { 
  Heart, ArrowRight, ShieldCheck, ChevronRight, Utensils, GraduationCap, 
  HeartHandshake, Activity, Home as HomeIcon 
} from 'lucide-react';
import { 
  CORE_PROJECTS, MEDICAL_APPEALS, CORPORATE_PARTNERS 
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
    <div className="space-y-10 sm:space-y-16 pb-16">
      
      {/* 🌟 0. OFFICIAL HERO BANNER SLIDER */}
      <HeroBannerSlider 
        setActiveView={setActiveView} 
        onOpenDonate={onOpenDonate} 
      />
      
      {/* 🌟 1. MISSION & IMPACT HERO SECTION */}
      <section className="relative bg-gradient-to-b from-trust-50/30 via-white to-slate-50/40 border-b border-slate-200/60 pt-4 pb-8 lg:pt-6 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Mission & Trust */}
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

            {/* Right Column: High-Impact Visual Card showcasing Children & Operations */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-md bg-slate-900 group">
                <img
                  src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Supporting-Orphans-A-Commitment-to-Social-Work-in-India.webp"
                  alt="Children at Riddhi Siddhi Charitable Trust Shelter"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-crimson-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Airoli Shelter Ashram
                </div>
                <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 text-left shadow-sm">
                  <span className="block text-xs font-black text-trust-950 font-display">
                    Nurturing 65+ Orphaned &amp; Destitute Children
                  </span>
                  <span className="block text-[11px] text-slate-600 font-medium mt-0.5">
                    Safe housing, daily balanced meals, school education &amp; loving medical care.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* 🌟 1. IMPACT AT A GLANCE (4 CRISP STAT CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-trust-50 text-trust-600 flex items-center justify-center mb-2.5">
              <Utensils className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-2xl sm:text-3xl text-trust-950 block font-mono">
              150,000+
            </span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">
              Nutritious Meals Served
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-crimson-50 text-crimson-600 flex items-center justify-center mb-2.5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-2xl sm:text-3xl text-trust-950 block font-mono">
              5,000+
            </span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">
              School Kits Distributed
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-trust-50 text-trust-700 flex items-center justify-center mb-2.5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-2xl sm:text-3xl text-trust-950 block font-mono">
              1,200+
            </span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">
              Seniors Supported
            </span>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 text-center hover:shadow-sm transition-all">
            <div className="w-10 h-10 mx-auto rounded-xl bg-crimson-50 text-crimson-600 flex items-center justify-center mb-2.5">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-2xl sm:text-3xl text-trust-950 block font-mono">
              500+
            </span>
            <span className="text-xs font-semibold text-slate-500 mt-1 block">
              Surgeries &amp; Medical Aid
            </span>
          </div>
        </div>
      </section>

      {/* 🌟 2. URGENT MEDICAL APPEALS (CLEAN & UNCLUTTERED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-crimson-600 text-xs font-bold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse"></span>
              Emergency Medical Appeals
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-trust-950 tracking-tight">
              Critical Pediatric Surgeries
            </h2>
          </div>

          <button
            onClick={() => navTo('causes')}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-trust-700 hover:text-crimson-600 transition-colors self-start sm:self-auto"
          >
            <span>View All Cases</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEDICAL_APPEALS.slice(0, 3).map((appeal) => (
            <div
              key={appeal.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Clean Poster Image with no clashing overlay badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={appeal.image}
                  alt={appeal.patientName}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-bold text-base text-trust-950 line-clamp-1">
                    {appeal.patientName}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {appeal.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-600">Raised: ₹{appeal.raisedAmount.toLocaleString('en-IN')}</span>
                      <span className="text-crimson-600">Goal: ₹{appeal.targetAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-crimson-600 rounded-full"
                        style={{ width: `${appeal.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenDonate('medical')}
                    className="w-full btn-donate-primary py-2.5 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Donate to Save Life</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 3. CORE SOCIAL PROGRAMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-bold text-trust-600 uppercase tracking-wider block mb-1">
              9 Humanitarian Pillars
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-trust-950 tracking-tight">
              Our Core Social Programs
            </h2>
          </div>

          <button
            onClick={() => navTo('projects')}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-crimson-600 hover:text-crimson-700 transition-colors self-start sm:self-auto"
          >
            <span>View All 9 Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_PROJECTS.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => navTo('projects', project.id)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-trust-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  {project.category}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-trust-950 group-hover:text-crimson-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-crimson-600 flex items-center gap-1 text-xs">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">{project.progress}% Funded</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 4. AIROLI SHELTER SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
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
                <div className="absolute bottom-2.5 inset-x-2.5 bg-trust-950/80 backdrop-blur-md text-white p-2.5 rounded-xl text-xs font-semibold text-center">
                  65+ Resident Children • 4 Nutritious Meals Daily • Full Education
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-1.5 bg-trust-100/70 text-trust-900 text-xs px-3 py-1 rounded-full font-bold">
                <HomeIcon className="w-3.5 h-3.5 text-trust-700" /> Full-Time Residential Care
              </div>

              <h2 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-trust-950 leading-tight">
                Shelter Home for Orphaned &amp; Destitute Children
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our residential ashram in Airoli, Mumbai provides safe shelter, 4 nutritious meals daily, stitched school uniforms, clean dormitories, and remedial education so abandoned children can grow up with joy, dignity, and real prospects.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenDonate('shelter')}
                  className="btn-donate-primary text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-xs"
                >
                  Sponsor a Child (₹800/mo)
                </button>
                <button
                  onClick={() => navTo('shelter')}
                  className="px-5 py-2.5 bg-white hover:bg-slate-100 text-trust-900 font-bold text-xs sm:text-sm rounded-full border border-slate-200 transition-all shadow-xs"
                >
                  Shelter Details →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 5. CORPORATE PARTNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
          Trusted by Organizations &amp; Corporate Giving Partners
        </span>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {CORPORATE_PARTNERS.slice(0, 6).map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200/80 shadow-xs text-trust-950 text-xs font-bold"
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

      {/* 🌟 6. FINAL HIGH-IMPACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-trust-950 via-trust-900 to-crimson-900 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-md">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            Make a Direct Difference Today
          </h2>
          <p className="text-trust-100 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Every contribution brings warm food to an elder, a school kit to a rural child, or life-saving surgery to a patient. Claim your 50% Section 80G tax benefit with an instant receipt.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
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

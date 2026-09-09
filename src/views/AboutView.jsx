import React from 'react';
import { 
  Heart, ShieldCheck, Sparkles, Award, Users, CheckCircle2, 
  ArrowRight, BookOpen, Compass, Target, Star, Building2, PhoneCall
} from 'lucide-react';
import { TRUST_INFO, IMPACT_STATS } from '../data/trustData';
import { TrustLogoSvg, TrustSealSvg, VerifiedNgoSealSvg, Tax80GBadgeSvg } from '../components/SvgAssets';

export default function AboutView({ onOpenDonate, onOpenVolunteer, setActiveView }) {
  const navTo = (viewId) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 sm:space-y-12 py-6 sm:py-8">
      
      {/* Page Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-trust-50/40 via-white to-slate-50/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-trust-50 border border-trust-200 text-trust-800 px-3 py-1 rounded-full text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-trust-600" /> Founded in 2014 • Reg No: {TRUST_INFO.regNo} • 80G Certified
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              About Riddhi Siddhi Charitable Trust
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              We are a registered grassroots non-profit organization dedicated to community welfare across rural and urban India. Founded on the conviction that every human being deserves a life of dignity, health, and equal opportunity.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenDonate()}
                className="btn-donate-primary text-xs sm:text-sm px-6 py-3 rounded-full"
              >
                Support Our Work
              </button>
              <button
                onClick={onOpenVolunteer}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-300 transition-all"
              >
                Join as Volunteer
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHO WE ARE & FOUNDATION STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-crimson-600 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Who We Are
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              A Decade of Dedicated Service to Marginalized India
            </h2>

            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed text-justify">
              <p>
                <strong className="text-slate-900">Riddhi Siddhi Charitable Trust (RSCT)</strong> is a charitable non-profit organization involved in community development across rural and urban India. Founded in 2014 with an idea that every person has an equal right to a life of dignity, we seek to support the most marginalized and underprivileged individuals.
              </p>
              <p>
                We work across vital sectors including primary education, critical pediatric healthcare, disaster emergency response, women empowerment, shelter home management, and elder care. We offer critical services that help end the cycle of poverty and create genuine equity in society.
              </p>
              <p>
                From providing mandatory waterproof school bags and stationery to impoverished children in rural Maharashtra, to distributing daily hot meals and groceries, RSCT continues expanding its footprint to reach every forgotten soul.
              </p>
            </div>

            {/* Credential checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Registered Trust No. {TRUST_INFO.regNo}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> PAN No. {TRUST_INFO.pan}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 80G Tax Exemption (50%)
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Form 10BE Compliant
              </div>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src={TRUST_INFO.aboutImage}
                  alt="Riddhi Siddhi Charitable Trust Community Work"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-crimson-500 text-white flex items-center justify-center font-bold text-xl">
                  10+
                </div>
                <div>
                  <span className="block font-bold text-xs text-slate-800">Years of Compassion</span>
                  <span className="text-[11px] text-slate-500">Founded in 2014, Mumbai</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOUNDER SPOTLIGHT: MR. GOPALSINGH SOLANKI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="aspect-[3/4] max-w-xs mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src={TRUST_INFO.founderImage}
                  alt="Mr. Gopalsingh Solanki - Founder of Riddhi Siddhi Charitable Trust"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  Mr. Gopalsingh Solanki
                </h3>
                <p className="text-xs font-bold text-crimson-600 uppercase tracking-wider">
                  Founder &amp; Managing Trustee
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-trust-600 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Founder's Vision
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                "Real change happens when you show up on the ground."
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                Riddhi Siddhi Charitable Trust was founded by <strong>Mr. Gopalsingh Solanki</strong>, a visionary who has dedicated his life to social service. Hailing from a lower-middle-class background, he saw first-hand the daily struggles of the underprivileged and pledged to create a meaningful impact.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                His years of grassroots experience helped connect the needs of vulnerable communities with compassionate volunteers and donors. From a modest initiative where relief drives were carried out mostly in late evenings and weekends, Mr. Solanki and his team grew RSCT into an influential state-wide welfare network.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                His passion for making education accessible to rural children and providing dignified medical care and nutrition continues to drive all of RSCT's humanitarian campaigns.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
                <button
                  onClick={() => onOpenDonate()}
                  className="px-6 py-3 bg-trust-600 hover:bg-trust-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" /> Support Founder's Initiative
                </button>

                <div className="flex items-center gap-3">
                  <TrustSealSvg className="w-16 h-16 drop-shadow-sm" />
                  <div className="text-left text-xs">
                    <span className="font-bold text-slate-800 block">Registered Trust E30149</span>
                    <span className="text-[11px] text-slate-500 block">Section 80G Certified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISION & MISSION TWIN PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-trust-50 text-trust-600 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Our vision is for a world where everyone has the opportunity to succeed in life, regardless of background. A world without poverty, where all people can access quality education, hygienic sanitation, and essential healthcare in a clean environment. We aim to empower communities to become self-sufficient and serve as a beacon of best practices for humanitarian work.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-crimson-50 text-crimson-600 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Our mission is to offer dignified services for the underserved across India. We address both immediate survival needs (warm meals, emergency surgery funds, flood relief kits) and long-term systemic empowerment (child shelter homes, school stationery, and women vocational livelihoods).
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { 
  Home as HomeIcon, Heart, ShieldCheck, Sparkles, 
  Utensils, BookOpen, Shirt, PlusCircle, Package, Coffee, CheckCircle2,
  Play, Eye, Users, Calendar, Award
} from 'lucide-react';
import { 
  SHELTER_ITEMS_NEEDED, 
  CHILD_SPONSORSHIP_PACKAGES, 
  ORPHANAGE_GALLERY, 
  TRUST_VIDEOS,
  TRUST_INFO 
} from '../data/trustData';

export default function ShelterOrphanageView({ onOpenDonate, onOpenLightbox }) {
  return (
    <div className="space-y-16 sm:space-y-24 py-10">
      
      {/* Page Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 lg:p-14 border border-amber-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-bold">
              <HomeIcon className="w-4 h-4 text-amber-600" /> Airoli, Mumbai Residential Facility • 65+ Resident Children
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Our Shelter Home: A Future Full of Hope
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              In India, millions of children live without parents or guardians. At our shelter home in Airoli, Mumbai, we provide a warm, secure, and nurturing home with 4 balanced meals, quality schooling, healthcare, and emotional healing.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenDonate('shelter')}
                className="btn-donate-primary text-xs sm:text-sm px-6 py-3 rounded-full"
              >
                Sponsor a Shelter Child (₹2,500/mo)
              </button>
              <a
                href="#shelter-cart"
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-full border border-slate-300 transition-all"
              >
                Sponsor Groceries &amp; Items
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 CORE FACILITY HIGHLIGHT PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/A-Safe-Home-for-Orphans-Our-Shelter-in-Mumbai_01.png"
                alt="Shelter Home Mumbai Safe Dormitories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-slate-900">Safe &amp; Clean Dormitories</h3>
              <p className="text-xs text-slate-600 mt-1">Hygienic personal bedding, 24/7 security, and dedicated caretakers for boys and girls.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/A-Safe-Home-for-Orphans-Our-Shelter-in-Mumbai_02.png"
                alt="Shelter Home Daily Nutritious Dining"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-slate-900">4 Daily Wholesome Meals</h3>
              <p className="text-xs text-slate-600 mt-1">Freshly cooked morning breakfast, lunch, seasonal fruits, milk, and dinner every single day.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/A-Safe-Home-for-Orphans-Our-Shelter-in-Mumbai_03.png"
                alt="Shelter Home Remedial Coaching & Activity Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base text-slate-900">Remedial Tuition &amp; Sports</h3>
              <p className="text-xs text-slate-600 mt-1">Certified teachers guiding homework, computer literacy, indoor games, and extracurricular arts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED NARRATIVE & CARE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> A True Home for Every Child
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Nurturing Underprivileged Children with Dignity
            </h2>

            <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed text-justify">
              <p>
                According to recent surveys, nearly 1 in every 10 Indian children live in circumstances without parents or stable guardians. Left with single ailing parents, elderly grandparents, or completely abandoned, these children face chronic malnutrition, loss of education, and deep psychological trauma.
              </p>
              <p>
                Our Shelter Home in Airoli, Mumbai houses children from diverse cultural and regional backgrounds. Dedicated caretakers look after their day-to-day emotional well-being, while our residential cook prepares four hot, balanced meals daily (early morning breakfast, lunch, fresh fruits, and dinner).
              </p>
              <p>
                Beyond food, we provide school uniforms, stitched festival clothes, comfortable clean bedding, and private tuition classes so these children can recover lost academic years and build strong, independent futures.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 4 Daily Nutritious Meals
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Clean Safe Bedding &amp; Hygiene
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> English &amp; Math Remedial Coaching
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Festival &amp; Birthday Celebrations
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative">
              <img
                src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Supporting-Orphans-A-Commitment-to-Social-Work-in-India.webp"
                alt="Airoli Child Shelter Home - Riddhi Siddhi Charitable Trust"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3 IN-DEPTH STORY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md p-6 space-y-4">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
              <img
                src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Crisis-of-Orphaned-Children-in-India.webp"
                alt="Crisis of Orphaned Children in India"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">The Crisis of Abandonment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Without intervention, orphaned children are pushed into child labor or live without primary schooling. RSCT steps in before they fall through societal cracks.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md p-6 space-y-4">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
              <img
                src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Every-Child-Deserves-a-Family.webp"
                alt="Every Child Deserves a Family"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">Family-Style Foster Care</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We recreate the warmth and safety of a real home. Children grow together as brothers and sisters with dedicated elder mentors and caretakers.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md p-6 space-y-4">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
              <img
                src="https://www.riddhisiddhicharitabletrust.org/static/images/orphanage/Nurture-&-Nourishment-under-a-Single-Roof.webp"
                alt="Nurture & Nourishment under a Single Roof"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">Nurture &amp; Nourishment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From fresh cow milk to seasonal fruit baskets and routine dental/pediatric health checkups, we ensure optimal physical and mental growth.
            </p>
          </div>

        </div>
      </section>

      {/* VIDEO DOCUMENTARIES FROM AIROLI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Ground Video Documentary</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
              Watch Our Shelter Home in Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              See firsthand how your contributions provide healthy meals, joyful birthdays, schooling, and hope to orphaned children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/P8nIJXnFock?si=yMjyG_jKAIUhyW-3"
                  title="Airoli Shelter Home Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 pt-1">A Day in the Life at Airoli Shelter Home</h3>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/avJONxCQeWo?si=Q1tDtVA16h740w_s"
                  title="Shelter Home Celebrations"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 pt-1">Joy &amp; Celebrations with the Children</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CHILD SPONSORSHIP TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-crimson-600 uppercase tracking-wider">Transform a Life</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Sponsor a Child &amp; Be Their Hero
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Give a vulnerable child the gift of family, continuous education, and complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHILD_SPONSORSHIP_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between shadow-lg transition-all ${
                pkg.popular
                  ? 'border-crimson-500 ring-2 ring-crimson-500/20 relative'
                  : 'border-slate-200 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-crimson-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Impactful
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">{pkg.title}</h3>
                  <span className="text-xs text-slate-500 block mt-1">{pkg.duration}</span>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-crimson-600 font-mono">
                      ₹{pkg.amount.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500">/ 50% 80G Tax Exemption</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{pkg.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">What your sponsorship covers:</span>
                  {pkg.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenDonate('shelter')}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md ${
                    pkg.popular
                      ? 'btn-donate-primary'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Sponsor Now (₹{pkg.amount.toLocaleString('en-IN')})
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10-IMAGE ORPHANAGE PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Ground Photos</span>
            <h2 className="font-display font-bold text-2xl text-slate-900">Life at Our Airoli Shelter</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {ORPHANAGE_GALLERY.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox && onOpenLightbox(imgUrl, `Airoli Shelter Life #${idx+1}`, 'Shelter Home')}
              className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group relative shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={imgUrl}
                alt={`Shelter Photo ${idx+1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Eye className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSOR SPECIFIC ITEM PACKAGES */}
      <section id="shelter-cart" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-crimson-600 uppercase tracking-wider">Direct Provision Wishlist</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Sponsor Essential Shelter Provisions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Choose a direct supply package to provide groceries, milk, uniforms, or first aid kits to our 65+ resident children.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHELTER_ITEMS_NEEDED.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50 relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-amber-50 text-amber-600">
                    <Package className="w-12 h-12" />
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  Needed
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 leading-snug mb-1">
                    {item.name}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-semibold block">{item.unit}</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold">Cost</span>
                    <span className="font-display font-extrabold text-lg text-crimson-600 font-mono">
                      ₹{item.cost.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenDonate('shelter')}
                    className="px-3.5 py-2 bg-crimson-500 hover:bg-crimson-600 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                  >
                    Sponsor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

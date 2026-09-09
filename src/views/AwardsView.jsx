import React from 'react';
import { Award, ShieldCheck, Sparkles, Eye, Star, Trophy } from 'lucide-react';
import { AWARDS_LIST } from '../data/trustData';

export default function AwardsView({ onOpenLightbox }) {
  return (
    <div className="space-y-16 sm:space-y-20 py-10">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 lg:p-14 border border-amber-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-bold">
              <Trophy className="w-4 h-4 text-amber-600" /> National Recognition &amp; Honors
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Awards &amp; National Appreciation
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Riddhi Siddhi Charitable Trust has been honored with multiple prestigious accolades from respected national confederations for unwavering excellence in child welfare, senior care, and emergency disaster relief.
            </p>
          </div>
        </div>
      </section>

      {/* AWARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AWARDS_LIST.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden group">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                  {award.year}
                </div>
                <button
                  onClick={() => onOpenLightbox(award.image, award.title, award.category, award.desc)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2 backdrop-blur-[2px]"
                >
                  <Eye className="w-5 h-5" /> View Certificate
                </button>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>

                  <span className="text-[11px] font-extrabold text-trust-600 uppercase tracking-wider block">
                    {award.category}
                  </span>

                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    {award.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {award.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">Location: {award.location}</span>
                  <button
                    onClick={() => onOpenLightbox(award.image, award.title, award.category, award.desc)}
                    className="font-bold text-crimson-600 hover:text-crimson-700 flex items-center gap-1"
                  >
                    <span>Full View</span>
                    <Eye className="w-3.5 h-3.5" />
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

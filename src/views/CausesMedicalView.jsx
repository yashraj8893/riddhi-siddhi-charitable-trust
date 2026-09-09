import React, { useState } from 'react';
import { 
  Heart, ShieldCheck, Activity, AlertCircle, 
  CheckCircle2, Building2, User, Clock, ArrowRight 
} from 'lucide-react';
import { MEDICAL_APPEALS, TRUST_INFO } from '../data/trustData';

export default function CausesMedicalView({ onOpenDonate }) {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <div className="space-y-16 sm:space-y-20 py-10">
      
      {/* Page Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 lg:p-14 border border-rose-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 px-3.5 py-1.5 rounded-full text-xs font-bold">
              <Activity className="w-4 h-4 text-crimson-600" /> Life-Saving Pediatric &amp; Emergency Surgeries
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Emergency Medical Appeal
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              No innocent child or helpless patient should lose their life because their family cannot afford hospital treatment. Support our active emergency medical appeals with 50% Section 80G tax exemption.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenDonate('medical')}
                className="btn-donate-primary text-xs sm:text-sm px-6 py-3 rounded-full"
              >
                Donate for Emergency Surgeries
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL CASES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDICAL_APPEALS.map((patient) => (
            <div
              key={patient.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={patient.image}
                  alt={patient.patientName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-crimson-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {patient.disease}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-xl font-semibold">
                  Age: {patient.age} • {patient.hospital}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h2 className="font-display font-extrabold text-2xl text-slate-900">
                    {patient.patientName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {patient.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Progress Stats */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-600">
                        Raised: <span className="font-mono text-emerald-700 font-extrabold">₹{patient.raisedAmount.toLocaleString('en-IN')}</span>
                      </span>
                      <span className="text-crimson-600">
                        Goal: <span className="font-mono font-extrabold">₹{patient.targetAmount.toLocaleString('en-IN')}</span>
                      </span>
                    </div>

                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-crimson-500 rounded-full"
                        style={{ width: `${patient.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>{patient.progress}% Funded</span>
                      <span>₹{(patient.targetAmount - patient.raisedAmount).toLocaleString('en-IN')} still required</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenDonate('medical')}
                      className="flex-1 py-3.5 bg-crimson-500 hover:bg-crimson-600 text-white font-extrabold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      <span>Donate for {patient.patientName.split(' ')[0]}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY MEDICAL SUPPORT MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-trust-50 to-indigo-50/60 rounded-3xl p-8 sm:p-12 border border-trust-200/80 shadow-md">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Complete Transparency & Hospital Verification
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-center">
              Every medical case listed with Riddhi Siddhi Charitable Trust is physically verified with doctors, treatment cost certificates from hospital billing desks, and family background inspections. Funds collected are directly disbursed to the hospital or pharmacy for patient care.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-trust-900">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hospital Direct Billing</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Official Medical Certificates</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 80G Tax Exemption (50%)</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { 
  Heart, Phone, Mail, MapPin, Clock, ShieldCheck, 
  ExternalLink, FileText, CheckCircle2, ChevronRight,
  MessageCircle
} from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';
import { TrustLogoSvg, TrustSealSvg, Tax80GBadgeSvg, Form10BEBadgeSvg, SafeDonationShieldSvg } from './SvgAssets';

export default function Footer({ setActiveView, onOpenDonate, onOpenTaxCalc, onOpenReceipt }) {
  const currentYear = new Date().getFullYear();

  const navTo = (viewId, projectId = null) => {
    setActiveView(viewId, projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-trust-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Decorative background glow circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-trust-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Trust & Tax Banner with SVG Badges */}
      <div className="border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <Tax80GBadgeSvg className="w-14 h-14 flex-shrink-0" />
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white flex items-center justify-center md:justify-start gap-2">
                <span>50% Tax Exemption Under Section 80G</span>
                <span className="hidden sm:inline-block bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded font-mono font-bold">10BE Verified</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                All donations to Riddhi Siddhi Charitable Trust are legally tax-deductible under the Indian Income Tax Act 1961.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTaxCalc}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl border border-white/20 transition-all"
            >
              Tax Calculator
            </button>
            <button
              onClick={onOpenDonate}
              className="px-5 py-2 bg-crimson-500 hover:bg-crimson-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all"
            >
              Donate with 80G
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Column 1: Organization Bio & Legal Stack */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TrustLogoSvg className="w-10 h-10" />
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-tight block leading-tight">
                  RIDDHI SIDDHI
                </span>
                <span className="text-[10px] text-crimson-400 font-bold uppercase tracking-wider block">
                  Charitable Trust • 2014
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              A registered non-profit organization dedicated to transforming lives through child education, elderly dignity, medical emergency relief, and zero-hunger food drives.
            </p>

            {/* Legal Badges Stack */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">PAN Number:</span>
                <span className="font-mono font-bold text-amber-300">{TRUST_INFO.pan}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Registration No:</span>
                <span className="font-mono font-bold text-emerald-300">{TRUST_INFO.regNo}</span>
              </div>
              <div className="text-center pt-1 border-t border-white/10 text-[11px] text-crimson-300 font-hand text-sm font-bold">
                "{TRUST_INFO.tagline}"
              </div>
            </div>

            {/* Social Icons with SVG */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href={TRUST_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={TRUST_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1DA1F2] text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={TRUST_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href={TRUST_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C13584] text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={TRUST_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Key Causes & Services */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crimson-500"></span> Core Programs
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button onClick={() => navTo('causes')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-crimson-400" /> Medical Emergency Relief
                </button>
              </li>
              <li>
                <button onClick={() => navTo('shelter')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-crimson-400" /> Shelter Home (Airoli)
                </button>
              </li>
              <li>
                <button onClick={() => navTo('projects', 'education')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-crimson-400" /> Education for Every Child
                </button>
              </li>
              <li>
                <button onClick={() => navTo('projects', 'old-age')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-crimson-400" /> Old Age Home Care
                </button>
              </li>
              <li>
                <button onClick={() => navTo('projects', 'meals-for-all')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-crimson-400" /> Meals for All (Zero Hunger)
                </button>
              </li>
              <li>
                <button onClick={() => navTo('projects', 'women-empowerment')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-crimson-400" /> Women Skill Empowerment
                </button>
              </li>
              <li>
                <button onClick={() => navTo('csr')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-crimson-400" /> Corporate Social Responsibility
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Transparency */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-trust-400"></span> Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <button onClick={() => navTo('about')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-trust-400" /> About Trust & Founder
                </button>
              </li>
              <li>
                <button onClick={() => navTo('awards')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-trust-400" /> Awards & Recognitions
                </button>
              </li>
              <li>
                <button onClick={() => navTo('gallery')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-trust-400" /> Photo & Video Gallery
                </button>
              </li>
              <li>
                <button onClick={() => navTo('bank')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-trust-400" /> Bank Details & QR Codes
                </button>
              </li>
              <li>
                <button onClick={onOpenReceipt} className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-emerald-300 font-semibold">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Instant 80G Receipt Generator
                </button>
              </li>
              <li>
                <a href={TRUST_INFO.form10BEUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-trust-400" /> 10BE Tax Form Submission <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button onClick={() => navTo('terms')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-trust-400" /> Terms & 80G Policy
                </button>
              </li>
              <li>
                <a href={TRUST_INFO.employeeLoginUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-slate-400">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" /> Employee Webmail Login <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Contact Info
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-crimson-400 flex-shrink-0 mt-0.5" />
                <a 
                  href={TRUST_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  {TRUST_INFO.address}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${TRUST_INFO.tel1}`} className="hover:text-white transition-colors font-mono">
                    {TRUST_INFO.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${TRUST_INFO.tel2}`} className="hover:text-white transition-colors font-mono">
                    {TRUST_INFO.phone2}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${TRUST_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {TRUST_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{TRUST_INFO.hours}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Disclaimers */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 bg-black/40 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {currentYear} <span className="font-semibold text-slate-200">{TRUST_INFO.name}</span>. All Rights Reserved.
          </p>
          <p className="flex items-center justify-center gap-2 text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Registered Non-Profit • 80G Certified • Form 10BE Compliant
          </p>
        </div>
      </div>

    </footer>
  );
}

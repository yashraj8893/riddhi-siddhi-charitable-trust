import React, { useState, useEffect } from 'react';
import { 
  Heart, Menu, X, ChevronDown, ChevronRight, Phone, Mail, Globe, 
  ShieldCheck, Calculator, FileCheck, ArrowRight, Award,
  BookOpen, Home as HomeIcon, Activity, Utensils, Users, Sparkles,
  ShieldAlert, HeartHandshake, Backpack
} from 'lucide-react';
import { TRUST_INFO, LANGUAGES, CORE_PROJECTS } from '../data/trustData';
import { TrustLogoSvg, Tax80GBadgeSvg } from './SvgAssets';

const PROJECT_NAV_ITEMS = [
  { id: 'education', title: 'Education for Every Child', tag: 'Child Literacy', icon: BookOpen },
  { id: 'shelter', title: 'Shelter Home for Orphaned Kids', tag: 'Airoli Shelter', icon: HomeIcon },
  { id: 'old-age', title: 'Old Age Senior Care Home', tag: 'Elder Dignity', icon: HeartHandshake },
  { id: 'health', title: 'Health & Medical Appeal', tag: 'Emergency Care', icon: Activity },
  { id: 'meals-for-all', title: 'Meals for All (Hunger Relief)', tag: 'Daily Food', icon: Utensils },
  { id: 'women-empowerment', title: 'Women Skill Development', tag: 'Livelihood', icon: Sparkles },
  { id: 'animal-welfare', title: 'Animal Welfare Feeding', tag: 'Stray Care', icon: ShieldAlert },
  { id: 'disaster-relief', title: 'Disaster Emergency Relief', tag: 'Monsoon Aid', icon: ShieldCheck },
  { id: 'school-kits', title: 'School Kits & Monsoon Drives', tag: 'Rural Support', icon: Backpack },
];

export default function Navbar({ 
  activeView, 
  setActiveView, 
  onOpenDonate, 
  onOpenTaxCalc, 
  onOpenReceipt,
  onOpenVolunteer 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLang, setSelectedLang] = useState('English');
  const [logoImgError, setLogoImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode, langName) => {
    setSelectedLang(langName);
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      document.cookie = `googtrans=/en/${langCode};path=/`;
    }
    setOpenDropdown(null);
  };

  const navTo = (viewId, projectId = null) => {
    setActiveView(viewId, projectId);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200' 
        : 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs'
    }`}>
      {/* Top micro-bar for Contact & Quick Verification */}
      <div className="hidden lg:block bg-slate-50/70 backdrop-blur-md border-b border-slate-200/50 py-1.5 px-6 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${TRUST_INFO.tel1}`} className="flex items-center gap-1.5 hover:text-crimson-600 transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 text-crimson-600" /> {TRUST_INFO.phone1}
            </a>
            <a href={`mailto:${TRUST_INFO.email}`} className="flex items-center gap-1.5 hover:text-trust-600 transition-colors">
              <Mail className="w-3.5 h-3.5 text-trust-600" /> {TRUST_INFO.email}
            </a>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-700">
              <span className="font-semibold text-slate-900">PAN:</span> {TRUST_INFO.pan}
            </span>
            <span className="flex items-center gap-1 text-slate-700">
              <span className="font-semibold text-slate-900">Reg:</span> {TRUST_INFO.regNo}
            </span>
            <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/20 text-[11px] backdrop-blur-sm">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> 50% Tax Exemption (80G)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenReceipt}
              className="flex items-center gap-1 text-slate-700 hover:text-trust-600 font-medium transition-colors px-2 py-0.5 rounded-lg hover:bg-white/60"
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-600" /> Instant 80G Receipt
            </button>
            <button 
              onClick={onOpenTaxCalc}
              className="flex items-center gap-1 text-slate-700 hover:text-trust-600 font-medium transition-colors px-2 py-0.5 rounded-lg hover:bg-white/60"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-500" /> Tax Calculator
            </button>
            <a 
              href={TRUST_INFO.employeeLoginUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-800 transition-colors px-2 py-0.5 rounded-lg hover:bg-white/60"
            >
              Employee Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Official Website Logo + SVG Emblem */}
          <button 
            onClick={() => navTo('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            {!logoImgError ? (
              <img 
                src={TRUST_INFO.logoUrl} 
                alt="Riddhi Siddhi Charitable Trust" 
                className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                onError={() => setLogoImgError(true)}
              />
            ) : null}

            {logoImgError && (
              <div className="flex items-center gap-2.5">
                <TrustLogoSvg className="w-10 h-10 group-hover:scale-105 transition-transform duration-200" />
                <div>
                  <span className="block font-display font-extrabold text-lg sm:text-xl tracking-tight text-trust-900 leading-tight">
                    RIDDHI SIDDHI
                  </span>
                  <span className="block font-semibold text-[11px] sm:text-xs text-crimson-600 tracking-wider uppercase">
                    Charitable Trust • Estd 2014
                  </span>
                </div>
              </div>
            )}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-sm font-semibold text-slate-700">
            
            {/* Home */}
            <button 
              onClick={() => navTo('home')}
              className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm transition-all duration-200 ${
                activeView === 'home' 
                  ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                  : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button 
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm flex items-center gap-1 transition-all duration-200 ${
                  activeView === 'about' || activeView === 'awards' 
                    ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                    : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
                }`}
              >
                About <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 w-56 p-1.5 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-0.5">
                <button onClick={() => navTo('about')} className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100/80 hover:text-trust-700 flex items-center justify-between transition-colors">
                  <span>About Trust & Founder</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <button onClick={() => navTo('awards')} className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100/80 hover:text-trust-700 flex items-center justify-between transition-colors">
                  <span>Awards & Recognition</span>
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                </button>
              </div>
            </div>

            {/* Medical Appeal */}
            <button 
              onClick={() => navTo('causes')}
              className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm flex items-center gap-1.5 transition-all duration-200 ${
                activeView === 'causes' 
                  ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                  : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse"></span>
              Medical
            </button>

            {/* Shelter */}
            <button 
              onClick={() => navTo('shelter')}
              className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm transition-all duration-200 ${
                activeView === 'shelter' 
                  ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                  : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
              }`}
            >
              Shelter
            </button>

            {/* Projects Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => navTo('projects')}
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm flex items-center gap-1 transition-all duration-200 ${
                  activeView === 'projects' 
                    ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                    : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
                }`}
              >
                Projects <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Mega Dropdown Menu */}
              <div className="absolute top-full left-0 w-[420px] p-3 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-white/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="flex items-center justify-between px-3 py-2 bg-slate-50/80 backdrop-blur-md rounded-xl mb-2 border border-slate-200/50">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-trust-800">
                    9 Core Humanitarian Pillars
                  </span>
                  <button 
                    onClick={() => navTo('projects')}
                    className="text-xs font-bold text-crimson-600 hover:text-crimson-700 flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto pr-1">
                  {PROJECT_NAV_ITEMS.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => navTo('projects', item.id)}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-white/90 hover:shadow-xs transition-all flex items-center justify-between group/item"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-slate-100/90 group-hover/item:bg-crimson-500 group-hover/item:text-white text-slate-700 flex items-center justify-center transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-slate-800 group-hover/item:text-trust-900">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 group-hover/item:text-crimson-600 bg-slate-100/70 group-hover/item:bg-crimson-50 px-2 py-0.5 rounded-full transition-colors">
                          {item.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CSR */}
            <button 
              onClick={() => navTo('csr')}
              className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm transition-all duration-200 ${
                activeView === 'csr' 
                  ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                  : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
              }`}
            >
              CSR
            </button>

            {/* Media */}
            <button 
              onClick={() => navTo('gallery')}
              className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm transition-all duration-200 ${
                activeView === 'gallery' 
                  ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                  : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
              }`}
            >
              Media
            </button>

            {/* Engage Dropdown */}
            <div className="relative group">
              <button 
                className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm flex items-center gap-1 transition-all duration-200 ${
                  activeView === 'bank' || activeView === 'contact' 
                    ? 'text-crimson-600 bg-crimson-50/90 border border-crimson-200/60 font-bold shadow-xs' 
                    : 'text-slate-700 hover:text-crimson-600 hover:bg-slate-100/70 hover:backdrop-blur-sm'
                }`}
              >
                Engage <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full right-0 w-60 p-1.5 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-0.5">
                <button onClick={() => navTo('bank')} className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100/80 hover:text-trust-700 flex items-center justify-between transition-colors">
                  <span>Bank Details & UPI</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-md font-bold border border-emerald-200">Verified</span>
                </button>
                <button onClick={() => navTo('contact')} className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100/80 hover:text-trust-700 transition-colors">
                  Contact & Office Map
                </button>
                <button onClick={onOpenVolunteer} className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-crimson-600 hover:bg-crimson-50/80 flex items-center justify-between transition-colors">
                  <span>Become a Volunteer</span>
                  <Users className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </nav>

          {/* Right Actions: Language Switcher & Donate CTA */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative hidden md:block">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'lang' ? null : 'lang')}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100/70 hover:bg-slate-200/70 backdrop-blur-md border border-slate-200/50 rounded-xl transition-all shadow-xs"
                title="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-trust-600" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {openDropdown === 'lang' && (
                <div className="absolute top-full right-0 mt-2 w-48 max-h-72 overflow-y-auto bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/60 p-1.5 z-50">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code, lang.name)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-all flex items-center justify-between ${
                        selectedLang === lang.name ? 'bg-trust-50 text-trust-600 font-bold border border-trust-100' : 'hover:bg-slate-100/70 text-slate-700'
                      }`}
                    >
                      <span>{lang.name}</span>
                      <span className="text-[10px] text-slate-400">{lang.native}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Donate Now Button */}
            <button 
              onClick={() => onOpenDonate()}
              className="btn-donate-primary text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 bg-slate-100/70 hover:bg-slate-200/70 backdrop-blur-md border border-slate-200/50 focus:outline-none transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200/60 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1 text-sm font-semibold text-slate-800">
            <button onClick={() => navTo('home')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              Home <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => navTo('about')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              About Us & Founder <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => navTo('causes')} className="w-full text-left py-2.5 px-3 rounded-xl bg-crimson-50/70 hover:bg-crimson-100/70 flex items-center justify-between text-crimson-600 transition-colors">
              Medical Emergency Appeal <span className="bg-crimson-100 text-crimson-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Urgent</span>
            </button>
            <button onClick={() => navTo('shelter')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              Shelter Home (Airoli) <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            
            {/* Mobile Expandable Projects Section */}
            <div className="border border-slate-200/60 bg-slate-50/50 backdrop-blur-sm rounded-2xl overflow-hidden my-2">
              <button 
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="w-full text-left py-2.5 px-3 hover:bg-slate-100/70 flex items-center justify-between font-bold text-trust-900 transition-colors"
              >
                <span>All 9 Core Projects</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileProjectsOpen && (
                <div className="bg-white/80 backdrop-blur-md p-2 space-y-1 border-t border-slate-200/50">
                  <button 
                    onClick={() => navTo('projects', null)} 
                    className="w-full text-left py-2 px-3 text-xs font-bold text-crimson-600 bg-crimson-50/90 rounded-xl flex items-center justify-between"
                  >
                    <span>🌟 View All Projects Grid</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {PROJECT_NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navTo('projects', item.id)}
                      className="w-full text-left py-2 px-3 text-xs text-slate-700 hover:bg-slate-100/80 rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span>{item.title}</span>
                      <span className="text-[10px] text-slate-400">{item.tag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => navTo('csr')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              CSR & Corporate Giving <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => navTo('awards')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              Awards & Recognition <Award className="w-4 h-4 text-amber-500" />
            </button>
            <button onClick={() => navTo('gallery')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              Photo & Video Gallery <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => navTo('bank')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              Bank Details & QR Codes <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button onClick={() => navTo('contact')} className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100/70 flex items-center justify-between transition-colors">
              Contact Us <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-4 border-t border-slate-200/60 space-y-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenVolunteer(); }}
                className="w-full py-2.5 bg-trust-50 text-trust-600 font-bold rounded-xl flex items-center justify-center gap-2 border border-trust-100"
              >
                <Users className="w-4 h-4" /> Become a Volunteer
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenTaxCalc(); }}
                className="w-full py-2.5 bg-amber-50 text-amber-800 font-bold rounded-xl flex items-center justify-center gap-2 border border-amber-100"
              >
                <Calculator className="w-4 h-4 text-amber-600" /> 80G Tax Calculator
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenReceipt(); }}
                className="w-full py-2.5 bg-emerald-50 text-emerald-800 font-bold rounded-xl flex items-center justify-center gap-2 border border-emerald-100"
              >
                <FileCheck className="w-4 h-4 text-emerald-600" /> Generate 80G Receipt
              </button>
            </div>

            {/* Mobile Language Grid */}
            <div className="pt-4 border-t border-slate-200/60">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select Language</span>
              <div className="grid grid-cols-3 gap-1.5">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code, lang.name)}
                    className={`py-1.5 px-2 text-xs rounded-xl font-medium border text-center transition-colors ${
                      selectedLang === lang.name ? 'border-trust-500 bg-trust-50 text-trust-700 font-bold' : 'border-slate-200 bg-white/70 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

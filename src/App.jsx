import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaxMarquee from './components/TaxMarquee';
import StickyDonate from './components/StickyDonate';

import DonationModal from './components/DonationModal';
import TaxCalculatorModal from './components/TaxCalculatorModal';
import ReceiptGeneratorModal from './components/ReceiptGeneratorModal';
import VolunteerModal from './components/VolunteerModal';
import LightboxModal from './components/LightboxModal';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import CausesMedicalView from './views/CausesMedicalView';
import ShelterOrphanageView from './views/ShelterOrphanageView';
import ProjectsView from './views/ProjectsView';
import CSRView from './views/CSRView';
import AwardsView from './views/AwardsView';
import MediaGalleryView from './views/MediaGalleryView';
import BankDetailsView from './views/BankDetailsView';
import ContactView from './views/ContactView';
import TermsView from './views/TermsView';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Global Modals State
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donateInitialCause, setDonateInitialCause] = useState(null);

  const [taxCalcModalOpen, setTaxCalcModalOpen] = useState(false);

  const [receiptModalOpen, setReceiptModalOpen] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);

  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    image: null,
    title: '',
    category: '',
    description: ''
  });

  // Handle URL hash changes or browser back/forward navigation
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#/', '').replace('#', '');
      if (!rawHash) return;

      // Comprehensive alias mapping matching original live website
      const aliasMap = {
        'projects': { view: 'projects', project: null },
        'project': { view: 'projects', project: null },
        'our-projects': { view: 'projects', project: null },
        'about-us': { view: 'about', project: null },
        'about': { view: 'about', project: null },
        'orphanage': { view: 'shelter', project: null },
        'shelter': { view: 'shelter', project: null },
        'school-kits': { view: 'projects', project: 'school-kits' },
        'sponsor-a-child': { view: 'shelter', project: null },
        'education': { view: 'projects', project: 'education' },
        'old-age': { view: 'projects', project: 'old-age' },
        'health': { view: 'projects', project: 'health' },
        'meals-for-all': { view: 'projects', project: 'meals-for-all' },
        'women-empowerment': { view: 'projects', project: 'women-empowerment' },
        'animal-welfare': { view: 'projects', project: 'animal-welfare' },
        'disaster-relief': { view: 'projects', project: 'disaster-relief' },
        'causes': { view: 'causes', project: null },
        'csr': { view: 'csr', project: null },
        'awards': { view: 'awards', project: null },
        'gallery': { view: 'gallery', project: null },
        'media': { view: 'gallery', project: null },
        'bank-details': { view: 'bank', project: null },
        'bank': { view: 'bank', project: null },
        'contact-us': { view: 'contact', project: null },
        'contact': { view: 'contact', project: null },
        'terms-and-condition': { view: 'terms', project: null },
        'terms': { view: 'terms', project: null },
        'home': { view: 'home', project: null }
      };

      if (rawHash.startsWith('projects/')) {
        const pId = rawHash.split('/')[1];
        setActiveView('projects');
        setSelectedProjectId(pId || null);
        return;
      }

      if (aliasMap[rawHash]) {
        setActiveView(aliasMap[rawHash].view);
        setSelectedProjectId(aliasMap[rawHash].project);
        return;
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSetActiveView = (viewId, projectId = null) => {
    setActiveView(viewId);
    setSelectedProjectId(projectId);
    if (viewId === 'projects' && projectId) {
      window.location.hash = `#/projects/${projectId}`;
    } else {
      window.location.hash = `#/${viewId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDonate = (causeId = null) => {
    setDonateInitialCause(causeId);
    setDonateModalOpen(true);
  };

  const handleOpenDonateWithAmount = (amt) => {
    setDonateInitialCause(null);
    setDonateModalOpen(true);
  };

  const handleOpenReceiptWithData = (data) => {
    setReceiptData(data);
    setReceiptModalOpen(true);
  };

  const handleOpenLightbox = (image, title, category, description) => {
    setLightboxState({
      isOpen: true,
      image,
      title,
      category,
      description
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFE] text-slate-800 selection:bg-crimson-500 selection:text-white font-sans">
      
      {/* 80G Tax Exemption Announcement Bar */}
      <TaxMarquee
        onOpenTaxCalc={() => setTaxCalcModalOpen(true)}
      />

      {/* Modern Glassmorphic Sticky Header */}
      <Navbar
        activeView={activeView}
        setActiveView={handleSetActiveView}
        onOpenDonate={handleOpenDonate}
        onOpenTaxCalc={() => setTaxCalcModalOpen(true)}
        onOpenReceipt={() => { setReceiptData(null); setReceiptModalOpen(true); }}
        onOpenVolunteer={() => setVolunteerModalOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {activeView === 'home' && (
          <HomeView
            setActiveView={handleSetActiveView}
            onOpenDonate={handleOpenDonate}
            onOpenTaxCalc={() => setTaxCalcModalOpen(true)}
            onOpenReceipt={() => { setReceiptData(null); setReceiptModalOpen(true); }}
            onOpenVolunteer={() => setVolunteerModalOpen(true)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activeView === 'about' && (
          <AboutView
            setActiveView={handleSetActiveView}
            onOpenDonate={handleOpenDonate}
            onOpenVolunteer={() => setVolunteerModalOpen(true)}
          />
        )}

        {activeView === 'causes' && (
          <CausesMedicalView
            onOpenDonate={handleOpenDonate}
          />
        )}

        {activeView === 'shelter' && (
          <ShelterOrphanageView
            onOpenDonate={handleOpenDonate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activeView === 'projects' && (
          <ProjectsView
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
            setActiveView={handleSetActiveView}
            onOpenDonate={handleOpenDonate}
          />
        )}

        {activeView === 'csr' && (
          <CSRView
            onOpenDonate={handleOpenDonate}
          />
        )}

        {activeView === 'awards' && (
          <AwardsView
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activeView === 'gallery' && (
          <MediaGalleryView
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activeView === 'bank' && (
          <BankDetailsView
            onOpenDonate={handleOpenDonate}
            onOpenReceipt={() => { setReceiptData(null); setReceiptModalOpen(true); }}
          />
        )}

        {activeView === 'contact' && (
          <ContactView />
        )}

        {activeView === 'terms' && (
          <TermsView />
        )}
      </main>

      {/* Floating Action Bar & Live Donor Activity */}
      <StickyDonate
        onOpenDonate={handleOpenDonate}
        onOpenTaxCalc={() => setTaxCalcModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        setActiveView={handleSetActiveView}
        onOpenDonate={handleOpenDonate}
        onOpenTaxCalc={() => setTaxCalcModalOpen(true)}
        onOpenReceipt={() => { setReceiptData(null); setReceiptModalOpen(true); }}
      />

      {/* Global Interactive Modals */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        initialCause={donateInitialCause}
        onOpenReceiptWithData={handleOpenReceiptWithData}
      />

      <TaxCalculatorModal
        isOpen={taxCalcModalOpen}
        onClose={() => setTaxCalcModalOpen(false)}
        onProceedToDonate={handleOpenDonateWithAmount}
      />

      <ReceiptGeneratorModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
        initialData={receiptData}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />

      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        image={lightboxState.image}
        title={lightboxState.title}
        category={lightboxState.category}
        description={lightboxState.description}
      />

    </div>
  );
}

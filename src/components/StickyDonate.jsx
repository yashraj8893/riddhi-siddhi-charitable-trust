import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { TRUST_INFO } from '../data/trustData';

export default function StickyDonate({ onOpenDonate }) {
  return (
    <div className="fixed right-4 bottom-5 z-40 flex items-center gap-3">
      {/* WhatsApp Helpline Button */}
      <a
        href={TRUST_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Helpline"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>

      {/* Floating Donate Pill */}
      <button
        onClick={() => onOpenDonate()}
        className="btn-donate-primary flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
      >
        <Heart className="w-3.5 h-3.5 fill-white" />
        <span>Donate</span>
      </button>
    </div>
  );
}


import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, image, title, category, description }) {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative aspect-video sm:aspect-[16/10] bg-black">
          <img
            src={image}
            alt={title || "Riddhi Siddhi Charitable Trust"}
            className="w-full h-full object-contain"
          />
        </div>

        {(title || description) && (
          <div className="p-6 text-white bg-gradient-to-t from-slate-950 to-slate-900">
            {category && (
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full inline-block mb-2">
                {category}
              </span>
            )}
            {title && <h3 className="font-display font-bold text-xl text-white mb-1">{title}</h3>}
            {description && <p className="text-sm text-slate-300 leading-relaxed">{description}</p>}
          </div>
        )}

      </div>
    </div>
  );
}

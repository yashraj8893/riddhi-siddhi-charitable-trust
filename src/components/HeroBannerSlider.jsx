import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_SLIDES } from '../data/trustData';

export default function HeroBannerSlider({ setActiveView, onOpenDonate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  const handleSlideAction = () => {
    if (currentSlide.projectId) {
      setActiveView(currentSlide.linkView, currentSlide.projectId);
    } else {
      setActiveView(currentSlide.linkView);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDonateAction = (e) => {
    e.stopPropagation();
    onOpenDonate(currentSlide.projectId || 'general');
  };

  return (
    <div 
      className="relative w-full bg-slate-900 select-none overflow-hidden group shadow-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Aspect Ratio Container for Responsive Full Image View */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.8/1] max-h-[580px] bg-slate-950 overflow-hidden">
        
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              onClick={handleSlideAction}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out cursor-pointer ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Banner Image */}
              <img
                src={slide.image}
                alt={slide.alt}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover sm:object-fill object-center"
                onError={(e) => {
                  e.target.src = "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Our-Mission.webp";
                }}
              />

              {/* Bottom Subtle Gradient for controls clarity */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
            </div>
          );
        })}

        {/* Floating Quick Action CTA on Slide */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-20 flex items-center gap-2">
          <button
            onClick={handleDonateAction}
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 border border-white/20"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>{currentSlide.btnText || "Donate Now"}</span>
          </button>
          <button
            onClick={handleSlideAction}
            className="hidden sm:inline-flex px-4 py-2.5 bg-white/90 hover:bg-white text-slate-900 font-bold text-xs rounded-full shadow-md hover:scale-105 active:scale-95 transition-all items-center gap-1 backdrop-blur-sm"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Slide Counter Pill */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-white/15 flex items-center gap-1.5">
          <span className="text-amber-400 font-bold">{currentIndex + 1}</span>
          <span className="text-white/40">/</span>
          <span>{totalSlides}</span>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all rounded-full ${
                idx === currentIndex
                  ? 'w-6 h-2 bg-amber-400 shadow-sm'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/90'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Trust & Tax Deduction Strip below Banner */}
      <div className="bg-gradient-to-r from-trust-900 via-trust-950 to-slate-950 text-white py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="font-semibold text-slate-200">
              Riddhi Siddhi Charitable Trust • Registered NGO (Reg No: E30149 • PAN: AACTR3220R)
            </span>
          </div>
          <div className="flex items-center gap-2 text-amber-300 font-bold">
            <span className="bg-amber-400/20 px-2 py-0.5 rounded text-[11px] font-mono">Section 80G</span>
            <span>All Donations Legally Entitled to 50% Tax Exemption</span>
          </div>
        </div>
      </div>
    </div>
  );
}

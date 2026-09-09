import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_SLIDES } from '../data/trustData';

export default function HeroBannerSlider({ setActiveView, onOpenDonate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = HERO_SLIDES.length;
  const SLIDE_DURATION_MS = 4500;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Continuous auto-sliding timer with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50; // update every 50ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (intervalStep / SLIDE_DURATION_MS) * 100;
      });
    }, intervalStep);

    return () => clearInterval(timer);
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
    <div className="w-full bg-slate-950 overflow-hidden select-none">
      
      {/* 🌟 1. MAIN HERO BANNER CAROUSEL WITH PHYSICAL HORIZONTAL SLIDE MOTION */}
      <div 
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Moving Progress Bar at Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 via-crimson-500 to-amber-400 transition-all ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Aspect Ratio Container for Full Image Display */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.8/1] max-h-[580px] bg-slate-950 overflow-hidden">
          
          {/* Moving Horizontal Slider Track */}
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  onClick={handleSlideAction}
                  className="w-full h-full flex-shrink-0 relative cursor-pointer overflow-hidden bg-slate-950"
                  style={{ width: '100%' }}
                >
                  {/* Banner Image with Ken Burns Active Floating Motion */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className={`w-full h-full object-cover sm:object-fill object-center transition-transform duration-1000 ${
                      isActive ? 'animate-kenburns scale-100' : 'scale-100'
                    }`}
                    onError={(e) => {
                      e.target.src = "https://www.riddhisiddhicharitabletrust.org/static/images/homepage/Our-Mission.webp";
                    }}
                  />

                  {/* Gradient Overlay for Controls Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Floating CTA Buttons on Slide */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-20 flex items-center gap-2">
            <button
              onClick={handleDonateAction}
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 border border-white/20 animate-pulse"
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
          <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-white/15 flex items-center gap-1.5 shadow-sm">
            <span className="text-amber-400 font-bold">{currentIndex + 1}</span>
            <span className="text-white/40">/</span>
            <span>{totalSlides}</span>
          </div>

          {/* Previous Slide Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            aria-label="Previous Slide"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Slide Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            aria-label="Next Slide"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Indicator Navigation Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
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
      </div>

    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ContactPopup from './ContactPopup';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    if (textRef.current?.children) {
      tl.from(Array.from(textRef.current.children), {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-lm-bg via-gray-50 to-white overflow-hidden w-full max-w-full">
      
      

      {/* Full-height vertical loop rail on the left (40% width) */}
      <div className="loop-rail-left absolute inset-y-0 left-0 w-[40%] max-w-[40vw] z-0 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-3 gap-0 h-full px-0">
          {/* Column 1 - up */}
          <div className="relative h-full">
            <div className="loop-track">
              <div className="loop-group dir-up">
                <div className="loop-item pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item bar-rounded-tl bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-diag-a bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item bar-rounded-3 bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item pill-d bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item bar-rounded-bottom bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item bar-rounded-diag-b bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item pill-b bg-gradient-to-br from-lm-light to-white"></div>
              </div>
              <div className="loop-group dir-up">
                <div className="loop-item pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item bar-rounded-tr bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-diag-b bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item bar-rounded-3 bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item pill-d bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item bar-rounded-bottom bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item bar-rounded-diag-a bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item pill-b bg-gradient-to-br from-lm-light to-white"></div>
              </div>
            </div>
          </div>
          {/* Column 2 - down */}
          <div className="relative h-full">
            <div className="loop-track">
              <div className="loop-group dir-down">
                <div className="loop-item bar-rounded-tr bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item bar-rounded-diag-a bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item bar-rounded-3 bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-diag-b bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
              </div>
              <div className="loop-group dir-down">
                <div className="loop-item bar-rounded-tl bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item bar-rounded-diag-b bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item bar-rounded-3 bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-diag-a bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
              </div>
            </div>
          </div>
          {/* Column 3 - up */}
          <div className="relative h-full">
            <div className="loop-track">
              <div className="loop-group dir-up">
                <div className="loop-item bar-rounded-diag-a bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item bar-rounded-3 bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item bar-rounded-tr bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-diag-b bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
              </div>
              <div className="loop-group dir-up">
                <div className="loop-item bar-rounded-diag-b bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item bar-rounded-3 bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item bar-rounded-tl bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-diag-a bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only horizontal loop background - copy desktop structure exactly */}
      <div className="block lg:hidden loop-rail-mobile absolute inset-x-0 top-0 h-[15%] z-0 pointer-events-none">
        <div className="grid grid-cols-3 gap-0 h-full px-0">
          {/* Column 1 - up */}
          <div className="relative h-full">
            <div className="loop-track-mobile">
              <div className="loop-group-mobile dir-up">
                <div className="loop-item-mobile wave-left bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item-mobile teardrop-up bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile pebble-a bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item-mobile leaf-a bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item-mobile blob-a bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item-mobile curve-dramatic bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item-mobile wave-right bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item-mobile teardrop-down bg-gradient-to-br from-lm-light to-white"></div>
              </div>
              <div className="loop-group-mobile dir-up">
                <div className="loop-item-mobile pebble-b bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item-mobile leaf-b bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile blob-b bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item-mobile pill-c bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item-mobile wave-left bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item-mobile teardrop-up bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item-mobile curve-dramatic bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item-mobile pebble-a bg-gradient-to-br from-lm-light to-white"></div>
              </div>
            </div>
          </div>
          {/* Column 2 - down */}
          <div className="relative h-full">
            <div className="loop-track-mobile">
              <div className="loop-group-mobile dir-down">
                <div className="loop-item-mobile bar-rounded-tr bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item-mobile bar-rounded-diag-a bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item-mobile bar-rounded-3 bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item-mobile pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item-mobile bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item-mobile pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile bar-rounded-diag-b bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
              </div>
              <div className="loop-group-mobile dir-down">
                <div className="loop-item-mobile bar-rounded-tl bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item-mobile bar-rounded-diag-b bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item-mobile bar-rounded-3 bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item-mobile pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
                <div className="loop-item-mobile bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item-mobile pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile bar-rounded-diag-a bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
              </div>
            </div>
          </div>
          {/* Column 3 - up */}
          <div className="relative h-full">
            <div className="loop-track-mobile">
              <div className="loop-group-mobile dir-up">
                <div className="loop-item-mobile bar-rounded-diag-a bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item-mobile bar-rounded-3 bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item-mobile pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item-mobile bar-rounded-tr bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile bar-rounded-diag-b bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item-mobile pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item-mobile pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
              </div>
              <div className="loop-group-mobile dir-up">
                <div className="loop-item-mobile bar-rounded-diag-b bg-gradient-to-br from-lm-green to-lm-lime/80"></div>
                <div className="loop-item-mobile bar-rounded-3 bg-gradient-to-br from-lm-brand/90 to-lm-light/70"></div>
                <div className="loop-item-mobile pill-a bg-gradient-to-br from-lm-brand to-lm-green/80"></div>
                <div className="loop-item-mobile bar-rounded-tl bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile bar-rounded-diag-a bg-gradient-to-br from-lm-brand to-lm-green/60"></div>
                <div className="loop-item-mobile pill-d bg-gradient-to-br from-lm-light to-white"></div>
                <div className="loop-item-mobile bar-rounded-bottom bg-gradient-to-br from-lm-lime/90 to-lm-green/80"></div>
                <div className="loop-item-mobile pill-b bg-gradient-to-br from-white to-lm-light/80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center pt-[50%] lg:pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side - Content */}
            <div ref={textRef} className="text-center lg:text-right order-2 lg:order-1">


              {/* Main Heading */}
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-lm-ink mb-2">יוצרים</span>
                  <span className="block bg-gradient-to-l from-lm-brand via-lm-green to-lm-brand bg-clip-text text-transparent">
                    מציאות דיגיטלית
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl lg:text-2xl text-lm-ink/80 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
                  החלומות שלכם - הדיגיטל שלנו
                </p>

                <p className="text-lg sm:text-xl lg:text-xl text-lm-ink/60 leading-relaxed mx-auto lg:mx-0 max-w-xl">
                  פחות ספקים, יותר סדר. הכל במקום אחד.
                </p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col items-center lg:items-start gap-6 mt-10 lg:mt-12">
                {/* Main CTA Button */}
                <button
                  onClick={() => setIsContactPopupOpen(true)}
                  className="group asymmetric-button-primary px-10 lg:px-12 py-5 lg:py-6 text-xl lg:text-2xl font-bold text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-3">
                    בואו נתחיל
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </span>
                </button>


              </div>
            </div>

            {/* Right column removed – loop rail overlays the section */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Simple Arrow */}
      <div className="absolute bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer group">
        <div className="animate-scroll-bounce">
          <svg 
            className="w-8 h-8 text-lm-brand group-hover:text-lm-green transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={() => setIsContactPopupOpen(false)} 
      />
    </section>
  );
};

export default Hero;
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'השירותים שלנו', href: '#services', id: 'services' },
    { name: 'איך זה עובד', href: '#process', id: 'process' },
    { name: 'דיגיטל שעובד', href: '#results', id: 'results' },
    { name: 'צור קשר', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // חישוב מדויק של גובה התפריט
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight + 10 : 90; // 10px נוספים לרווח
      
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: Math.max(0, elementPosition), // וידוא שלא נגלול למקום שלילי
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-lm-light/20 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-18 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-reverse space-x-2 sm:space-x-3 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-1 sm:-inset-2 bg-lm-brand/10 rounded-xl blur group-hover:bg-lm-brand/20 transition-all duration-300"></div>
                <Image 
                  src="/logo.svg" 
                  alt="Lion Media Logo" 
                  width={40}
                  height={40}
                  className="relative z-10 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-lm-ink group-hover:text-lm-brand transition-colors duration-300">Lion Media</span>
                <span className="text-xs text-lm-ink/60 font-medium hidden sm:block">יוצרים מציאות דיגיטלית</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-reverse md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 text-lm-ink hover:text-lm-brand font-medium transition-all duration-300 group cursor-pointer rounded-lg hover:bg-lm-light/20"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-lm-brand group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-lm-brand to-lm-green px-5 py-2.5 text-sm font-bold text-white hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lm-brand/50 hover:scale-105"
            >
              <span className="relative z-10">בואו נתחיל</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lm-green to-lm-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="relative p-2 rounded-lg text-lm-ink hover:text-lm-brand hover:bg-lm-light/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lm-brand/30"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="פתח תפריט"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-lm-light/30 bg-white/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 shadow-lg">
            <div className="space-y-1 px-4 py-6">
                                {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-nav-item group flex items-center w-full px-4 py-4 text-lg font-medium text-lm-ink hover:text-lm-brand hover:bg-gradient-to-r hover:from-lm-light/20 hover:to-lm-brand/5 rounded-2xl transition-all duration-300 border border-transparent hover:border-lm-brand/10"
                >
                  <span className="flex-1 text-right">{item.name}</span>
                  <div className="w-2 h-2 bg-lm-brand rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>
                </button>
              ))}
              
              {/* CTA Button */}
              <div className="pt-4 mt-6 border-t border-lm-light/30">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center justify-center w-full rounded-2xl bg-gradient-to-r from-lm-brand to-lm-green px-6 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl hover:from-lm-green hover:to-lm-brand transition-all duration-300 transform hover:scale-105"
                >
                  <span>בואו נתחיל</span>
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
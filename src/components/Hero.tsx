'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lm-bg pt-20">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-lm-brand/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-lm-lime/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-lm-brand mb-8">
            LION MEDIA
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-lm-ink leading-[1.1] mb-8">
            כל הדיגיטל.
            <br />
            <span className="text-lm-brand">בית אחד.</span>
          </h1>

          <p className="text-lg sm:text-xl text-lm-ink/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            אתרים, אוטומציות, בוטים חכמים, סושיאל ומערכות מותאמות —
            <br className="hidden sm:block" />
            ספק אחד שמחבר את הכל.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => scrollTo('contact')}
              className="bg-lm-ink text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-lm-ink/85 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              בואו נדבר
            </motion.button>
            <button
              onClick={() => scrollTo('services')}
              className="text-lm-ink/50 hover:text-lm-ink text-lg font-medium transition-colors duration-200"
            >
              מה אנחנו עושים
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-lm-ink/15 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-lm-ink/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactPopup from './ContactPopup';

const CTABand = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lm-ink mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-lg text-lm-ink/40 mb-10 max-w-xl mx-auto">
            ספרו לנו על העסק שלכם ונחזור עם תוכנית פעולה ברורה.
          </p>
          <motion.button
            onClick={() => setIsOpen(true)}
            className="bg-lm-ink text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-lm-ink/85 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            בואו נדבר
          </motion.button>
        </motion.div>
      </div>

      <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default CTABand;

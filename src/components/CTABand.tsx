'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactPopup from './ContactPopup';

const CTABand = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <section id="contact" className="py-16 lg:py-20 bg-lm-brand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            החלום שלכם. הדיגיטל שלנו.
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            ספק אחד, מערכת אחת, תוצאה ברורה.
          </p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsContactPopupOpen(true)}
              className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-lm-brand hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lm-brand shadow-lg hover:shadow-xl"
            >
              דברו איתנו עכשיו
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={() => setIsContactPopupOpen(false)} 
      />
    </section>
  );
};

export default CTABand;
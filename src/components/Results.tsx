'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ContactPopup from './ContactPopup';

const Results = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const features = [
    {
      number: "3x",
      title: "יותר פניות",
      description: "לידים איכותיים"
    },
    {
      number: "70%",
      title: "פחות עבודה",
      description: "אוטומציה חכמה"
    },
    {
      number: "24/7",
      title: "זמינות",
      description: "שירות מתמיד"
    },
    {
      number: "100%",
      title: "מותאם אישית",
      description: "לעסק שלכם"
    }
  ];

  return (
    <section id="results" ref={containerRef} className="py-16 lg:py-20 bg-gradient-to-br from-white to-lm-light/20 relative overflow-hidden">
      
      {/* רקע מינימליסטי */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-40 h-40 bg-lm-brand rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת מינימליסטית */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lm-ink mb-4">
            התוצאה
          </h2>
          <p className="text-lg text-lm-ink/70 max-w-2xl mx-auto">
            יותר פניות ומכירות. פחות כאב ראש.
          </p>
        </motion.div>

        {/* סטטיסטיקות מרכזיות */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-white rounded-2xl border border-lm-light/30 hover:border-lm-brand/30 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="text-3xl lg:text-4xl font-bold text-lm-brand mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
              >
                {feature.number}
              </motion.div>
              <h3 className="text-lg font-bold text-lm-ink mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-lm-ink/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* תיאור נוסף */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
            
            <motion.div 
              className="p-6 bg-white/50 rounded-xl border border-lm-light/20"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.8)' }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-lm-ink mb-2">שקט תפעולי</h4>
              <p className="text-sm text-lm-ink/70">הכל מחובר ועובד ללא כאב ראש</p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white/50 rounded-xl border border-lm-light/20"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.8)' }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-lm-ink mb-2">גידול מדיד</h4>
              <p className="text-sm text-lm-ink/70">אתם רואים מספרים, לא רק הבטחות</p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white/50 rounded-xl border border-lm-light/20 md:col-span-2 lg:col-span-1"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.8)' }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-lm-ink mb-2">ספק אחד</h4>
              <p className="text-sm text-lm-ink/70">במקום לרדוף אחרי ספקים – יש לכם שותף אחד לדיגיטל</p>
            </motion.div>

          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={() => setIsContactPopupOpen(true)}
            className="bg-lm-brand text-white px-8 py-3 rounded-2xl font-bold hover:bg-lm-green transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            רוצה לראות איך זה עובד?
          </motion.button>
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

export default Results;
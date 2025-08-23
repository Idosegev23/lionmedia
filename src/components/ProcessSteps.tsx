'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ProcessSteps = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'מגדירים יעד',
      description: 'לידים, מכירות, שירות או ניהול.',
      color: 'from-lm-brand to-lm-green'
    },
    {
      number: '02', 
      title: 'בונים פתרון',
      description: 'אתר, חנות, קמפיינים, אוטומציות – הכל מותאם לעסק שלכם.',
      color: 'from-lm-green to-lm-lime'
    },
    {
      number: '03',
      title: 'מודדים וצומחים',
      description: 'השקה, אנליטיקה, שיפור מתמיד.',
      color: 'from-lm-lime to-lm-brand'
    }
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-white relative overflow-hidden">
      
      {/* רקע מינימליסטי */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-lm-brand rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת מינימליסטית */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lm-ink mb-4">
            הדרך שלנו פשוטה וברורה
          </h2>
          <div className="w-16 h-0.5 bg-lm-brand mx-auto rounded-full"></div>
        </motion.div>

        {/* השלבים בפריסה אופקית */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* קו חיבור */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-lm-brand/30 z-0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                />
              )}
              
              <div className={`text-center p-6 rounded-2xl border-2 transition-all duration-300 relative ${
                activeStep === index 
                  ? 'border-lm-brand bg-lm-brand/5 scale-105' 
                  : 'border-lm-light/50 bg-white hover:border-lm-brand/30 hover:bg-lm-brand/2'
              }`}>
                
                {/* מספר */}
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-300 ${
                    activeStep === index 
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg` 
                      : 'bg-lm-light/30 text-lm-ink'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.div>
                
                {/* תוכן */}
                <h3 className="text-xl lg:text-2xl font-bold text-lm-ink mb-2">
                  {step.title}
                </h3>
                
                <p className="text-lm-ink/70 text-sm lg:text-base">
                  {step.description}
                </p>
                
                {/* אינדיקטור פעיל */}
                {activeStep === index && (
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-lm-brand rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;
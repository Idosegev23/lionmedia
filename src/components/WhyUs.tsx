'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const WhyUs = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [hovered, setHovered] = useState(false);

  // אנימציות כניסה מפתיעות
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateX: -90,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: {
        damping: 20,
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotateY: 180,
      z: -200
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        damping: 25,
        stiffness: 80,
        delay: 0.6
      }
    }
  };

  const problemBoxVariants = {
    hidden: { x: -200, opacity: 0, rotate: -10 },
    visible: { 
      x: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        damping: 20, 
        delay: 1.2 
      }
    }
  };

  const solutionBoxVariants = {
    hidden: { x: 200, opacity: 0, rotate: 10 },
    visible: { 
      x: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        damping: 20, 
        delay: 1.6 
      }
    }
  };

  const centerConnectorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: 2.0
      }
    }
  };

  return (
    <section className="py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-lm-bg via-white to-lm-light/30 relative overflow-hidden">
      {/* רקע גיאומטרי מתמרכז */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-lm-brand rounded-full"
          animate={{ 
            scale: isInView ? [1, 1.2, 1] : 1,
            rotate: isInView ? [0, 180, 360] : 0
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 bg-lm-green rounded-full"
          animate={{ 
            scale: isInView ? [1, 0.8, 1] : 1,
            rotate: isInView ? [0, -180, -360] : 0
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        </div>

      <div ref={containerRef} className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* כותרת עם אנימציה 3D */}
        <motion.div 
          className="text-center mb-20 lg:mb-28"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-lm-ink leading-tight perspective-1000">
            <motion.span 
              className="block"
              whileHover={{ scale: 1.05, color: "#0597F2" }}
              transition={{ duration: 0.3 }}
            >
              הכל לעסק שלכם
            </motion.span>
            <motion.span 
              className="block text-lm-brand bg-gradient-to-r from-lm-brand to-lm-green bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              במקום אחד
            </motion.span>
          </h2>
        </motion.div>

        {/* הכרטיס המרכזי עם אנימציית 3D */}
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <motion.div 
            className="relative"
            whileHover={{ 
              scale: 1.02,
              rotateY: hovered ? 2 : 0,
              rotateX: hovered ? -2 : 0
            }}
            transition={{ duration: 0.5 }}
            style={{ perspective: "1000px" }}
          >
            
            {/* פריסה ייחודית: בעיה -> פתרון */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              {/* תיבת הבעיה */}
              <motion.div
                variants={problemBoxVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-10 border-2 border-red-100 relative overflow-hidden"
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-red-700 mb-4">
                    😰 הבעיה
                  </h3>
                  <p className="text-lg lg:text-xl text-red-600 leading-relaxed">
                    בעלי עסקים מתמודדים עם בלגן דיגיטלי – ספק לאתר, ספק לקמפיינים, ספק לאוטומציה.
                  </p>
                </div>
              </motion.div>

              {/* חיבור מרכזי */}
              <motion.div 
                className="flex justify-center items-center"
                variants={centerConnectorVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-lm-brand to-lm-green rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                    animate={{ 
                      rotate: isInView ? [0, 360] : 0,
                      scale: isInView ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* אייקון גיאומטרי מתקדם */}
                    <div className="relative w-12 h-12">
                      {/* צורה מרכזית */}
                      <motion.div 
                        className="absolute inset-0 bg-white/90 rounded-lg"
                        animate={{ 
                          rotateY: isInView ? [0, 180, 360] : 0
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* קווים דינמיים */}
                      <motion.div 
                        className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-lm-brand rounded-full -translate-x-1/2 -translate-y-1/2"
                        animate={{ 
                          scaleX: isInView ? [1, 0.3, 1] : 1,
                          rotate: isInView ? [0, 90, 180] : 0
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-lm-green rounded-full -translate-x-1/2 -translate-y-1/2"
                        animate={{ 
                          scaleY: isInView ? [1, 0.3, 1] : 1,
                          rotate: isInView ? [0, -90, -180] : 0
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                      
                      {/* נקודות פינות */}
                      <motion.div 
                        className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"
                        animate={{ 
                          scale: isInView ? [1, 1.5, 1] : 1,
                          opacity: isInView ? [1, 0.5, 1] : 1
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
                        animate={{ 
                          scale: isInView ? [1, 1.5, 1] : 1,
                          opacity: isInView ? [1, 0.5, 1] : 1
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      />
                      <motion.div 
                        className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full"
                        animate={{ 
                          scale: isInView ? [1, 1.5, 1] : 1,
                          opacity: isInView ? [1, 0.5, 1] : 1
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      />
                      <motion.div 
                        className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full"
                        animate={{ 
                          scale: isInView ? [1, 1.5, 1] : 1,
                          opacity: isInView ? [1, 0.5, 1] : 1
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* קווי חיבור */}
                  <motion.div 
                    className="absolute top-1/2 -left-16 w-16 h-1 bg-gradient-to-r from-lm-brand to-lm-green rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-1/2 -right-16 w-16 h-1 bg-gradient-to-r from-lm-green to-lm-brand rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 2.4, duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* תיבת הפתרון */}
              <motion.div
                variants={solutionBoxVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 border-2 border-green-100 relative overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className="absolute top-0 left-0 w-20 h-20 bg-green-200/30 rounded-full -translate-y-10 -translate-x-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-green-700 mb-4">
                    ✨ הפתרון
                  </h3>
                  <p className="text-lg lg:text-xl text-green-600 leading-relaxed">
                    אנחנו מחברים הכל למערכת אחת: אתרים, סושיאל, בוטים חכמים, אוטומציות ומערכות ניהול. שותף אחד לדיגיטל.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* המסר הסופי */}
            <motion.div 
              className="mt-16 lg:mt-20 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              <motion.div 
                className="bg-gradient-to-r from-lm-brand via-lm-green to-lm-lime p-1 rounded-3xl max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white rounded-3xl p-8 lg:p-12">
                  <p className="text-2xl lg:text-4xl font-bold text-lm-ink leading-relaxed">
                    <span className="text-lm-brand">אתם מביאים חזון.</span><br />
                    <span className="text-lm-green">אנחנו הופכים אותו למציאות שעובדת אונליין.</span>
                  </p>
          </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
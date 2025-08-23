'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  GlobeAltIcon, 
  ShoppingCartIcon, 
  SpeakerWaveIcon, 
  ChatBubbleLeftRightIcon,
  CogIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

const ServicesGrid = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeService, setActiveService] = useState(0);

  // מיקומים קבועים במקום Math.random()
  const backgroundPositions = [
    { top: 20, left: 10 },
    { top: 70, left: 80 },
    { top: 30, left: 60 },
    { top: 80, left: 30 },
    { top: 10, left: 90 },
    { top: 60, left: 15 }
  ];

  const services = [
    {
      icon: GlobeAltIcon,
      title: 'אתרים ודפי נחיתה',
      description: 'הפנים של העסק אונליין. מהירים, יפים ומביאים לידים.',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50'
    },
    {
      icon: ShoppingCartIcon,
      title: 'חנויות אונליין',
      description: 'חוויית קנייה פשוטה ובטוחה שמגדילה מכירות.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: SpeakerWaveIcon,
      title: 'סושיאל וקמפיינים',
      description: 'תוכן ופרסום שמביא לקוחות חדשים.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'בוטים חכמים - AI',
      description: 'שירות לקוחות זמין 24/7 שמגדיל שביעות רצון.',
      color: 'from-lm-brand to-lm-green',
      bgColor: 'from-blue-50 to-green-50'
    },
    {
      icon: CogIcon,
      title: 'אוטומציות',
      description: 'פחות עבודת ידיים, יותר דיוק ויעילות.',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'from-gray-50 to-gray-100'
    },
    {
      icon: CommandLineIcon,
      title: 'מערכות מותאמות',
      description: 'CRM ודשבורדים שמותאמים לעסק שלכם ולא להפך.',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section id="services" ref={containerRef} className="py-16 lg:py-24 bg-gradient-to-br from-lm-bg via-white to-lm-light/40 relative overflow-hidden">
      
      {/* רקע גיאומטרי דינמי */}
      <div className="absolute inset-0 opacity-5">
        {services.map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-20 h-20 bg-gradient-to-r ${services[index].color} rounded-full blur-xl`}
            style={{
              top: `${backgroundPositions[index].top}%`,
              left: `${backgroundPositions[index].left}%`,
            }}
            animate={{
              scale: isInView ? [1, 1.2, 1] : 1,
              opacity: isInView ? [0.3, 0.7, 0.3] : 0.3,
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת מפתיעה */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, rotateX: -90 }}
          animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
          transition={{ duration: 1, type: "spring", damping: 20 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lm-ink leading-tight mb-4">
            מה אנחנו יודעים
            <motion.span 
              className="block text-lm-brand"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              לעשות הכי טוב
            </motion.span>
          </h2>
        </motion.div>

        {/* עיצוב חדש: שירות מרכזי + רצועות צדדים */}
        <div className="relative">
          
          {/* השירות הפעיל במרכז */}
          <motion.div 
            className="relative mb-8 lg:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className={`bg-gradient-to-br ${services[activeService].bgColor} rounded-3xl p-8 lg:p-12 border-2 border-lm-brand/20 relative overflow-hidden`}>
              
              {/* אפקט רקע דינמי */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${services[activeService].color} opacity-5`}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10 text-center lg:text-right lg:flex lg:items-center lg:gap-12">
                
                {/* אייקון מרכזי מעניין */}
                <motion.div 
                  className="flex justify-center lg:justify-start mb-6 lg:mb-0"
                  whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-r ${services[activeService].color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                    {(() => {
                      const IconComponent = services[activeService].icon;
                      return <IconComponent className="w-12 h-12 lg:w-16 lg:h-16 text-white" />;
                    })()}
                  </div>
                </motion.div>
                
                {/* תוכן השירות */}
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl lg:text-4xl font-bold text-lm-ink mb-4"
                    key={activeService}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {services[activeService].title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg lg:text-xl text-lm-ink/80 leading-relaxed"
                    key={`desc-${activeService}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {services[activeService].description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* רצועת השירותים החדשה - קומפקטית */}
          <motion.div 
            className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                className={`group relative p-4 lg:p-6 rounded-2xl transition-all duration-300 ${
                  activeService === index 
                    ? `bg-gradient-to-br ${service.bgColor} border-2 border-lm-brand scale-105` 
                    : 'bg-white border-2 border-gray-100 hover:border-lm-brand/30'
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: activeService === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              >
                
                {/* אייקון קטן */}
                <motion.div 
                  className={`w-8 h-8 lg:w-12 lg:h-12 mx-auto mb-2 lg:mb-3 rounded-lg flex items-center justify-center ${
                    activeService === index 
                      ? `bg-gradient-to-r ${service.color}` 
                      : 'bg-gray-100 group-hover:bg-lm-brand/10'
                  }`}
                  whileHover={{ rotate: 5 }}
                >
                  {(() => {
                    const IconComponent = service.icon;
                    return <IconComponent className={`w-4 h-4 lg:w-6 lg:h-6 ${
                      activeService === index ? 'text-white' : 'text-gray-600 group-hover:text-lm-brand'
                    }`} />;
                  })()}
                </motion.div>
                
                {/* כותרת קטנה */}
                <h4 className={`text-xs lg:text-sm font-bold leading-tight ${
                  activeService === index ? 'text-lm-ink' : 'text-gray-600 group-hover:text-lm-brand'
                }`}>
                  {service.title.split(' ').slice(0, 2).join(' ')}
                </h4>
                
                {/* אינדיקטור פעיל */}
                {activeService === index && (
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-lm-brand rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

        </div>

        {/* CTA קטן ונקי */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center rounded-2xl bg-lm-brand px-6 py-3 text-white font-bold hover:bg-lm-green transition-all duration-300 hover:scale-105 shadow-lg"
          >
            גלה עוד על השירותים
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesGrid;
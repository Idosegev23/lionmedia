'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Zap, BarChart, Smartphone, Target, Bot, ArrowLeft, Play, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

const SimpleMacMockup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-4xl mx-auto -z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* MacBook Frame */}
      <div className="relative bg-gray-800 rounded-t-2xl p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full aspect-[16/10] bg-black rounded-xl overflow-hidden relative">
          
          {/* Browser Chrome */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
            {/* Traffic Lights */}
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            {/* URL Bar */}
            <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>tech-solutions.co.il</span>
              </span>
              <Star className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Website Content */}
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-neutral-light)] via-white to-[var(--color-accent-3)]/10 overflow-y-auto">
            
            {/* Header/Navigation */}
            <motion.div
              className="flex justify-between items-center px-8 py-6 bg-white/90 backdrop-blur-sm border-b border-gray-100"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="font-black text-[var(--color-text-dark)] text-xl">TechSolutions</span>
              </div>
              <div className="flex gap-8 text-base text-gray-700">
                <span className="hover:text-[var(--color-primary)] cursor-pointer font-medium transition-colors">בית</span>
                <span className="hover:text-[var(--color-primary)] cursor-pointer font-medium transition-colors">שירותים</span>
                <span className="hover:text-[var(--color-primary)] cursor-pointer font-medium transition-colors">עבודות</span>
                <span className="hover:text-[var(--color-primary)] cursor-pointer font-medium transition-colors">צור קשר</span>
              </div>
            </motion.div>

            {/* Hero Section */}
            <motion.div
              className="px-8 py-12 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Zap className="w-4 h-4" />
                <span>פתרונות טכנולוגיים מתקדמים</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl font-black text-[var(--color-text-dark)] mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                מערכות מידע מתקדמות<br/>
                לארגונים גדולים
              </motion.h1>
              
              <motion.p
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                פיתוח תוכנה מותאם אישית, מערכות ERP ופתרונות ענן שמייעלים תהליכים עסקיים
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-4 justify-center mb-12"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <motion.button
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>קבלו הצעה</span>
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  <span>הדגמה</span>
                </motion.button>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ delay: 1.7, duration: 0.8 }}
              >
                {[
                  { icon: Globe, title: 'מערכות ERP', desc: 'מערכות ניהול משאבים מתקדמות', color: 'text-blue-500' },
                  { icon: Bot, title: 'פתרונות AI', desc: 'אלגוריתמים חכמים ולמידת מכונה', color: 'text-purple-500' },
                  { icon: BarChart, title: 'אנליטיקה', desc: 'ניתוח נתונים ודוחות מתקדמים', color: 'text-green-500' },
                  { icon: Zap, title: 'אוטומציה', desc: 'תהליכים אוטומטיים וחכמים', color: 'text-yellow-500' },
                  { icon: Smartphone, title: 'אפליקציות', desc: 'פתרונות מובייל וטאבלט', color: 'text-indigo-500' },
                  { icon: Target, title: 'אינטגרציה', desc: 'חיבור מערכות קיימות', color: 'text-red-500' }
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md border border-white/50 hover:shadow-lg transition-all group"
                      initial={{ scale: 0, rotate: -5 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -5 }}
                      transition={{ delay: 1.9 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`w-12 h-12 ${service.color} mx-auto mb-3 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-base text-[var(--color-text-dark)] mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex justify-center gap-12 mt-12 pt-8 border-t border-gray-200"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 2.5, duration: 0.6 }}
              >
                {[
                  { number: '200+', label: 'ארגונים משתמשים', icon: Users },
                  { number: '500+', label: 'מערכות פועלות', icon: CheckCircle },
                  { number: '99.9%', label: 'זמינות המערכת', icon: TrendingUp }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="text-center group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <IconComponent className="w-6 h-6 text-[var(--color-accent-1)] mr-2" />
                        <div className="text-2xl font-black text-[var(--color-primary)]">{stat.number}</div>
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-[var(--color-primary)] transition-colors">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Testimonials Section */}
              <motion.div
                className="mt-16 px-8"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
              >
                <h2 className="text-2xl font-black text-[var(--color-text-dark)] text-center mb-8">
                  לקוחות מספרים
                </h2>
                <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    {
                      text: "המערכת שפיתחו לנו חסכה לנו 40% מזמן העבודה וייעלה את כל התהליכים.",
                      author: "מנכ\"ל",
                      company: "בנק הפועלים",
                      rating: 5
                    },
                    {
                      text: "פתרון מתקדם שמתאים בדיוק לצרכים שלנו. תמיכה מעולה ויישום מקצועי.",
                      author: "מנהל IT",
                      company: "משרד הביטחון",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/50"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                      transition={{ delay: 3 + index * 0.2, duration: 0.6 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 mb-4 italic leading-relaxed">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="font-semibold text-[var(--color-text-dark)] text-sm">{testimonial.author}</div>
                        <div className="text-xs text-gray-500">{testimonial.company}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Footer */}
              <motion.div
                className="mt-16 px-8 py-12 bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent-1)]/5 rounded-2xl mx-8"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ delay: 3.5, duration: 0.8 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-black text-[var(--color-text-dark)] mb-4">
                    צריכים פתרון מותאם?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    פנו אלינו עוד היום לקבלת הצעה מותאמת לארגון שלכם
                  </p>
                  <motion.button
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>פנו אלינו</span>
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* MacBook Base */}
      <motion.div
        className="relative h-6 bg-gray-700 rounded-b-2xl"
        initial={{ scaleX: 0.8, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0.8, opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-600 rounded-b-lg"></div>
      </motion.div>
    </motion.div>
  );
};

export default SimpleMacMockup;
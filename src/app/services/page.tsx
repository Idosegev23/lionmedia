'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GlobeAltIcon, 
  ShoppingCartIcon, 
  SpeakerWaveIcon, 
  ChatBubbleLeftRightIcon,
  CogIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'אתרים ודפי נחיתה',
      description: 'הפנים של העסק. יפים, מהירים, ממירים.',
      features: [
        'עיצוב מותאם אישית ומודרני',
        'טכנולוגיות מתקדמות ומהירות טעינה',
        'ממוטבים להמרות ולקיד ג\'נרציה',
        'רספונסיביים לכל המכשירים',
        'אופטימיזציה למנועי חיפוש (SEO)'
      ]
    },
    {
      icon: ShoppingCartIcon,
      title: 'חנויות אונליין',
      description: 'חוויה חלקה. תשלום מאובטח. ניהול מלאי וחיבורי סליקה.',
      features: [
        'פלטפורמות מסחר מתקדמות',
        'מערכות תשלום מאובטחות',
        'ניהול מלאי ומוצרים',
        'אינטגרציה עם מערכות CRM',
        'דשבורד ניהול מכירות'
      ]
    },
    {
      icon: SpeakerWaveIcon,
      title: 'סושיאל וקמפיינים',
      description: 'אסטרטגיה, תוכן, יצירה ומדיה ממומנת.',
      features: [
        'אסטרטגיית תוכן ומיתוג',
        'יצירת תוכן ויזואלי איכותי',
        'ניהול קמפיינים ממומנים',
        'ניתוח ביצועים ואופטימיזציה',
        'ניהול קהילות ברשתות חברתיות'
      ]
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'בוטים חכמים',
      description: 'צ\'אט ללקוחות, מענה לשאלות, ניתוב לידים, תמיכה 24-7.',
      features: [
        'בוטי צ\'אט מבוססי בינה מלאכותית',
        'מענה אוטומטי 24/7',
        'ניתוב חכם ללקוחות פוטנציאליים',
        'אינטגרציה עם מערכות CRM',
        'למידה והשתפרות מתמשכת'
      ]
    },
    {
      icon: CogIcon,
      title: 'אוטומציות',
      description: 'אינטגרציות בין מערכות, טריגרים, דיווחים, חיסכון בזמן.',
      features: [
        'אוטומציות תהליכי עבודה',
        'אינטגרציות בין מערכות שונות',
        'דיווחים אוטומטיים',
        'התרעות וטריגרים חכמים',
        'ניהול לידים אוטומטי'
      ]
    },
    {
      icon: CommandLineIcon,
      title: 'מערכות מותאמות',
      description: 'CRM, דשבורדים ופתרונות ניהול לפי צורך.',
      features: [
        'מערכות CRM מותאמות אישית',
        'דשבורדים ניהוליים מתקדמים',
        'מערכות ניהול פרויקטים',
        'כלי ניתוח ודיווח',
        'פתרונות ייחודיים לעסק'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-lm-bg">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-lm-ink sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              שירותי דיגיטל מקצה לקצה
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-lm-ink/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              פתרונות טכנולוגיים מתקדמים שמתאימים בדיוק לצרכים של העסק שלכם
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-card border border-lm-light/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-reverse space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-lm-light/50 rounded-xl">
                      <service.icon className="w-8 h-8 text-lm-brand" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-lm-ink mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-lm-ink/80 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-reverse space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-lm-brand rounded-full mt-2"></div>
                          <span className="text-lm-ink/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-lm-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              מוכנים להתחיל?
            </h2>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
              בואו נדבר על איך נוכל לעזור לעסק שלכם לצמוח בדיגיטל
            </p>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-lm-brand hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-lm-brand shadow-lg hover:shadow-xl"
              >
                בואו נתחיל לעבוד יחד
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
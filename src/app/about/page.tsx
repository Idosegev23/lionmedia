'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  HeartIcon,
  AdjustmentsHorizontalIcon, 
  EyeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      icon: HeartIcon,
      title: 'הקשבה',
      description: 'מקשיבים לצרכים האמיתיים ומבינים את החזון של העסק'
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'דיוק',
      description: 'עובדים בדיוק לפי הדרישות ומתאימים פתרונות מושלמים'
    },
    {
      icon: EyeIcon,
      title: 'שקיפות',
      description: 'תהליך עבודה ברור עם עדכונים שוטפים ותקשורת פתוחה'
    },
    {
      icon: UserGroupIcon,
      title: 'שיתוף פעולה',
      description: 'עבודה כצוות אחד יחד עם הלקוחות לקראת המטרה המשותפת'
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
              מי אנחנו
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-lm-ink/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              הסיפור שלנו, החזון שלנו, והדרך שלנו ליצור מציאות דיגיטלית
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-lm-ink mb-6">הסיפור שלנו</h2>
                <div className="space-y-4 text-lg text-lm-ink/80 leading-relaxed">
                  <p>
                    Lion Media נולדה מתוך הרצון לתת לעסקים פתרון דיגיטלי מלא – במקום אחד.
                  </p>
                  <p>
                    אנחנו מאמינים שהדיגיטל צריך להיות פשוט, ברור וממוקד תוצאות.
                  </p>
                  <p>
                    השילוב של יצירתיות, טכנולוגיה ובינה מלאכותית מאפשר לנו לקחת חלומות – 
                    ולהפוך אותם לכלי עבודה אמיתיים.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision & Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-lm-light/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-lm-ink mb-4">החזון שלנו</h3>
                <p className="text-lm-ink/80 leading-relaxed">
                  להיות המקום שאליו פונים כשצריך פתרון דיגיטלי כולל.
                </p>
              </div>
              
              <div className="bg-lm-brand/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-lm-ink mb-4">הדרך שלנו</h3>
                <p className="text-lm-ink/80 leading-relaxed">
                  הקשבה, דיוק, ובנייה צמודה לצרכים האמיתיים של העסק.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-lm-ink sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              הערכים שלנו
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-lm-ink/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              הדברים שמנחים אותנו בכל פרויקט
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lm-light/50 rounded-xl mb-6">
                  <value.icon className="w-8 h-8 text-lm-brand" />
                </div>
                <h3 className="text-xl font-semibold text-lm-ink mb-4">
                  {value.title}
                </h3>
                <p className="text-lm-ink/70 leading-relaxed">
                  {value.description}
                </p>
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
              בואו נכיר
            </h2>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
              מוכנים לשמוע על הפרויקט שלכם ולהפוך אותו למציאות דיגיטלית?
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
                בואו נדבר
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
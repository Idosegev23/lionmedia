'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'דואר אלקטרוני',
      value: 'contact@lionmedia.com',
      href: 'mailto:contact@lionmedia.com',
      description: 'כתבו לנו ונחזור אליכם תוך 24 שעות'
    },
    {
      icon: PhoneIcon,
      title: 'טלפון',
      value: '054-xxx-xxxx',
      href: 'tel:054-xxx-xxxx',
      description: 'התקשרו ונדבר על הפרויקט שלכם'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'WhatsApp',
      value: 'צ\'אט מהיר',
      href: 'https://wa.me/972XXXXXXXXX',
      description: 'שאלות מהירות ותיאום פגישות'
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
              בואו נבנה את זה יחד
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl leading-8 text-lm-ink/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              יש לכם חלום דיגיטלי? אנחנו כאן להפוך אותו למציאות.
            </motion.p>
            <motion.p 
              className="mt-4 text-lg text-lm-ink/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              לא משנה אם מדובר באתר, אוטומציה או קמפיין – הכל מתחיל בשיחה פשוטה.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl p-8 text-center shadow-card border border-lm-light/50 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lm-light/50 rounded-xl mb-6 group-hover:bg-lm-brand/10 transition-colors duration-200">
                  <method.icon className="w-8 h-8 text-lm-brand" />
                </div>
                <h3 className="text-xl font-semibold text-lm-ink mb-2">
                  {method.title}
                </h3>
                <p className="text-lg font-medium text-lm-brand mb-2">
                  {method.value}
                </p>
                <p className="text-sm text-lm-ink/70">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-lm-ink sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              או שלחו לנו הודעה
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-lm-ink/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              מלאו את הטופס ונחזור אליכם בהקדם
            </motion.p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-lm-ink mb-6">
              איך נעבוד יחד?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lm-brand text-white rounded-full text-lg font-bold mb-4">
                  1
                </div>
                <h4 className="font-semibold text-lm-ink mb-2">פגישת היכרות</h4>
                <p className="text-sm text-lm-ink/70">נכיר ונבין את הצרכים שלכם</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lm-brand text-white rounded-full text-lg font-bold mb-4">
                  2
                </div>
                <h4 className="font-semibold text-lm-ink mb-2">הצעת מחיר</h4>
                <p className="text-sm text-lm-ink/70">נכין הצעה מפורטת ומותאמת</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lm-brand text-white rounded-full text-lg font-bold mb-4">
                  3
                </div>
                <h4 className="font-semibold text-lm-ink mb-2">יוצאים לדרך</h4>
                <p className="text-sm text-lm-ink/70">מתחילים לבנות את החלום שלכם</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
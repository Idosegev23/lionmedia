'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  GlobeAltIcon,
  ShoppingCartIcon,
  SpeakerWaveIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const services = [
    {
      icon: GlobeAltIcon,
      title: 'אתרים ודפי נחיתה',
      description: 'מהירים, מעוצבים ובנויים להמיר.',
    },
    {
      icon: ShoppingCartIcon,
      title: 'חנויות אונליין',
      description: 'חוויית קנייה שמגדילה מכירות.',
    },
    {
      icon: SpeakerWaveIcon,
      title: 'סושיאל וקמפיינים',
      description: 'תוכן ופרסום שמביא לקוחות.',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'בוטים חכמים',
      description: 'שירות לקוחות 24/7 עם AI.',
    },
    {
      icon: CogIcon,
      title: 'אוטומציות',
      description: 'פחות ידיים, יותר דיוק.',
    },
    {
      icon: CommandLineIcon,
      title: 'מערכות מותאמות',
      description: 'CRM ודשבורדים שנבנו בדיוק לכם.',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-lm-bg">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lm-ink mb-5">
            מה אנחנו עושים
          </h2>
          <p className="text-lg text-lm-ink/40">
            כל מה שהעסק שלכם צריך בדיגיטל
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group bg-white rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <div className="w-12 h-12 bg-lm-brand/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lm-brand/15 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-lm-brand" />
                </div>
                <h3 className="text-lg font-bold text-lm-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-lm-ink/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

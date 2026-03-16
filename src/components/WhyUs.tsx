'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      title: 'ספק אחד',
      description:
        'במקום לנהל 5 ספקים שונים — אתם מקבלים שותף אחד שאחראי על הכל.',
    },
    {
      title: 'מערכת מחוברת',
      description:
        'האתר, הבוט, הקמפיינים והאוטומציות — הכל עובד ביחד כמכונה אחת.',
    },
    {
      title: 'תוצאות מדידות',
      description:
        'לא הבטחות. מספרים. אתם רואים בדיוק מה עובד ומה להגדיל.',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lm-ink mb-5">
            למה בית אחד?
          </h2>
          <p className="text-lg text-lm-ink/40 max-w-xl mx-auto">
            כשהכל תחת קורת גג אחת — הכל פשוט עובד טוב יותר.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            >
              <div className="w-12 h-12 bg-lm-brand/8 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <span className="text-lm-brand font-bold text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-lm-ink mb-3">
                {value.title}
              </h3>
              <p className="text-lm-ink/50 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

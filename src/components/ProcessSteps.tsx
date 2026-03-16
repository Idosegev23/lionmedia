'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProcessSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      number: '01',
      title: 'מגדירים יעד',
      description: 'מבינים מה העסק צריך — לידים, מכירות, שירות או ניהול.',
    },
    {
      number: '02',
      title: 'בונים פתרון',
      description: 'מעצבים ומפתחים מערכת מותאמת, מחוברת ומדידה.',
    },
    {
      number: '03',
      title: 'מודדים וצומחים',
      description: 'משיקים, מנטרים ומשפרים — כל הזמן.',
    },
  ];

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-lm-ink mb-5">
            איך זה עובד
          </h2>
          <p className="text-lg text-lm-ink/40">
            תהליך פשוט. תוצאה ברורה.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <div className="text-6xl lg:text-7xl font-black text-lm-brand/10 leading-none mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-lm-ink mb-3">
                {step.title}
              </h3>
              <p className="text-lm-ink/50 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: '3x', label: 'יותר פניות' },
    { value: '70%', label: 'פחות עבודה ידנית' },
    { value: '24/7', label: 'זמינות מלאה' },
    { value: '100%', label: 'מותאם לעסק' },
  ];

  return (
    <section id="results" ref={ref} className="py-24 lg:py-32 bg-lm-ink">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            התוצאות מדברות
          </h2>
          <p className="text-lg text-white/40">
            יותר פניות ומכירות. פחות כאב ראש.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-lm-brand mb-3">
                {stat.value}
              </div>
              <div className="text-white/50 font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;

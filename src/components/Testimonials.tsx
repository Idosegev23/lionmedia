'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'אורית',
      role: 'בעלת חנות אונליין',
      content: 'תוך חודש ראינו עליה בלידים ובמכירות. סוף סוף הכל מחובר.'
    },
    {
      name: 'מאור',
      role: 'מנהל שיווק',
      content: 'אוטומציות ובוט שירות חסכו עשרות שעות בשבוע.'
    },
    {
      name: 'יואב',
      role: 'יזם',
      content: 'מסע עבודה ברור, תוצר נקי, ותוצאות.'
    }
  ];

  return (
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
            מה הלקוחות שלנו אומרים
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-lm-light/20 rounded-2xl p-8 border border-lm-light/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <blockquote className="text-lg text-lm-ink/90 italic mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="border-r-4 border-lm-brand pr-4">
                <p className="font-semibold text-lm-ink">
                  {testimonial.name}
                </p>
                <p className="text-sm text-lm-ink/70">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
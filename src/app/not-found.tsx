'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-lm-bg flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-lm-brand mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-lm-ink mb-6">
            הדף לא נמצא
          </h2>
          <p className="text-lg text-lm-ink/70 mb-8 max-w-md">
            הדף שחיפשתם אינו קיים או שהועבר למיקום אחר.
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-lm-brand px-6 py-3 text-white font-semibold hover:bg-lm-brand/90 transition-colors duration-200"
            >
              חזרה לעמוד הבית
            </Link>
            <div className="text-sm text-lm-ink/60">
              או{' '}
              <Link href="/contact" className="text-lm-brand hover:underline">
                צרו איתנו קשר
              </Link>{' '}
              אם אתם צריכים עזרה
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
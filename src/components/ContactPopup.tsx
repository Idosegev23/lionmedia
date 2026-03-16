'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border border-gray-200 rounded-xl py-3 px-4 text-lm-ink placeholder-lm-ink/30 focus:outline-none focus:ring-2 focus:ring-lm-brand/20 focus:border-lm-brand/40 transition-all text-sm';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-lm-ink/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Header */}
              <div className="p-6 pb-0 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-lm-ink">
                    בואו נדבר
                  </h3>
                  <p className="text-lm-ink/40 text-sm mt-1">
                    נחזור אליכם תוך יום עסקים
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-lm-ink/25 hover:text-lm-ink text-2xl leading-none p-1 transition-colors"
                  aria-label="סגור"
                >
                  &times;
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/972509595135?text=היי, אשמח לשמוע עוד על השירותים שלכם"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3.5 rounded-xl font-bold transition-colors text-sm"
                >
                  WhatsApp — מענה מיידי
                </a>

                {/* Divider */}
                <div className="relative text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100" />
                  </div>
                  <span className="relative bg-white px-4 text-xs text-lm-ink/25">
                    או
                  </span>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {status === 'success' && (
                    <div className="bg-green-50 text-green-700 p-3 rounded-xl text-center text-sm font-medium">
                      נשלח בהצלחה. נחזור אליכם בהקדם.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="bg-red-50 text-red-700 p-3 rounded-xl text-center text-sm font-medium">
                      שגיאה בשליחה. נסו שוב או פנו בוואטסאפ.
                    </div>
                  )}

                  <input
                    type="text"
                    placeholder="שם"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="אימייל"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="טלפון"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputClass}
                  />
                  <textarea
                    placeholder="ספרו בקצרה על הפרויקט (אופציונלי)"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                  />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-lm-ink text-white py-3.5 rounded-xl font-bold text-sm hover:bg-lm-ink/85 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'שולח...' : 'שלחו פנייה'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;

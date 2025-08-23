'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
  company_site: string; // Honeypot field
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    company_site: '', // Honeypot field
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          message: '',
          company_site: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'אירעה שגיאה בשליחת הטופס');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('אירעה שגיאה בחיבור לשרת');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <div className="hidden">
          <input
            type="text"
            name="company_site"
            value={formData.company_site}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-lm-ink mb-2">
              שם מלא *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-lm-light rounded-xl focus:ring-2 focus:ring-lm-brand focus:border-transparent transition-colors duration-200"
              placeholder="השם שלכם"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-lm-ink mb-2">
              טלפון *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-lm-light rounded-xl focus:ring-2 focus:ring-lm-brand focus:border-transparent transition-colors duration-200"
              placeholder="054-xxx-xxxx"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-lm-ink mb-2">
              דואר אלקטרוני *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-lm-light rounded-xl focus:ring-2 focus:ring-lm-brand focus:border-transparent transition-colors duration-200"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-lm-ink mb-2">
              חברה / עסק
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-lm-light rounded-xl focus:ring-2 focus:ring-lm-brand focus:border-transparent transition-colors duration-200"
              placeholder="שם החברה (אופציונלי)"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-lm-ink mb-2">
            הודעה *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-lm-light rounded-xl focus:ring-2 focus:ring-lm-brand focus:border-transparent transition-colors duration-200 resize-none"
            placeholder="ספרו לנו על הפרויקט שלכם..."
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-lm-green/10 border border-lm-green/20 rounded-xl p-4">
            <p className="text-lm-green font-medium">
              ✅ ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600 font-medium">
              ❌ {errorMessage}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lm-brand text-white py-4 px-6 rounded-xl font-semibold hover:bg-lm-brand/90 focus:outline-none focus:ring-2 focus:ring-lm-brand focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'שולח...' : 'שלח הודעה'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
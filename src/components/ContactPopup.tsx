'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PhoneIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
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
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

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
        setSubmitMessage({ type: 'success', text: data.message });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'שגיאה בשליחת הפנייה' });
      }
    } catch {
      setSubmitMessage({ 
        type: 'error', 
        text: 'שגיאה בחיבור לשרת. אנא נסו שוב או צרו קשר בוואטסאפ.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+972509595135';
    const message = encodeURIComponent('היי רועי! אני מעוניין לשמוע עוד על הפתרונות הדיגיטליים שלכם');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.6 
              }}
            >
              {/* Frosted Glass Card */}
              <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="relative bg-gradient-to-r from-lm-brand/10 to-lm-green/10 p-6 border-b border-white/20">
                  <motion.button
                    onClick={onClose}
                    className="absolute top-4 left-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <XMarkIcon className="w-5 h-5 text-lm-ink" />
                  </motion.button>
                  
                  <div className="text-center">
                    <motion.h3 
                      className="text-2xl font-bold text-lm-ink mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      בואו נתחיל
                    </motion.h3>
                    <motion.p 
                      className="text-lm-ink/70"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      ספרו לנו על החלום הדיגיטלי שלכם
                    </motion.p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  
                  {/* WhatsApp Option */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      onClick={handleWhatsApp}
                      className="w-full group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl p-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-green-500 text-lg font-bold">📱</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">שיחה עם רועי בוואטסאפ</div>
                          <div className="text-sm text-green-100">קבלו מענה מיידי ואישי</div>
                        </div>
                      </div>
                    </button>
                  </motion.div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white/20 backdrop-blur-sm text-lm-ink/70 rounded-full">או השאירו פרטים</span>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Submit Message */}
                    {submitMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl text-center ${
                          submitMessage.type === 'success'
                            ? 'bg-green-100/80 text-green-800 border border-green-200/50'
                            : 'bg-red-100/80 text-red-800 border border-red-200/50'
                        }`}
                      >
                        {submitMessage.text}
                      </motion.div>
                    )}
                    {/* Name Field */}
                    <div className="relative">
                      <UserIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lm-ink/50" />
                      <input
                        type="text"
                        placeholder="השם שלכם"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-3 pr-12 pl-4 text-lm-ink placeholder-lm-ink/50 focus:outline-none focus:ring-2 focus:ring-lm-brand/50 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <EnvelopeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lm-ink/50" />
                      <input
                        type="email"
                        placeholder="האימייל שלכם"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-3 pr-12 pl-4 text-lm-ink placeholder-lm-ink/50 focus:outline-none focus:ring-2 focus:ring-lm-brand/50 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <PhoneIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-lm-ink/50" />
                      <input
                        type="tel"
                        placeholder="מספר הטלפון שלכם"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-3 pr-12 pl-4 text-lm-ink placeholder-lm-ink/50 focus:outline-none focus:ring-2 focus:ring-lm-brand/50 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <textarea
                        placeholder="ספרו לנו קצת על הפרויקט שלכם..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={3}
                        className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-3 px-4 text-lm-ink placeholder-lm-ink/50 focus:outline-none focus:ring-2 focus:ring-lm-brand/50 focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-lm-brand to-lm-green hover:from-lm-green hover:to-lm-brand hover:scale-105 hover:shadow-xl'
                      } text-white`}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          שולח...
                        </div>
                      ) : (
                        'שלחו פנייה'
                      )}
                    </motion.button>
                  </motion.form>

                  {/* Footer Note */}
                  <motion.p 
                    className="text-center text-xs text-lm-ink/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    נחזור אליכם תוך 24 שעות
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
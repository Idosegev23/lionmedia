import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-lm-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-reverse space-x-3 mb-4">
              <Image 
                src="/logo.svg" 
                alt="Lion Media Logo" 
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h3 className="text-2xl font-bold">Lion Media</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              יוצרים מציאות דיגיטלית - החלומות שלכם, הדיגיטל שלנו.
              הכל לעסק שלכם במקום אחד.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  צור קשר
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">צור קשר</h4>
            <div className="space-y-3 text-gray-300">
              <p>
                <a href="mailto:contact@lionmedia.com" className="hover:text-white transition-colors duration-200">
                  📧 contact@lionmedia.com
                </a>
              </p>
              <p>
                <a href="tel:054-xxx-xxxx" className="hover:text-white transition-colors duration-200">
                  📞 054-xxx-xxxx
                </a>
              </p>
              <p>
                <a 
                  href="https://wa.me/972XXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  💬 WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © {2024} Lion Media. כל הזכויות שמורות.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-reverse space-x-6">
              {/* Social Media Links - add when available */}
              <p className="text-gray-400 text-sm">
                בנוי בגאווה ישראלית 🇮🇱
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
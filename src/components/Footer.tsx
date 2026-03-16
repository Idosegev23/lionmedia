import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-lm-ink text-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Lion Media"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Lion Media</span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm">
              סוכנות דיגיטל שבונה נוכחות אונליין מקצה לקצה.
              <br />
              הכל במקום אחד.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4 text-sm">ניווט</h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition-colors duration-200">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors duration-200">
                  תהליך
                </Link>
              </li>
              <li>
                <Link href="#results" className="hover:text-white transition-colors duration-200">
                  תוצאות
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm">צור קשר</h4>
            <div className="space-y-2.5 text-white/40 text-sm">
              <a
                href="https://wa.me/972509595135"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors duration-200"
              >
                WhatsApp — 050-959-5135
              </a>
              <a
                href="mailto:triroars@gmail.com"
                className="block hover:text-white transition-colors duration-200"
              >
                triroars@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 text-center text-white/20 text-xs">
          &copy; {year} Lion Media. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

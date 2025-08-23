import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | Lion Media',
  description: 'מדיניות הפרטיות של Lion Media - כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-lm-bg py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-card">
          <h1 className="text-3xl font-bold text-lm-ink mb-8">מדיניות פרטיות</h1>
          
          <div className="prose prose-lg max-w-none text-lm-ink/80 leading-relaxed space-y-6">
            <p className="text-sm text-lm-ink/60">
              עדכון אחרון: 15/12/2024
            </p>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">מבוא</h2>
              <p>
                Lion Media מתחייבת להגן על פרטיותכם. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, 
                משתמשים ומגנים על המידע האישי שלכם.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">איזה מידע אנו אוספים</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>פרטי יצירת קשר: שם, דואר אלקטרוני, מספר טלפון</li>
                <li>מידע על החברה או העסק שלכם</li>
                <li>תוכן הפניות וההודעות שאתם שולחים אלינו</li>
                <li>מידע טכני כללי על השימוש באתר (דרך כלי אנליטיקה)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">כיצד אנו משתמשים במידע</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>מענה לפניות ומתן שירות לקוחות</li>
                <li>הכנת הצעות מחיר והצעות שירות</li>
                <li>תקשורת בנוגע לפרויקטים ולשירותים</li>
                <li>שיפור החוויה באתר והשירותים שלנו</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">שמירת המידע</h2>
              <p>
                אנו שומרים את המידע שלכם רק כל עוד יש צורך בו למטרות השירות, 
                או כפי שנדרש על פי חוק. המידע מוגן באמצעי אבטחה מתקדמים.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">הזכויות שלכם</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>זכות לעיין במידע האישי שלכם</li>
                <li>זכות לתיקון או עדכון המידע</li>
                <li>זכות למחיקת המידע</li>
                <li>זכות להגבלת השימוש במידע</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">יצירת קשר</h2>
              <p>
                לשאלות בנוגע למדיניות הפרטיות או לממש את זכויותיכם, 
                פנו אלינו בדואר אלקטרוני: contact@lionmedia.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
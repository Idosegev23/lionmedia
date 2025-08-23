import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'תנאי שימוש | Lion Media',
  description: 'תנאי השימוש של Lion Media - הכללים וההגבלות לשימוש באתר ובשירותים שלנו.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-lm-bg py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-card">
          <h1 className="text-3xl font-bold text-lm-ink mb-8">תנאי שימוש</h1>
          
          <div className="prose prose-lg max-w-none text-lm-ink/80 leading-relaxed space-y-6">
            <p className="text-sm text-lm-ink/60">
              עדכון אחרון: 15/12/2024
            </p>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">כללי</h2>
              <p>
                ברוכים הבאים לאתר Lion Media. השימוש באתר זה כפוף לתנאים המפורטים להלן. 
                המשך השימוש באתר מהווה הסכמה לתנאים אלה.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">שימוש באתר</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>האתר מיועד לשימוש חוקי בלבד</li>
                <li>אסור להשתמש באתר לפעילויות בלתי חוקיות או מזיקות</li>
                <li>אנו שומרים לעצמנו את הזכות להגביל או להפסיק את הגישה לאתר</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">זכויות יוצרים</h2>
              <p>
                כל התוכן באתר זה, כולל טקסט, תמונות, עיצוב וקוד, מוגן בזכויות יוצרים 
                השייכות ל-Lion Media. אסור להעתיק, להפיץ או להשתמש בתוכן ללא אישור בכתב.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">הגבלת אחריות</h2>
              <p>
                Lion Media לא תישא באחריות לנזקים כלשהם הנובעים מהשימוש באתר או מהסתמכות 
                על המידע המופיע בו. השימוש באתר הוא באחריות המשתמש בלבד.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">שירותים</h2>
              <p>
                השירותים המוצעים באתר כפופים להסכמים נפרדים שייחתמו עם הלקוחות. 
                תנאי שימוש אלה חלים על השימוש באתר בלבד.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">שינויים בתנאים</h2>
              <p>
                אנו רשאים לעדכן תנאי שימוש אלה מעת לעת. המשך השימוש באתר לאחר העדכון 
                מהווה הסכמה לתנאים המעודכנים.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-lm-ink mb-4">יצירת קשר</h2>
              <p>
                לשאלות בנוגע לתנאי השימוש, פנו אלינו בדואר אלקטרוני: contact@lionmedia.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
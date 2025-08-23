# 🦁 Lion Media Website

אתר רשמי של Lion Media - סוכנות דיגיטל מתקדמת המתמחה בפתרונות מקצה לקצה לעסקים.

## ✨ תכונות

- **🎨 עיצוב מתקדם** - UI/UX מודרני עם אנימציות חלקות
- **📱 Responsive** - מותאם לכל הגדלי מסך
- **⚡ ביצועים גבוהים** - בנוי עם Next.js 15
- **🔄 אנימציות** - Framer Motion ו-GSAP
- **📧 טופס צור קשר** - שליחת מיילים עם Nodemailer
- **💬 WhatsApp Integration** - קשר ישיר עם רועי
- **🎯 SEO מוכן** - מטא טאגים ו-sitemap אוטומטי

## 🚀 התקנה

```bash
# שכפול הפרויקט
git clone <repository-url>
cd lionmediawebsite

# התקנת תלויות
npm install

# העתקת משתני סביבה
cp .env.example .env.local

# הרצה במצב פיתוח
npm run dev
```

## 🌍 פריסה בוורסל

### 1. הכנת הפרויקט

```bash
# בדיקת משתני סביבה
npm run check-env

# בניית הפרויקט
npm run build
```

### 2. הגדרת משתני סביבה בוורסל

```bash
# התקנת Vercel CLI
npm i -g vercel

# התחברות לוורסל
vercel login

# קישור הפרויקט
vercel link

# הוספת משתני סביבה נדרשים
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add MAIL_TO
vercel env add MAIL_FROM

# משתנים אופציונליים
vercel env add SITE_URL
vercel env add SEND_THANK_YOU_EMAIL
```

### 3. הגדרת Gmail (מוכן!)

```bash
EMAIL_USER=triroars@gmail.com
EMAIL_PASS=yptziftrwazlyupx  # App Password
MAIL_TO=triroars@gmail.com
MAIL_FROM="Lion Media <triroars@gmail.com>"
```

### 4. פריסה

```bash
# פריסה ראשונה
vercel --prod

# או עם GitHub Actions (אוטומטי)
git push origin main
```

## 📧 הגדרת Gmail App Password

1. עברו ל-[Google Account Settings](https://myaccount.google.com/)
2. אבטחה → אימות דו-שלבי (חובה להפעיל)
3. סיסמאות אפליקציות → יצירת סיסמה חדשה
4. בחרו "Mail" → העתיקו את הסיסמה
5. השתמשו בסיסמה זו ב-`SMTP_PASS`

## 🔧 סקריפטים זמינים

```bash
npm run dev          # פיתוח
npm run build        # בניה
npm run start        # הרצה
npm run lint         # בדיקת קוד
npm run check-env    # בדיקת משתני סביבה
npm run vercel-build # בניה לוורסל
```

## 📁 מבנה הפרויקט

```
lionmediawebsite/
├── src/
│   ├── app/
│   │   ├── api/contact/     # API לטופס צור קשר
│   │   ├── globals.css      # סגנונות גלובליים
│   │   └── page.tsx         # עמוד הבית
│   └── components/
│       ├── ContactPopup.tsx # פופאפ צור קשר
│       ├── Hero.tsx         # סקשן הירו
│       ├── WhyUs.tsx        # למה אנחנו
│       ├── ServicesGrid.tsx # שירותים
│       ├── ProcessSteps.tsx # תהליך העבודה
│       ├── Results.tsx      # תוצאות
│       └── CTABand.tsx      # רצועת קריאה לפעולה
├── public/              # קבצים סטטיים
├── scripts/             # סקריפטי עזר
└── vercel.json         # תצורת וורסל
```

## 🎯 תכונות מיוחדות

### פופאפ צור קשר
- **עיצוב זכוכית מלוכלכת** (frosted glass)
- **2 דרכי קשר:** טופס מובנה + וואטסאפ
- **ולידציה מלאה** ומצבי טעינה
- **הודעות משוב** למשתמש

### אנימציות מתקדמות
- **GSAP** לאנימציות הירו
- **Framer Motion** לאלמנטים אינטראקטיביים
- **Scroll-triggered** אנימציות
- **Hover effects** מתקדמים

### SEO ו-Performance
- **Meta tags** מותאמים
- **Open Graph** לרשתות חברתיות
- **Sitemap** אוטומטי
- **Image optimization** מובנה

## 🔒 אבטחה

- Headers אבטחה בוורסל
- ולידציה של קלט משתמשים
- הגנה מפני CSRF
- Rate limiting בAPI

## 📞 צור קשר

**רועי** - WhatsApp: +972 50-959-5135

---

**Lion Media** © 2024 - כל הזכויות שמורות
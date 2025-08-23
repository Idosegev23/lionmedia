# 🚀 הגדרת וורסל עם GitHub - Lion Media

## 🎯 השלבים למתפרס אוטומטי

### שלב 1: התחברות לוורסל עם GitHub

1. **עברו לאתר וורסל:** [vercel.com](https://vercel.com)
2. **לחצו "Sign up"** או **"Log in"**
3. **בחרו "Continue with GitHub"**
4. **אשרו את ההרשאות** לוורסל

### שלב 2: יבוא הפרויקט

1. **במסך הראשי של וורסל לחצו "Add New..."**
2. **בחרו "Project"**
3. **מצאו את הרפוזיטורי "lionmedia"**
4. **לחצו "Import"**

### שלב 3: הגדרת משתני סביבה

**באזור Environment Variables הוסיפו:**

```bash
EMAIL_USER = triroars@gmail.com
EMAIL_PASS = yptziftrwazlyupx
MAIL_TO = triroars@gmail.com
MAIL_FROM = "Lion Media <triroars@gmail.com>"
```

**משתנים אופציונליים:**
```bash
SITE_URL = https://your-domain.vercel.app
SEND_THANK_YOU_EMAIL = true
```

### שלב 4: פריסה

1. **לחצו "Deploy"**
2. **וורסל יבנה ויפרוס את האתר אוטומטית**
3. **תקבלו URL זמני כמו:** `lionmedia-xyz.vercel.app`

### שלב 5: דומיין מותאם (אופציונלי)

1. **עברו ל-Settings → Domains**
2. **הוסיפו את הדומיין שלכם**
3. **עדכנו DNS אצל ספק הדומיין**

## 🔄 פריסה אוטומטית

**מעכשיו כל push לענף main יגרום לפריסה אוטומטית!**

```bash
# כל פעם שתרצו לעדכן:
git add .
git commit -m "עדכון חדש"
git push
```

## 🛠️ הגדרות נוספות בוורסל

### Build & Development Settings
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Functions
- **Node.js Version:** 18.x
- **Serverless Functions:** מופעל אוטומטית

## 📧 בדיקת טופס צור קשר

לאחר הפריסה:
1. **עברו לאתר החדש**
2. **לחצו על כפתור "בואו נתחיל"**
3. **מלאו טופס צור קשר**
4. **בדקו שמייל הגיע לכתובת:** triroars@gmail.com

## 🔍 מעקב ובדיקות

### לוגים בזמן אמת:
- **עברו ל-Functions** בוורסל
- **לחצו על `/api/contact`**
- **ראו לוגים של כל בקשה**

### בדיקת שגיאות:
```bash
# אם יש בעיות, בדקו:
vercel logs
```

## 🎉 הושלם!

**האתר של Lion Media כעת:**
- ✅ פעיל בוורסל
- ✅ מקבל פניות אמיתיות
- ✅ שולח מיילים אוטומטית
- ✅ מתעדכן אוטומטית עם כל push

**כתובת הרפוזיטורי:** [https://github.com/Idosegev23/lionmedia.git](https://github.com/Idosegev23/lionmedia.git)

## 📞 תמיכה

אם יש בעיות:
1. בדקו לוגים בוורסל
2. ודאו שמשתני הסביבה נכונים
3. בדקו שהטופס עובד במקומי קודם

🦁 **Lion Media - מוכן לפעולה!** ✨
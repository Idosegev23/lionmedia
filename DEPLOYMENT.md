# 🚀 הוראות פריסה בוורסל - Lion Media

## 📋 רשימת בדיקות לפני פריסה

### ✅ הכנה מקומית
- [ ] `npm install` - התקנת כל התלויות
- [ ] `npm run check-env` - בדיקת משתני סביבה
- [ ] `npm run build` - בדיקה שהבניה עוברת בהצלחה
- [ ] `npm run lint` - בדיקת איכות קוד

### ✅ הגדרת וורסל
- [ ] התקנת Vercel CLI: `npm i -g vercel`
- [ ] התחברות: `vercel login`
- [ ] קישור פרויקט: `vercel link`

## 🔧 הגדרת משתני סביבה

### 1. משתנים חובה (Gmail)

```bash
# הגדרת Gmail לשליחת מיילים
vercel env add EMAIL_USER
# ערך: triroars@gmail.com

vercel env add EMAIL_PASS
# ערך: yptziftrwazlyupx (App Password מגוגל)

vercel env add MAIL_TO
# ערך: triroars@gmail.com (מייל לקבלת פניות)

vercel env add MAIL_FROM
# ערך: "Lion Media <triroars@gmail.com>"
```

### 2. משתנים אופציונליים

```bash
vercel env add SITE_URL
# ערך: https://www.lionmedia.com

vercel env add SEND_THANK_YOU_EMAIL
# ערך: true (לשליחת מייל תודה ללקוח)
```

## 📧 Gmail App Password - מוכן! ✅

**המשתנים כבר מוכנים:**
- **EMAIL_USER:** triroars@gmail.com
- **EMAIL_PASS:** yptziftrwazlyupx

⚠️ **הערה:** זוהי סיסמת אפליקציה ולא הסיסמה הרגילה של Gmail!

## 🌍 פריסה לייצור

### אופציה 1: פריסה ידנית
```bash
# פריסה חד-פעמית
vercel --prod
```

### אופציה 2: פריסה עם GitHub
1. דחפו לרפוזיטורי GitHub
2. חברו את הרפוזיטורי לוורסל
3. כל push ל-`main` יתפרס אוטומטית

```bash
git add .
git commit -m "🚀 Ready for production deployment"
git push origin main
```

## 🔍 בדיקת הפריסה

### לאחר הפריסה, בדקו:
- [ ] האתר נטען תקין
- [ ] כל החלקים מוצגים נכון
- [ ] טופס צור קשר עובד
- [ ] כפתור וואטסאפ עובד
- [ ] מייל מתקבל לאחר שליחת פנייה
- [ ] האתר מגיב על מובייל

### בדיקת טופס צור קשר:
1. מלאו טופס צור קשר
2. ודאו שהודעת "נשלח בהצלחה" מופיעה
3. בדקו שמייל הגיע לכתובת המוגדרת ב-`MAIL_TO`

## 🛠️ פתרון בעיות נפוצות

### בעיה: מיילים לא נשלחים
```bash
# בדקו לוגים בוורסל
vercel logs

# בדקו משתני סביבה
vercel env ls
```

**פתרונות:**
- ודאו ש-App Password נכון (לא הסיסמה הרגילה)
- בדקו שאימות דו-שלבי מופעל בגוגל
- ודאו שכל משתני ה-SMTP מוגדרים

### בעיה: שגיאת בניה
```bash
# בדיקה מקומית
npm run build
npm run check-env
```

### בעיה: רמה לא נפתחת
- בדקו ש-`SITE_URL` נכון
- ודאו שדומיין מצביע לוורסל

## 📞 דומיין מותאם

### הגדרת דומיין
1. בלוח הבקרה של וורסל
2. **Settings** → **Domains**
3. הוסיפו דומיין: `www.lionmedia.com`
4. עדכנו DNS אצל ספק הדומיין

### הפניות DNS נדרשות:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A  
Name: @
Value: 76.76.19.61
```

## 🎯 סיכום

לאחר ביצוע כל השלבים:
✅ האתר יהיה זמין בכתובת הוורסל  
✅ טופס צור קשר יעבד ויישלח מיילים  
✅ כפתור וואטסאפ יפנה ישירות לרועי  
✅ כל האנימציות והעיצוב יעבדו תקין  

🎉 **מזל טוב! האתר של Lion Media פעיל!** 🦁
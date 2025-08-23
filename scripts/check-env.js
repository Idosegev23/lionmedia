#!/usr/bin/env node

// טוען משתני סביבה מקובץ .env.local אם קיים
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const envLines = envContent.split('\n');
  
  envLines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=');
        process.env[key] = value;
      }
    }
  });
}

const requiredEnvVars = [
  'EMAIL_USER',
  'EMAIL_PASS',
  'MAIL_TO',
  'MAIL_FROM'
];

const optionalEnvVars = [
  'SITE_URL',
  'SEND_THANK_YOU_EMAIL',
  'ANALYTICS_PROVIDER',
  'PLAUSIBLE_DOMAIN',
  'GA4_ID'
];

console.log('🔍 בודק משתני סביבה...\n');

let hasErrors = false;

// בדיקת משתנים חובה
console.log('✅ משתנים נדרשים:');
requiredEnvVars.forEach(envVar => {
  if (process.env[envVar]) {
    console.log(`   ✓ ${envVar}: ****`);
  } else {
    console.log(`   ❌ ${envVar}: חסר!`);
    hasErrors = true;
  }
});

console.log('\n📋 משתנים אופציונליים:');
optionalEnvVars.forEach(envVar => {
  if (process.env[envVar]) {
    console.log(`   ✓ ${envVar}: ${envVar.includes('PASS') || envVar.includes('KEY') ? '****' : process.env[envVar]}`);
  } else {
    console.log(`   ○ ${envVar}: לא מוגדר (אופציונלי)`);
  }
});

if (hasErrors) {
  console.log('\n❌ שגיאה: משתני סביבה חסרים!');
  console.log('\nאנא הגדירו את המשתנים הבאים בוורסל:');
  console.log('1. EMAIL_USER - כתובת Gmail');
  console.log('2. EMAIL_PASS - App Password של Gmail');
  console.log('3. MAIL_TO - כתובת המייל לקבלת פניות');
  console.log('4. MAIL_FROM - כתובת השולח (עם שם)');
  console.log('\nהוראות הגדרה בוורסל:');
  console.log('vercel env add EMAIL_USER');
  console.log('vercel env add EMAIL_PASS');
  console.log('vercel env add MAIL_TO');
  console.log('vercel env add MAIL_FROM');
  
  process.exit(1);
} else {
  console.log('\n🎉 כל משתני הסביבה הנדרשים מוגדרים!');
  console.log('האתר מוכן לפריסה בוורסל 🚀');
}
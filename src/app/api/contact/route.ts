import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // ולידציה בסיסית
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'שם, אימייל וטלפון הם שדות חובה' },
        { status: 400 }
      );
    }

    // יצירת transporter עם Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // הכנת התוכן למייל
    const htmlContent = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #1e3a8a, #059669); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; text-align: center; margin: 0; font-size: 28px;">פנייה חדשה מהאתר! 🎯</h1>
        </div>
        
        <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #059669; padding-bottom: 10px;">פרטי הפנייה:</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0; font-size: 16px;"><strong style="color: #1e3a8a;">👤 שם:</strong> ${name}</p>
            <p style="margin: 10px 0; font-size: 16px;"><strong style="color: #1e3a8a;">📧 אימייל:</strong> <a href="mailto:${email}" style="color: #059669;">${email}</a></p>
            <p style="margin: 10px 0; font-size: 16px;"><strong style="color: #1e3a8a;">📱 טלפון:</strong> <a href="tel:${phone}" style="color: #059669;">${phone}</a></p>
          </div>
          
          ${message ? `
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-right: 4px solid #059669; margin: 20px 0;">
              <h3 style="color: #1e3a8a; margin-top: 0;">💬 ההודעה:</h3>
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
          ` : ''}
          
          <div style="margin-top: 25px; padding: 15px; background: linear-gradient(135deg, #f0f9ff, #f0fdf4); border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1e3a8a; font-weight: bold;">הפנייה התקבלה ב: ${new Date().toLocaleString('he-IL')}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6b7280;">
          <p style="margin: 0; font-size: 14px;">נשלח אוטומטית מאתר Lion Media</p>
        </div>
      </div>
    `;

    const textContent = `
פנייה חדשה מהאתר Lion Media

פרטי הפנייה:
שם: ${name}
אימייל: ${email}
טלפון: ${phone}
${message ? `הודעה: ${message}` : ''}

התקבל בתאריך: ${new Date().toLocaleString('he-IL')}
    `;

    // שליחת המייל
    await transporter.sendMail({
      from: process.env.MAIL_FROM || '"Lion Media" <no-reply@lionmedia.com>',
      to: process.env.MAIL_TO || 'contact@lionmedia.com',
      subject: `🎯 פנייה חדשה מ-${name} | Lion Media`,
      text: textContent,
      html: htmlContent,
    });

    // שליחת מייל תודה ללקוח (אופציונלי)
    if (process.env.SEND_THANK_YOU_EMAIL === 'true') {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || '"Lion Media" <no-reply@lionmedia.com>',
        to: email,
        subject: 'תודה על הפנייה! 🚀 | Lion Media',
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e3a8a, #059669); padding: 30px; border-radius: 10px; text-align: center;">
              <h1 style="color: white; margin: 0;">שלום ${name}! 👋</h1>
              <h2 style="color: white; margin: 10px 0;">תודה על הפנייה!</h2>
            </div>
            <div style="padding: 25px; background: white; border-radius: 10px; margin-top: 10px;">
              <p>קיבלנו את הפנייה שלכם ונחזור אליכם תוך 24 שעות.</p>
              <p>בינתיים, אתם מוזמנים לבקר באתר שלנו ולראות עוד פרויקטים.</p>
              <p style="margin-top: 20px;"><strong>הצוות של Lion Media 🦁</strong></p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'הפנייה נשלחה בהצלחה! נחזור אליכם בקרוב 🚀' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'שגיאה בשליחת הפנייה. אנא נסו שוב או צרו קשר ישירות בוואטסאפ.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "יוצרים מציאות דיגיטלית | Lion Media",
  description: "Lion Media - הבית שבו חלומות הופכים למציאות דיגיטלית. אתרים, סושיאל, בוטים חכמים, אוטומציות ומערכות במקום אחד.",
  keywords: "פיתוח אתרים, עיצוב גרפי, שיווק דיגיטלי, בוטים חכמים, אוטומציות, מערכות מותאמות אישית",
  openGraph: {
    title: "יוצרים מציאות דיגיטלית | Lion Media",
    description: "Lion Media - הבית שבו חלומות הופכים למציאות דיגיטלית. אתרים, סושיאל, בוטים חכמים, אוטומציות ומערכות במקום אחד.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-heebo antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

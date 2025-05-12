// src/app/layout.js
import './globals.css'
import { Cairo } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

// تهيئة خط Cairo مع خيارات إضافية لتحسين الأداء
const cairo = Cairo({
  subsets: ['arabic', 'latin'], // إضافة latin لدعم الأرقام والحروف الإنجليزية بشكل أفضل
  weight: ['300', '400', '600', '700'], // أوزان أكثر إذا كنت تحتاجها
  display: 'swap', // مهم لتحميل الخط بدون حجب المحتوى
  variable: '--font-cairo', // اختياري: لتعيينه كمتغير CSS
})

export const metadata = {
  title: 'الكوله اليوم',
  description: 'بوابة أخبار الكوله اليوم - أحدث الأخبار والمستجدات', // وصف أكثر تفصيلاً
  // يمكنك إضافة المزيد من بيانات التعريف هنا (keywords, openGraph, etc.)
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      {/* تطبيق الخط على body إما مباشرة أو عبر متغير CSS */}
      <body className={`${cairo.className} ${cairo.variable}`}>
        <Header />
        {/* استخدام وسم <main> دلالي أفضل لمحتوى الصفحة الرئيسي */}
        <div role="main"> {/* استبدال main بـ div مع role إذا كان Header و Footer خارج ما يعتبر محتوى رئيسي فعلي */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
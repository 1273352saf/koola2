// src/app/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header id="main-header">
      <div className="container">
        <div className="logo">
          <h1><Link href="/">الكوله اليوم</Link></h1>
        </div>
        <nav>
          <ul>
            <li><Link href="/">الرئيسية</Link></li>
            {/* ملاحظة: قم بإنشاء هذه الصفحات لاحقًا أو عدل الروابط */}
            <li><Link href="/category/news">أخبار</Link></li>
            <li><Link href="/category/economy">اقتصاد</Link></li>
            <li><Link href="/category/sports">رياضة</Link></li>
            <li><Link href="/category/technology">تكنولوجيا</Link></li>
            <li><Link href="/live">بث مباشر</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
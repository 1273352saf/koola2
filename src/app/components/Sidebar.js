// src/app/components/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';
// استيراد البيانات إذا لم تكن مُمررة كـ props
import { latestNewsSidebarData } from '@/lib/newsData';

export default function Sidebar() {
  // ملاحظة: تأكد أن اسم ملف الصورة في public هو screenshot_1.png (أحرف صغيرة)
  const adImageUrl = "/screenshot_1.png";

  return (
    <aside className="sidebar">
      <div className="ad-placeholder">
        <h3>إعلانات</h3>
        <p>مساحة إعلانية</p>
        {/*
          ملاحظة: next/image سيتطلب width و height إذا لم تستخدم fill.
          CSS الأصلي يعطي .ad-image max-width: 80%.
          سنستخدم width و height مع الحفاظ على الاستجابة عبر CSS.
        */}
        <div style={{ maxWidth: '80%', margin: '0 auto 10px auto' }}> {/* حاوية للتحكم في الحجم */}
          <Image
            src={adImageUrl}
            alt="إعلان جانبي"
            width={240} // قيمة عرض أساسية
            height={120} // قيمة ارتفاع أساسية (سيتم الحفاظ على النسبة)
            style={{ width: '100%', height: 'auto', opacity: 0.7, display: 'block' }} // لجعلها تستجيب داخل الحاوية
            className="ad-image" // لا يزال مفيدًا لبعض التنسيقات العامة
          />
        </div>
      </div>
      <div className="ad-placeholder">
        <h3>مساحة إعلانية أخرى</h3>
        <p>ضع إعلانك هنا</p>
      </div>
      <div className="latest-news">
        <h3>أحدث الأخبار</h3>
        <ul>
          {latestNewsSidebarData.map((news) => (
            <li key={news.id}>
              <Link href={news.link || "#"}>{news.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
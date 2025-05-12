// src/app/components/NewsItem.js
import Image from 'next/image';
import Link from 'next/link';

export default function NewsItem({ id, title, imageUrl, alt, summary, category, link }) {
  return (
    <article className="news-item" id={`news-item-${id}`}>
      <h2>
        <Link href={link || "#"}>
          {title}
        </Link>
      </h2>
      {imageUrl && (
        // ملاحظة: ارتفاع الصورة هنا 200px. إذا كانت صورك بأبعاد مختلفة، قد تحتاج لتعديل هذا.
        // أو استخدام width/height props مباشرة على Image إذا كانت الأبعاد ثابتة.
        <div style={{ position: 'relative', width: '100%', height: '200px' }} className="news-image-container">
          <Image
            src={imageUrl}
            alt={alt || title}
            fill
            style={{ objectFit: 'cover', borderRadius: '3px' }}
            className="news-image placeholder-img" // CSS الأصلي يطبق height على .news-image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      {summary && <p>{summary}</p>} {/* عرض الملخص فقط إذا كان موجودًا */}
      {category && <span className="news-category">{category}</span>} {/* عرض التصنيف فقط إذا كان موجودًا */}
    </article>
  );
}
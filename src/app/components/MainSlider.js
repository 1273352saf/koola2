// src/app/components/MainSlider.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tickerAndSliderData } from '@/lib/newsData'; // استيراد البيانات

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (tickerAndSliderData.length === 0) return;
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % tickerAndSliderData.length);
    }, 7000); // نفس مدة الشريط الإخباري

    return () => clearInterval(intervalId);
  }, []);

  if (tickerAndSliderData.length === 0) {
    return (
      <article className="news-item slider-container">
        <div id="main-slider" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
          <p>لا توجد شرائح لعرضها.</p>
        </div>
      </article>
    );
  }

  return (
    <article className="news-item slider-container">
      <div id="main-slider">
        {tickerAndSliderData.map((slide, index) => (
          <div
            key={slide.id} // استخدام id فريد كـ key
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {/*
              ملاحظة هامة لمكون Image:
              - يتطلب `fill` أن يكون العنصر الأب (`.slide`) لديه `position: relative` (وهو كذلك).
              - `priority={index === 0}` لتحميل الشريحة الأولى بأولوية.
              - `sizes` مهم للاستجابة وتحسين الأداء، يخبر المتصفح بحجم الصورة المتوقع عند نقاط مختلفة.
            */}
            <Image
              src={slide.image}
              alt={slide.alt || slide.headline}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 70vw, 60vw"
            />
            <div className="slide-content-overlay">
              <span className="slide-category">{slide.category}</span>
              <h2 className="slide-headline">
                <Link href={slide.link || "#"}>{slide.headline}</Link>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
// src/app/components/NewsTicker.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { tickerAndSliderData } from '@/lib/newsData'; // استيراد البيانات

export default function NewsTicker() {
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);
  const [tickerText, setTickerText] = useState("جاري تحميل الأخبار...");
  const tickerTextElementRef = useRef(null); // للوصول إلى عنصر span

  useEffect(() => {
    if (tickerAndSliderData.length === 0) {
      setTickerText("لا توجد أخبار لعرضها حاليًا.");
      return;
    }

    // التحديث الأولي
    const initialItem = tickerAndSliderData[currentTickerIndex];
    setTickerText(`[${initialItem.category}] ${initialItem.headline}`);

    const intervalId = setInterval(() => {
      setCurrentTickerIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % tickerAndSliderData.length;
        const nextItem = tickerAndSliderData[nextIndex];

        if (tickerTextElementRef.current) {
          tickerTextElementRef.current.style.opacity = 0;
          setTimeout(() => {
            setTickerText(`[${nextItem.category}] ${nextItem.headline}`);
            if (tickerTextElementRef.current) {
               tickerTextElementRef.current.style.opacity = 1;
            }
          }, 300); // مدة التلاشي
        } else {
          setTickerText(`[${nextItem.category}] ${nextItem.headline}`);
        }
        return nextIndex;
      });
    }, 7000); // تم زيادة المدة قليلاً لإعطاء وقت للقراءة

    return () => clearInterval(intervalId);
  }, []); // الاعتماد فارغ ليتم تشغيله مرة واحدة عند التحميل

  return (
    <div id="news-ticker">
      <div className="container">
        <span id="ticker-text" ref={tickerTextElementRef}>{tickerText}</span>
      </div>
    </div>
  );
}
// src/app/components/NewsTabs.js
'use client';

import { useState } from 'react';
import NewsItem from './NewsItem';
import { tabsData } from '@/lib/newsData'; // استيراد بيانات التبويبات

export default function NewsTabs() {
  const [activeTab, setActiveTab] = useState(tabsData.length > 0 ? tabsData[0].id : '');

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <div id="main-news-feed"> {/* أو يمكنك استخدام <section> إذا كان أكثر دلالة */}
      <nav className="tabs-nav">
        <ul>
          {tabsData.map(tab => (
            <li key={tab.id}>
              <button
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                data-tab={tab.id} // لا يزال مفيدًا للـ CSS أو الاختبارات
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="tabs-content">
        {tabsData.map(tab => (
          <div
            key={tab.id}
            id={tab.id} // مطابق لـ data-tab
            className={`tab-panel ${activeTab === tab.id ? 'active' : ''}`}
          >
            {activeTab === tab.id && activeTabData && activeTabData.news.length > 0 ? (
              activeTabData.news.map(newsItem => (
                <NewsItem
                  key={newsItem.id}
                  id={newsItem.id}
                  title={newsItem.title}
                  imageUrl={newsItem.imageUrl}
                  alt={newsItem.alt}
                  summary={newsItem.summary}
                  category={newsItem.category}
                  link={newsItem.link}
                />
              ))
            ) : activeTab === tab.id ? (
              // عرض رسالة إذا كان التبويب نشطًا ولا توجد أخبار
              <p>لا توجد أخبار في هذا القسم حاليًا.</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
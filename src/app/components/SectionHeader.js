// src/app/components/SectionHeader.js
'use client';

import { useState } from 'react'; // تأكد من استيراد useState

export default function SectionHeader({ title }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`جاري البحث عن: ${searchTerm}`);
      // هنا يمكنك إضافة منطق البحث الفعلي لاحقًا
    } else {
      alert('الرجاء إدخال كلمة للبحث.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="section-header-container">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="ابحث في الأخبار..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          بحث
        </button>
      </div>
    </div>
  );
}
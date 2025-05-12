// src/app/page.js
import NewsTicker from './components/NewsTicker';
import TopSection from './components/TopSection';
import Sidebar from './components/Sidebar';
import SectionHeader from './components/SectionHeader'; // استيراد المكون الجديد
import NewsTabs from './components/NewsTabs';     // استيراد المكون الجديد

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      {/* .container يحيط بالمحتوى الرئيسي الذي ينقسم */}
      <div className="main-content container"> {/* .main-content هو flex column */}
        <TopSection />
        <SectionHeader title="أحدث الأخبار" /> {/* عنوان مع شريط البحث */}

        <div className="lower-content-area"> {/* هذا هو flex row للمحتوى السفلي */}
          <NewsTabs /> {/* هذا سيكون <main> في CSS */}
          <Sidebar />
        </div>
      </div>
    </>
  );
}
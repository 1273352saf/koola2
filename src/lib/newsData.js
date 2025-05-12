// src/lib/newsData.js

// ملاحظة: تأكد من أن أسماء ملفات الصور هنا تطابق تمامًا أسماء الملفات في مجلد /public
// واستخدم الأحرف الصغيرة لأسماء الملفات.

export const tickerAndSliderData = [
  { id: "s1", type: "slider", headline: "عاجل: تطورات جديدة في الساحة السياسية الإقليمية تؤثر على الأسواق", image: "/slider_image_1.png", alt: "صورة مجردة تعبر عن السياسة الإقليمية", category: "سياسة", link: "/news/political-developments" },
  { id: "s2", type: "slider", headline: "مؤشرات الاقتصاد العالمي تظهر تباطؤًا طفيفًا هذا الربع", image: "/slider_image_2.png", alt: "رسم بياني يوضح مؤشرات اقتصادية", category: "اقتصاد", link: "/news/global-economy-slowdown" },
  { id: "s3", type: "slider", headline: "فوز مثير لفريق كرة القدم الوطني في المباراة الودية الأخيرة", image: "/slider_image_3.png", alt: "لاعبو كرة قدم يحتفلون بالفوز", category: "رياضة", link: "/news/national-team-wins" },
  { id: "s4", type: "slider", headline: "إطلاق أحدث هاتف ذكي بتقنيات مبتكرة وكاميرا فائقة الدقة", image: "/placeholder_tech.png", alt: "صورة لهاتف ذكي حديث", category: "تكنولوجيا", link: "/news/new-smartphone-launch" },
  { id: "s5", type: "slider", headline: "تحذيرات من موجة طقس حارة تضرب المنطقة خلال الأيام القادمة", image: "/placeholder_weather.png", alt: "صورة شمس ساطعة تعبر عن الطقس الحار", category: "طقس", link: "/news/heatwave-warning" }
];

// بيانات التبويبات
export const tabsData = [
  {
    id: 'tab-local',
    label: 'أخبارنا',
    news: [
      { id: 'local1', title: 'تطورات اقتصادية محلية هامة اليوم', imageUrl: '/slider_image_2.png', alt: 'صورة خبر اقتصادي محلي', summary: 'تحليل لأحدث البيانات الاقتصادية وتأثيرها على السوق المحلي...', category: 'أخبارنا', link: '/news/local-economic-updates' },
      { id: 'local2', title: 'افتتاح مشروع تكنولوجي جديد في العاصمة', imageUrl: '/placeholder_tech.png', alt: 'صورة خبر تكنولوجي محلي', summary: 'تفاصيل عن المشروع التقني الواعد الذي تم إطلاقه مؤخرًا.', category: 'أخبارنا', link: '/news/new-tech-project-capital' },
      { id: 'local3', title: 'حدث ثقافي بارز يجذب الزوار', summary: 'تغطية لفعالية ثقافية شهدت إقبالاً كبيراً نهاية الأسبوع.', category: 'ثقافة', link: '/news/major-cultural-event' }, // لا توجد صورة في HTML
    ]
  },
  {
    id: 'tab-regions',
    label: 'محافظات',
    news: [
      // النص المؤقت من HTML
      // { type: 'placeholder', text: 'أخبار المحافظات ستظهر هنا قريباً.' },
      { id: 'regions1', title: 'مشاريع تنموية في محافظة X', imageUrl: '/placeholder_weather.png', alt: 'صورة خبر محافظات', summary: 'تفاصيل عن مشاريع البنية التحتية الجديدة.', category: 'محافظات', link: '/news/development-projects-province-x' },
    ]
  },
  {
    id: 'tab-world',
    label: 'عالمية',
    news: [
      // { type: 'placeholder', text: 'أخبار عالمية سيتم عرضها هنا.' },
      { id: 'world1', title: 'تقرير عن السياسة الدولية', imageUrl: '/slider_image_1.png', alt: 'صورة خبر عالمي', summary: 'ملخص لأبرز الأحداث السياسية العالمية.', category: 'عالمية', link: '/news/international-politics-report' },
    ]
  },
  {
    id: 'tab-more',
    label: 'المزيد',
    news: [
      // { type: 'placeholder', text: 'المزيد من الأخبار المتنوعة.' },
      { id: 'more1', title: 'نتائج رياضية مهمة', imageUrl: '/slider_image_3.png', alt: 'صورة خبر رياضي', summary: 'تغطية لأهم المباريات والنتائج.', category: 'رياضة', link: '/news/important-sports-results' },
    ]
  }
];


export const latestNewsSidebarData = [
    { id: "ln1", title: "خبر عاجل 1", link: "/news/breaking-1" },
    { id: "ln2", title: "خبر عاجل 2", link: "/news/breaking-2" },
    { id: "ln3", title: "خبر عاجل 3", link: "/news/breaking-3" },
];
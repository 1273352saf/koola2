// src/app/components/Footer.js
export default function Footer() {
    const currentYear = new Date().getFullYear(); // للحصول على السنة الحالية تلقائيًا
    return (
      <footer>
        <div className="container">
          <p>© {currentYear} الكوله اليوم. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    );
  }
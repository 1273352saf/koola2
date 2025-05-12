// src/app/components/LiveStreamSection.js
export default function LiveStreamSection() {
    return (
      <section className="live-stream-section">
        <h3>بث مباشر</h3>
        <div className="video-placeholder">
          <p>محتوى البث المباشر يظهر هنا</p>
          <span>(منطقة الفيديو)</span>
          {/* يمكنك لاحقًا تضمين مشغل فيديو هنا، مثل iframe من YouTube أو مشغل مخصص */}
        </div>
      </section>
    );
  }
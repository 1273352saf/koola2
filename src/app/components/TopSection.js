// src/app/components/TopSection.js
import MainSlider from './MainSlider';
import LiveStreamSection from './LiveStreamSection';

export default function TopSection() {
  return (
    <div className="top-section">
      <MainSlider />
      <LiveStreamSection />
    </div>
  );
}
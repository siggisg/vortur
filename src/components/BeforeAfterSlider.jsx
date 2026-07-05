import { useState } from 'react';
import '../styles/beforeafterslider.css';

function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="comparison-container">
      <img
        src={beforeImage}
        alt="Before"
        className="comparison-image"
      />

      <div
        className="after-image-container"
        //style={{ width: `${sliderPosition}%` }}
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <img
          src={afterImage}
          alt="After"
          className="comparison-image"
        />
      </div>

      <div
        className="slider-line"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-handle"></div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(e.target.value)}
        className="slider"
      />
    </div>
  );
}

export default BeforeAfterSlider;
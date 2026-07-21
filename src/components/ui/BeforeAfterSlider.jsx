import { useState } from 'react';

import '../../styles/ui/beforeafterslider.css';

function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="comparison-container">
      <img
        src={beforeImage}
        alt="Before"
        className="comparison-image"
        fetchPriority="high"
        width="1920"
        height="1080"
      />

      <div
        className="after-image-container"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={afterImage}
          alt="After"
          className="comparison-image"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
      </div>

      <div
        className="slider-line"
        style={{
          left: `${sliderPosition}%`,
        }}
      >
        <div className="slider-handle" />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(event) => setSliderPosition(event.target.value)}
        className="slider"
      />
    </div>
  );
}

export default BeforeAfterSlider;
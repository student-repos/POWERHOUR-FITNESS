import React from "react";
import "./Button.css";
function PrevNextButtons({ onPrevClick, onNextClick }) {
  return (
    <div className="prev-next-buttons">
      <button onClick={onPrevClick}>Prev</button>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
}

export default PrevNextButtons;

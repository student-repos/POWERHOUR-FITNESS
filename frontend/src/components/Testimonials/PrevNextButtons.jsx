import React from "react";
import "./PrevNextButtons.css";

const PrevNextButtons = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="prev-next-buttons">
      <button className="prev-button" onClick={onPrevClick}>
 &lt;
      </button>
      <button className="next-button" onClick={onNextClick}>
         &gt;
      </button>
    </div>
  );
};

export default PrevNextButtons;

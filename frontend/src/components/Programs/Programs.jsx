import React from "react";
import "./Programs.css";
import yogaImage from "../../assets/yoga .jpeg";
import pilatesImage from "../../assets/pilates.jpeg";
import cardioImage from "../../assets/cardio.jpeg";

function Programs() {
  return (
    <section className="programs" id="programs">
      <h2>Explore Our Programs</h2>
      <div className="program-list">
        <div className="program-card">
          <h3>Yoga</h3>
          <img src={yogaImage} alt="Yoga" className="program-image" />
          <p>
            Yoga is a holistic practice that combines physical postures,
            breathing exercises, and meditation to promote physical and mental
            well-being.
          </p>
        </div>
        <div className="program-card">
          <h3>Cardio</h3>
          <img src={cardioImage} alt="Cardio" className="program-image" />
          <p>
            Cardio involves activities that raise your heart rate and improve
            the efficiency of your heart, lungs, and circulatory system.
          </p>
        </div>
        <div className="program-card">
          <h3>Pilates</h3>
          <img src={pilatesImage} alt="Pilates" className="program-image" />
          <p>
            Pilates is a low-impact exercise system that focuses on
            strengthening core muscles, improving posture, and enhancing overall
            body flexibility.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Programs;

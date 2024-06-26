import React from "react";
import { Link, useParams } from "react-router-dom";
import { treatDate } from "./treatDate";
import courses from "./courses.json";
import "./Course.css";

// Import trainer images
import celinaOImage from "../../assets/celina_o.jpg";
import annaVImage from "../../assets/anna_v.jpg";
import casseyHImage from "../../assets/cassey_h.jpg";

const trainerImages = {
  celina_o: celinaOImage,
  anna_v: annaVImage,
  cassey_h: casseyHImage
};

function Course() {
  const { program, course, trainer, id } = useParams();
  console.log({ program, course, trainer, id });

  const trainerData = courses.find(data => data.shortName === trainer);
  const { trainerName, classes } = trainerData;
  const classData = classes.find(data => data.className === id);
  const { startDate, endDate } = treatDate(classData);
  const { startTime, duration, capacity, description } = classData;

  const trainerImage = trainerImages[trainer];

  return (
    <>
      <div className="header">
        <Link to={`/programs/${program}`} className="back-link">
          &lt; Back to {program} Programs
        </Link>
      </div>
      <div className="singlepage-container">
        <h1>{course}</h1>
        <div className="trainer-profile">
          <img src={trainerImage} alt={trainerName} />
          <p>Name of Trainer: {trainerName}</p>
        </div>
        <div className="description">
          <h2>{id}</h2>
          <p>{description}</p>
        </div>
        <div className="booking-card">
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <p>Start Time: {startTime}</p>
          <p>Duration: {duration}</p>
          <p>Capacity: {capacity}</p>
          <button>Book Now</button>
        </div>
      </div>
    </>
  );
}

export default Course;

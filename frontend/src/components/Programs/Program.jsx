import React from "react";
import { Link, useParams } from "react-router-dom";
import "./program.css";
import { treatDate } from "./treatDate";

import yogaImage from "../../assets/yoga_june.jpeg";
import cardioImage from "../../assets/cardio.jpeg";
import pilatesImage from "../../assets/pilates.jpeg";
import Logo from "../../assets/logo.png";

const images = {
  yogaImage,
  cardioImage,
  pilatesImage
};

import courses from "./courses.json";

function Program() {
  const { program } = useParams();
  const image = images[`${program}Image`];

  const sessionDivs = courses.map(trainerClasses => {
    const { trainerName, shortName, classes } = trainerClasses;

    const sectionDivs = classes.map(classData => {
      const { className, startDate, endDate, id } = classData;

      const { startDate: start, endDate: end } = treatDate(classData);

      return (
        <Link
          to={`/programs/${program}/${program}-courses/${shortName}/${className}`}
          key={`${className}-${startDate}`}
        >
          <div className="cours-card">
            <h3>{program}: {className}</h3>
            <img src={image} width={300} alt={`${className}`} />
            <p>Start Date: {start}</p>
            <p>End date: {end}</p>
          </div>
        </Link>
      );
    });

    return (
      <div key={trainerName} className="trainer-info">
        <h4>Trainer Name: {trainerName}</h4>
        <section className="trainer-row">
          {sectionDivs}
        </section>
      </div>
    );
  });

  return (
    <div>
      <div className="header">
        <Link to="/" className="logo-link">
          <div className="logo-box">
            <img className="logo" src={Logo} alt="weight lifting logo" />
            <span className="logo-text">PowerHour</span>
          </div>
        </Link>
      </div>
      <div className="program-container">
        <div>
          {sessionDivs}
        </div>
      </div>
    </div>
  );
}

export default Program;

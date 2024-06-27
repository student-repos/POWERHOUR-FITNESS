import React from "react";
import { Link, useParams } from "react-router-dom";
import "./program.css";
import { treatDate } from "./treatDate";
import axios from "axios";
import yogaImage from "../../assets/yoga_june.jpeg";
import cardioImage from "../../assets/cardio_year.webp";
import pilatesImage from "../../assets/pilates_year.jpeg";
import Logo from "../../assets/logo.png";

const images = {
  yogaImage,
  cardioImage,
  pilatesImage,
};

// import courses from "./courses.json";
import { useEffect, useState } from "react";

function Program() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:7500/course");
        console.log(response);
        const { data } = response;
        console.log(data);
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  const { program } = useParams();
  const image = images[`${program}Image`];

  const sessionDivs = courses
    .filter((trainerClasses) => trainerClasses.type === program)
    .map((trainerClasses) => {
      const {
        name,
        picture,
        description,
        date,
        duration,
        type,
        trainerId: { firstName, lastName },
      } = trainerClasses;

      return (
        <div key={firstName} className="trainer-info">
          <h4>
            Trainer Name: {firstName} {lastName} {type}
          </h4>
          <h3>Course name :{name}</h3>
          <p>Course Description: {description}</p>
          <p>date:{date}</p>
          <p>duration:{duration}</p>
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
        <div>{sessionDivs}</div>
      </div>
    </div>
  );
}

export default Program;

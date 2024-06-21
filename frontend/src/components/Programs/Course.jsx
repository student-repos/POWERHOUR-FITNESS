import React from "react";
import {useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { treatDate } from "./treatDate";



// <<< ########### Get this data from the database ###########
import courses from "./courses.json"
// ########### Get this data from the database ########### >>>



function Course() {
  const { program, course, trainer, id } = useParams()
  console.log({ program, course, trainer, id })
  

  const trainerData = courses.find( data => (
    data.shortName === trainer
  ))
  const { trainerName, classes  } = trainerData
  const classData = classes.find( data => (
    data.className === id
  ))
  const {
    startDate,
    endDate
  } = treatDate(classData)
  const {
    startTime,
    duration,
    capacity,
    description
  } = classData
  

  return (
    <>
      <div className="singlepage-container">
        <div className="header">
          <div>
            <img src={Logo} alt="" width={60} />
          </div>
          <h2>PowerHour</h2>
        </div>
        <h1>{course}</h1>
        <div className="Trainer-profile">
          <img src="" alt="" />
          <p>Name of Trainer: {trainerName}</p>
        </div>
        <div className="description">
          <h2>{id}</h2>
          <p>{description}
          </p>
        </div>
        <div className="booking-card">
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          <p>start time: {startTime}</p>
          <p>duration : {duration}</p>
          <p>capacity: {capacity}</p>
          <button>Book Now</button>
        </div>
      </div>
    </>
  );
}

export default Course;

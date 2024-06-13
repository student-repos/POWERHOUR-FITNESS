import React from "react";
import "./Trainers.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/trainer");
        console.log(response);
        const { data } = response;
        console.log(data);
        setTrainers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrainers();
  }, []);
  return (
    <section className="trainers" id="trainers">
      <h2>Your Trainers</h2>

      {/*Trainers card*/}
      <div className="trainer-list">
        {trainers.map((trainer, i) => (
          <div className="trainer-card" key={i}>
            <h3>{trainer.firstName}</h3>
            <div><img width="200"  src={`http://localhost:7000/user/picture/${trainer._id}`}/></div>
            <p>{trainer.trainerDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;

import React from 'react';
import './Offers.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get("http://localhost:7500/offer");
        console.log(response);
        const { data } = response;
        console.log(data);
        setOffers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOffers();
  }, []);
  return (
    <div className="offers-container" id="offers">
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/*Offers card*/}
      <div className="offers" >
        {offers.map((offer, i) => (
          <div className="offer" key={i}>
            <div className="deadline">
              LAST CHANCE UNTIL
              <span className="deadline-date"> {offer.deadline}</span> GREAT
              PRICE FOR <br></br> <span className="activity-name">{offer.activity} </span>
              EXERCISES
            </div>
            <div className="title-price">
              <span className="offer-season">
                {offer.season} <br></br>SPECIAL
              </span>
              <span className="monthly-price">
                € {offer.monthlyPrice}.00 <br></br>MONTHLY
              </span>
            </div>
            <span>No fixed contract term</span>
            <div>
              <ol>
                <li>
                  Train for {offer.monthlyPrice}€ per month in the first two
                  months and from the 3rd month onward for €24.99 per
                  month(instead of €49.99)
                </li>
                <li>No fixed contract term, can be canceled monthly</li>
                <li>No regestration fee</li>
                <li>No additional costs</li>
                <li>Complete training program including live courses </li>
                <span>(in all participating studios)</span>
              </ol>
            </div>
            <div>
              <span>See more benefits</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offers;
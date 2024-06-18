import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";
import PrevNextButtons from "./Button.jsx";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get("http://localhost:7500/review");
      setReviews(response.data);
    };
    
    fetchReviews();
  }, []);
  console.log(reviews);

  const handleReviewClick = () => {
    navigate("/login");
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="review-page" id="testimonials">
      <div className="t-header">
        <span className="text-1">CUSTOMER</span>
        <span className="text-2">SATISFACTION</span>
        <span className="text-3">IS</span>
        <span className="text-4">OUR GOAL</span>
        <span className="text-5">
          To provide you allways better services than before, write us your
          feedbacks please and rate the app too.
        </span>
        <span className="text-6">Tell others what you think</span>
        <div className="stars" onClick={handleReviewClick}>
          {[...Array(5)].map((_, index) => (
            // <span className="static-star" key={index}>⭐</span>
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="static-star"
            />
          ))}
        </div>
        <p className="write-review" onClick={handleReviewClick}>
          <FontAwesomeIcon
            icon={faHandPointRight}
            style={{ color: "#FFD43B", fontSize: "40px", marginRight: "40px" }}
          />
          Write your review
        </p>
      </div>
      {Array.isArray(reviews) && reviews.length > 0 && (
        <div className="review-display">
          <div className="img-container">
            <img src={`http://localhost:7500/user/picture/${reviews[currentIndex]._id}`} alt="Profile Picture" />
          </div>
          <div className="review-details">
            <p className="review-name">{reviews[currentIndex].fullName}</p>
            <div className="stars">
              {[...Array(reviews[currentIndex].rating)].map((_, index) => (
                <span className="dynamic-star" key={index}>
                  ⭐
                </span>
              ))}
            </div>
            <p className="review-message">{reviews[currentIndex].message}</p>
          </div>
          <div className="slider-container">
            <PrevNextButtons
              onPrevClick={handlePrevClick}
              onNextClick={handleNextClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;

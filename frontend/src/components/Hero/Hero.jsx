import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/gym hero.jpeg";

function Hero() {
  return (
    <section
      className="hero-section"
      id="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="outline-text">MAXIMIZE YOUR</span>
              <br />
              <span className="bold-text">POTENTIAL EVERY</span>
              <br />
              <span className="outline-text">HOUR</span>
            </h1>
            
            <Link to="/signup" className="get-started">Get started</Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>+14</strong>
              <br />
              EXPERT TRAINERS
            </div>
            <div>
              <strong>+9</strong>
              <br />
              MEMBERS JOINED
            </div>
            <div>
              <strong>+30</strong>
              <br />
              FITNESS PROGRAMS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

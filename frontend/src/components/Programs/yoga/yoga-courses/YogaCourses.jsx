import React from "react";
import Logo from "../../../../assets/logo.png";

function YogaCourses() {
  return (
    <>
      <div className="singlepage-container">
        <div className="header">
          <div><img src={Logo} alt="" width={60} /></div>
          <h2>PowerHour</h2>
        </div>
        <div className="Trainer-profile">
          <img src="" alt="" />
          <p>Name of Trainer</p>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor amet
            mollitia natus saepe soluta harum ipsum hic cumque. Soluta similique
            nam ipsam nostrum maxime eligendi architecto officiis, animi
            molestiae ea qui perspiciatis aspernatur aliquid eius nisi quas vel
            nemo vero magni. Quaerat, libero aperiam debitis recusandae
            perspiciatis possimus aliquid quas.{" "}
          </p>
        </div>
        <div className="booking-card">
            <p>start time: 10:00 Am 20.06.2024</p>
            <p>duration :90 min</p>
            <p>capacity:20</p>
            <button>Book Now</button>
        </div>
      </div>
    </>
  );
}

export default YogaCourses;

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>Be the first to shop our new models.</h1>
        <Link to="/shop">
          <button className="btn">Buy NOW</button>
        </Link>
      </div>
      <div className="hero__photo">
        <div className="thecap">
          <img src="./png/pngfind.com-blue-swoosh-png-5252264.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

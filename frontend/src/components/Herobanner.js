import React from "react";
import "../Style/Herobanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to Restaurant </h1>
          <p>
            Manage your restaurant, menu items, employees, and sales
            efficiently in one place.
          </p>

          <button className="hero-btn">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
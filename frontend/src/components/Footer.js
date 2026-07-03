import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Restaurant App</h3>
        <p>Delicious Food, Great Service, Happy Customers.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/persons">Persons</a>
          <a href="/about">About</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Restaurant App. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
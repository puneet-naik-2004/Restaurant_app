import React from "react";
import "../Style/Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Restaurant App</h2>
      </div>

      <ul className="nav-links">
       


       <li>
          <Link to="/">Home</Link>
        </li>

         <li>
          <Link to="/persons">Persons</Link>
        </li>

         <li>
           <Link to="/menu-form">Menu Form</Link>
        </li> 

        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
  <Link to="/dashboard">Dashboard</Link>
     </li>

      </ul>
    </nav>
  );
};

export default Navbar;
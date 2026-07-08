import React from "react";
import { Link } from "react-router-dom";
import "../Style/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>🍽️ Restaurant Dashboard</h1>
      <p>Manage your restaurant efficiently</p>

      <div className="dashboard-cards">
        <Link to="/persons" className="card">
          <h2>👨‍🍳Add Employees</h2>
          <p>Manage chefs, waiters, and managers</p>
        </Link>

        <Link to="/menu-form" className="card">
          <h2>➕ Add Menu</h2>
          <p>Add new food and drink juice i reastorent</p>
        </Link>

        <Link to="/menu" className="card">
          <h2>🍔 View Menu</h2>
          <p>See all available menu items</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
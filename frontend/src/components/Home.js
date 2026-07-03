import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import Menu from "./Menu"
import Herobanner from "./Herobanner";
// import DashboardMenu from "./DashboardMenu";
import Map from "./Map";

const Home = () => {
  return (

    <div>
         <Herobanner/>
        <Menu/>
        <Map/>
        {/* <DashboardMenu/> */}
    </div>
  );
};

export default Home;
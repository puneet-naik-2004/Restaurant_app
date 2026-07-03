import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import PersonForm from './components/PersonForm';
import MenuItemForm from './components/MenuItemForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import "./App.css"
import Herobanner from "./components/Herobanner";
// import DashboardMenu from "./components/DashboardMenu";
import Map from "./components/Map";

function App() {
  return (
  <div>
   <BrowserRouter>
       <Navbar/>
        <div className="main-content">
     <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/persons" element={<PersonForm />} />
        <Route path="/menu-form" element={<MenuItemForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="herobanner" element={<Herobanner/>}/>
      <Route path="map" element={<Map/>}/>
        {/* <Route path="dashboardmenu" element={<DashboardMenu/>}/> */}
      
     </Routes>
      </div>
       
       <Footer/>
  </BrowserRouter>
  </div>
  );
}

export default App;

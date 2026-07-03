import React, { useEffect, useState } from "react";
import { getAllMenuItems } from "../services/menuItemService";
import "../Style/Menu.css"

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const data = await getAllMenuItems();
      setMenuItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="menu-page">
      <h1>Restaurant Menu</h1>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item._id}>
            <img
            src={item.image}
            alt={item.name}
            className="menu-image"
            />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Taste: {item.taste}</p>
            <p>
              Type: {item.is_drink ? "Drink 🥤" : "Food 🍽️"}
            </p>

            <p>
              Ingredients:
              {item.ingredients?.join(", ")}
            </p>

            <p>Sales: {item.num_sales}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
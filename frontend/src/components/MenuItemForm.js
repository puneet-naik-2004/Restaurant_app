import React, { useState } from "react";
import { createMenuItem } from "../services/menuItemService";
import "../Style/MenuItemForm.css"

const MenuItemForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    taste: "",
    is_drink: false,
    ingredients: "",
    num_sales: 0,
    image:"",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const menuData = {
      ...formData,
      image: formData.image,
      ingredients: formData.ingredients
        .split(",")
        .map((item) => item.trim()),
    }; console.log(menuData)

    try {
      await createMenuItem(menuData);

      alert("Menu Item Added Successfully");

      setFormData({
        name: "",
        price: "",
        taste: "",
        is_drink: false,
        ingredients: "",
        num_sales: 0,
        image: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add menu item");
    }
   
  };

  return (
    <div className="menu-container">
      <h2>Add Menu Item</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <select
          name="taste"
          value={formData.taste}
          onChange={handleChange}
          required
        >
          <option value="">Select Taste</option>
          <option value="sweet">Sweet</option>
          <option value="spicy">Spicy</option>
          <option value="sour">Sour</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="is_drink"
            checked={formData.is_drink}
            onChange={handleChange}
          />
          Is Drink
        </label>

        <input
          type="text"
          name="ingredients"
          placeholder="milk, sugar, ice"
          value={formData.ingredients}
          onChange={handleChange}
        />

        <input
          type="number"
          name="num_sales"
          placeholder="Number of Sales"
          value={formData.num_sales}
          onChange={handleChange}
        />
        <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        
        />

        <button type="submit">Add Menu Item</button>
      </form>
    </div>
    
  );
};

export default MenuItemForm;
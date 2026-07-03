import React, { useEffect, useState } from "react";
import {
  getAllMenuItems,
  deleteMenuItem,
  updateMenuItem,
} from "../services/menuItemService";

import "../Style/DashboardMenu.css";

const DashboardMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getAllMenuItems();
    setMenuItems(data);
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteMenuItem(id);
    loadData();
  };

  // EDIT CLICK
  const handleEdit = (item) => {
    setEditItem(item);
  };

  // UPDATE SAVE
  const handleUpdate = async () => {
    await updateMenuItem(editItem._id, editItem);
    setEditItem(null);
    loadData();
  };

  return (
    <div className="dashboard-menu">

      <h1>🍽️ Dashboard Menu</h1>

      {/* EDIT BOX */}
      {editItem && (
        <div className="edit-box">
          <h3>Edit Menu Item</h3>

          <input
            value={editItem.name}
            onChange={(e) =>
              setEditItem({ ...editItem, name: e.target.value })
            }
          />

          <input
            value={editItem.price}
            onChange={(e) =>
              setEditItem({ ...editItem, price: e.target.value })
            }
          />

          <input
            value={editItem.taste}
            onChange={(e) =>
              setEditItem({ ...editItem, taste: e.target.value })
            }
          />

          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setEditItem(null)}>Cancel</button>
        </div>
      )}

      {/* MENU GRID */}
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item._id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>{item.taste}</p>

            <div className="btn-group">
              <button onClick={() => handleEdit(item)}>✏️ Edit</button>
              <button onClick={() => handleDelete(item._id)}>
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMenu;
import axios from "axios";

const API_URL = "http://localhost:5000/menu";

export const createMenuItem = async (menuData) => {
  const response = await axios.post(API_URL, menuData);
  return response.data;
};

export const getAllMenuItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const deleteMenuItem = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateMenuItem = async (id, menuData) => {
  const response = await axios.put(`${API_URL}/${id}`, menuData);
  return response.data;
};
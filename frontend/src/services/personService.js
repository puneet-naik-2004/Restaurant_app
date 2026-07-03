import axios from "axios";

const API_URL = "http://localhost:5000/person";

export const createPerson = async (personData) => {
  const response = await axios.post(API_URL, personData);
  return response.data;
};

export const getAllPersons = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPersonById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updatePerson = async (id, personData) => {
  const response = await axios.put(`${API_URL}/${id}`, personData);
  return response.data;
};

export const deletePerson = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
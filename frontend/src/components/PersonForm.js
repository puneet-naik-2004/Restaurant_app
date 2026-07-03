import React, { useState } from "react";
import { createPerson } from "../services/personService";
import "../Style/PersonForm.css";

const PersonForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    work: "",
    mobile: "",
    email: "",
    address: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPerson(formData);

      alert("Person Added Successfully!");

      setFormData({
        name: "",
        age: "",
        work: "",
        mobile: "",
        email: "",
        address: "",
        salary: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add person");
    }
  };

  return (
    <div className="person-container">
      <h2>Add Person</h2>

      <form onSubmit={handleSubmit} className="person-form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name="work"
          value={formData.work}
          onChange={handleChange}
          required
        >
          <option value="">Select Work</option>
          <option value="chef">Chef</option>
          <option value="waiter">Waiter</option>
          <option value="manager">Manager</option>
        </select>

        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Enter Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default PersonForm;
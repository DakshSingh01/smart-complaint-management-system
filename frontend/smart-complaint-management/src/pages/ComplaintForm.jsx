import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await axios.post(
        "https://smart-complaint-management-system-1-1ymp.onrender.com/api/complaints",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert("Complaint Submitted Successfully");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (

    <div className="page-container">

      <form
        className="form-container"
        onSubmit={submitHandler}
      >

        <h1>Create Complaint</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={changeHandler}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={changeHandler}
        />

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          value={formData.title}
          onChange={changeHandler}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={changeHandler}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={changeHandler}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={changeHandler}
        />

        <div className="button-group">

          <button type="submit">
            Submit Complaint
          </button>

          <button
            type="button"
            className="ai-btn"
          >
            Analyze with AI
          </button>

        </div>

      </form>

    </div>
  );
};

export default ComplaintForm;
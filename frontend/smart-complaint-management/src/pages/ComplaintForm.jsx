import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await axios.post(
        "https://smart-complaint-management-system-1-1ymp.onrender.com/api/complaints",
        {
          name,
          email,
          title,
          description,
          category,
          location,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert("Complaint Submitted Successfully");

      setName("");
      setEmail("");
      setTitle("");
      setDescription("");
      setCategory("");
      setLocation("");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (

    <div className="dashboard-main">

      <div className="page-container">

        <form
          className="form-container"
          onSubmit={submitHandler}
        >

          <h1>Create Complaint</h1>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Complaint Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
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

    </div>
  );
};

export default ComplaintForm;
import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await axios.post(
        "https://smart-complaint-management-system-1-1ymp.onrender.com/api/complaints",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert("Complaint Submitted");

      setTitle("");
      setDescription("");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
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
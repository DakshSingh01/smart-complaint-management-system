import { useState } from "react";
import API from "../api/axios";

const ComplaintForm = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/api/complaints",
        {
          title,
          description,
        }
      );

      alert("Complaint Added");

      window.location.href = "/dashboard";

    } catch (error) {

      console.log(error);

      alert("Error");
    }
  };

  return (

    <div className="dashboard-main">

      <div className="form-container">

        <h1>Create Complaint</h1>

        <form onSubmit={submitHandler}>

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

          <button type="submit">
            Submit Complaint
          </button>

        </form>

      </div>

    </div>
  );
};

export default ComplaintForm;
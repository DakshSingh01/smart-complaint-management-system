import { useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../api/axios";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: ""
  });

  const [loading, setLoading] = useState(false);

  const [aiLoading, setAiLoading] =
    useState(false);

  const [aiResult, setAiResult] =
    useState("");

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post(
        "/complaints",
        formData
      );

      alert("Complaint Registered");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const analyzeAIHandler = async () => {
    try {
      setAiLoading(true);

      const { data } = await API.post(
        "/ai/analyze",
        {
          description:
            formData.description
        }
      );

      setAiResult(data.result);
    } catch (error) {
      alert("AI Failed");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <div className="form-container">
          <h1>Create Complaint</h1>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />

            <input
              type="text"
              placeholder="Complaint Title"
              name="title"
              value={formData.title}
              onChange={changeHandler}
            />

            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={changeHandler}
            ></textarea>

            <input
              type="text"
              placeholder="Category"
              name="category"
              value={formData.category}
              onChange={changeHandler}
            />

            <input
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={changeHandler}
            />

            <div className="button-group">
              <button type="submit">
                {loading
                  ? "Submitting..."
                  : "Submit Complaint"}
              </button>

              <button
                type="button"
                className="ai-btn"
                onClick={analyzeAIHandler}
              >
                {aiLoading
                  ? "Analyzing..."
                  : "Analyze with AI"}
              </button>
            </div>
          </form>

          {aiResult && (
            <div className="ai-result-card">
              <h2>AI Analysis Result</h2>

              <p>{aiResult}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
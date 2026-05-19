import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../api/axios";

const ComplaintForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.description) {
      alert("Title and Description are required");
      return;
    }

    try {
      setLoading(true);
      await API.post("/api/complaints", formData);
      alert("Complaint Submitted Successfully!");
      navigate("/complaints");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <div className="page-container">
          <form className="form-container" onSubmit={submitHandler}>
            <h1>Create Complaint</h1>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={changeHandler}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={changeHandler}
            />

            <input
              type="text"
              name="title"
              placeholder="Complaint Title *"
              value={formData.title}
              onChange={changeHandler}
              required
            />

            <textarea
              name="description"
              placeholder="Describe your complaint in detail *"
              value={formData.description}
              onChange={changeHandler}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category (e.g. Infrastructure, Service)"
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
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit Complaint"}
              </button>

              <button
                type="button"
                className="ai-btn"
                onClick={() => navigate("/ai-analysis")}
              >
                Analyze with AI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
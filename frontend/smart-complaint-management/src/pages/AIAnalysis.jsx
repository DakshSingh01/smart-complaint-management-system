import { useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../api/axios";

const AIAnalysis = () => {
  const [description, setDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  const analyzeHandler = async () => {

  if (!description.trim()) {
    return alert(
      "Please enter complaint description"
    );
  }

  try {
    setLoading(true);

    const { data } = await API.post(
      "/ai/analyze",
      {
        description
      }
    );

    setResult(data.result);

  } catch (error) {

    alert("AI Analysis Failed");

  } finally {

    setLoading(false);
  }
};

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <div className="ai-page">
          <h1>AI Complaint Analysis</h1>

          <textarea
            placeholder="Enter complaint description..."
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          ></textarea>

          <button
            onClick={analyzeHandler}
          >
            {loading
              ? "Analyzing..."
              : "Analyze Complaint"}
          </button>

          {result && (
            <div className="ai-result">
              <h2>AI Result</h2>

              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;
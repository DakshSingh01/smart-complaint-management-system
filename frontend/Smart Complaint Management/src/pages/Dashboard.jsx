import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../api/axios";

const Dashboard = () => {

  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const { data } =
        await API.get("/complaints");

      setComplaints(data);

    } catch (error) {

      console.log(error);

    }
  };

  const pending =
    complaints.filter(
      (item) => item.status === "Pending"
    ).length;

  const resolved =
    complaints.filter(
      (item) => item.status === "Resolved"
    ).length;

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <div className="page-container">

          <div className="dashboard-top">

            <div>

              <h1 className="page-title">
                Dashboard
              </h1>

              <p className="dashboard-subtitle">
                Smart AI Complaint Monitoring System
              </p>

            </div>

          </div>

          <div className="stats-grid">

            <div className="stats-card">

              <h3>Total Complaints</h3>

              <p>{complaints.length}</p>

            </div>

            <div className="stats-card">

              <h3>Pending</h3>

              <p>{pending}</p>

            </div>

            <div className="stats-card">

              <h3>Resolved</h3>

              <p>{resolved}</p>

            </div>

          </div>

          <div className="recent-section">

            <div className="section-header">

              <h2>Recent Complaints</h2>

            </div>

            <div className="complaint-grid">

              {complaints.slice(0, 3).map((item) => (

                <div
                  className="complaint-card"
                  key={item._id}
                >

                  <div className="complaint-header">

                    <h2>{item.title}</h2>

                    <span
                      className={
                        item.status === "Pending"
                          ? "pending"
                          : "resolved"
                      }
                    >
                      {item.status}
                    </span>

                  </div>

                  <p className="complaint-desc">
                    {item.description}
                  </p>

                  <div className="complaint-meta">

                    <span>
                      📍 {item.location}
                    </span>

                    <span>
                      📂 {item.category}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Dashboard;
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../api/axios";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await API.get("/api/complaints");
      setComplaints(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      setError("Failed to load complaints. Is your backend running?");
    } finally {
      setLoading(false);
    }
  };

  const pending = complaints.filter((c) => c.status === "Pending").length;
  const resolved = complaints.filter((c) => c.status === "Resolved").length;

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <div className="page-container">

          {/* Header */}
          <div className="dashboard-top">
            <div>
              <h1 className="page-title">Dashboard</h1>
              <p className="dashboard-subtitle">
                Smart AI Complaint Monitoring System
              </p>
            </div>
            <button className="refresh-btn" onClick={fetchComplaints}>
              ↻ Refresh
            </button>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="error-banner">
              ⚠️ {error}
            </div>
          )}

          {/* Stats */}
          <div className="stats-grid">
            <div className="stats-card">
              <h3>Total Complaints</h3>
              <p>{loading ? "..." : complaints.length}</p>
            </div>
            <div className="stats-card">
              <h3>Pending</h3>
              <p>{loading ? "..." : pending}</p>
            </div>
            <div className="stats-card">
              <h3>Resolved</h3>
              <p>{loading ? "..." : resolved}</p>
            </div>
          </div>

          {/* Recent Complaints */}
          <div className="recent-section">
            <div className="section-header">
              <h2>Recent Complaints</h2>
            </div>

            {loading ? (
              <div className="loading-grid">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="complaint-card skeleton" />
                ))}
              </div>
            ) : complaints.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📋</div>
                <h3>No complaints yet</h3>
                <p>Submit your first complaint to get started</p>
              </div>
            ) : (
              <div className="complaint-grid">
                {complaints.slice(0, 3).map((item) => (
                  <div className="complaint-card" key={item._id}>
                    <div className="complaint-header">
                      <h2>{item.title}</h2>
                      <span className={item.status === "Pending" ? "pending" : "resolved"}>
                        {item.status}
                      </span>
                    </div>
                    <p className="complaint-desc">{item.description}</p>
                    <div className="complaint-meta">
                      <span>📍 {item.location}</span>
                      <span>📂 {item.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
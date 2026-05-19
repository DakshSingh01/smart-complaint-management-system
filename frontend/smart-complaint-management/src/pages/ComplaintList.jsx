import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../api/axios";

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/api/complaints"); // ✅ fixed path
      setComplaints(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (!window.confirm("Delete this complaint?")) return;
    try {
      await API.delete(`/api/complaints/${id}`); // ✅ fixed path
      fetchComplaints();
    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <div className="page-container">

          <div className="dashboard-top">
            <h1 className="page-title">Complaint List</h1>
          </div>

          {loading ? (
            <div className="loading-grid">
              {[1,2,3].map(i => <div key={i} className="complaint-card skeleton" />)}
            </div>
          ) : complaints.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <h3>No complaints found</h3>
              <p>Submit your first complaint to get started</p>
            </div>
          ) : (
            <div className="complaint-grid">
              {complaints.map((item) => (
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
                  <div style={{display:"flex", gap:"10px", marginTop:"20px"}}>
                    <button
                      className="delete-btn"
                      style={{flex:1}}
                      onClick={() => deleteHandler(item._id)}
                    >
                      🗑 Delete
                    </button>
                    <button
                      className="delete-btn"
                      style={{flex:1, background:"linear-gradient(to right,#7c3aed,#2563eb)"}}
                      onClick={() => navigate(`/complaint/${item._id}`)}
                    >
                      👁 View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintList;
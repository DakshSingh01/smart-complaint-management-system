import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import API from "../api/axios";

const ComplaintList = () => {

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

  const deleteHandler = async (id) => {

    try {

      await API.delete(
        `/complaints/${id}`
      );

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

          <h1 className="page-title">
            Complaint List
          </h1>

          <div className="complaint-grid">

            {complaints.map((item) => (

              <div
                className="complaint-card"
                key={item._id}
              >

                <div className="complaint-header">

                  <h2>
                    {item.title}
                  </h2>

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

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteHandler(item._id)
                  }
                >
                  Delete Complaint
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
};

export default ComplaintList;
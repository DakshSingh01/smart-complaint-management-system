import React from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();

  const logoutHandler = () => {

    localStorage.removeItem("userInfo");

    window.location.hash = "/login";
  };

  return (

    <div className="sidebar">

      <div>

        <div className="logo-box">

          <div className="logo-top">

            <div className="logo-icon">
              ✨
            </div>

            <div>

              <h1 className="logo">
                ResolveAI
              </h1>

              <p>
                Smart Complaint System
              </p>

            </div>

          </div>

        </div>

        <div className="sidebar-links">

          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard"
                ? "active"
                : ""
            }
          >
            Dashboard
          </Link>

          <Link
            to="/create-complaint"
            className={
              location.pathname === "/create-complaint"
                ? "active"
                : ""
            }
          >
            Add Complaint
          </Link>

          <Link
            to="/ai-analysis"
            className={
              location.pathname === "/ai-analysis"
                ? "active"
                : ""
            }
          >
            AI Analysis
          </Link>

          <Link
            to="/complaints"
            className={
              location.pathname === "/complaints"
                ? "active"
                : ""
            }
          >
            Complaints
          </Link>

          <Link
            to="/profile"
            className={
              location.pathname === "/profile"
                ? "active"
                : ""
            }
          >
            Profile
          </Link>

        </div>

      </div>

      <button
        className="logout-btn"
        onClick={logoutHandler}
      >
        Logout
      </button>

    </div>
  );
};

export default Sidebar;
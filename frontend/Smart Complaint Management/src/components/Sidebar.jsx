import {
  LayoutDashboard,
  FilePlus2,
  ClipboardList,
  User,
  LogOut,
  Sparkles
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const Sidebar = () => {

  const navigate = useNavigate();

  const logoutHandler = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <motion.div
      className="sidebar"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >

      <div>

        <div className="logo-box">

          <div className="logo-icon">
            <Sparkles />
          </div>

          <div>
            <h2 className="logo">
              ResolveAI
            </h2>

            <p>
              Smart Complaint System
            </p>
          </div>

        </div>

        <nav className="sidebar-links">

          <Link to="/dashboard">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link to="/create-complaint">
            <FilePlus2 size={20} />
            Add Complaint
          </Link>

          <Link to="/ai-analysis">
            <Sparkles size={20} />
            AI Analysis
          </Link>

          <Link to="/complaints">
            <ClipboardList size={20} />
            Complaints
          </Link>

          <Link to="/profile">
            <User size={20} />
            Profile
          </Link>

        </nav>

      </div>

      <button
        className="logout-btn"
        onClick={logoutHandler}
      >
        <LogOut size={18} />
        Logout
      </button>

    </motion.div>
  );
};

export default Sidebar;
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
  ShieldAlert,
  Sparkles,
  BarChart3
} from "lucide-react";

const Landing = () => {

  return (

    <div className="landing-page">

      <div className="hero-left">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          AI Powered
          <span> Complaint </span>
          Management System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Smart complaint monitoring,
          AI analysis, tracking,
          automation and analytics.
        </motion.p>

        <div className="hero-buttons">

          <Link to="/login">
            <button>
              Get Started
            </button>
          </Link>

          <Link to="/register">
            <button className="outline-btn">
              Register
            </button>
          </Link>

        </div>

        <div className="hero-features">

          <div>
            <ShieldAlert />
            Secure
          </div>

          <div>
            <Sparkles />
            AI Powered
          </div>

          <div>
            <BarChart3 />
            Analytics
          </div>

        </div>

      </div>

      <motion.div
        className="hero-right"
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="dashboard"
        />

      </motion.div>

    </div>

  );
};

export default Landing;
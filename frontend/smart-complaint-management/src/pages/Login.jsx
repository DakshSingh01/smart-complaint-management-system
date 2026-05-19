import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      alert("Login Success");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt=""
        />
      </div>

      <div className="auth-container">
        <form className="auth-card" onSubmit={submitHandler}>
          <h1>Welcome Back 👋</h1>

          <p>Login to continue using ResolveAI</p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

          <span>
            Don’t have account?
            <Link to="/register">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
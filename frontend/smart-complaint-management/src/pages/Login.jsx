import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../api/axios";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
    });

  const changeHandler = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const { data } = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        data.token
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message
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

        <form
          className="auth-card"
          onSubmit={submitHandler}
        >

          <h1>
            Welcome Back 👋
          </h1>

          <p>
            Login to continue using ResolveAI
          </p>

          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />

          <button type="submit">
            Login
          </button>

          <span>
            Don't have account?
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
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../api/axios";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
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

      await API.post(
        "/auth/register",
        formData
      );

      navigate("/login");

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
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />

      </div>

      <div className="auth-container">

        <form
          className="auth-card"
          onSubmit={submitHandler}
        >

          <h1>
            Create Account 🚀
          </h1>

          <p>
            Join ResolveAI Platform
          </p>

          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />

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
            Register
          </button>

          <span>
            Already have account?
            <Link to="/login">
              Login
            </Link>
          </span>

        </form>

      </div>

    </div>
  );
};

export default Register;
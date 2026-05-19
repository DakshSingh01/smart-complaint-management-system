import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/users/login", formData);

      console.log(res.data);

      if (res.data) {
        localStorage.setItem(
          "user",
          JSON.stringify(res.data)
        );

        alert("Login Success");

        navigate("/dashboard");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Invalid Email or Password"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt=""
        />
      </div>

      <div className="auth-right">
        <form className="auth-box" onSubmit={handleLogin}>
          <h1>Welcome Back 👋</h1>

          <p>Login to continue using ResolveAI</p>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

          <span>
            Don't have account?{" "}
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
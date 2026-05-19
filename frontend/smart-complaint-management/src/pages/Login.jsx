import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(res.data)
      );

      alert("Login Success");

      window.location.href = "/dashboard";

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
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

        <div className="auth-card">

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue using ResolveAI
          </p>

          <form onSubmit={handleLogin}>

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

          </form>

          <span>
            Don't have account?
            <Link to="/register">
              Register
            </Link>
          </span>

        </div>

      </div>

    </div>
  );
};

export default Login;
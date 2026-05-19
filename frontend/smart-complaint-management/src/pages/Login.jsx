import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await API.post("/api/users/login", { email, password });
      // data = { token: "...", user: {...} }
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-image">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" alt="" />
      </div>
      <div className="auth-container">
        <form className="auth-card" onSubmit={submitHandler}>
          <h1>Welcome Back 👋</h1>
          <p>Login to continue using ResolveAI</p>
          <input type="email" placeholder="Enter Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Enter Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <span>Don't have account?<Link to="/register"> Register</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
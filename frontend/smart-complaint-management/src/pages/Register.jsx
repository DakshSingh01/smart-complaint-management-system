import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(
        "https://smart-complaint-management-system-1-1ymp.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      alert("Registration Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (

    <div className="auth-layout">

      <div className="auth-image">

        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
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
            Register to continue using ResolveAI
          </p>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
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
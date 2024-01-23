import React, { useState } from "react";
import "./Login.style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginAuthAction } from "../../store/reducers/authReducer";
const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendLoginRequest = async () => {
    const url = `http://localhost:5001/v1/api/user/login`;
    const payload = {
      email: inputValue.email,
      password: inputValue.password,
    };
    try {
      const response = await axios.post(url, payload);
      const data = await response.data;
      localStorage.setItem("userId", data.user._id);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = sendLoginRequest()
      .then(() => dispatch(loginAuthAction()))
      .then(() => navigate('/blogs'))
      .then((data) => console.log(data));
    console.log("API RESPONSE", response);
  };
  const handleInputChange = (e) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-section">
          <h2>WELCOME</h2>
          <div className="login-screen">
            <div className="fields">
              <label className="email">Email </label>
              <input
                name="email"
                className="field email"
                type="text"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="fields">
              <label className="email">Password </label>
              <input
                name="password"
                className="field password"
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="login-action">
            <button type="submit" className="login-now">
              Login Now
            </button>
            <div className="divider">OR</div>
            <button className="register" onClick={() => navigate("/register")}>
              Register Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

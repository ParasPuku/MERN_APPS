import React, { useState } from "react";
import "./Register.style.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginAuthAction } from "../../store/reducers/authReducer";
const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendRegisterRequest = async () => {
    const URL = `http://localhost:5001/v1/api/user/signup`;
    const payload = {
      name: inputValue.name,
      email: inputValue.email,
      password: inputValue.password,
    };
    try {
      const response = await axios.post(URL, payload);
      const data = await response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleInputChange = (e) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = sendRegisterRequest()
      .then(() => dispatch(loginAuthAction()))
      .then((data) => console.log(data));
    console.log("INPUT VALUE", response);
  };
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="register-section">
          <h2>Register yourself now!</h2>
          <div className="register-screen">
            <div className="fields">
              <label className="username">Name </label>
              <input
                name="name"
                className="field name"
                type="text"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </div>
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
          <div className="register-action">
            <button type="submit" className="register-now">
              Register Now
            </button>
            <div className="divider">OR</div>
            <button className="login" onClick={() => navigate("/login")}>
              Login Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

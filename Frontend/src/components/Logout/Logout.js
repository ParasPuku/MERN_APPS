import React from "react";
import "./Logout.style.scss";
import CheckMarkGif from "../../assets/gifs/check-mark.gif"
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="logout-container">
      <div className="done-gif"> 
      <span className="left-bar-line"></span>
        <img src={CheckMarkGif} alt="done-gif" className="gif"/>
        <span className="right-bar-line"></span>
      </div>
      <div className="message-section">
        <div className="logout-msg">You have been logged out!</div>
        <div className="thank-you">Thank You!</div>
      </div>
      <div className="login-again"><span className="click-here" onClick={() => navigate('/login')}>Click here</span> to login Again</div>
    </div>
  );
};

export default Logout;

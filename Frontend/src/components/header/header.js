import React, { useState } from "react";
import "./Header.style.scss";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const handleLinkClick = (value) => {
    setActiveLink(value);
    navigate(value);
  };
  return (
    <div className="header-container">
      <div className="header">
        <div className="left-section">
          <img src={logo} alt="logo-icon" className="logo" />
        </div>
        <div className="right-section">
          <ul className="header-links">
            <li
              className={`header-link ${
                activeLink === "/blogs" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/blogs")}
            >
              All Blogs
            </li>
            <li
              className={`header-link ${
                activeLink === "/my-blogs" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/my-blogs")}
            >
              My Blogs
            </li>
            <li
              className={`header-link ${
                activeLink === "/blogs/add" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/blogs/add")}
            >
              Add Blog
            </li>
          </ul>
          <ul className="auth-links">
            {!isLoggedIn && (
              <>
                <li className="auth-link" onClick={() => navigate("/login")}>
                  Register
                </li>
                <li className="auth-link" onClick={() => navigate("/login")}>
                  Login
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="auth-link" onClick={() => navigate("/login")}>
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

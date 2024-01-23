import React, { useState } from "react";
import "./AddBlog.style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddBlog = () => {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    description: "",
    image: "",
  });
  const currentUserId = localStorage.getItem("userId");
  const handleAddBlogPost = async () => {
    const url = `http://localhost:5001/v1/api/blog/add-blog-post`;
    const payload = {
      title: blogDetails.title,
      description: blogDetails.description,
      image: blogDetails.image,
      user: currentUserId,
    };
    try {
      const response = await axios.post(url, payload);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BlogDetails...", blogDetails);
    handleAddBlogPost();
  };
  const handleOnChange = (e) => {
    setBlogDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClose = () => {
    navigate("/blogs");
  };
  return (
    <div className="add-blog-container">
      <div className="add-blog">
        <div className="post-blog">Post your blog</div>
        <form onSubmit={handleSubmit}>
          <div className="container-title">
            <label className="label-title">Title: </label>
            <input
              type="text"
              name="title"
              className="title"
              onChange={handleOnChange}
            />
          </div>
          <div className="container-description">
            <label className="label-description">Description: </label>
            <textarea
            rows={8}
              type="text"
              name="description"
              className="description"
              onChange={handleOnChange}
            />
          </div>
          <div className="container-image">
            <label className="label-image">ImageURL: </label>
            <input
              type="text"
              name="image"
              className="image"
              onChange={handleOnChange}
            />
          </div>
          <div className="btn-container">
            <button className="btn btn-primary" type="submit">
              Post
            </button>
            <button className="btn btn-secondary" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

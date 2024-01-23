import React from "react";
import "./Blog.style.scss";
import EditIcon from "../../assets/images/edit-icon.png";
import DeleteIcon from "../../assets/images/delete.png";
const Blog = ({ id, title, desc, imageURL, username, handleEdit, handleDelete }) => {
  console.log("Each blog", id);
  return (
    <div className="blog-container" key={id}>
      <div className="top-section">
        <div className="blog-title">{title}</div>
        <div className="right-section">
          <img src={EditIcon} alt="edit-icon" className="editIcon" onClick={() => handleEdit(id)}/>
          <img src={DeleteIcon} alt="delete-icon" className="deleteIcon" onClick={() => handleDelete(id)}/>
        </div>
      </div>
      <img src={imageURL} className="blog-image" alt="blog-icon" />
      <div className="blog-desc">{desc}</div>
      <div className="blog-user">{username}</div>
    </div>
  );
};

export default Blog;

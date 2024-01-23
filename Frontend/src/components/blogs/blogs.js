import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blogs.style.scss";
import Blog from "../Blog";
const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const url = "http://localhost:5001/v1/api/blog";
    try {
      const response = await axios.get(url);
      const { blogs } = await response.data;
      setBlogPosts(blogs);
      console.log(blogs);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditBlogPost = async (id) => {
    console.log("edit", id);
    const edit_url = `http://localhost:5001/v1/api/blog/edit-blog-post/${id}`;
    try {
      const response = await axios.put(edit_url);
      const data = await response.data;
      console.log(data);

      const url = "http://localhost:5001/v1/api/blog";
      const res = await axios.get(url);
      const { blogs } = await res.data;
      setBlogPosts(blogs);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const handleDeleteBlogPost = async (id) => {
    console.log("delete", id);
    const delete_url = `http://localhost:5001/v1/api/blog/delete-blog-post/${id}`;
    try {
      const response = await axios.delete(delete_url);
      const data = await response.data;
      console.log(data);

      const url = "http://localhost:5001/v1/api/blog";
      const res = await axios.get(url);
      const { blogs } = await res.data;
      setBlogPosts(blogs);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="blogs-container">
      {blogPosts.length > 0 &&
        blogPosts.map((blog, index) => (
          <Blog
            key={index}
            id={blog._id}
            title={blog.title}
            desc={blog.description}
            imageURL={blog.image}
            // username={blog.user.name}
            handleEdit={handleEditBlogPost}
            handleDelete={handleDeleteBlogPost}
          />
        ))}
    </div>
  );
};
export default Blogs;

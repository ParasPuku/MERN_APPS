import React, { useEffect, useState } from "react";
import "./UserBlogs.style.scss";
import axios from "axios";
import Blog from "../Blog";
const UserBlogs = () => {
  const [userBlogPosts, setUserBlogPosts] = useState([]);
  useEffect(() => {
    getUserBlogs();
  }, []);
  const getUserBlogs = () => {
    const userId = localStorage.getItem("userId");
    const URL = `http://localhost:5001/v1/api/blog/blog-post-by-userid/${userId}`;
    const res = axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        setUserBlogPosts(data.blogs.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("USER API",res);
  };
  return (
    <div className="user-blog-container">
      <div className="blog-container">
        {userBlogPosts.length > 0 &&
          userBlogPosts.map((blogPost) => (
            <Blog
              key={blogPost.id}
              title={blogPost.title}
              desc={blogPost.description}
              imageURL={blogPost.image}
              // username={blogPost.user.name}
            />
          ))}
      </div>
    </div>
  );
};

export default UserBlogs;

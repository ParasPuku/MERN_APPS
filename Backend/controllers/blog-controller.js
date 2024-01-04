const mongoose = require("mongoose");
const Blog = require("../models/blog");
const User = require("../models/user");

const getAllBlogPosts = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    console.log("Error", error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No blogs found" });
  }
  return res.status(200).json({ blogs });
};

const addBlogPost = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    console.log("Error", error);
  }
  if(!existingUser) {
    return res.status(404).json({ message: "Unable to find User by this ID" });
  }
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({session});
    existingUser.blogs.push(blog);
    await existingUser.save({session});
    await session.commitTransaction();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({message: error})
  }
  return res.status(200).json({ blog, message: "Blog posted successfully" });
};

const updateBlogPost = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    console.log("Error", error);
  }

  if (!blog) {
    return res.status(404).json({ message: "Unable to update the blog" });
  }
  blog.title = title;
  blog.description = description;
  blog.image = image;

  try {
    await blog.save();
  } catch (error) {
    console.log("Error", error);
  }
  return res.status(200).json({ blog, message: "Blog updated successfully!" });
};

const getBlogPostById = async (req, res, next) => {
    const {id} = req.params;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (error) {
        console.log("Error", error);
    }
    if(!blog) {
        return res.status(404).json({ message: "Unable to find the blog" });
    }
    return res.status(200).json({ blog, message: "Blog found successfully!" });
};

const deleteBlogPost = async (req, res, next) => {
  const { id } = req.params;
  console.log("deleteBlogPost", id, req.params);
  let blog;
  try {
    blog = await Blog.findByIdAndDelete(id).populate('user');
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (error) {
    console.log("Error", error);
  }
  if (!blog) {
    return res.status(404).json({ message: "Unable to delete the blog" });
  }
  return res.status(200).json({ blog, message: "Blog deleted successfully!" });
};


const getBlogPostByUserId = async (req, res, next) => {
    const userId = req.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate('blogs');
    } catch (error) {
        console.log("Error", error);
    }
    if(!userBlogs) {
        return res.status(404).json({ message: "Unable to find the user" });
    }
    return res.status(200).json({ blogs: userBlogs, message: "User found successfully!" });
};

module.exports = {
  getAllBlogPosts,
  addBlogPost,
  updateBlogPost,
  getBlogPostById,
  deleteBlogPost,
  getBlogPostByUserId
};

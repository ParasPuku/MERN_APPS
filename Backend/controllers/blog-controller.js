const Blog = require("../models/blog");

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
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (error) {
    console.log("Error", error);
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

const deleteBlogPost = async (req, res, next) => {
  const { id } = req.params;
  let blog;
  try {
    blob = await Blog.findById({ id });
  } catch (error) {
    console.log("Error", error);
  }
  if (!blog) {
    return res.status(404).json({ message: "Unable to delete the blog" });
  }
  return res.status(200).json({ blog, message: "Blog deleted successfully!" });
};
module.exports = {
  getAllBlogPosts,
  addBlogPost,
  updateBlogPost,
  deleteBlogPost,
};

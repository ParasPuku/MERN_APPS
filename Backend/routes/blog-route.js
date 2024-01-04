const express = require("express");
const {
  getAllBlogPosts,
  addBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getBlogPostById,
  getBlogPostByUserId,
} = require("../controllers/blog-controller");
const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/add-blog-post", addBlogPost);
router.put("/update-blog-post/:id", updateBlogPost);
router.get("/blog-post/:id", getBlogPostById);
router.delete("/delete-blog-post/:id", deleteBlogPost);
router.get("/blog-post-by-userid/:id", getBlogPostByUserId)

module.exports = router;

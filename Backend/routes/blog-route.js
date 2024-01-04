const express = require("express");
const {
  getAllBlogPosts,
  addBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require("../controllers/blog-controller");
const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/add-blog-post", addBlogPost);
router.put("/update-blog-post/:id", updateBlogPost);
router.delete("/delete-blog-post/:id", deleteBlogPost);

module.exports = router;

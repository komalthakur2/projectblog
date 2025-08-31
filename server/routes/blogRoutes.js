
import express from "express";
import { 
  addBlog, 
  addComment, 
  deleteBlogById, 
  getAllBlogs, 
  getBlogById, 
  togglePublish, 
  getBlogsComment, 
  generateContent,
  getPublishedBlogs 
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// Admin routes
blogRouter.post("/add", upload.single('image'), auth, addBlog);
blogRouter.get('/all', auth, getAllBlogs);            // 👈 protect admin
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);

// Client routes
blogRouter.get('/', getPublishedBlogs);             
blogRouter.get('/:blogId', getBlogById);

// Comments
blogRouter.post('/add-comment', addComment);
blogRouter.get('/:blogId/comments', getBlogsComment);

// AI content generator
blogRouter.post('/generate', auth, generateContent);

export default blogRouter;


import express from "express";
import { 
  adminLogin, 
  approveCommentById, 
  deleteCommentById, 
  getAllBlogsAdmin, 
  getAllComments, 
  getDashboard 
} from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

// should be GET
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);

// delete & approve actions (POST is fine here)
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", auth, approveCommentById);

adminRouter.get("/dashboard", auth, getDashboard);

export default adminRouter;

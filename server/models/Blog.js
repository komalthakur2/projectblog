import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTitle: { type: String },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },  
  isPublished: { type: Boolean, default: false },
  author: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);




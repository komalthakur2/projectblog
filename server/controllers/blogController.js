// import fs from "fs";
// import imagekit from "../configs/imageKit.js";
// import Blog from "../models/Blog.js";
// import Comment from "../models/Comment.js";
// import main from "../configs/gemini.js";
// export const addBlog = async (req, res) => {
//   try {
//     const { title, subTitle, description, category, isPublished } = JSON.parse(
//       req.body.blog
//     );
//     const imageFile = req.file;

//     // Check required fields
//     if (!title || !description || !category || !imageFile) {
//       return res.json({ success: false, message: "Missing required fields" });
//     }

//     // Read file and upload to ImageKit
//     const fileBuffer = fs.readFileSync(imageFile.path);

//     const response = await imagekit.upload({
//       file: fileBuffer,
//       fileName: imageFile.originalname,
//       folder: "/blogs",
//     });

//     // Optimize the image
//     const optimizedImageUrl = imagekit.url({
//       path: response.filePath,
//       transformation: [
//         { quality: "auto" },
//         { format: "webp" },
//         { width: "1280" },
//       ],
//     });

//     await Blog.create({
//       title,
//       subTitle,
//       description,
//       category,
//       image: optimizedImageUrl,
//       isPublished,
//     });

//     res.json({ success: true, message: "Blog added successfully" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // ✅ Get all blogs (admin side)
// export const getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json({ success: true, blogs });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // ✅ Get only published blogs (client side)
// export const getPublishedBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
//     res.json({ success: true, blogs });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // ✅ Get blog by ID
// export const getBlogById = async (req, res) => {
//   try {
//     const { blogId } = req.params;
//     const blog = await Blog.findById(blogId);
//     if (!blog) {
//       return res.json({ success: false, message: "Blog not found" });
//     }
//     res.json({ success: true, blog });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // ✅ Delete blog
// export const deleteBlogById = async (req, res) => {
//   try {
//     const { id } = req.body;
//     await Blog.findByIdAndDelete(id);
//     res.json({ success: true, message: "Blog deleted successfully" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // ✅ Toggle publish/unpublish
// export const togglePublish = async (req, res) => {
//   try {
//     const { id } = req.body;
//     const blog = await Blog.findById(id);

//     if (!blog) {
//       return res.json({ success: false, message: "Blog not found" });
//     }

//     // Toggle publish status
//     blog.isPublished = !blog.isPublished;
//     await blog.save();

//     res.json({
//       success: true,
//       message: blog.isPublished
//         ? "Blog published successfully"
//         : "Blog unpublished successfully",
//       blog, // ✅ return updated blog object
//     });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // -------------------- COMMENTS --------------------

// // ✅ Add comment
// export const addComment = async (req, res) => {
//   try {
//     const { blog, name, content } = req.body;

//     if (!blog || !name || !content) {
//       return res.json({ success: false, message: "All fields are required" });
//     }

//     await Comment.create({ blog, name, content });

//     res.json({ success: true, message: "Comment added for review" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // ✅ Get comments of a blog (only approved)
// export const getBlogsComment = async (req, res) => {
//   try {
//     const { blogId } = req.params;

//     const comments = await Comment.find({
//       blog: blogId,
//       isApproved: true,
//     }).sort({
//       createdAt: -1,
//     });

//     res.json({ success: true, comments });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // -------------------- AI CONTENT GENERATION --------------------

// // ✅ AI-generated content
// export const generateContent = async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const content = await main(
//       prompt + " Generate a blog content for this topic in simple text format"
//     );
//     res.json({ success: true, content });
//   } catch (error) {
//     res.json({ success: false, message: error.message }); // fixed bug here
//   }
// };

import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import main from "../configs/gemini.js";

// ✅ Add a new blog
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished, author } =
      JSON.parse(req.body.blog); // ✅ Added author here
    const imageFile = req.file;

    // Check required fields
    if (!title || !description || !category || !author || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    // Read file and upload to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optimize the image
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    // Save blog to DB
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageUrl,
      isPublished,
      author, // ✅ Save author
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get all blogs (admin side)
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get only published blogs (client side)
export const getPublishedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get blog by ID
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Delete blog
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Toggle publish/unpublish
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    // Toggle publish status
    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.json({
      success: true,
      message: blog.isPublished
        ? "Blog published successfully"
        : "Blog unpublished successfully",
      blog, // ✅ return updated blog object
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// -------------------- COMMENTS --------------------

// ✅ Add comment
export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;

    if (!blog || !name || !content) {
      return res.json({ success: false, message: "All fields are required" });
    }

    await Comment.create({ blog, name, content });

    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get comments of a blog (only approved)
export const getBlogsComment = async (req, res) => {
  try {
    const { blogId } = req.params;

    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({
      createdAt: -1,
    });

    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// -------------------- AI CONTENT GENERATION --------------------

// ✅ AI-generated content
export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;
    const content = await main(
      prompt + " Generate a blog content for this topic in simple text format"
    );
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

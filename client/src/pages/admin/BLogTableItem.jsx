// import React from 'react'
// import { assets } from '../../assets/assets';
// import { useAppContext } from '../../context/AppContext';
// import toast from 'react-hot-toast';
// const BlogTableItems = ({blog, fetchBlogs,index}) => {
//     const {title, createdAt} = blog;
//     const BlogDate = new Date(createdAt)
//     const { axios } = useAppContext();
//     const deleteBlog = async ()=>{
//         const confirm = window.confirm('Are you sure you want to delete this blog?')
//         if(!confirm) return;
//         try{
//             const {data} = await axios.post('/api/blog/delete', {id: blog._id})
//             if(data.success){
//                 toast.success(data.message)
//                 await fetchBlogs()
//             }else{
//                 toast.error(data.message)
//             }

//         }catch(error){
//             toast.error(error.message)

//         }
//     }
//     const togglePublish = async () =>{
//         try {
//            const {data} = await axios.post('/api/blog/toggle-publish', {id: blog._id})
//          if(data.success){
//                 toast.success(data.message)
//                 await fetchBlogs()
//             }else{
//                 toast.error(data.message)
//             } 
//         } catch (error) {
//             toast.error(error.message)
//         }
        
//     }
//     return(
//         <tr className='border-y border-gray-300'>
//             <th className='px-2 py-4'>{index}</th>
//             <td className='px-2 py-4'>{title}</td>
//             <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
//             <td className='px-2 py-4 max-sm:hidden'>
//                 <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>{blog.isPublished ? 'Published' : 'Unpublished'}</p>
//             </td>
//             <td className='px-2 py-4 flex text-xs gap-3'>
//                 <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
//             <img src={assets.cross_icon} className='w-8 hover:scale-110 transition-all cursor-pointer' alt="" onClick={deleteBlog}/>
//             </td>
//         </tr>
//     )
// }


// import React from "react";
// import { assets } from "../../assets/assets";
// import { useAppContext } from "../../context/AppContext";
// import { toast } from "react-hot-toast"; // ✅ Correct import

// const BlogTableItems = ({ blog, fetchBlogs, index }) => {
//   const { title, createdAt } = blog;
//   const BlogDate = new Date(createdAt);
//   const { axios } = useAppContext();

//   // ✅ Delete blog
//   const deleteBlog = async () => {
//     const confirm = window.confirm("Are you sure you want to delete this blog?");
//     if (!confirm) return;
//     try {
//       const { data } = await axios.post("/api/blog/delete", { id: blog._id });
//       if (data.success) {
//         toast.success(data.message);
//         await fetchBlogs();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // ✅ Toggle publish/unpublish
//   const togglePublish = async () => {
//     try {
//       const { data } = await axios.post("/api/blog/toggle-publish", {
//         id: blog._id,
//       });
//       if (data.success) {
//         toast.success(data.message);
//         await fetchBlogs();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <tr className="border-y border-gray-300">
//       <th className="px-2 py-4">{index}</th>
//       <td className="px-2 py-4">{title}</td>
//       <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
//       <td className="px-2 py-4 max-sm:hidden">
//         <p
//           className={`${
//             blog.isPublished ? "text-green-600" : "text-orange-700"
//           }`}
//         >
//           {blog.isPublished ? "Published" : "Unpublished"}
//         </p>
//       </td>

//       {/* ✅ Fixed layout for clickable buttons */}
//       <td className="px-2 py-4 text-xs">
//         <div className="inline-flex gap-3 items-center">
//           <button
//             onClick={togglePublish}
//             className={`border px-2 py-1 rounded cursor-pointer transition
//               ${blog.isPublished ? "bg-gray-200 text-gray-700" : "bg-green-600 text-white"}`}
//           >
//             {blog.isPublished ? "Unpublish" : "Publish"}
//           </button>

//           <img
//             src={assets.cross_icon}
//             className="w-8 hover:scale-110 transition-all cursor-pointer"
//             alt="delete"
//             onClick={deleteBlog}
//           />
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default BlogTableItems;

// 
// import React from "react";
// import { assets } from "../../assets/assets";
// import { useAppContext } from "../../context/AppContext";
// import { toast } from "react-hot-toast";

// const BlogTableItems = ({ blog, fetchBlogs, index }) => {
//   const { title, createdAt } = blog;
//   const BlogDate = new Date(createdAt);
//   const { axios, token } = useAppContext();

//   // ✅ Delete blog
//   const deleteBlog = async () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
//     if (!confirmDelete) return;
//     try {
//       const { data } = await axios.post(
//         "/api/blog/delete",
//         { blogId: blog._id }, // ✅ fixed key
//         { headers: { token } } // ✅ attach token
//       );
//       if (data.success) {
//         toast.success(data.message);
//         await fetchBlogs();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   // ✅ Toggle publish/unpublish
//   const togglePublish = async () => {
//     try {
//       const { data } = await axios.post(
//         "/api/blog/toggle-publish",
//         { blogId: blog._id }, // ✅ fixed key
//         { headers: { token } } // ✅ attach token
//       );
//       if (data.success) {
//         toast.success(data.message);
//         await fetchBlogs();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   return (
//     <tr className="border-y border-gray-300">
//       <th className="px-2 py-4">{index}</th>
//       <td className="px-2 py-4">{title}</td>
//       <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
//       <td className="px-2 py-4 max-sm:hidden">
//         <p className={blog.isPublished ? "text-green-600" : "text-orange-700"}>
//           {blog.isPublished ? "Published" : "Unpublished"}
//         </p>
//       </td>

//       <td className="px-2 py-4 text-xs">
//         <div className="inline-flex gap-3 items-center">
//           <button
//             onClick={togglePublish}
//             className={`border px-2 py-1 rounded cursor-pointer transition
//               ${blog.isPublished ? "bg-gray-200 text-gray-700" : "bg-green-600 text-white"}`}
//           >
//             {blog.isPublished ? "Unpublish" : "Publish"}
//           </button>

//           <img
//             src={assets.cross_icon}
//             className="w-8 hover:scale-110 transition-all cursor-pointer"
//             alt="delete"
//             onClick={deleteBlog}
//           />
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default BlogTableItems;
import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";

const BlogTableItems = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt, author } = blog; // ✅ Destructure author
  const BlogDate = new Date(createdAt);
  const { axios, token } = useAppContext();

  // ✅ Delete blog
  const deleteBlog = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;
    try {
      const { data } = await axios.post(
        "/api/blog/delete",
        { blogId: blog._id }, // ✅ fixed key
        { headers: { token } } // ✅ attach token
      );
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // ✅ Toggle publish/unpublish
  const togglePublish = async () => {
    try {
      const { data } = await axios.post(
        "/api/blog/toggle-publish",
        { blogId: blog._id }, // ✅ fixed key
        { headers: { token } } // ✅ attach token
      );
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4">{author || "Unknown"}</td> {/* ✅ Show Author */}
      <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p className={blog.isPublished ? "text-green-600" : "text-orange-700"}>
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>

      <td className="px-2 py-4 text-xs">
        <div className="inline-flex gap-3 items-center">
          <button
            onClick={togglePublish}
            className={`border px-2 py-1 rounded cursor-pointer transition
              ${blog.isPublished ? "bg-gray-200 text-gray-700" : "bg-green-600 text-white"}`}
          >
            {blog.isPublished ? "Unpublish" : "Publish"}
          </button>

          <img
            src={assets.cross_icon}
            className="w-8 hover:scale-110 transition-all cursor-pointer"
            alt="delete"
            onClick={deleteBlog}
          />
        </div>
      </td>
    </tr>
  );
};

export default BlogTableItems;

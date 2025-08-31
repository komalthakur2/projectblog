import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post('/api/admin/approve-comment', { id: _id });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Delete
  const deleteComment = async () => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this comment?');
      if (!confirmDelete) return;

      const { data } = await axios.post('/api/admin/delete-comment', { id: _id });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      {/* Blog + Comment */}
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog?.title || "No Blog"}
        <br /><br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
      </td>

      
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()} <br />
        <span className="text-xs text-gray-400">{BlogDate.toLocaleTimeString()}</span>
      </td>

    
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              alt="Approve"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            alt="Delete"
            className="w-5 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;










// import React from 'react'
// import { assets } from '../../assets/assets';
// import { useAppContext } from '../../context/AppContext';
// import toast from 'react-hot-toast';

// const CommentTableItem = ({comment,fetchComments}) => {
//     const{blog,createdAt,_id}=comment;
//     const BlogDate = new Date(createdAt);
//     const{axios} = useAppContext()
//     const approveComment = async() =>{
//         try {
//             const {data} = await axios.post('/api/admin/approve-comment', {id: _id })
//             if (data.success){
//                 toast.success(data.message)
//                 fetchComments()
//             }else{
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }
//       const deleteComment = async() =>{
//         try {
//             const confirm = window.confirm('Are you sure you want to delete this comment?')
//             if(!confirm) return;

//             const {data} = await axios.post('/api/admin/delete-comment', {id: _id })
//             if (data.success){
//                 toast.success(data.message)
//                 fetchComments()
//             }else{
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }
//   return (
//     <tr className='order-y border-gray-300'>
//         <td className='px-6 py-4'>
//             <b className='font-medium text-gray-600'>Blog</b> : {blog.title}
//             <br/>
//             <br/>
//             <b className='font-medium text-gray-600'>Name</b> : {comment.name}
//             <br/>
//             <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
//         </td>
//         <td className='px-6 py-4'>
//             <div className='inline-flex items-center gap-4'>
//                 {!comment.isApproved ? 
//                 <img onClick={approveComment} src={assets.tick_icon} className='w-5 hover:scale-110 transition-all cursor-pointer'/>
//                  : 
//                  <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-ful px-3 py-1'>Approved</p>}
//                 <img onClick={deleteComment} src={assets.bin_icon} alt="" className='w-5 hover:scale-110 transition-all cursor-pointer'/>
//             </div>

//         </td>
//     </tr>
    
//   )
// }

// export default CommentTableItem;


// import React from 'react';
// import { assets } from '../../assets/assets';
// import { useAppContext } from '../../context/AppContext';
// import toast from 'react-hot-toast';

// const CommentTableItem = ({ comment, fetchComments }) => {
//   const { blog, createdAt, _id } = comment;
//   const { axios, token } = useAppContext();

//   const approveComment = async () => {
//     try {
//       const { data } = await axios.post(
//         '/api/admin/approve-comment',
//         { id: _id },
//         { headers: { token } }
//       );
//       if (data.success) {
//         toast.success(data.message);
//         fetchComments();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   const deleteComment = async () => {
//     try {
//       const confirmDelete = window.confirm('Are you sure you want to delete this comment?');
//       if (!confirmDelete) return;

//       const { data } = await axios.post(
//         '/api/admin/delete-comment',
//         { id: _id },
//         { headers: { token } }
//       );
//       if (data.success) {
//         toast.success(data.message);
//         fetchComments();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   return (
//     <tr className="border-y border-gray-300">
//       <td className="px-6 py-4">
//         <b className="font-medium text-gray-600">Blog</b>: {blog.title}
//         <br />
//         <br />
//         <b className="font-medium text-gray-600">Name</b>: {comment.name}
//         <br />
//         <b className="font-medium text-gray-600">Comment</b>: {comment.content}
//         <br />
//         <b className="font-medium text-gray-600">Date</b>: {new Date(createdAt).toLocaleString()}
//       </td>
//       <td className="px-6 py-4">
//         <div className="inline-flex items-center gap-4">
//           {!comment.isApproved ? (
//             <img
//               onClick={approveComment}
//               src={assets.tick_icon}
//               alt="approve comment"
//               className="w-5 hover:scale-110 transition-transform cursor-pointer"
//             />
//           ) : (
//             <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
//               Approved
//             </p>
//           )}
//           <img
//             onClick={deleteComment}
//             src={assets.bin_icon}
//             alt="delete comment"
//             className="w-5 hover:scale-110 transition-transform cursor-pointer"
//           />
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default CommentTableItem;

import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import BlogTableItem from "./BlogTableItem";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

const AdminBlogs = () => {
  const { axios } = useAppContext();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/blog");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-3">#</th>
              <th className="px-2 py-3">Title</th>
              <th className="px-2 py-3">Author</th>
              <th className="px-2 py-3 max-sm:hidden">Date</th>
              <th className="px-2 py-3 max-sm:hidden">Status</th>
              <th className="px-2 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  index={index + 1}
                  refresh={fetchBlogs}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogs;

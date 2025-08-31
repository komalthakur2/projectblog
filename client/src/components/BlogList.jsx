import React, { useState, useEffect } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import Loader from './Loader'

const BlogList = () => {
  const [menu, setMenu] = useState("All")
  const { axios, input } = useAppContext()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)

  // ✅ Fetch only published blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get("/api/blog")
      if (data.success) {
        setBlogs(data.blogs)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const filteredBlogs = () => {
    let temp = blogs
    if (input !== "") {
      temp = temp.filter((blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
      )
    }
    if (menu !== "All") {
      temp = temp.filter((blog) => blog.category === menu)
    }
    return temp
  }

  if (loading) return <Loader />

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className='absolute left-0 right-0 top-0 h-7 -z-1 bg-blue-400 rounded-full'>
                </motion.div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {filteredBlogs().map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default BlogList


import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">

      <NavLink 
        end 
        to="/admin" 
        className={({ isActive }) => 
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
           hover:bg-blue-100 hover:border-r-4 hover:border-blue-400 
           ${isActive ? "border-blue-400 bg-blue-100" : ""}`
        }
      >
        <img src={assets.home_icon} alt="home" className="min-w-4 w-5" />
        <p className="inline-block">Dashboard</p>
      </NavLink>

      <NavLink 
        to="/admin/addBlog" 
        className={({ isActive }) => 
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
           hover:bg-blue-100 hover:border-r-4 hover:border-blue-400 
           ${isActive ? "border-blue-400 bg-blue-100" : ""}`
        }
      >
        <img src={assets.add_icon} alt="add" className="min-w-4 w-5" />
        <p className="inline-block">Add blogs</p>
      </NavLink>

      <NavLink 
        to="/admin/listBlog" 
        className={({ isActive }) => 
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
           hover:bg-blue-100 hover:border-r-4 hover:border-blue-400 
           ${isActive ? "border-blue-400 bg-blue-100" : ""}`
        }
      >
        <img src={assets.list_icon} alt="list" className="min-w-4 w-5" />
        <p className="inline-block">Blog lists</p>
      </NavLink>

      <NavLink 
        to="/admin/comments" 
        className={({ isActive }) => 
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer 
           hover:bg-blue-100 hover:border-r-4 hover:border-blue-400 
           ${isActive ? "border-blue-400 bg-blue-100" : ""}`
        }
      >
        <img src={assets.comment_icon} alt="comments" className="min-w-4 w-5" />
        <p className="inline-block">Comments</p>
      </NavLink>

    </div>
  )
}

export default Sidebar

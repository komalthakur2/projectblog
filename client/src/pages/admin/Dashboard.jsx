
import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom' 

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const { axios } = useAppContext()
  const navigate = useNavigate()  

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard')
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <div 
          onClick={() => navigate('/admin/blogs')}  
          className="flex items-center gap-3 bg-white p-4 rounded shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_1} alt="dashboard blogs" className="w-10 h-10" />
          <div>
            <p>{dashboardData.blogs}</p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

      
        <div 
          onClick={() => navigate('/admin/comments')}  
          className="flex items-center gap-3 bg-white p-4 rounded shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_2} alt="dashboard comments" className="w-10 h-10" />
          <div>
            <p>{dashboardData.comments}</p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

     
        <div 
          onClick={() => navigate('/admin/drafts')}   
          className="flex items-center gap-3 bg-white p-4 rounded shadow cursor-pointer hover:scale-105 transition-all"
        >
          <img src={assets.dashboard_icon_3} alt="dashboard drafts" className="w-10 h-10" />
          <div>
            <p>{dashboardData.drafts}</p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-4 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="latest blogs" />
          <p>Latest Blogs</p>
        </div>

        <div className="relative w-full overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-2">S.No.</th>
                <th scope="col" className="px-2 py-2">Blog Title</th>
                <th scope="col" className="px-2 py-2 max-sm:hidden">Date</th>
                <th scope="col" className="px-2 py-2 max-sm:hidden">Status</th>
                <th scope="col" className="px-2 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

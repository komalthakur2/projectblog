

import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, Link } from 'react-router-dom'   
import Sidebar from './Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
  const { logout } = useAppContext()

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-blue-200'>
        
        <Link to="/" className="cursor-pointer">
          <img 
            src={assets.logo} 
            alt="logo" 
            className='w-32 sm:w-40' 
          />
        </Link>

        <button 
          onClick={logout} 
          className='text-sm px-8 py-2 bg-blue-500 text-white rounded-full cursor-pointer'
        >
          Logout
        </button>
      </div>

      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout

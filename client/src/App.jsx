

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AddBlog from './pages/admin/AddBlog'
import Dashboard from './pages/admin/Dashboard'
import Layout from './pages/admin/Layout'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {
  const {token} = useAppContext()
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />   {/* ✅ Add this */}

        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
           <Route index element={<Dashboard/>}/>
           <Route path='addBlog' element={<AddBlog/>}/>
           <Route path='ListBlog' element={<ListBlog/>}/>
           <Route path='comments' element={<Comments/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Blog from './pages/Blog'
// import AddBlog from './pages/admin/AddBlog'
// import Dashboard from './pages/admin/Dashboard'
// import Layout from './pages/admin/Layout'
// import ListBlog from './pages/admin/ListBlog'
// import Comments from './pages/admin/Comments'
// import Login from './components/admin/Login'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Categories from './pages/Categories'
// import AllBlogs from './pages/AllBlogs'

// import 'quill/dist/quill.snow.css'
// import { Toaster } from 'react-hot-toast'
// import { useAppContext } from './context/AppContext'

// const App = () => {
//   const { token } = useAppContext()
//   return (
//     <div>
//       <Toaster />
//       <Routes>
//         {/* Public Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/blog/:id" element={<Blog />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/blogs" element={<AllBlogs />} />
//         <Route path="/login" element={<Login />} />

//         {/* Admin Pages */}
//         <Route path='/admin' element={token ? <Layout /> : <Login />}>
//           <Route index element={<Dashboard />} />
//           <Route path='addBlog' element={<AddBlog />} />
//           <Route path='listBlog' element={<ListBlog />} />
//           <Route path='comments' element={<Comments />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App

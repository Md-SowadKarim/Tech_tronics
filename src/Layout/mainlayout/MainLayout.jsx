import React from 'react'
import Navbar from '../../components/nav/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from '../../components/footer/Footer'


const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default MainLayout

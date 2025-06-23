import React from 'react'
import { useAuth } from '../context/authContext'
import AdminSidebar from '../components/dashboard/AdminSidebar'
import Navbar from '../components/Navbar'
import './AdminDashboard.css'
import AdminSummary from '../components/AdminSummary'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  const { user,loading } = useAuth()
 



  return (
    <div  className="admin-dashboard-body">
  <AdminSidebar/>
  <div className="admin-main-content">
    <Navbar/>
    <Outlet/>
  </div>
</div>

  )
}

export default AdminDashboard

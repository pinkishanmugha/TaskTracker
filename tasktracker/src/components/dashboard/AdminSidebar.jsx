import React from 'react'
import './AdminSidebar.css';

import { NavLink } from 'react-router-dom'
import { FaProjectDiagram, FaTachometerAlt } from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header bg-theme-purple">
        <h3 className="sidebar-title">Admin Management System</h3>
      </div>
      <div className="sidebar-links">
        <NavLink to="/admin-dashboard"
            className={({ isActive }) => `${isActive ? "active-link" : ""} sidebar-link` } end>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin-dashboard/project" className={({ isActive }) => `${isActive ? "active-link" : ""} sidebar-link` }>
          <FaProjectDiagram />
          <span>Project Management</span>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;

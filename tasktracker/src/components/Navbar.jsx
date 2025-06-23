import React from 'react'
import { useAuth } from '../context/authContext'
import './Navbar.css'


const Navbar = () => {
    const{user}=useAuth()
  return (
    <div className="navbar">
        <p className="welcome-text">Welcome {user.name}</p>
        <button className="logout-button">Logout</button>
    </div>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoHomeFill } from 'react-icons/go'
import { FaChartSimple } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar overflow-hidden fixed bottom-0 left-0 right-0 grid grid-cols-4 items-center h-16 backdrop-blur-[20px] bg-white/30 border-t  border-gray-200 text-2xl text-indigo-950">
        <NavLink  to="me/home">
          <GoHomeFill />
        </NavLink>
        <NavLink  to="me/food">
          <FaBowlFood />
        </NavLink>
        <NavLink  to="/myStats">
          <FaChartSimple />
        </NavLink>
        <NavLink  to="/exercises">
          <FaPersonRunning />
        </NavLink>
    </div>
  )
}

export default Navbar

import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";



const Navbar = () => {
  return (
    <div className=" flex justify-between my-6">
      <h1 className="text-2xl font-bold" >Dashboard</h1>
      <div className='flex items-center gap-8' >

        <div className="flex bg-white items-center justify-center rounded-lg px-3" > 
            <input type="text" placeholder="Search..." className="rounded-lg border-none py-2 outline-none text-xs font-light"/>
            <IoIosSearch color='#858585' />
        </div>
        <FaRegBell size={24} />
        <FaUserCircle size={24} />
      </div>
    </div>
  )
}

export default Navbar

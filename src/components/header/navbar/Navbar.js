import React from 'react'
import Links from '../links/Links'
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  
  return (
    <div className='w-full h-[12vh] bg-[#252525] sticky top-0 z-50'>

        <nav className='w-full h-full flex px-5 justify-center items-center max-lg:justify-between'>

            <div className="w-1/4 h-full flex justify-center self-center gap-2 max-xl:w-1/6 max-lg:hidden max-xl:gap-1">
                <button className='p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-white duration-150'>  
                  <GoPerson className='text-white text-3xl hover:text-[#D51A21] duration-150' title='User' />  
                </button>

                <button className='p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-white duration-150'> 
                  <FaInstagram className='text-white text-3xl hover:text-[#D51A21] duration-150' title='instagram'  />  
                </button>

                <button className='p-2 bg-[#23BF53] rounded-lg flex justify-center self-center shadow-xl hover:bg-white duration-150 relative'> 
                  <CiShoppingCart className='text-white text-3xl hover:text-[#23BF53] duration-150 ' title='Shop' /> 
                </button>

            </div>

            <Links />
            <div className='max-lg:block hidden'>
              <IoMenu className='text-5xl text-white cursor-pointer ' />
            </div>
            
            <div className='w-80 h-full flex justify-center self-center pr-5 max-xl:w-48 max-sm:justify-end'>
              <img src='https://www.golestan.com/wp-content/uploads/2023/01/logo-fr.png' className='p-2'  />
            </div>

        </nav>
    </div>
  )
}

export default Navbar
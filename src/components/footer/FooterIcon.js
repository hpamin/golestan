import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import img from '../../img/apart-icon.png'

function FooterIcon() {
    let iconFooter = [
        {id: 0, bg_hover: "sdk" ,icon: <FaFacebookF />},
        {id: 1, bg_hover: "sdk" ,icon: <FaLinkedinIn />},
        {id: 2, bg_hover: "sdk" ,icon: <IoLogoInstagram />},
        {id: 3, bg_hover: "sdk" ,icon: <BiLogoTelegram />},
        {id: 4, bg_hover: "sdk" ,icon: <FaBlog />},
        {id: 5, bg_hover: "sdk" ,icon: img},
    ]
  return (
    <div className='w-full flex gap-3 items-center'>
        <button className='group p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-white duration-150'> 
          <FaBlog className='text-white text-3xl group-hover:text-[#D51A21] duration-150' title='Blog'  />  
        </button>
    </div>
  )
}

export default FooterIcon
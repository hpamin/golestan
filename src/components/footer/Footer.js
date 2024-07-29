import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import img from '../../img/apart-icon.png'
import FooterLinks from './FooterLinks';
function Footer() {
  return (
    <footer className='w-full min-h-[50vh] bg-[#282828] flex justify-evenly items-center flex-col pt-5 gap-10'>

        <div className='w-full min-h-[35vh] flex items-center px-10 flex-wrap justify-evenly max-lg:gap-5'>
            
            <div className="w-min text-white flex flex-col gap-4 justify-center max-lg:w-full max-lg:justify-center max-lg:items-center max-lg:pb-5 max-lg:gap-5">
                <p className='text-4xl iransansbold'> اچ‌پی <span className='text-red-600'> امین </span> </p>
                <p className='text-justify max-lg:w-1/2 max-lg:text-center max-md:w-full max-md:px-10'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که است.
                </p>
                
                <div className='w-full flex gap-3 items-center max-lg:justify-center max-lg:items-center max-sm:flex-wrap max-md:px-10'>

                    <button className='group p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-white duration-150'> 
                      <FaBlog className='text-white text-3xl group-hover:text-[#D51A21] duration-150' title='Blog'  />  
                    </button>

                    <button className='p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-[#0e76a8] duration-150'> 
                      <FaLinkedinIn className='text-white text-3xl hover:text-white duration-150' title='LinkedinIn'  />  
                    </button>

                    <button className='group p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-white duration-150'> 
                      <IoLogoInstagram className=' text-white text-3xl group-hover:text-[#D51A21] duration-150' title='instagram'  />  
                    </button>

                    <button className='p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-[#0088cc] duration-150'> 
                      <BiLogoTelegram className='text-white text-3xl hover:text-white duration-150' title='Telegram'  />  
                    </button>

                    <button className='p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-[#1877F2] duration-150'> 
                      <FaFacebookF className='text-white text-3xl hover:text-white duration-150' title='Facebook'  />  
                    </button>

                    <button className='p-2 bg-[#D51A21] rounded-lg flex justify-center self-center shadow-xl hover:bg-[#ED145B] duration-150'> 
                      <RiMovie2Fill className='text-white text-3xl  hover:text-white duration-150' title='apart'  />  
                    </button>
                </div>

            </div>
                {/** likns in footer */}
                    <FooterLinks />

        </div>

        <div className='w-full min-h-[15vh] flex justify-evenly items-center flex-row-reverse px-10 flex-wrap max-lg:gap-5'>

            <div className='flex max-lg:w-full max-lg:justify-center max-lg:items-center max-lg:pb-2'>
                <span className='text-white iransansbold text-3xl'>HP<span className='text-red-600 '>amin</span> </span>
            </div>
            
            <div className='flex justify-center items-center gap-2 px-2'>
                <div className='p-2 bg-white rounded-lg flex justify-center self-center shadow-xl '>
                    <IoIosCall className='text-[#282828] text-3xl duration-150' />
                </div>
                <p className='text-white iransansbold'>شماره تماس: </p>
                <p className='text-white '> 021-123456 </p>
            </div>

             <div className='flex justify-center items-center gap-2 px-2'>
                <div className='p-2 bg-white rounded-lg flex justify-center self-center shadow-xl '>
                    <MdOutlineEmail className='text-[#282828] text-3xl duration-150' />
                </div>
                <p className='text-white iransansbold'>پست الکترونیک: </p>
                <p className='text-white '> ex@email.com </p>
            </div>

            <div className='flex justify-center items-center gap-2 px-2'>
                <div className='p-2 bg-white rounded-lg flex justify-center self-center shadow-xl '>
                    <FaLocationDot className='text-[#282828] text-3xl duration-150' />
                </div>
                <p className='text-white iransansbold'>ادرس: </p>
                <p className='text-white'>تهران - تهران </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer
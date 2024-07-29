import React from 'react'

function BlogMainPost(props) {
  return (
    <div className='w-[240px] bg-white shadow-xl flex flex-col justify-center items-center rounded-xl '>
        <div className='w-full h-full'>
            <iframe src={props.video} className='w-full h-full rounded-t-xl'></iframe>
        </div>

        <div className='p-5 flex flex-col gap-5'>
            <h4 className='text-red-600 text-xl iransansbold'> {props.title} </h4>
            <p className='text-justify'>{props.caption}</p>
            <button className='py-2 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-red-600 hover:border-red-500 duration-150 text-white self-end'>ادامه مطلب</button>
        </div>
    </div>
  )
}

export default BlogMainPost
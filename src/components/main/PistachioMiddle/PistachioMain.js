import React from 'react'

function PistachioMain() {
  return (
    <section className='w-full min-h-[40vh] my-10 flex justify-evenly items-center max-md:flex-col max-md:gap-10 max-md:px-5'> 
        <div className='w-1/2 h-full flex flex-col justify-between gap-5 pl-10  max-md:w-full max-md:p-0'>
            <h3 className='iransansbold text-3xl text-red-600 max-lg:text-2xl max-sm:text-xl'> آجيل‌های خوش خنده </h3>
            <p className='text-justify max-lg:text-lg max-sm:text-sm'> خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.</p>
            <p className='text-justify max-lg:text-lg max-sm:text-sm'> پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد. </p>
            <button className='py-3 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-red-600 hover:border-red-500 duration-150 text-white self-end max-sm:py-2 max-sm:px-3 max-sm:text-sm'>ناتس گلستان</button>
        </div>
        <div className='w-1/4 h-full max-md:w-full flex justify-center items-center '>
            <img src="https://image.torob.com/base/images/qj/Q9/qjQ9nwnBUGLyxB1-.jpg" alt="rice" className='w-full h-full object-contain max-md:w-60 max-md:h-60' />
        </div>
    </section>
  )
}

export default PistachioMain
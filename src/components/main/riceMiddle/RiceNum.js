import React from 'react'

function RiceNum() {
  return (
    <section className='w-full min-h-[40vh] my-10 flex justify-evenly items-center max-md:flex-col max-md:gap-10 max-md:px-5 max-md:m-0'> 
        <div className='w-1/2 h-full flex flex-col justify-between pl-10 gap-5 max-md:w-full max-md:p-0'> 
            <h3 className='iransansbold text-3xl text-red-600 max-lg:text-2xl max-sm:text-xl'> رکن اول غذای ایرانی </h3>
            <p className='text-justify max-lg:text-lg max-sm:text-sm'> مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند. </p>
            <div className='w-full flex justify-end gap-5 max-md:w-full'>
                <button className='py-3 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-red-600 hover:border-red-500 duration-150 text-white self-end max-sm:py-2 max-sm:px-3 max-sm:text-sm'>آشپزخانه گلستان</button>
                <button className='py-3 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-red-600 hover:border-red-500 duration-150 text-white self-end max-sm:py-2 max-sm:px-3 max-sm:text-sm'>محصولات برنج</button>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <img src="https://www.golestan.com/wp-content/uploads/2023/06/rice-banner-small.png" alt="rice" className='max-md:w-60' />
        </div>
    </section>
  )
}

export default RiceNum
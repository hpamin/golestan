import React from 'react'
import img1 from '../../../img/Introduction1.jpg'
import img2 from '../../../img/Introduction2.jpg'
import img3 from '../../../img/Introduction3.jpg'
function Introduction() {
  return (
    <section className='w-full  pt-12 flex items-center justify-center mt-10'>

      <div className="w-[80%] h-full flex justify-evenly px-10 gap-5 max-md:flex-col max-md:px-5 max-md:w-full max-xl:w-[90%] ">

        <div className='w-1/2 flex flex-col gap-4 justify-between px-5 pl-7 max-md:w-full max-md:h-1/2 max-md:p-0'>
          <h2 className='iransansbold text-red-600 text-3xl max-sm:text-xl'> معرفی گلستان </h2>
          <p className='text-justify max-sm:text-sm'>آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.</p>
          <p className='text-justify max-sm:text-sm'>
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان است.
          </p>
          <button className='py-3 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-red-600 hover:border-red-500 duration-150 text-white self-end max-sm:py-2 max-sm:px-3 max-sm:text-sm'>
                اطلاعات بیشتر
          </button>
        </div>

        <div className='w-1/2 h-auto flex gap-2 max-md:w-full max-md:h-1/2'>
          <div className='w-1/2 h-full flex flex-col gap-1 justify-center items-center max-md:flex max-md:flex-row  max-md:w-full'>
            <img src={img1} className='w-full h-1/2 object-cover rounded-xl shadow-xl max-md:h-1/2 max-md:w-1/2' alt="" />
            <img src={img3} className='w-full h-1/2 object-cover rounded-xl shadow-xl max-md:h-1/2 max-md:w-1/2' alt="" />
          </div>
          <div className='w-1/2 flex max-md:hidden'>
            <img src={img2} className='object-cover rounded-2xl shadow-xl inline-block max-md:h-fit' alt=""  />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Introduction
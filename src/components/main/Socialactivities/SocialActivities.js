import React from 'react'
import img1 from '../../../img/SocialActivities1.jpg'

function SocialActivities() {
  return (
    <section className='w-full min-h-[80vh] bg-[#105153] relative flex flex-col items-center pb-10'>
        <div className=' w-full h-96 bg-[#105153] absolute -z-10 bottom-[99%]' style={{clipPath:'polygon(0px 65%, 100% 45%, 100% 100%, 0% 100%)'}} />
        <div className='w-full py-5 flex justify-center items-center flex-col max-sm:px-2 '>
            <h4 className='iransansbold text-2xl text-white  max-lg:text-2xl max-sm:text-xl max-sm:text-center'>مسئوليت‌های اجتماعی شركت گلستان</h4>
        </div>
        <div className='w-1/2 gap-5 flex flex-col justify-center items-center my-5 max-md:w-full max-md:px-16 max-sm:px-5'>
            <p className='text-justify text-white'>كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.</p>
            <button className='py-2 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-[#105153] hover:border-white duration-150 text-white self-end'>ادامه مطلب</button>
        </div>

        <div className='w-full  pt-5 px-10 flex flex-wrap justify-center items-center m-auto gap-10 max-md:flex-col max-md:px-5 max-md:m-0 max-sm:py-10 '>

            <div className='w-80 h-80 rounded-xl shadow-xl bg-center flex flex-col items-end justify-end max-lg:w-[250px] max-lg:h-[250px]' style={{background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.0) 100%),url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
                <p className='px-4  text-[#09CDDF]'> <span className='text-lg iransansbold text-[#039DA2]'> Golestan </span>Social Responsibility </p>
                <p className='px-4 pb-1 text-white text-sm'> Mahdi Hospital </p>    
            </div>
            <div className='w-80 h-80 rounded-xl shadow-xl bg-center flex flex-col items-end justify-end max-lg:w-[250px] max-lg:h-[250px]' style={{background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.0) 100%),url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
                <p className='px-4  text-[#09CDDF]'> <span className='text-lg iransansbold text-[#039DA2]'> Golestan </span>Social Responsibility </p>
                <p className='px-4 pb-1 text-white text-sm'> Mahdi Hospital </p>
            </div>


        </div>
    </section>
  )
}

export default SocialActivities
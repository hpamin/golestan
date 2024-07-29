import React from 'react'

function HeaderBottom() {
  return (
    <section className=' w-full pt-5 pb-20 flex flex-row-reverse px-10 max-lg:px-5 max-lg:justify-between max-sm:h-full max-md:flex-col-reverse max-md:gap-5'>

      <div className='w-1/2 h-full relative flex justify-center items-center max-md:w-full max-md:h-1/2 max-sm:h-1/2'>
        <svg viewBox="0 0 200 200" className='w-full h-full absolute -z-10' xmlns="http://www.w3.org/2000/svg">
            <path fill="#D51A21" d="M42.9,-74.4C54.9,-67.5,63.3,-54.4,69.5,-41C75.7,-27.6,79.7,-13.8,79.7,0C79.7,13.8,75.6,27.6,68.5,39.4C61.5,51.3,51.3,61.3,39.4,69.5C27.4,77.6,13.7,84,-1.1,85.9C-15.9,87.8,-31.7,85.1,-45,77.7C-58.3,70.3,-69.1,58.2,-77.5,44.5C-85.9,30.7,-92,15.4,-91.4,0.3C-90.8,-14.7,-83.5,-29.3,-74.1,-41.4C-64.7,-53.5,-53.3,-62.9,-40.6,-69.4C-27.9,-75.9,-13.9,-79.4,0.8,-80.8C15.5,-82.1,31,-81.3,42.9,-74.4Z" transform="translate(100 100)" />
        </svg>

        <img src="https://www.golestan.com/wp-content/uploads/2023/07/tea-pic1.png" className='w-96 max-lg:w-72' alt="proudct" width={450}/>

      </div>

      <div className='w-1/2 h-full justify-center gap-10 bg-[#ffffff66] rounded-xl shadow-[inset 0px 0px 4px 0px rgba(0,0,0,0.4)] backdrop-blur-[5px] flex self-center flex-col pr-10  py-14 max-lg:p-5 max-md:w-full max-md:gap-4 max-md:p-0 max-md:justify-center pb5 max-sm:gap-2'>
            <h2 className='text-4xl text-red-600 iransansbold max-lg:text-2xl max-sm:text-xl'> قرعه‌کشی ماهیانه گلستان </h2>
            <h3 className='text-2xl max-lg:text-xl max-sm:text-lg'> قرعه‌کشی ماهیانه مصرف‌کنندگان چای گلستان</h3>
            <h4 className='text-xl text-[#565656] text-justify max-lg:text-lg max-sm:text-sm'> هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال 1402 شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است. </h4>
            <button className='py-2 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-red-600 hover:border-red-600 duration-150 text-white self-end max-sm:py-2 max-sm:px-3 max-sm:text-sm'>ثبت نام</button>
      </div>

    </section>

    // <section className=' w-full h-[80vh] flex justify-center self-center my-0 mx-auto' style={{background: `linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 97%),url(${img})`, backgroundSize: 'center', backgroundPosition: 'left'}}>
    
    // <div className="w-[80%] flex">
    //     <div className='w-1/2 bg-[#ffffff66] rounded-xl shadow-inner backdrop-blur-[5px] flex justify-center self-center flex-col p-10 gap-7 py-14'>

    //       <div className='flex flex-col gap-3'>
    //         <h2 className='text-3xl text-red-600 iransansbold'> قرعه‌کشی ماهیانه گلستان </h2>
    //         <h3 className='text-2xl '> قرعه‌کشی ماهیانه مصرف‌کنندگان چای گلستان</h3>
    //       </div>

    //         <h4 className='text-xl text-[#d2d2d2] text-justify'> هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال 1402 شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است. </h4>
    //     </div>

    //     <div className='w-1/2 flex justify-end self-center drop-shadow-2xl'>
    //         <img src="https://www.golestan.com/wp-content/uploads/2023/07/tea-pic1.png" alt="proudct" width={450}/>
    //     </div>
    // </div>

    // </section>
  )
}

export default HeaderBottom
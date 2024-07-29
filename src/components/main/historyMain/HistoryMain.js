import React from 'react'

function HistoryMain() {
  return (
    <section className='w-full min-h-[40vh] flex justify-evenly items-center px-5 max-md:gap-10 max-md:px-5 max-md:m-0 max-md:flex-col-reverse'>  

        <div className='flex justify-center items-center'>
            <img src="https://image.torob.com/base/images/lJ/-o/lJ-otHLU9kmsoZi4.jpg" className='rounded-xl shadow-lg max-md:w-72' alt="old golestan" />
        </div>  

        <div className='w-1/2 flex flex-col gap-5 justify-between pr-10 max-md:w-full max-md:p-0 '>
          <h2 className='iransansbold text-red-600 text-3xl max-lg:text-2xl max-sm:text-xl'> سابقه‌ای به قدمت یک عمر </h2>
          <p className='text-justify max-lg:text-lg max-sm:text-sm'>چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.</p>
          <p className='text-justify max-lg:text-lg max-sm:text-sm'>
            برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.
          </p>
          <button className='py-3 px-5 bg-[#D51A21] rounded-lg flex justify-center shadow-xl border-red-600 border-2 hover:bg-white hover:text-red-600 hover:border-red-500 duration-150 text-white self-end max-sm:py-2 max-sm:px-3 max-sm:text-sm'>
                اطلاعات بیشتر
          </button>
        </div>

    </section>
  )
}

export default HistoryMain
import React from 'react'
import JournalPost from '../Journal/JournalPost'
import BlogMainPost from './BlogMainPost'

function BlogMain() {
    let apiJournalPost = [
        {
            title: 'سالاد نودل',
            caption: 'نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.',
            video:'https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame',
        },
        {   
            title: 'اینستاگرام هاتی نودل',
            caption: 'نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.',
            video:'https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame',
        },
        {   
            title: 'برنج گلستان',
            caption: 'عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.',
            video:'https://www.aparat.com/video/video/embed/videohash/Mwp4H/vt/frame',
        },
    ]

  return (
    <section className='w-full min-h-[90vh] flex flex-col'>

        <div className='w-full h-[10vh] flex justify-center items-start'>
            <div className='w-fit bg-red-600 flex px-14 py-4 ' style={{borderRadius: '0% 0% 50% 50%'}}>
                <h4 className='text-center text-4xl text-white iransansbold max-lg:text-2xl max-sm:text-xl '> بلاگ گلستان </h4>
            </div>
        </div>

        <div className='w-full py-20 px-10 flex flex-wrap justify-center items-center m-auto gap-10 max-md:flex-col max-md:px-5 max-md:m-0'>
            {apiJournalPost.map((item) => (
                <BlogMainPost title={item.title} video={item.video} caption={item.caption} />
            ))}
        </div>
    </section>
  )
}

export default BlogMain
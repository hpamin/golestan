import React from 'react'
import img from '../../../img/journal-bg.jpg'
import JournalPost from './JournalPost'
function Journal() {

    let apiJournalPost = [
        {
            title: 'ماکارونی با سبزیجات',
            caption: 'ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…',
            img: 'https://www.golestan.com/wp-content/uploads/2023/05/recipe-pic2.jpg',
        },
        {   
            title: 'سوپ مکزیکی',
            caption: 'گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…',
            img: 'https://www.golestan.com/wp-content/uploads/2023/05/recipe-pic3.jpg',
        },
        {   
            title: 'چیلاکیله',
            caption: 'احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست',
            img: 'https://www.golestan.com/wp-content/uploads/2023/06/recipe-pic-Chilakile-1401.jpg',
        },
    ]


  return (
    <section className='w-full min-h-[70vh] flex flex-col' style={{background: `linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 97%),url(${img})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover'}}>

        <div className='w-full h-[10vh] flex justify-center items-start'>
            <div className='w-fit bg-red-600 flex px-14 py-4 ' style={{borderRadius: '0% 0% 50% 50%'}}>
                <h4 className='text-center text-4xl text-white iransansbold max-lg:text-2xl max-sm:text-xl'> مجله گلستان </h4>
            </div>
        </div>

        <div className='w-full py-20 px-10 flex flex-wrap justify-center items-center m-auto gap-10 max-md:flex-col max-md:px-5 max-md:m-0'>
            {apiJournalPost.map((item) => (
                <JournalPost title={item.title} img={item.img} caption={item.caption} />
            ))}
        </div>
    </section>
  )
}

export default Journal
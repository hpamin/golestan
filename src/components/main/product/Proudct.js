import React from 'react'
import ProductBox from './productBox/ProductBox'

function Proudct() {

    let api = [
        {
            title: "چای گلستان",
            img: "https://www.golestan.com/wp-content/uploads/2023/06/tea2.png",
        },
        {
            title: "ناتس گلستان",
            img: "https://www.golestan.com/wp-content/uploads/2023/06/Nuts-02-1.png",
        },
        {
            title: "ادویه و چاشنی",
            img: "https://www.golestan.com/wp-content/uploads/2023/06/spice1.png",
        },
        {
            title: "برنج گلستان",
            img: "https://www.golestan.com/wp-content/uploads/2023/06/rice.png",
        },
        {
            title: "زعفران و زرشک گلستان",
            img: "https://www.golestan.com/wp-content/uploads/2023/06/saffron.png",
        },
        {
            title: "دمنوش های گلستان",
            img: "https://www.golestan.com/wp-content/uploads/2023/06/damnosh-2.png",
        },
        {
            title: "حبوبات و غلات گلستان",
            img: "https://www.golestan.com/wp-content/uploads/2023/06/hobobat.png",
        },
    ]
  return (
    <section className='w-full min-h-[50vh] mt-10 flex flex-col items-center gap-10 pt-14 pb-10'>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <h3 className='text-4xl text-center text-red-600 iransansbold max-sm:text-xl'> محصولات گلستان  </h3>
            <p className='w-1/2 text-center max-lg:w-full max-lg:px-10 max-sm:text-sm'>نام تجاری گلستان قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.</p>
        </div>
        <div className='w-full h-full px-5 flex justify-center items-center flex-wrap gap-10'>
            {api.map((item) => (
                <ProductBox title={item.title} img={item.img} />
            ))}
        </div>

        
    </section>
  )
}

export default Proudct
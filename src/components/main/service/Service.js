import React from 'react'
import { PiCoffee } from "react-icons/pi";
import { MdEngineering } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import ServiceBox from './ServiceBox';

function Service() {

    
    let api = [
        {
            title: "مشتریان گلستان",
            number: '۹,۰۰۰,۰۰۰',
            span: "بالغ بر",
            icon: <PiCoffee />,
            bg: "bg-[#009350]",
            border_color: "border-[#009350]",
        },
        {
            title: "محصولات گلستان",
            number: '۵۰۰',
            span: "بیش از",
            icon: <MdPersonAdd />,
            bg: "bg-[#FBC530]",
            border_color: "border-[#FBC530]",
        },
        {
            title: "مراكز فروش",
            number: '۸۰,۰۰۰',
            span: "مراکز فعال",
            icon: <BsShop />,
            bg: "bg-[#DC2626]",
            border_color: "border-[#DC2626]",
        },
        {
            title: "سرمایه انسانی",
            number: '۲,۵۰۰',
            span: "نیرو انسانی",
            icon: <MdEngineering />,
            bg: "bg-[#E4E2D7]",
            border_color: "border-[#E4E2D7]",
        },
    ]

  return (
    <section className='w-full min-h-[60vh] gap-7 flex flex-col items-center justify-between mt-20 py-5 max-md:mt-10'>
        <h4 className='text-center text-3xl iransansbold text-red-600 max-lg:text-2xl max-sm:text-xl'> معرفی گلستان​ </h4>
        <div className=''>
            <center>
                <p className='w-[60%] text-justify max-sm:text-sm max-lg:w-[80%]'>نام تجاری گلستان قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </center>
        </div>
        <div className='w-full flex justify-center items-center flex-wrap gap-5 px-10'>

            {api.map((item) => (
                <ServiceBox title={item.title} icon={item.icon} number={item.number} span={item.span} bg={item.bg} border_color={item.border_color}  />
            ))}

        </div>
    </section>
  )
}

export default Service
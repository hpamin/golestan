import React from 'react'
import SubMenu from '../SubMenu/SubMenu'

/** submenu links **/
let GolestanCompanyLinks = [
    {id:0, title: "معرفی شرکت "},
    {id:1, title: "تاریخچه گلستان"},
    {id:2, title: "اخبار و اطلاعیه ها"},
    {id:3, title: "مسئولیت های اجتماعی"},
    {id:4, title: "سازمان فروش"},
    {id:5, title: "سازمان توزیع"},
    {id:6, title: "برندها"},
]
let productLinks = [
    {id:0, title: "چای"},
    {id:1, title: "ناتس"},
    {id:2, title: "ادویه و چاشنی"},
    {id:3, title: "برنج"},
    {id:4, title: "زعفران و زرشک"},
    {id:5, title: "دمنوش"},
    {id:6, title: "حبوبات و غلات"},
    {id:7, title: "عصاره‌های گیاهی گلستان"},
    {id:8, title: "قند و شکر"},
    {id:9, title: "هاتی نودل"},
    {id:10, title: "سایر محصولات"},
    {id:11, title: "گل کیس"},
]
let BlogLinks = [
    {id:0, title: "مجله گلستان"},
    {id:1, title: "فرهنگ غذایی"},
    {id:2, title: "سلامت غذایی"},
    {id:3, title: "تاریخچه"},
    {id:4, title: "میزبانی و دیزاین"},
]
let contactLinks = [
    {id:0, title: "دفتر مرکزی"},
    {id:1, title: "صدای مصرف کنندگان"},
    {id:2, title: "ارتباط با مشترکین"},
]

function Links() {
    let links = [
        {id:0 ,link: "صفحه اصلی " , submenu: null },
        {id:1 ,link: " شرکت گلستان", submenu: GolestanCompanyLinks },
        {id:2 ,link: "محصولات", submenu: productLinks},
        {id:3 ,link: "وبلاگ", submenu: BlogLinks},
        {id:4 ,link: "استخدام", submenu: null},
        {id:5 ,link: "قرعه کشی ", submenu: null},
        {id:6 ,link: "تماس با ما ", submenu: contactLinks},
        {id:7 ,link: "EN", submenu: null},
    ]


  return (
    <ul className='w-2/4 h-full flex items-center justify-between relative z-10 max-xl:w-4/6 max-lg:hidden'>
        {links.map((item) => (
            <li className='group relative'>
                <a href="#" className="group-hover:text-white text-[#AFB2B4] duration-150"> {item.link} </a>
                    <div className={item.submenu === null ? `` : `invisible group-hover:visible w-[230px] px-5 py-2 bg-[#3e3e3e] absolute flex gap-4 flex-col text-[#AFB2B4] top-auto`}>
                    {item.submenu?.map((props) => (
                        <SubMenu title={props.title} />
                    ))}
                    </div>
            </li>
        ))}
    </ul>
  )
}

export default Links
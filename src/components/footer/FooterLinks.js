import React from 'react'

function FooterLinks() {

    let GolestanCompanyFooter = [
        {id:0, title: "معرفی شرکت "},
        {id:1, title: " اخبار و اطلاعیه ها"},
        {id:2, title: "سازمان فروش"},
        {id:4, title: "سازمان توزیع"},
    ]
    let GolestanBlogFooter = [
        {id:0, title: "مجله گلستان"},
        {id:1, title: "سلامت غذایی"},
        {id:2, title: "تاریخچه"},
        {id:3, title: "میزبان و دیزایین"},
    ]
    let GolestanContactFooter = [
        {id:0, title: "درباره ما"},
        {id:1, title: "دفتر مرکزی"},
        {id:2, title: "صدای مصرف کننده"},
        {id:3, title: "ارتباط با مشترکین"},
    ]

    let linksFooter = [
        {id:0 , title: "شرکت گلستان" , SubLinksfooter: GolestanCompanyFooter },
        {id:1 , title: "وبلاگ", SubLinksfooter: GolestanBlogFooter },
        {id:2 , title: "تماس با ما", SubLinksfooter: GolestanContactFooter},
    ]

  return (
    <>
        {linksFooter.map((item) => (
            <div className="w-36 flex flex-col justify-center items-center max-md:py-4" id={item.id}>
                <p className='text-white text-xl iransansbold pb-2'> {item.title} </p>
                <ul className='flex flex-col justify-center items-center gap-2 py-2'>
                    {item.SubLinksfooter.map((item) => (
                        <li className='text-white cursor-pointer hover:scale-110 duration-150' id={item.id}> {item.title} </li>
                    ))}
                </ul>
            </div>
        ))}
    </>
  )
}

export default FooterLinks
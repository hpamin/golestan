import React from 'react'

function GroupingPost() {

    /*** Sub Links  ***/
    let GolestanTee = [
        {id:0 , subLinks: " چای ممتاز هندوستان"},
        {id:1 , subLinks: "چای ممتاز ارل گری"},
        {id:2 , subLinks: "چای سيلان عطری"},
        {id:3 , subLinks: "چای ممتاز سيلان"},
        {id:4 , subLinks: "چای صبحانه گلستان"},
    ]
    let GolestanTeeBag = [
        {id:0 , subLinks: "تی بگ بلک لاين"},
        {id:1 , subLinks: "تی بگ ارل گری"},
        {id:2 , subLinks: "دمنوش نعناع"},
        {id:3 , subLinks: "دمنوش بابونه"},
        {id:4 , subLinks: "منوش چای سبز"},
    ]
    let GolestanSpices = [
        {id:0 , subLinks: "زعفران ممتاز خراسان"},
        {id:1 , subLinks: "ادویه کاری"},
        {id:2 , subLinks: "ادویه ماست و خیار"},
        {id:3 , subLinks: "فلفل سياه خالص"},
        {id:4 , subLinks: "زردچوبه ممتاز"},
    ]
    let GolestanBeans = [
        {id:0 , subLinks: "لوبيا قرمز ممتاز"},
        {id:1 , subLinks: "لوبيا چيتی گلستان"},
        {id:2 , subLinks: "عدس كانادايی"},
        {id:3 , subLinks: "نخود زودپز كرمانشاه"},
        {id:4 , subLinks: "لوبيا سفيد گلستان"},
    ]

    /*** Grouping Post  ***/
    let GroupingPost = [
        {id:0 ,title: "چای گلستان" , img: 'https://www.golestan.com/wp-content/uploads/2023/01/footer-icon1.png' , Links: GolestanTee},
        {id:1 ,title: "تی بگ گلستان", img: 'https://www.golestan.com/wp-content/uploads/2023/01/footer-icon4.png' , Links: GolestanTeeBag },
        {id:2 ,title: "ادويه گلستان", img: 'https://www.golestan.com/wp-content/uploads/2023/01/footer-icon3.png' , Links: GolestanSpices},
        {id:3 ,title: "حبوبات گلستان", img: 'https://www.golestan.com/wp-content/uploads/2023/01/footer-icon2.png' , Links: GolestanBeans},
    ]

  return (
    <React.Fragment>
    {GroupingPost.map((item) => (

        <div href="#_" class=" w-56 min-h-56 px-5 py-2.5 relative rounded group overflow-hidden font-medium text-purple-600  inline-block bg-[#F3F4F6] shadow-lg border-[#262626] border-2 " id={item.id}>
                
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0  bg-[#262626] group-hover:h-full opacity-90"></span>

                <div class="relative group-hover:text-white flex justify-center items-center flex-col gap-3">
                            <img src={item.img} alt="tee" />  
                    
                            <p className='iransansbold text-xl text-black group-hover:text-white'>{item.title} </p>

                        <div className='py-2 pb-5 flex flex-col items-center justify-center gap-2'>
                            {item.Links.map((item) => (
                                <p className="cursor-pointer duration-150 hover:text-white text-[#898989]" id={item.id}>
                                    {item.subLinks}
                                </p>
                            ))}
                            
                        </div>  
                </div>
        </div>
    ))
    }
    </React.Fragment>
  )
}

export default GroupingPost
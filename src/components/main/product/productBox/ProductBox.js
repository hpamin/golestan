import React from 'react'

function ProductBox({title, img}) {
  return (
    <div className='group w-40 h-56 border-2 border-red-600 flex flex-col justify-between items-center cursor-pointer shadow-xl'>
        <div className='w-full h-full p-4 overflow-hidden flex justify-center items-center'>
            <img src={img} className='group-hover:scale-110 duration-200 ' />
        </div>
        <div className='w-full h-16 bg-red-600 flex justify-center items-center'>
            <p className='text-white iransansbold group-hover:text-white'>{title}</p>
        </div>
    </div>
  )
}

export default ProductBox
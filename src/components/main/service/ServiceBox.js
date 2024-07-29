import React from 'react'

function ServiceBox(item) {
  return (
    <div className='w-52 h-52 flex flex-col justify-center items-center'>
        <p className={`w-full iransansbold text-lg border-x-8 ${item.border_color} text-center`}> {item.title} </p>
        <div className={`ServiceBox w-full h-full ${item.bg} flex flex-col justify-center items-center justify-self-center gap-3`}>
            {item.icon}
            <p className='text-2xl' > <span className='iransansbold'>  {item.span} </span> {item.number} </p>
        </div>
    </div>
  )
}

export default ServiceBox
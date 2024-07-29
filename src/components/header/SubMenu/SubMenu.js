import React from 'react'

function SubMenu({title, end}) {
  console.log(end);
  return (
    <>
      <li className='cursor-pointer hover:text-white'> {title} </li>
    </>
  )
}

export default SubMenu
import React from 'react'
import image from "../Assests/image.png";

const Header = () => {
  return (
    <div className='text-center flex items-center justify-center gap-0 flex-wrap ' >
        <h1 className=' text-2xl font-bold uppercase text-slate-900 md:text-4xl '> Calorie Burn Calculator </h1>
        <img className=' w-[30px] md:w-[50px]'  src={image} />
    </div>
  )
}

export default Header
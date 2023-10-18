import React, { useState } from 'react'
import UserCard from './UserCard';
import ErrorHandle from './ErrorHandle';

const Card = (props) => {
    const activities = props.userData;

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-6 rounded-lg
    p-10 transition-all duration-700 hover:shadow-xl hover:scale-110' >
        <div className='text-center' >
            <h1 className='text-2xl font-bold text-slate-900' >Activity Performed</h1>
            <div className='h-[4px] w-1/5 mt-1 bg-violet-400 mx-auto' ></div>
            <UserCard activity={activities} />
        </div>
    </div>
  )
}

export default Card
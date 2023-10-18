import React from 'react'

const ErrorHandle = () => {
  return (
    <div>
         <h1 className='text-2xl font-bold text-slate-900' >Unable to Fetch Data</h1>
         <div className='h-[4px] w-1/5 mt-1 bg-violet-400 mx-auto' ></div>
         <p className='text-slate-500' >Continue with different Activity</p>
    </div>
  )
}

export default ErrorHandle
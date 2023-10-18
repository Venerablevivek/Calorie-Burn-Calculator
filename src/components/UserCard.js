import React from 'react'

const UserCard = (props) => {
    let activity = props.activity;
  return (
    <div className=' flex flex-col md:relative cursor-pointer m-4 text-slate-500 items-center text-md ' >
      <div className='font-bold mb-4' >
        <p className='text-lg' >{activity.name}</p>
      </div>

      <div>
        <p>Total Calories Burn : {activity.total_calories}</p>
      </div>

      <div>
        <p>Calorie-Burn per Hour : {activity.calories_per_hour}</p>
      </div>

      <div>
        <p>Duration of Activity Performed : {activity.duration_minutes} minutes</p>
      </div>
    </div>
  )
}

export default UserCard
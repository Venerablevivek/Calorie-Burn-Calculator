import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Card from './components/Card';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const API_KEY = process.env.REACT_APP_CALORIE_API_KEY;

function App() {

  const [activity, setActivity] = useState('skiing');
  const[time, setTime] = useState('');
  const[wt, setWt] = useState('');
  const[loading, setLoading] = useState('false');
  const[data, setData] = useState('');
  const[index, setIndex] = useState(0);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
    }
  };

  let url = `https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=${activity}`;

 async function FetchData(){
  try {
    setLoading(true);

    if(wt && time){
      url =  `${url}&weight=${wt}&duration=${time}`;
    }else if(wt){
      url =  `${url}&weight=${wt}`;
    }else if(time){
      url =  `${url}&duration=${time}`;
    }

    
    const response = await fetch(url, options);
    const result = await response.json();
    setData(result);
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
 }

 useEffect(() => {
  FetchData();
 },[]);


  function changeHandler(event){
    setActivity(event.target.value);
  }

  function changeHandlerWt(event){
    setWt(event.target.value);
  }
  function changeHandlerTime(event){
    setTime(event.target.value);
  }

  function leftShiftHandler(){
    if(index-1 < 0){
      setIndex(data.length-1);
    }else{
      setIndex(index-1);
    }
  }

  function rightShiftHandler(){
    if(index + 1 >= data.length){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }


  return (
    <div className='relative font-poppins box-border w-[100vw] h-[100%] flex flex-col justify-center items-center gap-4
     bg-gray-200 md:w-[100vw] h-[100vh]' >
     <Header/>
     
     <div className='flex flex-col justify-center items-center gap-5 m-2 md:flex-row ' >

         <div  className=' flex items-center flex-col'>
          <label for="activity" className='font-bold text-xl' >Activity </label>
            <input type='text'
            name='activity' id='activity' 
            className=' border-2 border-black rounded-sm '
            value={activity} 
            onChange={changeHandler} 
            placeholder='Enter Activity' /> 

          </div>
          
         <div  className=' flex items-center flex-col'>
          <label for="wt"  className='font-bold text-xl' >Weight (Kg)</label>
            <input type='text' name='wt' 
            id='wt' className=' border-2 border-black' 
            value={wt} 
            onChange={changeHandlerWt} 
            placeholder='Enter your Weight in KG' /> 
         </div>

         <div className=' flex items-center flex-col' >
         <label for="time"  className='font-bold text-xl' >Time (Min.)</label>
          <input type='text' name='time' id='time' 
            className=' border-2 border-black' value={time} 
            onChange={changeHandlerTime} 
            placeholder='Enter time of Activity ' />
         </div>

     </div>
     
     <div className='mt-2' >
        <button onClick={ ()=> FetchData() }
        className=' bg-violet-400 px-8 py-2 rounded-md font-bold text-white cursor-pointer text-lg hover:bg-violet-500 transition-all duration-200 '
          >
            Search
          </button>
     </div>

       <div >
      { loading ? (<Spinner/>) : (<Card userData={data[index]} ></Card>) }
     </div>

    <div className='flex text-3xl gap-3 cursor-pointer text-violet-400 font-bold ' >
      <div
      >
          <button className='hover: text-violet-600'
          onClick={leftShiftHandler} >
          <FiChevronLeft/>
          </button>
      </div>

      <div>
          <button className='hover: text-violet-600'
           onClick={rightShiftHandler}>
            <FiChevronRight/>
          </button>
      </div>
    </div>

    <div className='bottom-20 text-slate-500 text-[0.8rem] flex flex-wrap items-center sm:text-lg md:text-xl ' >
      <h3>Developed by - &copy; Vivek Chaudhary 2023 </h3>
      </div>

    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import {Button} from "../Signup/Button"
import axios from 'axios';
const Coursecard = () => {

  useEffect(()=>{
    const res =  axios.get("jndfjjdkkj")


  },[])

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-zinc-600  m-4">
      <img className="w-full" src="https://via.placeholder.com/150" alt="Course" />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">Course Title</div>
        <p className="text-gray-700 text-base">
          This is a brief description of the course. Learn all about the topic in this comprehensive course.
        </p>
      </div>


      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$99.99</span>
        <div>
        <Buynow label={"Explore "} />

        </div>
      </div>
    </div>
  );

  function Buynow({ onClick, label }) {
    return <div className='flex justify-center  mb-2 py-4'>
          <button 
            onClick={onClick} 
            type="button" 
            className="mt-3 rounded-full  bg-blue-500 text-white w-64 h-10 text-sm  active:bg-slate-50 hover:bg-blue-600 active:text-black">
            {label}
        </button>
    </div>
}
}


export default Coursecard;

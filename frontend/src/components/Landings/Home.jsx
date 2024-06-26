import React, { useEffect } from 'react';
import {useNavigate,Link} from "react-router-dom"

const Home = () => {
  const navigate= useNavigate();
  
  const signupHandler =()=>{
    navigate("/signup")
  }

  const signinHandler=()=>{
    navigate("/signin")
  }
  return (
    <section id="home" className="bg-slate-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Courser</h1>
      <p className="text-xl mb-8">The best place to learn and grow.</p>
      <div className='space-x-10'>
      <button onClick={signupHandler} className="bg-green-500 font-bold text-white px-6 py-3 rounded-full">Sign up</button>
      <button onClick={signinHandler} className="bg-green-500 font-bold text-white px-6 py-3 rounded-full">Sign in</button>
      </div>
      
    </section>
  );
};

export default Home;

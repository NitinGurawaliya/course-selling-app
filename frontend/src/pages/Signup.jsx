import React, { useState } from 'react'
import { Heading } from '../components/Signup/Heading'
import { Subheading } from '../components/Signup/Subheading'
import { InputBox } from '../components/Signup/Inputbox'
import { Button } from '../components/Signup/Button'
import { BottomWarning } from '../components/Signup/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
const navigate = useNavigate()
  const [username,setUsername] = useState(""); 
  const [password,setPassword] = useState(""); 
  const [email,setEmail] = useState(""); 


  async function userHandler(){
    const response =await axios.post("http://localhost:3000/user/signup",{
      username,
      password,
      email
    })
    if(response.data.token){
      localStorage.setItem("token",response.data.token)
      navigate("/dashboard")
    }
    else{
      alert(response.data.msg)
    }

  }



  return <div className='flex'>
  <div className='bg-green-400  w-1/2 h-screen'>
  Testimonial section
  </div> 
  
  <div className='bg-white-200 w-1/2 h-screen flex justify-center'>
  <div className='flex flex-col justify-center'>
  <div className="rounded-lg border-green-400 border-2 bg-white w-80 text-center p-2 h-max px-4">
    <Heading label={"Signup"} />
    <Subheading label={"Enter your information to signup"} />
    <InputBox onChange={(e)=>{
      setUsername(e.target.value)
    }} label={"Username"} placeholder={"Nitin"} />

    <InputBox onChange={(e)=>{
      setEmail(e.target.value)
    }} label={"Email"} placeholder={"abcd@gmail.com"} />

    <InputBox onChange={(e)=>{
      setPassword(e.target.value)
    }} label={"Password"} placeholder={"********"} />
    <Button onClick={userHandler}  label={"Sign up as Student"} />
    <Button  label={"Sign up as Instructor"} />
    <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"signin"}/>
  </div>
  </div>
  </div>
</div>
    
  
}

export default Signup



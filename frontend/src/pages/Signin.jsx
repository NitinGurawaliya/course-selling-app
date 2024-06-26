import React from 'react'
import { Heading } from '../components/Signup/Heading'
import { Subheading } from '../components/Signup/Subheading'
import { InputBox } from '../components/Signup/Inputbox'
import { Button } from '../components/Signup/Button'
import { BottomWarning } from '../components/Signup/BottomWarning'

const Signup = () => {
  return <div className='flex'>
  <div className='bg-green-400  w-1/2 h-screen'>
  Testimonial section
  </div> 
  
  <div className='bg-white-200 w-1/2 h-screen flex justify-center'>
  <div className='flex flex-col justify-center'>
  <div className="rounded-lg border-green-400 border-2 bg-white w-80 text-center p-2 h-max px-4">
    <Heading label={"Sign in"} />
    <Subheading label={"Enter your information to sign in"} />
    <InputBox onChange={onchange} label={"Username"} placeholder={"abcd@gmail.com"} />
    <InputBox onChange={onchange} label={"Password"} placeholder={"********"} />
    <Button  label={"Sign in as Student"} />
    <Button  label={"Sign in as Instructor"} />
    <BottomWarning label={"Dont't have an account?"} to={"/signup"} buttonText={"signin"}/>
  </div>
  </div>
  </div>
</div>
    
  
}

export default Signup



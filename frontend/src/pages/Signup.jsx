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
    <Heading label={"Signup"} />
    <Subheading label={"Enter your information to signup"} />
    <InputBox onChange={onchange} label={"First Name"} placeholder={"Nitin"} />
    <InputBox onChange={onchange} label={"Username"} placeholder={"abcd@gmail.com"} />
    <InputBox onChange={onchange} label={"Password"} placeholder={"********"} />
    <Button  label={"Sign up as Student"} />
    <Button  label={"Sign up as Instructor"} />
    <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"signin"}/>
  </div>
  </div>
  </div>
</div>
    
  
}

export default Signup



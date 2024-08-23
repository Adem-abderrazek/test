'use client'
import Image from "next/image"; 
import Illi from '../../image/signupill.png'
import Logo from '../../image/eduquest.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import Link from "next/link";
import axios, { AxiosError } from "axios"
import { useRouter } from 'next/navigation'
import Navbar from "../component/Navbar";
import Footer from '../component/Footer'



const page = () => {
  const [showPassword,setShowPassword]=useState(false)
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [gender,setGender]=useState('')
  const [role,setRole]=useState('')
  const route =useRouter()
  interface User {
    username: string;
    password: string;
    email: string;
    phone: string;
    gender: string;
    role: string;
    fields: string;
  }
  interface Errors {
    [key: string]: string;
  }
  const [error,setError]=useState<Errors>({})
  
  const user ={
    username: username,
    password:  password,
    email: email,
    phone: mobile,
    gender: gender,
    role: role,
    fields:'Math'
  }

  const signUpUser = async (newUser:User)=>{
    try {
      const handleSignUp = await axios.post('http://127.0.0.1:5000/api/authentication/register',newUser)
      route.push('/signin')
       
    } catch (error : any) {
      const errors = {}
       error.response.data.errors.forEach((ele : { path: string; msg: string; })=>{
        errors[ele.path] = ele.msg      
       })
       setError(errors)
    }
  }

  return (
<div className="">
  <Navbar/>
    <div className="container-signup flex items-center justify-center">
<div className="signup-page flex mt-10">
      <div className="left-side  p-4 rounded-xl flex flex-col items-center mt-3">
        <h5 className="font-bold w-72 text-4xl text-[#171a29]">Become a pro with thousands of corses.</h5>
      
      </div>
      <div className="signup-form">
        <div className="title-logo flex items-center mt-2 ml-10">
          <h5 className="text-3xl font-bold text-[#171a29]">Sign Up With</h5>
          <Link href="/">
             <img src='https://res.cloudinary.com/dc0gmzuud/image/upload/v1723639535/Capture_d_%C3%A9cran_2024-08-14_134446-removebg-preview_knjeri.png' height={15} width={150}></img>
            </Link>
        </div>
        <div className="signup-form ml-10">
          <form className="">
          
            <div className="username-password flex mt-3 gap-8">
              <div className="user-name mt-2">
              <h5 className="font-semibold text-[#171a29]">Username</h5>
              <div className="username-input rounded-lg flex items-center justify-center mt-2 border ">
              <FontAwesomeIcon icon={faUser} className="w-4 ml-1.5 text-[#171a29]" />
              <input onChange={(e)=>{setUsername(e.target.value),setError({})}} type="text" placeholder="Enter Username" className=" w-44 p-2 ml-1.5 outline-none " ></input>
              </div>
              {error&& <p className="text-sm text-[#e62626] w-44">{error.username}</p>}
              </div>
              <div className="pass mt-2">
              <h5 className="font-semibold text-[#171a29]">Password</h5>
               <div className="pass-input flex items-center justify-center mt-2 border">
               <FontAwesomeIcon icon={faLock} className="w-4 ml-1.5 text-[#171a29]" />
              <input onChange={(e)=>{setPassword(e.target.value),setError({})}} type={showPassword ? "text" : "password"  } placeholder="Enter password" className="w-44 p-2 ml-1.5 outline-none" />
              <FontAwesomeIcon icon={faEyeSlash} className="w-4 mr-2.5 text-[#171a29] cursor-pointer" onClick={()=>setShowPassword(!showPassword)} />
               </div>
               {error&& <p className="text-sm text-[#e62626] w-44">{error.password}</p>}

              </div>
              
            </div>
            <div className="email mt-3 ">
              <h5 className="font-semibold text-[#171a29]">Email</h5>
              
              <div className="email-input flex items-center  mt-2 border">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 ml-1.5 text-[#171a29]"/>
              <input onChange={(e)=>{setEmail(e.target.value),setError({})}} type='text' placeholder="exemple@exemple.com" className=" p-2 ml-1.5 outline-none "/>
              </div>
              {error&& <p className="text-sm text-[#e62626]">{error.email}</p>}
            </div>
            <div className="phone-gendre flex gap-8">
            <div className="phone mt-3">
              <h5 className="font-semibold text-[#171a29]" >Phone Number</h5>
              <div className="phone-inp flex items-center  mt-2 border">
              <FontAwesomeIcon icon={faMobileScreenButton} className="w-4 ml-1.5 text-[#171a29]" />

              <input onChange={(e)=>{setMobile(e.target.value),setError({})}} type="text" placeholder="+1 123 456 7890" className="p-2 ml-1.5 outline-none text-[#171a29]" />
              </div>
              {error&& <p className="text-sm text-[#e62626] w-52">{error.phone}</p>}

            </div>
            <div className="gender mt-3">
              <h5 className="font-semibold text-[#171a29]">Gender</h5>
              <select onChange={(e)=>setGender(e.target.value)} className=" border p-2 mt-2.5 w-44 outline-[#f1683a] text-[#171a29]">
                <option value="">Select Gender</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="other">Other</option>
              </select>
            </div>
            </div>
            {error&& <p className="text-sm text-[#e62626] w-44">{error.gender}</p>}
            <div className="submit-btn mt-7 flex items-center justify-center">
              
                <button onClick={()=>{signUpUser(user)} }  type="button" className="bg-[#f1683a] px-10 py-2 text-[#fff] font-semibold rounded-md">
                Sign Up
                </button>
                 
             
            </div>
          </form>
          <div className="have-account flex items-center justify-center p-2 mt-3 rounded-lg">
          <h5 className="text-[#171a29]">Already have an account? <Link href='signin' className=" bg-[#fff] p-1 text-[#f1683a] font-bold rounded-lg ">Login</Link></h5>
        </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  
  )
}

export default page
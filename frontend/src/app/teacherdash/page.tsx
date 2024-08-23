"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'
import Logo from '../../image/dash-logo.png'
import WhiteLogo from '../../image/white-logo.png'
import Image from 'next/image'
import  {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Home from './home'
import Students from './Students'
import Profile from '../studentdash/ProfileCard'
import UpdateCourse from './updateCorse'
import AddCorse from './addCourse'
import Allcourses from './Allcourses'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios'


const page = () => {
    const [active,setActive]=useState(false)
    const [navigation,setNavigation]=useState('home')
    const [user,setUser]=useState({})
    const [courses,setCourses]=useState('')
    const [refetech,setRefetch]=useState('')
console.log(courses);

useEffect(()=>{
    const token =localStorage.getItem('token')
    const userInfo = jwtDecode(token)
    setUser(userInfo.user)
},[]) 

useEffect(()=>{
    axios('http://127.0.0.1:5000/api/course/getAllCourses')
    .then((res)=>setCourses(res.data))
    .catch((err)=>console.log(err))
},[!refetech]) 


    
  return (
    <div className="">
        <div className="container relative w-full ">
        <div className={!active ? "navigation active fixed w-80 h-full bg-[#171a29]" : "navigation fixed w-80 h-full bg-[#171a29]"}>
            <ul className="absolute top-0 left-0 w-full">
                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <Image src={!active ? Logo : WhiteLogo} alt='' className={!active ? 'mt-8 w-16' : 'mt-10 w-44 flex items-center justify-center'}></Image>
                        </span>
                    </a>
                </li>
                <FontAwesomeIcon icon={!active ? faBars : faCircleXmark} className={!active ? 'h-7 ml-5 m-2 cursor-pointer text-[#fff]' : 'close-icon h-7 absolute ml-64 m-2  cursor-pointer text-[#fff]'} onClick={()=>setActive(!active)} />
                <li className="relative w-full" onClick={()=>setNavigation('home')}>
                    <Link href="/teacherdash" className="relative block w-full text-[#fff]">
                        <span className="icon relative">
                        <FontAwesomeIcon icon={faHouseUser} className='h-7' />
                        </span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li className="relative w-full" onClick={()=>setNavigation('allcorses')}>
                    <Link href="" className="relative block w-full text-[#fff]">
                        <span className="icon relative">
                        <FontAwesomeIcon icon={faFile} className='h-7' />
                        </span>
                        <span className="title">All courses</span>
                    </Link>
                </li>

                <li className="relative w-full " onClick={()=>setNavigation('students')}>
                    <Link href="" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faUsers} className='h-7' />                        </span>
                        <span className="title">Students</span>
                    </Link>
                </li>

                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]" onClick={()=>setNavigation('addcourse')}>
                        <span className="icon">
                        <FontAwesomeIcon icon={faCirclePlus} className='h-7' />
                        </span>
                        <span className="title">Add course</span>
                    </a>
                </li>
                <li className="relative w-full">
                    <a href="#" className="relative block w-full text-[#fff]">
                        <span className="icon">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className='h-7' />
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
    <div className="profile-card absolute flex flex-col items-center mt-10">
    <div className="relative rounded-full border-4 border-primary overflow-hidden w-24 h-24 mb-2">
        <Image src={user.profileImage} alt="Profile Picture" layout="fill" objectFit="cover" className="rounded-full" />
      </div>
  
      {/* Username */}
      <div className="text-[#171a29] text-lg font-semibold">🙋🏻 {user.name}</div>
      {/* Email */}
      <div className="text-sm text-gray-500 mb-2">📧 {user.email}</div>

      {/* Additional Info with Icons */}
      <div className="flex flex-col items-center text-gray-500 space-y-2">
        {/* Gender */}
        <div className="flex items-center">
          <span>{user.gender}</span>
        </div>
        {/* Phone Number */}
        <div className="flex items-center">
          
          <span>{user.phone}</span>
        </div>
        
      </div>
        </div>
    {navigation === 'home' && <Home active={active} userInfo={user}/>}
    {navigation === 'students' && <Students active={active} />}
    {navigation === 'addcourse' && <AddCorse active={active} userInfo={user.id} />}
    {navigation === 'updatecourse' && <UpdateCourse active={active} />}
    {navigation === 'allcorses' && <Allcourses active={active} navigation={setNavigation} />}
    </div>
  )
}

export default page
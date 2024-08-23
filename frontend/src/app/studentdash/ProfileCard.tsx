"use client "

import { useState  ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUser, faEnvelope, faPhone, faFemale, faHeart, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import profilePicture from "../../image/default.jpg";
import { jwtDecode } from 'jwt-decode';
const ProfileCard = () => {

  const [user,setUser]=useState({})
//console.log(user)
const [courses,setCourses]=useState({})
console.log(courses)
  useEffect(()=>{
    const token =localStorage.getItem('token')
    const userInfo = jwtDecode(token)
    setUser(userInfo.user)


    // Fetch courses
    fetch(`http://127.0.0.1:5000/api/enrollment/student/${user.id}`)
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
},[]) 


  return (
    <div className="flex flex-col items-center p-4 relative">

      {/* Profile Picture */}
      <div className="relative rounded-full border-4 border-primary overflow-hidden w-24 h-24 mb-2">
        <Image src={profilePicture} alt="Profile Picture" layout="fill" objectFit="cover" className="rounded-full" />
      </div>
  
      {/* Username */}
      <div className="text-[#171a29] text-lg font-semibold">{user.name}</div>
      {/* Email */}
      
      <div className="text-sm text-gray-500 mb-2 flex items-center">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4" />
        {user.email}
      </div>

      {/* Additional Info with Icons */}
      <div className="flex flex-col items-center text-gray-500 space-y-2">
        {/* Gender */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faFemale} className="mr-2 h-4" />
          <span>{user.gender}</span>
        </div>
        {/* Phone Number */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2 h-4" />
          <span>{user.phone}</span>
        </div>
      
      </div>

      {/* <div className="mt-4 w-full p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Courses Calendar</h3>
        {/* <div className="grid grid-cols-1 gap-4">
          {userData.courses.map(course => (
            <div key={course.id} className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">{course.name}</div>
                <div className={`text-sm font-semibold ${getStatusColor(course.status)}`}>
                  {course.status}
                </div>
              </div>
              <div className="flex items-center text-primary">
                <FontAwesomeIcon icon={faCalendarAlt} className="h-3 mr-2" />
                <span>{formatDate(course.date)}</span>
              </div>
            </div>
          ))}
        </div> */} 
      {/* </div> */}
    </div>
  );
}



export default ProfileCard;
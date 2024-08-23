'use client'
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Image from "next/image";
import oneCoursePho from "../../image/a200ff.png"

function oneCourse() {
  return (
    <div>
      <Navbar />
      <div className="onecorse-cont flex ">
      <div className="">
      <div className="p-8  w-full bg-[#111827]">
      <div className="course-header flex flex-col mt-10 ml-20 text-[#fff]">
     <h1 className="text-4xl font-bold">Statistics and Probability</h1>
    <p className="text-xl mt-2">An introduction to statistical methods and probability theory.</p>
    <p className="text-lg text-gray-500 mt-1">Category: Math</p>
   </div>
    </div>
    <div className="p-10 w-2/3 ml-14">
    <h5 className='font-semibold text-2xl p-4'>What you'll learn</h5>
    <div className="course-info flex-1 md:mr-6 p-4">
    <p className="text-lg mb-4">This course covers descriptive statistics, probability distributions, and inferential statistics... hbugvyitggggggggggffffffffffffffffffffffffffffffffffffffffffffffffffffytftrdfrtdtr</p>
    <p className="text-md text-gray-600">Practical examples and data analysis projects included.</p>
  </div>
  </div>
  </div>
   <div className="enroll  lex flex-col w-96  bg-slate-100 rounded-xl p-1 ">
   <div className="course-image flex-1">
     <Image src={oneCoursePho} width={400} height={400} alt="Picture of the author" className="w-full h-auto rounded shadow-md"/>
   </div>
  < div className="course-footer text-center">
   <p className="text-2xl font-bold mb-4">$74.99</p>
   <button className="bg-purple-600 text-white py-2 px-4 rounded mr-2">join this course</button>
 </div>
   </div>
   </div>
      <Footer />
    </div>
  )
}

export default oneCourse;


// <div className="container  ">
// <div className="flex  ">
// <div className="course-content flex flex-col mt-10 items-center mb-8">
// <div className="course-header text-center mb-8 ">
//   <h1 className="text-4xl font-bold">Statistics and Probability</h1>
//   <p className="text-xl mt-2">An introduction to statistical methods and probability theory.</p>
//   <p className="text-lg text-gray-500 mt-1">Category: Math</p>
// </div>
//   <div className="course-info flex-1 md:mr-6">
//     <p className="text-lg mb-4">This course covers descriptive statistics, probability distributions, and inferential statistics...</p>
//     <p className="text-md text-gray-600">Practical examples and data analysis projects included.</p>
//   </div>
//   </div>
//   {/* <div className="fixed flex flex-col bg-slate-100 rounded-xl p-2 ">
//   <div className="course-image flex-1">
//     <Image src={oneCoursePho} width={400} height={400} alt="Picture of the author" className="w-full h-auto rounded shadow-md"/>
//   </div>
//  < div className="course-footer text-center">
//   <p className="text-2xl font-bold mb-4">$74.99</p>
//   <button className="bg-purple-600 text-white py-2 px-4 rounded mr-2">join this course</button>
// </div>
//   </div> */}


// </div>
// </div>
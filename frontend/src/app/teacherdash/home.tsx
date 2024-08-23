import Image from 'next/image'
import StudentsIcon from '../../image/group.png'
import NewStdIcon from '../../image/newst.png'
import CoursesIcon from '../../image/online-learning.png'
import ProfileCard from '../studentdash/ProfileCard'

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  role: string;
}
const page = (props: { active: boolean , userInfo:User}) => {
      
  return (
    <div className="">
    <div className={!props.active ?'main-dash-act absolute' : 'main-dash absolute'} >
        <div className={`flex  ml-${props.active ? "24" : "24"}`}>
        <div className="text-[#171a29] ">
          <div className="flex items-center space-x-4">
            <div className="flex-2 w-2/3 mt-10">
              <h2 className="text-4xl font-bold">
                Welcome to <span className="text-primary font-bold">Eduquest</span>, {props.userInfo.name}! 👋
              </h2>
              <p className="mt-2  text-lg font-semibold text-[#171a29]">
                We’re excited to have you here. Dive into your{" "}
                <span className="text-primary">courses</span>, adding new{" "}
                <span className="text-primary">projects</span>, and improve our{" "}
                <span className="text-primary">live sessions</span>. Remember,
                every step you take is a step closer to share new{" "}
                <span className="text-primary">skills</span>.
              </p>
            </div>
           
          </div> 
        </div>
        </div>
        <div className={props.active ? "statics flex justify-between ml-24 mt-10 w-1/2 " : "statics flex justify-between ml-24 mt-10"}>
         <div className={props.active ?"total-students flex flex-col items-center justify-center p-2 bg-[#171a29] rounded-xl text-[#fff] h-20 w-40" :'total-students flex flex-col bg-[#171a29] rounded-xl text-[#fff] p-6'}>
          <div className={props.active ? "flex items-center gap-2" :"flex items-center gap-2" }>
          <div className="icon bg-[#ffffff36]  p-2 rounded-xl">
          <Image src={StudentsIcon} alt='' className={props.active ?'w-6 h-6':'w-10 h-10'} ></Image>
          </div>
          <div className="">
          <h5 className={props.active ?'text-sm':'text-xl'}>Total students</h5>
          <h5>224</h5>
          </div>
          </div>
         </div>
         <div className={props.active ? "new-students flex flex-col items-center justify-center p-2 bg-[#171a29] rounded-xl text-[#fff] h-20 w-40" : "new-students flex flex-col bg-[#171a29] rounded-xl text-[#fff]  p-6" }>
          <div className={props.active ? "flex items-center gap-2" :"flex items-center gap-2" }>
          <div className="icon bg-[#ffffff36]  p-2 rounded-xl">
            <Image src={NewStdIcon} alt='' className={props.active ?'w-6 h-6':'w-10 h-10'} ></Image>
          </div>
          <div className="">
          <h5 className={props.active ?'text-sm':'text-xl'}>New Students</h5>
           <h5>10</h5>  
          </div>
          </div>
         </div>
         <div className={props.active ? "total-corses flex flex-col items-center justify-center p-2 bg-[#171a29] rounded-xl text-[#fff] h-20 w-40": "total-corses flex flex-col bg-[#171a29] rounded-xl text-[#fff]  p-6"}>
          <div className={props.active ? "flex items-center gap-2" :"flex items-center gap-2" }>
           <div className="icon bg-[#ffffff36] p-2 rounded-xl">
            <Image src={CoursesIcon} alt='' className={props.active ?'w-6 h-6':'w-10 h-10'} ></Image>
           </div>
           <div className="">
          <h5 className={props.active ?'text-sm':'text-xl'}>Total courses</h5>
          <h5>5</h5>
           </div>
          </div>
         </div>

        </div>
        <div className="tables">
          <div className={props.active?"new-students-table-active ml-24 mt-10":"new-students-table ml-24 mt-10"}>
          <h5 className='text-xl font-bold'>New students</h5>
          <table className="min-w-full bg-white border border-gray-200 mt-6">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Course
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            1
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            John Doe
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            john.doe@example.com
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            Web Development
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            2
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            Jane Smith
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            jane.smith@example.com
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            Graphic Design
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            3
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            Bob Johnson
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            bob.johnson@example.com
          </td>
          <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-900">
            Data Science
          </td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default page